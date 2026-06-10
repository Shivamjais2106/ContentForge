// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },      // ← Yeh hona chahiye
//   email: { type: String, required: true, unique: true },
//   password: { type: String },
//   googleId: { type: String },
//   avatar: { type: String },
// }, { timestamps: true });

// module.exports = mongoose.model("User", userSchema);


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      default: null, // Google OAuth users ke liye null
    },
    googleId: {
      type: String,
      default: null,
    },
    avatar: {
      type: String,
      default: null,
    },
    plan: {
      type: String,
      enum: ["free", "pro", "enterprise"],
      default: "free",
    },
    credits: {
      type: Number,
      default: 10, // Free plan — 10 generations
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);