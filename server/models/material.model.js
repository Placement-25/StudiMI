const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    subject: { type: String, index: true, required: true },
    branch: { type: String, default: "cse" },
    semester: { type: String, default: "1" },
    tags: [{ type: String }],
    fileUrl: { type: String, required: true },
    fileType: {
      type: String,
      enum: ["pdf", "video", "link", "other"],
      default: "pdf",
    },
    size: { type: String, default: "1 MB" },
    downloads: { type: Number, default: 0 },
    rating: { type: Number, default: 4.5 },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    authorName: { type: String, default: "StudiMI Team" },
    visibility: {
      type: String,
      enum: ["public", "private"],
      default: "public",
    },
  },
  { timestamps: true }
);

materialSchema.index({ title: "text", description: "text", tags: "text", subject: "text" });

module.exports = mongoose.model("Material", materialSchema);
