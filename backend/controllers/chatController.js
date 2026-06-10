const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// @route POST /api/chat
const chat = async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message required hai" });
  }

  try {
    // Conversation history + system prompt
    const messages = [
      {
        role: "system",
        content: `You are ContentForge AI Assistant — a helpful, friendly, and knowledgeable content strategist. 
        Help users with:
        - Content strategy and ideas
        - Writing tips and guidance
        - SEO advice
        - Social media tips
        - Marketing guidance
        - General questions
        
        Keep responses concise, helpful, and conversational. 
        Use bullet points when listing things.
        Don't write full blog posts unless explicitly asked.
        Reply in the same language the user writes in.`,
      },
      // Previous conversation history
      ...(Array.isArray(history) ? history : []),
      // Current message
      { role: "user", content: message },
    ];

    // ✅ Streaming response
    const stream = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      max_tokens: 1024,
      stream: true,
    });

    // Stream headers
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Transfer-Encoding", "chunked");
    res.setHeader("Cache-Control", "no-cache");

    // Stream chunks bhejo
    for await (const chunk of stream) {
      const text = chunk.choices[0]?.delta?.content || "";
      if (text) res.write(text);
    }

    res.end();
  } catch (err) {
    console.error("Chat Error:", err.message);
    res.status(500).json({ error: "Chat failed" });
  }
};

module.exports = { chat };