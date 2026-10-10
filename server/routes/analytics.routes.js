const express = require("express");
const router = express.Router();
const analyticsController = require("../controllers/analytics.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.use(authMiddleware.requiredAuth);

router.get("/dashboard", analyticsController.getDashboardStats);
router.get("/mistakes", analyticsController.getMistakeNotebook);

module.exports = router;
