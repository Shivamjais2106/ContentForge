const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");

// ✅ Profile dekho
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Resume analysis save karo (AI service se aane ke baad)
router.post("/save-analysis", auth, async (req, res) => {
  try {
    const { score, summary, strengths, mistakes } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $push: { resumeAnalysis: { score, summary, strengths, mistakes } } },
      { new: true }
    ).select("-password");

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;