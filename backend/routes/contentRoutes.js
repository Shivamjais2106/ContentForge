const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const upload = require("../middleware/multer");
const {
  generateContent,
  getHistory,
  toggleFavorite,
  deleteContent,
} = require("../controllers/contentController");

router.post("/generate", auth, generateContent);
router.get("/history", auth, getHistory);
router.patch("/:id/favorite", auth, toggleFavorite);
router.delete("/:id", auth, deleteContent);
router.post("/generate", auth, generateContent);

module.exports = router;