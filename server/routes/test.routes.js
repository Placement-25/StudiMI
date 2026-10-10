const express = require("express");
const router = express.Router();
const testController = require("../controllers/test.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.use(authMiddleware.requiredAuth);

router.get("/", testController.getTests);
router.get("/:id", testController.getTestById);

// Generate custom test dynamically
router.post("/generate", testController.generateCustomTest);

// Admin/Author manually creates a test
router.post("/official", testController.createOfficialTest);

module.exports = router;
