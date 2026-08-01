const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/profile", authMiddleware.requiredAuth, userController.getProfile);
router.post("/bookmark", authMiddleware.requiredAuth, userController.toggleBookmark);

module.exports = router;
