// const express = require("express");
// const router = express.Router();
// const auth = require("../middleware/auth");
// const User = require("../models/User");

// // ✅ Profile dekho
// router.get("/profile", auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ Resume analysis save karo (AI service se aane ke baad)
// router.post("/save-analysis", auth, async (req, res) => {
//   try {
//     const { score, summary, strengths, mistakes } = req.body;
//     const user = await User.findByIdAndUpdate(
//       req.user.id,
//       { $push: { resumeAnalysis: { score, summary, strengths, mistakes } } },
//       { new: true }
//     ).select("-password");

//     res.json({ success: true, user });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/user"); // ← lowercase

// Profile dekho
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Profile update karo
router.put("/profile", auth, async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name },
      { new: true }
    ).select("-password");
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Dashboard stats
router.get("/stats", auth, async (req, res) => {
  try {
    const Content = require("../models/content");
    const total = await Content.countDocuments({ user: req.user.id });
    const favorites = await Content.countDocuments({ user: req.user.id, isFavorite: true });
    const byType = await Content.aggregate([
      { $match: { user: req.user.id } },
      { $group: { _id: "$type", count: { $sum: 1 } } },
    ]);

    res.json({ success: true, stats: { total, favorites, byType } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;