const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  question: { type: mongoose.Schema.Types.ObjectId, ref: "Question", required: true },
  status: {
    type: String,
    enum: ["not_visited", "not_answered", "answered", "marked_for_review", "answered_marked_for_review"],
    default: "not_visited",
  },
  // For MCQ/MSQ, array of selected option IDs or indices
  selectedOptions: [{ type: mongoose.Schema.Types.ObjectId }], 
  // For NAT
  numericalValue: { type: Number },
  // For Descriptive
  textAnswer: { type: String },
  
  timeSpentSeconds: { type: Number, default: 0 },
  isCorrect: { type: Boolean, default: null }, // Populated on evaluation
});

const attemptSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    test: { type: mongoose.Schema.Types.ObjectId, ref: "Test", required: true, index: true },
    
    status: {
      type: String,
      enum: ["in_progress", "submitted", "abandoned"],
      default: "in_progress",
    },
    
    startTime: { type: Date, required: true, default: Date.now },
    endTime: { type: Date },
    lastSavedAt: { type: Date, default: Date.now },
    
    responses: [responseSchema],
    
    // Evaluation Result (populated after submission)
    result: {
      totalScore: { type: Number, default: 0 },
      maxScore: { type: Number, default: 0 },
      correctCount: { type: Number, default: 0 },
      incorrectCount: { type: Number, default: 0 },
      unattemptedCount: { type: Number, default: 0 },
      accuracy: { type: Number, default: 0 }, // percentage
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attempt", attemptSchema);
