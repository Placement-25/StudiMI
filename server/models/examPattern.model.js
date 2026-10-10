const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., "General Aptitude", "Core Subject"
  description: { type: String },
  durationMinutes: { type: Number }, // Optional section-level timer
  questionCount: { type: Number, required: true },
  marksPerQuestion: { type: Number, required: true },
  negativeMarks: { type: Number, default: 0 }, // Positive number representing the penalty
  questionTypesAllowed: [{ type: String, enum: ["MCQ", "MSQ", "NAT", "TF", "DESCRIPTIVE"] }],
});

const examPatternSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true }, // e.g., "GATE 2024 - Computer Science"
    category: { type: String, required: true, index: true }, // e.g., "GATE", "SSC"
    organization: { type: String },
    year: { type: Number },
    
    // Test Structure
    totalDurationMinutes: { type: Number, required: true },
    totalMarks: { type: Number, required: true },
    
    sections: [sectionSchema],
    
    // Global Rules
    allowSectionNavigation: { type: Boolean, default: true },
    showSolutionsAfterSubmission: { type: Boolean, default: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExamPattern", examPatternSchema);
