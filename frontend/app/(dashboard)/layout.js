// "use client";
// import { useAuth } from "@/context/AuthContext";
// import Sidebar from "@/components/dashboard/Sidebar";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function DashboardLayout({ children }) {
//   const { user, loading } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!loading && !user) {
//       router.push("/login");
//     }
//   }, [user, loading]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-950">
//         <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
//       </div>
//     );
//   }

//   if (!user) return null;

//   return (
//     <div className="flex min-h-screen bg-gray-950 text-white">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <main className="flex-1 ml-64 p-8 overflow-y-auto">
//         {children}
//       </main>
//     </div>
//   );
// }


// (dashboard)/layout.js mein
// Pehle wala hard redirect hata do

"use client";
import { useAuth } from "@/context/AuthContext";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // ✅ User nahi hai — Sidebar nahi dikhega, sirf content
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-8">
        {children}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}