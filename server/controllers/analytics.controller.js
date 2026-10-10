const Attempt = require("../models/attempt.model");
const Question = require("../models/question.model");

exports.getDashboardStats = async (req, res, next) => {
  try {
    const attempts = await Attempt.find({ user: req.user.id, status: "submitted" })
      .populate("test", "title type totalMarks")
      .sort({ endTime: -1 });

    const totalTestsTaken = attempts.length;
    let totalScore = 0;
    let totalQuestionsAttempted = 0;
    let totalCorrect = 0;

    const recentTests = attempts.slice(0, 5).map(a => ({
      testId: a.test._id,
      title: a.test.title,
      type: a.test.type,
      date: a.endTime,
      score: a.result.totalScore,
      maxScore: a.result.maxScore,
      accuracy: a.result.accuracy,
    }));

    attempts.forEach(a => {
      totalScore += a.result.totalScore;
      totalCorrect += a.result.correctCount;
      totalQuestionsAttempted += (a.result.correctCount + a.result.incorrectCount);
    });

    const averageAccuracy = totalQuestionsAttempted > 0 
      ? (totalCorrect / totalQuestionsAttempted) * 100 
      : 0;

    res.json({
      totalTestsTaken,
      averageAccuracy,
      recentTests,
    });
  } catch (err) {
    next(err);
  }
};

exports.getMistakeNotebook = async (req, res, next) => {
  try {
    // Find all questions the user got incorrect across all submitted attempts
    const attempts = await Attempt.find({ user: req.user.id, status: "submitted" })
      .populate({
        path: "responses.question",
        select: "text subject topic difficulty type options numericalAnswer",
      });

    const mistakes = [];
    const seenQuestionIds = new Set();

    attempts.forEach(attempt => {
      attempt.responses.forEach(response => {
        if (response.isCorrect === false && response.question) {
          const qIdStr = String(response.question._id);
          if (!seenQuestionIds.has(qIdStr)) {
            seenQuestionIds.add(qIdStr);
            mistakes.push({
              question: response.question,
              selectedOptions: response.selectedOptions,
              numericalValue: response.numericalValue,
              textAnswer: response.textAnswer,
              attemptId: attempt._id,
              testTitle: attempt.test?.title || "Unknown Test",
              date: attempt.endTime,
            });
          }
        }
      });
    });

    res.json(mistakes);
  } catch (err) {
    next(err);
  }
};
