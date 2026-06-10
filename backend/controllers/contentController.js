const Content = require("../models/content");
const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


const generate = async (formData) => {
  dispatch({ type: "SET_LOADING", payload: true });
  try {
    // ✅ FormData ko plain object mein convert karo
    const payload = {
      type: formData.type,
      prompt: formData.prompt,
      tone: formData.tone,
      platform: formData.platform || null,
    };

    const { data } = await generateContent(payload);
    dispatch({ type: "SET_OUTPUT", payload: data.content });
    dispatch({ type: "ADD_TO_HISTORY", payload: data.content });
    return data.content;
  } catch (err) {
    dispatch({
      type: "SET_ERROR",
      payload: err.response?.data?.error || "Generation failed",
    });
  } finally {
    dispatch({ type: "SET_LOADING", payload: false });
  }
};
// Prompt builder — type ke hisaab se prompt banao
const buildPrompt = (type, prompt, platform, tone) => {
  const toneText = `Use a ${tone} tone.`;

  switch (type) {
    case "blog":
      return `Write a detailed blog post about: "${prompt}". ${toneText} Include a title, introduction, main sections, and conclusion.`;

    case "social":
      return `Write a ${platform} caption about: "${prompt}". ${toneText} Include relevant hashtags. Keep it engaging and platform-appropriate.`;

    case "email":
      return `Write a professional email about: "${prompt}". ${toneText} Include subject line, body, and sign-off.`;

    case "ad":
      return `Write a compelling ad copy for: "${prompt}". ${toneText} Include headline, description, and call-to-action.`;

    default:
      return prompt;
  }
};

// @route  POST /api/content/generate
const generateContent = async (req, res) => {
  const { type, prompt, platform, tone } = req.body;

  if (!type || !prompt) {
    return res.status(400).json({ error: "Type aur prompt required hai" });
  }

  try {
    const finalPrompt = buildPrompt(type, prompt, platform, tone);

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: finalPrompt }],
      max_tokens: 1024,
    });

    const output = completion.choices[0]?.message?.content || "";

    // DB mein save karo
    const content = await Content.create({
      user: req.user.id,
      type,
      prompt,
      output,
      platform: platform || null,
      tone: tone || "professional",
    });

    res.status(201).json({ success: true, content });
  } catch (err) {
    console.error("Groq Error:", err.message);
    res.status(500).json({ error: "Content generation failed" });
  }
};

// @route  GET /api/content/history
const getHistory = async (req, res) => {
  try {
    const contents = await Content.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json({ success: true, contents });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// @route  PATCH /api/content/:id/favorite
const toggleFavorite = async (req, res) => {
  try {
    const content = await Content.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!content) return res.status(404).json({ error: "Content nahi mila" });

    content.isFavorite = !content.isFavorite;
    await content.save();

    res.json({ success: true, isFavorite: content.isFavorite });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// @route  DELETE /api/content/:id
const deleteContent = async (req, res) => {
  try {
    await Content.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.json({ success: true, message: "Content delete ho gaya" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { generateContent, getHistory, toggleFavorite, deleteContent };