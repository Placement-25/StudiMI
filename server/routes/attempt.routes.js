const express = require("express");
const router = express.Router();
const attemptController = require("../controllers/attempt.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.use(authMiddleware.requiredAuth);

router.post("/:testId/start", attemptController.startAttempt);
router.put("/:attemptId/progress", attemptController.saveProgress);
router.post("/:attemptId/submit", attemptController.submitAttempt);
router.get("/:attemptId/result", attemptController.getAttemptResults);

module.exports = router;
