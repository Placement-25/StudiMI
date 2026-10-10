const express = require("express");
const router = express.Router();
const examPatternController = require("../controllers/examPattern.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", examPatternController.getPatterns);
router.get("/:id", examPatternController.getPatternById);

router.post("/", authMiddleware.requiredAuth, examPatternController.createPattern);
router.put("/:id", authMiddleware.requiredAuth, examPatternController.updatePattern);

module.exports = router;
