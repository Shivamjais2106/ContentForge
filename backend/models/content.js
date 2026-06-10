const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["blog", "social", "email", "ad"],
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    output: {
      type: String,
      required: true,
    },
    platform: {
      // social media ke liye — Instagram, Twitter, LinkedIn
      type: String,
      enum: ["instagram", "twitter", "linkedin", "facebook", null],
      default: null,
    },
    tone: {
      type: String,
      enum: ["professional", "casual", "funny", "formal", "persuasive"],
      default: "professional",
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Content", contentSchema);