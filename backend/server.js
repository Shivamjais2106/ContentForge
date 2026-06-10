if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Razorpay = require("razorpay");
const passport = require("./config/passport");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const contentRoutes = require("./routes/contentRoutes");
const chatRoutes = require("./routes/chatRoutes");
// DB Connect
connectDB();

const app = express();

// ✅ Middleware PEHLE
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/chat", chatRoutes);
// Razorpay Order
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET_KEY,
});

app.post("/api/create-order", async (req, res) => {
  const { plan } = req.body;

  const prices = {
    Pro: 100,
    Enterprise: 100,
  };

  try {
    const order = await razorpay.orders.create({
      amount: prices[plan] || 100,
      currency: "INR",
      receipt: `order_${Date.now()}`,
    });
    console.log("✅ Order created:", order.id);
    res.json(order);
  } catch (err) {
    console.error("❌ Razorpay Error:", err);
    res.status(500).json({ error: err.message });
  }
});
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});
// Health Check
app.get("/", (req, res) => {
  res.json({ status: "✅ Backend running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});