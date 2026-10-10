const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String },
    
    // If this test is based on a standard exam pattern
    pattern: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ExamPattern",
    },
    
    type: {
      type: String,
      enum: ["Mock Test", "Practice Test", "PYQ", "Custom", "Revision"],
      required: true,
    },
    
    // For custom tests, duration might differ from pattern
    durationMinutes: { type: Number, required: true },
    
    // Explicit mapping of questions to this test, structured by section if needed
    sections: [
      {
        name: { type: String, required: true }, // e.g., "Section A"
        questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
        marksPerQuestion: { type: Number },
        negativeMarks: { type: Number },
      },
    ],
    
    totalMarks: { type: Number, required: true },
    
    // Ownership (null for official/global tests, set for custom user-created tests)
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Test", testSchema);
