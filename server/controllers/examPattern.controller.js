const ExamPattern = require("../models/examPattern.model");

exports.createPattern = async (req, res, next) => {
  try {
    if (req.user.role === "student") {
      return res.status(403).json({ error: "Access denied" });
    }
    const pattern = await ExamPattern.create(req.body);
    res.status(201).json(pattern);
  } catch (err) {
    next(err);
  }
};

exports.getPatterns = async (req, res, next) => {
  try {
    const { category, isActive } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (isActive !== undefined) filter.isActive = isActive === "true";

    const patterns = await ExamPattern.find(filter).sort({ createdAt: -1 });
    res.json(patterns);
  } catch (err) {
    next(err);
  }
};

exports.getPatternById = async (req, res, next) => {
  try {
    const pattern = await ExamPattern.findById(req.params.id);
    if (!pattern) return res.status(404).json({ error: "Exam pattern not found" });
    res.json(pattern);
  } catch (err) {
    next(err);
  }
};

exports.updatePattern = async (req, res, next) => {
  try {
    if (req.user.role === "student") {
      return res.status(403).json({ error: "Access denied" });
    }
    const pattern = await ExamPattern.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!pattern) return res.status(404).json({ error: "Exam pattern not found" });
    res.json(pattern);
  } catch (err) {
    next(err);
  }
};
