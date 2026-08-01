const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const materialsController = require("../controllers/materials.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload.middleware");

// Public routes
router.get("/", materialsController.listMaterials);
router.get("/:id", authMiddleware.optionalAuth, materialsController.getMaterial);

// Protected routes
router.post(
  "/",
  authMiddleware.requiredAuth,
  upload.single("file"),
  [body("title").trim().isLength({ min: 3 }).withMessage("Title must be at least 3 characters")],
  materialsController.createMaterial
);

router.put(
  "/:id",
  authMiddleware.requiredAuth,
  upload.single("file"),
  materialsController.updateMaterial
);

router.delete("/:id", authMiddleware.requiredAuth, materialsController.deleteMaterial);

module.exports = router;
