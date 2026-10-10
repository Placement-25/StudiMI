const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    type: {
      type: String,
      enum: ["MCQ", "MSQ", "NAT", "TF", "DESCRIPTIVE"], // Multiple Choice, Multiple Select, Numerical Answer Type, True/False, Descriptive
      required: true,
      default: "MCQ",
    },
    options: [
      {
        text: { type: String, required: true },
        isCorrect: { type: Boolean, required: true, default: false },
      },
    ],
    // For NAT (Numerical Answer Type)
    numericalAnswer: {
      value: { type: Number },
      toleranceRange: { type: Number, default: 0 }, // e.g., correct if within +/- tolerance
    },
    explanation: { type: String, default: "" },
    
    // Metadata
    exam: { type: String, index: true }, // e.g., "GATE", "ISRO"
    year: { type: Number, index: true },
    subject: { type: String, index: true },
    topic: { type: String, index: true },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Medium",
    },
    tags: [{ type: String }],
    
    // Default scoring rules (can be overridden by Exam Pattern)
    defaultMarks: { type: Number, default: 1 },
    defaultNegativeMarks: { type: Number, default: 0 },
    
    // Verification
    isVerified: { type: Boolean, default: false },
    source: { type: String }, // e.g., link to PDF or document ID
  },
  { timestamps: true }
);

questionSchema.index({ text: "text", subject: "text", topic: "text", tags: "text" });

module.exports = mongoose.model("Question", questionSchema);
