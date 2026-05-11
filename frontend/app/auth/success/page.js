"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    
    if (token) {
      // Token save karo
      localStorage.setItem("token", token);
      
      // User info bhi save karo
      const payload = JSON.parse(atob(token.split(".")[1]));
      localStorage.setItem("user", JSON.stringify({
        id: payload.id,
        name: payload.name,
        email: payload.email
      }));

      // Home pe redirect
      router.push("/");
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <div className="animate-spin w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full mb-4" />
      <p className="text-gray-500 font-medium">Logging you in...</p>
    </div>
  );
}