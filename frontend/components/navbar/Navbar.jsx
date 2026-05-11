"use client";

import Link from "next/link";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ProfileMenu from "@/components/ProfileMenu.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
const { user, setUser } = useAuth();
const router = useRouter();
const pathname = usePathname();

// console.log("USER:", user); // debug
  const resourcesRef = useRef(null);

  const handleLogout = () => {
  localStorage.removeItem("user");
  setUser(null);
  router.push("/login");
};
  useEffect(() => {
    function handleClickOutside(event) {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setResourcesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-white tracking-wide">
          Content<span className='text-red-600 text-2xl'>Forge</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-base font-semibold">

          {/* ✅ Generator (NEW) */}
          <Link
            href="/generator"
            className="relative group text-gray-300 hover:text-white transition-all duration-300"
          >
            Generator
            <span   className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ${
      pathname === "/generator"
        ? "w-full"
        : "w-0 group-hover:w-full"
    }`}></span>
          </Link>

          {/* Templates */}
          <Link
            href="/templates"
            className="relative group text-gray-300 hover:text-white transition-all duration-300"
          >
            Templates
            <span  className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ${
      pathname === "/templates"
        ? "w-full"
        : "w-0 group-hover:w-full"
    }`}></span>
          </Link>

          {/* Pricing */}
          <Link
            href="/pricing"
            className="relative group text-gray-300 hover:text-white transition-all duration-300"
          >
            Pricing
            <span  className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ${
      pathname === "/pricing"
        ? "w-full"
        : "w-0 group-hover:w-full"
    }`}></span>
          </Link>
<div ref={resourcesRef} className="relative group">
  <button
    onClick={() => setResourcesOpen(!resourcesOpen)}
    className={`flex items-center gap-1 transition-all duration-300 ${
      pathname.startsWith("/resources")
        ? "text-white"
        : "text-gray-300 hover:text-white"
    }`}
  >
    Resources
    <span
      className={`transition-transform duration-300 ${
        resourcesOpen ? "rotate-180" : ""
      }`}
    >
      ▼
    </span>
  </button>

  {/* 🔥 UNDERLINE */}
  <span
    className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ${
      pathname.startsWith("/resources")
        ? "w-full"
        : "w-0 group-hover:w-full"
    }`}
  ></span>

  {/* DROPDOWN */}
  {resourcesOpen && (
    <div className="absolute left-0 mt-4 flex flex-col bg-zinc-900 text-white shadow-2xl rounded-xl w-56 p-2 border border-zinc-800">
      <Link href="/resources/blog" className="px-3 py-2 text-sm hover:bg-zinc-800 rounded-md">
        Blog
      </Link>

      <Link href="/resources/helpCenter" className="px-3 py-2 text-sm hover:bg-zinc-800 rounded-md">
        Help Center
      </Link>

      <Link href="/resources/tutorials" className="px-3 py-2 text-sm hover:bg-zinc-800 rounded-md">
        Tutorials
      </Link>
    </div>
  )}
</div>
          {/* Docs */}
          <Link
            href="/docs"
            className="relative group text-gray-300 hover:text-white transition-all duration-300"
          >
            Docs
            <span  className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ${
      pathname === "/docs"
        ? "w-full"
        : "w-0 group-hover:w-full"
    }`}></span>
          </Link>
        </div>

        {/* Auth Buttons */}
        {/* <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-gray-400 hover:text-white transition">
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
          >
            Sign Up
          </Link>
        </div> */}
<div className="hidden md:flex items-center gap-4">
  {user ? (
    <>
      {/* <span className="text-white">{user.name}</span> */}

      {/* <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
        👤
      </div> */}

      {/* <button onClick={handleLogout} className="text-red-500">
        Logout
      </button> */}
      <ProfileMenu user={user} onLogout={handleLogout} />
    </>
  ) : (
    <>
      <Link href="/login" className="text-gray-400 hover:text-white transition">
        Login
      </Link>

      <Link
        href="/signup"
        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md"
      >
        Sign Up
      </Link>
    </>
  )}
</div>
        {/* Mobile Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 p-4 border-t border-zinc-800 bg-zinc-950 text-base text-gray-300">

          {/* ✅ Generator added */}
          <Link href="/generator">Generator</Link>

          <Link href="/templates">Templates</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/docs">Docs</Link>

          {/* <Link
            href="/login"
            className="bg-zinc-800 text-white px-4 py-2 rounded-md text-center"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-red-600 text-white px-4 py-2 rounded-md text-center"
          >
            Sign Up
          </Link> */}
          {user ? (
  <button onClick={handleLogout} className="text-red-500">
    Logout
  </button>
) : (
  <>
    <Link href="/login">Login</Link>
    <Link href="/signup">Sign Up</Link>
  </>
)}
        </div>
      )}
    </nav>
  );
}