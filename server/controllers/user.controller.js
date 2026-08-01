const User = require("../models/user.model");

exports.getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password").populate("bookmarks");
    if (!user) return res.status(404).json({ error: "User profile not found" });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.toggleBookmark = async (req, res, next) => {
  try {
    const { materialId } = req.body;
    if (!materialId) return res.status(400).json({ error: "materialId required" });

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const index = user.bookmarks.indexOf(materialId);
    if (index > -1) {
      user.bookmarks.splice(index, 1);
    } else {
      user.bookmarks.push(materialId);
    }

    await user.save();
    res.json({ bookmarks: user.bookmarks });
  } catch (err) {
    next(err);
  }
};
