// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const passport = require("passport");
// const User = require("../models/User");

// const generateToken = (user) =>
//   jwt.sign({ id: user._id, email: user.email, name: user.name }, process.env.JWT_SECRET, {
//     expiresIn: "7d",
//   });

// // ✅ Signup
// router.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: "Email already exists" });

//     const hashed = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashed });

//     res.json({ token: generateToken(user), user: { id: user._id, name, email } });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ Login
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "User not found" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ message: "Wrong password" });

//     res.json({ token: generateToken(user), user: { id: user._id, name: user.name, email } });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ Google OAuth - Start
// router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// // ✅ Google OAuth - Callback
// router.get(
//   "/google/callback",
//   passport.authenticate("google", { session: false, failureRedirect: "/login" }),
//   (req, res) => {
//     const token = generateToken(req.user);
//     // ✅ HARDCODE karo
//     res.redirect(`http://localhost:3000/auth/success?token=${token}`);
//   }
// );

// module.exports = router;



const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user"); // ← lowercase

const generateToken = (user) =>
  jwt.sign(
    { id: user._id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });

    res.json({ token: generateToken(user), user: { id: user._id, name, email } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Wrong password" });

    res.json({ token: generateToken(user), user: { id: user._id, name: user.name, email } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Google OAuth
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/login" }),
  (req, res) => {
    const token = generateToken(req.user);
    res.redirect(`${process.env.CLIENT_URL}/auth/success?token=${token}`);
  }
);

module.exports = router;