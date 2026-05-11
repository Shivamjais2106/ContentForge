"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { User, Mail, Lock } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();

  // 🔥 Delay render to block autofill
  const [mounted, setMounted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Background Image URL
  const BG_IMAGE_URL =
    "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D";

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  if (!mounted) return null;

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Signup Successful ✅");

        // reset form
        setName("");
        setEmail("");
        setPassword("");

        // Success ke baad user ko login page par bhej sakte hain
        setTimeout(() => router.push("/login"), 2000);
      } else {
        setMessage(data.error || "Error ❌");
      }
    } catch (error) {
      console.log(error);
      setMessage("Server error ❌");
    }
  };

  return (
    // 🔥 Main Container with Background
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* 🔥 Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-scale duration-[10000ms] hover:scale-110"
        style={{ backgroundImage: `url(${BG_IMAGE_URL})` }}
      />

      {/* 🔥 Dark Blur Overlay (Form ko highlight karne ke liye) */}
      <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md z-10"
      >
        {/* Form Card */}
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              Create Account 🚀
            </h1>
            <p className="text-gray-500 text-sm mt-1 font-medium">
              Join our community today
            </p>
          </div>

          {/* MESSAGE */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center p-3 rounded-2xl mb-5 text-sm font-bold border ${
                message.includes("Successful")
                  ? "bg-green-50 text-green-700 border-green-100"
                  : "bg-red-50 text-red-600 border-red-100"
              }`}
            >
              {message}
            </motion.div>
          )}

          {/* FORM */}
          <form
            onSubmit={handleSignup}
            autoComplete="off"
            className="space-y-4"
          >
            {/* Hidden inputs to trick browser autofill */}
            <input type="text" name="hidden_user" style={{ display: "none" }} />
            <input
              type="password"
              name="hidden_pass"
              style={{ display: "none" }}
            />

            {/* NAME */}
            <div>
              <label className="text-sm font-bold text-gray-700 ml-1">
                Full Name
              </label>
              <div className="relative mt-1">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name={`name_${Math.random()}`}
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all text-gray-900"
                  required
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-bold text-gray-700 ml-1">
                Email Address
              </label>
              <div className="relative mt-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name={`email_${Math.random()}`}
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all text-gray-900"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-bold text-gray-700 ml-1">
                Password
              </label>
              <div className="relative mt-1">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  name={`pass_${Math.random()}`}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all text-gray-900"
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-4 bg-zinc-950 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-lg shadow-black/20 mt-2"
            >
              Create Account
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 my-2">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray.400 font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* GOOGLE SIGNUP BUTTON */}
            <button
              type="button"
              onClick={() =>
                (window.location.href = "http://localhost:5000/auth/google")
              }
              className="w-full py-3.5 border border-gray-200 rounded-xl flex justify-center items-center gap-3 hover:bg-gray-50 transition active:scale-95 bg-white"
            >
              <svg width="20" height="20" viewBox="0 0 48 48">
                <path
                  fill="#FFC107"
                  d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.3 14.7l6.6 4.8C14.6 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.2 0 9.9-1.8 13.5-4.7l-6.2-5.2C29.4 35.6 26.8 36 24 36c-5.2 0-9.6-2.9-11.8-7.1l-6.5 5C9.5 39.4 16.3 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20H24v8h11.3c-.9 2.5-2.6 4.6-4.8 6.1l6.2 5.2C40.7 35.5 44 30.2 44 24c0-1.3-.1-2.7-.4-4z"
                />
              </svg>
              <span className="text-sm font-semibold text-gray-700">
                Continue with Google
              </span>
            </button>

            {/* REDIRECT TO LOGIN */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="text-black font-extrabold hover:underline"
              >
                Sign In
              </button>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
