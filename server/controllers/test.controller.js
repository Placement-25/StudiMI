const Test = require("../models/test.model");
const Question = require("../models/question.model");
const ExamPattern = require("../models/examPattern.model");

// Retrieve available tests
exports.getTests = async (req, res, next) => {
  try {
    const { type, isPublished } = req.query;
    const filter = {
      $or: [
        { createdBy: null }, // Global/official tests
        { createdBy: req.user._id } // User's own custom tests
      ]
    };
    
    if (type) filter.type = type;
    if (isPublished !== undefined) filter.isPublished = isPublished === "true";

    const tests = await Test.find(filter)
      .populate("pattern", "name category")
      .sort({ createdAt: -1 });
    res.json(tests);
  } catch (err) {
    next(err);
  }
};

exports.getTestById = async (req, res, next) => {
  try {
    const test = await Test.findById(req.params.id)
      .populate("pattern")
      .populate({
        path: "sections.questions",
        select: "-options.isCorrect -numericalAnswer -explanation", // Hide solutions
      });
      
    if (!test) return res.status(404).json({ error: "Test not found" });
    
    // Check ownership or published status
    if (!test.isPublished && test.createdBy && String(test.createdBy) !== req.user.id && req.user.role === "student") {
      return res.status(403).json({ error: "Access denied" });
    }
    
    res.json(test);
  } catch (err) {
    next(err);
  }
};

// Custom Test Builder (Generate Test)
exports.generateCustomTest = async (req, res, next) => {
  try {
    const { title, subject, topic, difficulty, questionCount, durationMinutes } = req.body;
    
    // Build query to fetch questions
    const query = {};
    if (subject) query.subject = subject;
    if (topic) query.topic = topic;
    if (difficulty) query.difficulty = difficulty;
    
    // Randomly sample questions
    const questions = await Question.aggregate([
      { $match: query },
      { $sample: { size: questionCount || 20 } }
    ]);
    
    if (questions.length === 0) {
      return res.status(400).json({ error: "No questions found matching criteria." });
    }
    
    // Create custom test instance
    const test = await Test.create({
      title: title || "Custom Practice Test",
      type: "Custom",
      durationMinutes: durationMinutes || questions.length * 2, // default 2 min per q
      sections: [{
        name: "General",
        questions: questions.map(q => q._id),
        marksPerQuestion: 1,
        negativeMarks: 0,
      }],
      totalMarks: questions.length, // assuming 1 mark per question for custom
      createdBy: req.user.id,
      isPublished: true, // Custom tests are immediately ready for the creator
    });
    
    res.status(201).json(test);
  } catch (err) {
    next(err);
  }
};

exports.createOfficialTest = async (req, res, next) => {
  try {
    if (req.user.role === "student") {
      return res.status(403).json({ error: "Access denied" });
    }
    // Logic for author/admin to manually construct a Test based on an ExamPattern
    const test = await Test.create({
      ...req.body,
      createdBy: null, // Official
    });
    res.status(201).json(test);
  } catch (err) {
    next(err);
  }
};
