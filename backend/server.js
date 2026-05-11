require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Razorpay = require("razorpay");
const passport = require("./config/passport");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

// DB Connect
connectDB();

const app = express();
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET_KEY,
});

app.post("/api/create-order", async (req, res) => {
  const { plan } = req.body;
  
  const prices = {
    Pro: 99900,         // ₹999
    Enterprise: 499900  // ₹4999
  };

  try {
    const order = await razorpay.orders.create({
      amount: prices[plan] || 99900,
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

// Middleware
app.use(cors({
  origin: "*",
  credentials: false
}));
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

// Health Check
app.get("/", (req, res) => {
  res.json({ status: "✅ Backend running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});