// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { User, Mail, Lock } from "lucide-react";

// export default function SignupPage() {
//   const router = useRouter();

//   // 🔥 Delay render to block autofill
//   const [mounted, setMounted] = useState(false);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   // Background Image URL
//   const BG_IMAGE_URL =
//     "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D";

//   useEffect(() => {
//     setTimeout(() => setMounted(true), 100);
//   }, []);

//   if (!mounted) return null;

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setMessage("Signup Successful ✅");

//         // reset form
//         setName("");
//         setEmail("");
//         setPassword("");

//         // Success ke baad user ko login page par bhej sakte hain
//         setTimeout(() => router.push("/login"), 2000);
//       } else {
//         setMessage(data.error || "Error ❌");
//       }
//     } catch (error) {
//       console.log(error);
//       setMessage("Server error ❌");
//     }
//   };

//   return (
//     // 🔥 Main Container with Background
//     <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
//       {/* 🔥 Background Image Layer */}
//       <div
//         className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-scale duration-[10000ms] hover:scale-110"
//         style={{ backgroundImage: `url(${BG_IMAGE_URL})` }}
//       />

//       {/* 🔥 Dark Blur Overlay (Form ko highlight karne ke liye) */}
//       <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]"></div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="w-full max-w-md z-10"
//       >
//         {/* Form Card */}
//         <div className="bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl border border-white/20">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-black text-gray-900 tracking-tight">
//               Create Account 🚀
//             </h1>
//             <p className="text-gray-500 text-sm mt-1 font-medium">
//               Join our community today
//             </p>
//           </div>

//           {/* MESSAGE */}
//           {message && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className={`text-center p-3 rounded-2xl mb-5 text-sm font-bold border ${
//                 message.includes("Successful")
//                   ? "bg-green-50 text-green-700 border-green-100"
//                   : "bg-red-50 text-red-600 border-red-100"
//               }`}
//             >
//               {message}
//             </motion.div>
//           )}

//           {/* FORM */}
//           <form
//             onSubmit={handleSignup}
//             autoComplete="off"
//             className="space-y-4"
//           >
//             {/* Hidden inputs to trick browser autofill */}
//             <input type="text" name="hidden_user" style={{ display: "none" }} />
//             <input
//               type="password"
//               name="hidden_pass"
//               style={{ display: "none" }}
//             />

//             {/* NAME */}
//             <div>
//               <label className="text-sm font-bold text-gray-700 ml-1">
//                 Full Name
//               </label>
//               <div className="relative mt-1">
//                 <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   name={`name_${Math.random()}`}
//                   placeholder="John Doe"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all text-gray-900"
//                   required
//                 />
//               </div>
//             </div>

//             {/* EMAIL */}
//             <div>
//               <label className="text-sm font-bold text-gray-700 ml-1">
//                 Email Address
//               </label>
//               <div className="relative mt-1">
//                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="email"
//                   name={`email_${Math.random()}`}
//                   placeholder="you@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all text-gray-900"
//                   required
//                 />
//               </div>
//             </div>

//             {/* PASSWORD */}
//             <div>
//               <label className="text-sm font-bold text-gray-700 ml-1">
//                 Password
//               </label>
//               <div className="relative mt-1">
//                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="password"
//                   name={`pass_${Math.random()}`}
//                   placeholder="••••••••"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all text-gray-900"
//                   autoComplete="new-password"
//                   required
//                 />
//               </div>
//             </div>

//             {/* BUTTON */}
//             <button
//               type="submit"
//               className="w-full py-4 bg-zinc-950 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-lg shadow-black/20 mt-2"
//             >
//               Create Account
//             </button>

//             {/* DIVIDER */}
//             <div className="flex items-center gap-3 my-2">
//               <div className="flex-1 h-px bg-gray-200" />
//               <span className="text-xs text-gray.400 font-medium">OR</span>
//               <div className="flex-1 h-px bg-gray-200" />
//             </div>

//             {/* GOOGLE SIGNUP BUTTON */}
//             {/* <button
//               type="button"
//               onClick={() =>
//                 (window.location.href = "http://localhost:5000/auth/google")
//               }
//               className="w-full py-3.5 border border-gray-200 rounded-xl flex justify-center items-center gap-3 hover:bg-gray-50 transition active:scale-95 bg-white"
//             >
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
//             </button> */}

//             {/* REDIRECT TO LOGIN */}
//             <p className="text-center text-sm text-gray-600 mt-4">
//               Already have an account?{" "}
//               <button
//                 type="button"
//                 onClick={() => router.push("/login")}
//                 className="text-black font-extrabold hover:underline"
//               >
//                 Sign In
//               </button>
//             </p>
//           </form>
//         </div>
//       </motion.div>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { signup as signupAPI } from "@/lib/api";
import { User, Mail, Lock, Loader2 } from "lucide-react";

export default function SignupPage() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      setError("Sab fields fill karo"); return;
    }
    if (formData.password !== formData.confirm) {
      setError("Passwords match nahi kar rahe"); return;
    }
    if (formData.password.length < 6) {
      setError("Password kam se kam 6 characters ka hona chahiye"); return;
    }
    setLoading(true);
    setError(null);
    try {
      const { data } = await signupAPI({ name: formData.name, email: formData.email, password: formData.password });
      login(data.token, data.user);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-950">

      {/* LEFT SIDE */}
      <div className="hidden md:flex flex-col justify-between p-12 bg-black text-white relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 bg-red-600/20 rounded-full blur-3xl" />

        <div className="flex items-center gap-2 z-10">
          <span className="text-2xl">⚡</span>
          <span className="text-2xl font-bold">ContentForge</span>
        </div>

        <div className="z-10">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Join thousands <br />
            of creators <br />
            <span className="text-red-500">today.</span>
          </h2>
          <p className="text-gray-400">Free mein shuru karo — 10 credits milenge.</p>
        </div>

        <p className="text-sm text-gray-600 z-10">© 2026 ContentForge</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="flex items-center justify-center gap-2 mb-8 md:hidden">
            <span className="text-2xl">⚡</span>
            <span className="text-2xl font-bold text-white">ContentForge</span>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
            <h1 className="text-2xl font-bold text-white mb-1">Account banao</h1>
            <p className="text-gray-400 text-sm mb-6">Free mein shuru karo — 10 credits milenge</p>

            {/* Google OAuth */}
            {/* <a
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
            </a> */}

            {/* Divider */}
            {/* <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-gray-800" />
              <span className="text-xs text-gray-600">ya email se</span>
              <div className="flex-1 h-px bg-gray-800" />
            </div> */}

            {/* Fields */}
            <div className="space-y-3 mb-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-white text-sm outline-none focus:border-purple-500 transition-all placeholder-gray-600"
                />
              </div>
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
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirm}
                  onChange={(e) => setFormData({ ...formData, confirm: e.target.value })}
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
                <><Loader2 className="w-4 h-4 animate-spin" /> Creating account...</>
              ) : (
                "Create Account"
              )}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Already account hai?{" "}
              <Link href="/login" className="text-red-400 hover:text-red-300 font-medium">
                Login karo
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}