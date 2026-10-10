const Question = require("../models/question.model");

exports.createQuestion = async (req, res, next) => {
  try {
    // Only authors or admins should create questions, handled by auth middleware
    if (req.user.role === "student") {
      return res.status(403).json({ error: "Access denied" });
    }
    
    const question = await Question.create(req.body);
    res.status(201).json(question);
  } catch (err) {
    next(err);
  }
};

exports.getQuestions = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, subject, topic, difficulty, exam, year, q } = req.query;
    
    const filter = {};
    if (subject) filter.subject = subject;
    if (topic) filter.topic = topic;
    if (difficulty) filter.difficulty = difficulty;
    if (exam) filter.exam = exam;
    if (year) filter.year = year;
    
    if (q) {
      filter.$text = { $search: q };
    }
    
    const questions = await Question.find(filter)
      .skip((parseInt(page) - 1) * parseInt(limit))
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });
      
    const total = await Question.countDocuments(filter);
    
    res.json({
      data: questions,
      meta: { page: parseInt(page), limit: parseInt(limit), total },
    });
  } catch (err) {
    next(err);
  }
};

exports.getQuestionById = async (req, res, next) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ error: "Question not found" });
    res.json(question);
  } catch (err) {
    next(err);
  }
};

exports.updateQuestion = async (req, res, next) => {
  try {
    if (req.user.role === "student") {
      return res.status(403).json({ error: "Access denied" });
    }
    
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    
    if (!question) return res.status(404).json({ error: "Question not found" });
    res.json(question);
  } catch (err) {
    next(err);
  }
};

exports.deleteQuestion = async (req, res, next) => {
  try {
    if (req.user.role === "student") {
      return res.status(403).json({ error: "Access denied" });
    }
    
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) return res.status(404).json({ error: "Question not found" });
    
    res.json({ ok: true, message: "Question deleted successfully" });
  } catch (err) {
    next(err);
  }
};
