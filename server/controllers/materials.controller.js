const Material = require("../models/material.model");
const { validationResult } = require("express-validator");

exports.listMaterials = async (req, res, next) => {
  try {
    const { page = 1, limit = 12, subject, branch, semester, q } = req.query;
    const filter = { visibility: "public" };
    if (subject && subject !== "all") filter.subject = subject;
    if (branch && branch !== "all") filter.branch = branch;
    if (semester && semester !== "all") filter.semester = semester;

    let query;
    if (q) {
      filter.$text = { $search: q };
    }
    query = Material.find(filter).populate("author", "name email");

    const materials = await query
      .skip((parseInt(page) - 1) * parseInt(limit))
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await Material.countDocuments(filter);

    res.json({
      data: materials,
      meta: { page: parseInt(page), limit: parseInt(limit), total },
    });
  } catch (err) {
    next(err);
  }
};

exports.getMaterial = async (req, res, next) => {
  try {
    const material = await Material.findById(req.params.id).populate(
      "author",
      "name email"
    );
    if (!material) return res.status(404).json({ error: "Material not found" });
    if (
      material.visibility === "private" &&
      (!req.user ||
        (req.user.id !== String(material.author?._id) &&
          req.user.role !== "admin"))
    ) {
      return res.status(403).json({ error: "Access denied" });
    }
    res.json(material);
  } catch (err) {
    next(err);
  }
};

exports.createMaterial = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      description,
      subject,
      branch,
      semester,
      tags = [],
      visibility = "public",
      fileUrl: bodyFileUrl,
      fileType: bodyFileType,
      size,
    } = req.body;

    if (!req.file && !bodyFileUrl) {
      return res.status(400).json({ error: "File upload or fileUrl is required" });
    }

    const fileUrl = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : bodyFileUrl;

    const fileType = req.file
      ? req.file.mimetype.includes("pdf")
        ? "pdf"
        : "other"
      : bodyFileType || "pdf";

    const material = await Material.create({
      title,
      description,
      subject: subject || "General",
      branch: branch || "cse",
      semester: semester || "1",
      tags: Array.isArray(tags) ? tags : tags ? tags.split(",").map((t) => t.trim()) : [],
      fileUrl,
      fileType,
      size: size || "2.5 MB",
      author: req.user?.id,
      visibility,
    });

    res.status(201).json(material);
  } catch (err) {
    next(err);
  }
};

exports.updateMaterial = async (req, res, next) => {
  try {
    const material = await Material.findById(req.params.id);
    if (!material) return res.status(404).json({ error: "Material not found" });

    if (String(material.author) !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }

    const updates = { ...req.body };
    if (req.file) {
      updates.fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    }

    Object.assign(material, updates);
    await material.save();

    res.json(material);
  } catch (err) {
    next(err);
  }
};

exports.deleteMaterial = async (req, res, next) => {
  try {
    const material = await Material.findById(req.params.id);
    if (!material) return res.status(404).json({ error: "Material not found" });

    if (String(material.author) !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }

    await Material.findByIdAndDelete(req.params.id);
    res.json({ ok: true, message: "Material deleted successfully" });
  } catch (err) {
    next(err);
  }
};
