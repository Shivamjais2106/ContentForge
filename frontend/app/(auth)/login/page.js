"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Login Successful ✅");

        // Save user in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect
        setTimeout(() => {
          router.push("/");
        }, 800);
      } else {
        setMessage(data.error || "Invalid credentials ❌");
      }
    } catch (error) {
      console.log(error);

      setMessage("Something went wrong ❌");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-slate-50">
      {/* LEFT SIDE */}
      <div className="hidden md:flex flex-col justify-between p-12 bg-black text-white relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>

        <h1 className="text-3xl font-bold z-10">Content Forge</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10"
        >
          <h2 className="text-5xl font-extrabold mb-6">
            Design your future <br />
            <span className="text-emerald-400">with precision.</span>
          </h2>

          <p className="text-gray-400">
            The all-in-one workstation for modern creators.
          </p>
        </motion.div>

        <p className="text-sm text-gray-500 z-10">© 2026 Content Forge</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-8 md:p-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border"
        >
          <h2 className="text-3xl font-bold mb-2">Welcome back</h2>

          <p className="text-gray-500 mb-6">Login to continue</p>

          {/* MESSAGE */}
          {message && (
            <p
              className={`text-center mb-4 ${
                message.includes("Successful")
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          {/* FORM */}
          <form onSubmit={handleLogin} autoComplete="off" className="space-y-5">
            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium">Email</label>

              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium">Password</label>

              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20"
                  required
                />
              </div>
            </div>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 my-2">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* GOOGLE LOGIN BUTTON */}
            <button
              type="button"
              onClick={() =>
                (window.location.href = "http://localhost:5000/auth/google")
              }
              className="w-full py-3.5 border border-gray-200 rounded-xl flex justify-center items-center gap-3 hover:bg-gray-50 transition active:scale-95"
            >
              {/* Google Icon */}
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

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3.5 bg-black text-white rounded-xl flex justify-center items-center gap-2 hover:bg-zinc-800 transition active:scale-95"
            >
              Login
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* SIGNUP */}
            <p className="text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              <span
                onClick={() => router.push("/signup")}
                className="text-emerald-600 font-medium cursor-pointer hover:underline"
              >
                Sign up
              </span>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
