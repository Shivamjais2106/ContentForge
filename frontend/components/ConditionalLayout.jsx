"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// In routes pe Navbar/Footer nahi dikhega
const hideNavbarRoutes = [
  "/dashboard",
  "/generator",
  "/profile",
  "/templates",
  "/chatbot",  // ← add karo
  "/login",
  "/signup",
  "/auth",
];

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();

  const showNavbar = !hideNavbarRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
      {showNavbar && <Footer />}
    </>
  );
}