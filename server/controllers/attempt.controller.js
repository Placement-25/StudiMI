const Attempt = require("../models/attempt.model");
const Test = require("../models/test.model");
const Question = require("../models/question.model");

exports.startAttempt = async (req, res, next) => {
  try {
    const testId = req.params.testId;
    
    // Check if an attempt is already in progress
    let attempt = await Attempt.findOne({ user: req.user.id, test: testId, status: "in_progress" });
    
    if (!attempt) {
      const test = await Test.findById(testId).populate("sections.questions");
      if (!test) return res.status(404).json({ error: "Test not found" });

      // Initialize responses array
      const initialResponses = [];
      test.sections.forEach(section => {
        section.questions.forEach(q => {
          initialResponses.push({
            question: q._id,
            status: "not_visited",
          });
        });
      });

      attempt = await Attempt.create({
        user: req.user.id,
        test: testId,
        responses: initialResponses,
      });
    }
    
    res.status(200).json(attempt);
  } catch (err) {
    next(err);
  }
};

exports.saveProgress = async (req, res, next) => {
  try {
    const { attemptId } = req.params;
    const { responses, timeLeft } = req.body;
    
    const attempt = await Attempt.findOne({ _id: attemptId, user: req.user.id, status: "in_progress" });
    if (!attempt) return res.status(404).json({ error: "Active attempt not found" });

    // Update responses
    if (responses && Array.isArray(responses)) {
      responses.forEach(incomingRes => {
        const existingRes = attempt.responses.find(r => String(r.question) === String(incomingRes.question));
        if (existingRes) {
          existingRes.status = incomingRes.status || existingRes.status;
          existingRes.selectedOptions = incomingRes.selectedOptions || existingRes.selectedOptions;
          existingRes.numericalValue = incomingRes.numericalValue;
          existingRes.textAnswer = incomingRes.textAnswer;
          existingRes.timeSpentSeconds = (existingRes.timeSpentSeconds || 0) + (incomingRes.timeSpentSeconds || 0);
        }
      });
    }
    
    attempt.lastSavedAt = Date.now();
    await attempt.save();
    
    res.json({ ok: true, message: "Progress saved" });
  } catch (err) {
    next(err);
  }
};

exports.submitAttempt = async (req, res, next) => {
  try {
    const { attemptId } = req.params;
    
    const attempt = await Attempt.findOne({ _id: attemptId, user: req.user.id, status: "in_progress" })
      .populate("test")
      .populate("responses.question");
      
    if (!attempt) return res.status(404).json({ error: "Active attempt not found" });

    const test = attempt.test;
    let totalScore = 0;
    let maxScore = test.totalMarks;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    // Evaluation Logic
    for (const response of attempt.responses) {
      const q = response.question; // Populated question doc
      const isAttempted = response.status === "answered" || response.status === "answered_marked_for_review";
      
      if (!isAttempted) {
        unattemptedCount++;
        continue;
      }
      
      // We need to look up marking rules from the test section
      // Fallback to question default marks
      let marks = q.defaultMarks || 1;
      let negative = q.defaultNegativeMarks || 0;
      
      if (test.sections && test.sections.length > 0) {
        for (const section of test.sections) {
          if (section.questions.includes(q._id)) {
             marks = section.marksPerQuestion || marks;
             negative = section.negativeMarks || negative;
             break;
          }
        }
      }

      let isCorrect = false;

      if (q.type === "MCQ") {
        const correctOpt = q.options.find(o => o.isCorrect);
        if (correctOpt && response.selectedOptions.length === 1 && String(response.selectedOptions[0]) === String(correctOpt._id)) {
          isCorrect = true;
        }
      } else if (q.type === "MSQ") {
        const correctOpts = q.options.filter(o => o.isCorrect).map(o => String(o._id));
        const selected = response.selectedOptions.map(String);
        
        // Exact match required for MSQ by default
        if (correctOpts.length === selected.length && correctOpts.every(o => selected.includes(o))) {
          isCorrect = true;
        }
      } else if (q.type === "NAT") {
        if (response.numericalValue !== undefined && response.numericalValue !== null) {
          const expected = q.numericalAnswer.value;
          const tol = q.numericalAnswer.toleranceRange || 0;
          if (response.numericalValue >= expected - tol && response.numericalValue <= expected + tol) {
            isCorrect = true;
          }
        }
      } else if (q.type === "TF") {
        const correctOpt = q.options.find(o => o.isCorrect);
        if (correctOpt && response.selectedOptions.length === 1 && String(response.selectedOptions[0]) === String(correctOpt._id)) {
          isCorrect = true;
        }
      }
      
      response.isCorrect = isCorrect;
      
      if (isCorrect) {
        correctCount++;
        totalScore += marks;
      } else {
        incorrectCount++;
        totalScore -= negative;
      }
    }

    const accuracy = correctCount + incorrectCount > 0 ? (correctCount / (correctCount + incorrectCount)) * 100 : 0;

    attempt.status = "submitted";
    attempt.endTime = Date.now();
    attempt.result = {
      totalScore,
      maxScore,
      correctCount,
      incorrectCount,
      unattemptedCount,
      accuracy,
    };

    // Depopulate question back to ID to save cleanly if needed, though Mongoose handles this fine usually.
    await attempt.save();

    res.json(attempt.result);
  } catch (err) {
    next(err);
  }
};

exports.getAttemptResults = async (req, res, next) => {
  try {
    const attempt = await Attempt.findOne({ _id: req.params.attemptId, user: req.user.id })
      .populate("test", "title type totalMarks")
      .populate({
        path: "responses.question",
        select: "text type options numericalAnswer explanation subject topic difficulty",
      });
      
    if (!attempt) return res.status(404).json({ error: "Attempt not found" });
    if (attempt.status !== "submitted") return res.status(400).json({ error: "Attempt is not submitted yet" });
    
    res.json(attempt);
  } catch (err) {
    next(err);
  }
};
