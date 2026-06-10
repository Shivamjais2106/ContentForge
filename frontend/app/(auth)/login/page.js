// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { Mail, Lock, ArrowRight } from "lucide-react";

// export default function LoginPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     setEmail("");
//     setPassword("");
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setMessage("Login Successful ✅");

//         // Save user in localStorage
//         localStorage.setItem("user", JSON.stringify(data.user));

//         // Redirect
//         setTimeout(() => {
//           router.push("/");
//         }, 800);
//       } else {
//         setMessage(data.error || "Invalid credentials ❌");
//       }
//     } catch (error) {
//       console.log(error);

//       setMessage("Something went wrong ❌");
//     }
//   };

//   return (
//     <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-slate-50">
//       {/* LEFT SIDE */}
//       <div className="hidden md:flex flex-col justify-between p-12 bg-black text-white relative overflow-hidden">
//         <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>

//         <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>

//         <h1 className="text-3xl font-bold z-10">Content Forge</h1>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="z-10"
//         >
//           <h2 className="text-5xl font-extrabold mb-6">
//             Design your future <br />
//             <span className="text-emerald-400">with precision.</span>
//           </h2>

//           <p className="text-gray-400">
//             The all-in-one workstation for modern creators.
//           </p>
//         </motion.div>

//         <p className="text-sm text-gray-500 z-10">© 2026 Content Forge</p>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="flex items-center justify-center p-8 md:p-16">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border"
//         >
//           <h2 className="text-3xl font-bold mb-2">Welcome back</h2>

//           <p className="text-gray-500 mb-6">Login to continue</p>

//           {/* MESSAGE */}
//           {message && (
//             <p
//               className={`text-center mb-4 ${
//                 message.includes("Successful")
//                   ? "text-green-600"
//                   : "text-red-500"
//               }`}
//             >
//               {message}
//             </p>
//           )}

//           {/* FORM */}
//           <form onSubmit={handleLogin} autoComplete="off" className="space-y-5">
//             {/* EMAIL */}
//             <div>
//               <label className="text-sm font-medium">Email</label>

//               <div className="relative mt-1">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="name@company.com"
//                   className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20"
//                   required
//                 />
//               </div>
//             </div>

//             {/* PASSWORD */}
//             <div>
//               <label className="text-sm font-medium">Password</label>

//               <div className="relative mt-1">
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••"
//                   className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20"
//                   required
//                 />
//               </div>
//             </div>

//             {/* DIVIDER */}
//             <div className="flex items-center gap-3 my-2">
//               <div className="flex-1 h-px bg-gray-200" />
//               <span className="text-xs text-gray-400 font-medium">OR</span>
//               <div className="flex-1 h-px bg-gray-200" />
//             </div>

//             {/* GOOGLE LOGIN BUTTON */}
//             <button
//               type="button"
//               onClick={() =>
//                 (window.location.href = "http://localhost:5000/auth/google")
//               }
//               className="w-full py-3.5 border border-gray-200 rounded-xl flex justify-center items-center gap-3 hover:bg-gray-50 transition active:scale-95"
//             >
//               {/* Google Icon */}
//               <svg width="20" height="20" viewBox="0 0 48 48">
//                 <path
//                   fill="#FFC107"
//                   d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"
//                 />
//                 <path
//                   fill="#FF3D00"
//                   d="M6.3 14.7l6.6 4.8C14.6 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"
//                 />
//                 <path
//                   fill="#4CAF50"
//                   d="M24 44c5.2 0 9.9-1.8 13.5-4.7l-6.2-5.2C29.4 35.6 26.8 36 24 36c-5.2 0-9.6-2.9-11.8-7.1l-6.5 5C9.5 39.4 16.3 44 24 44z"
//                 />
//                 <path
//                   fill="#1976D2"
//                   d="M43.6 20H24v8h11.3c-.9 2.5-2.6 4.6-4.8 6.1l6.2 5.2C40.7 35.5 44 30.2 44 24c0-1.3-.1-2.7-.4-4z"
//                 />
//               </svg>
//               <span className="text-sm font-semibold text-gray-700">
//                 Continue with Google
//               </span>
//             </button>

//             {/* BUTTON */}
//             <button
//               type="submit"
//               className="w-full py-3.5 bg-black text-white rounded-xl flex justify-center items-center gap-2 hover:bg-zinc-800 transition active:scale-95"
//             >
//               Login
//               <ArrowRight className="w-4 h-4" />
//             </button>

//             {/* SIGNUP */}
//             <p className="text-center text-sm text-gray-500">
//               Don’t have an account?{" "}
//               <span
//                 onClick={() => router.push("/signup")}
//                 className="text-emerald-600 font-medium cursor-pointer hover:underline"
//               >
//                 Sign up
//               </span>
//             </p>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// }




"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { login as loginAPI } from "@/lib/api";
import { Mail, Lock, Loader2, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      setError("Sab fields fill karo");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const { data } = await loginAPI(formData);
      login(data.token, data.user);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen grid grid-cols-1 md:grid-cols-2 bg-gray-950 overflow-hidden">

      {/* LEFT SIDE */}
      <div className="hidden md:flex flex-col items-center justify-center p-12 bg-black text-white relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 bg-red-600/20 rounded-full blur-3xl" />

        <div className="flex items-center gap-2 z-10">
          <span className="text-2xl">⚡</span>
          <span className="text-2xl font-bold">ContentForge</span>
        </div>

        <div className="z-10">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Create content <br />
            <span className="text-red-500">10x faster</span> <br />
            with AI.
          </h2>
          <p className="text-gray-400">
            Blogs, ads, emails aur social media posts — seconds mein.
          </p>
        </div>

        <p className="text-sm text-gray-600 z-10">© 2026 ContentForge</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center h-screen p-8">
        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="flex items-center justify-center gap-2 mb-8 md:hidden">
            <span className="text-2xl">⚡</span>
            <span className="text-2xl font-bold text-white">ContentForge</span>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
            <h1 className="text-2xl font-bold text-white mb-1">Welcome back</h1>
            <p className="text-gray-400 text-sm mb-6">Apne account mein login karo</p>

            {/* Google OAuth */}
            <a
              href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`}
              className="flex items-center justify-center gap-3 w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white py-2.5 rounded-xl text-sm font-medium transition-all mb-4"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </a>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-gray-800" />
              <span className="text-xs text-gray-600">ya email se</span>
              <div className="flex-1 h-px bg-gray-800" />
            </div>

            {/* Fields */}
            <div className="space-y-3 mb-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-white text-sm outline-none focus:border-purple-500 transition-all placeholder-gray-600"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-white text-sm outline-none focus:border-purple-500 transition-all placeholder-gray-600"
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-400 bg-red-500/10 px-4 py-2 rounded-lg mb-4">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Logging in...</>
              ) : (
                <><ArrowRight className="w-4 h-4" /> Login</>
              )}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Account nahi hai?{" "}
              <Link href="/signup" className="text-red-400 hover:text-red-300 font-medium">
                Sign up karo
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}