const express = require("express");
const router = express.Router();
const questionController = require("../controllers/question.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// Get questions (accessible to authenticated users, possibly filtered)
router.get("/", authMiddleware.requiredAuth, questionController.getQuestions);
router.get("/:id", authMiddleware.requiredAuth, questionController.getQuestionById);

// Admin/Author routes
router.post("/", authMiddleware.requiredAuth, questionController.createQuestion);
router.put("/:id", authMiddleware.requiredAuth, questionController.updateQuestion);
router.delete("/:id", authMiddleware.requiredAuth, questionController.deleteQuestion);

module.exports = router;
