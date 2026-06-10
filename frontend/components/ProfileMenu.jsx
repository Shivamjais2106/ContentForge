"use client";

import { useState, useRef, useEffect } from "react";
import {
  User,
  LogOut,
  Settings,
  ChevronDown,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";

export default function ProfileMenu({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const initial = user?.name?.charAt(0).toUpperCase() || "U";

  // Outside click se band karo
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Name ka first letter
  // const initial = user?.name?.charAt(0).toUpperCase() || "U";

  <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
    {user?.avatar ? (
      <img
        src={user.avatar}
        alt={user.name}
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="w-full h-full bg-red-600 flex items-center justify-center text-white font-bold text-xs">
        {initial}
      </div>
    )}
  </div>;

  return (
    <div ref={ref} className="relative">
      {/* ✅ Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition px-3 py-2 rounded-xl border border-zinc-700"
      >
        {/* Avatar */}
        <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
          {initial}
        </div>

        {/* Name */}
        <span className="text-white text-sm font-medium max-w-[90px] truncate">
          {user?.name}
        </span>

        {/* Arrow */}
        <ChevronDown
          size={14}
          className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* ✅ Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl z-50 overflow-hidden">
          {/* User Info Header */}
          <div className="px-4 py-3 border-b border-zinc-800 bg-zinc-800/50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                {initial}
              </div>
              <div className="overflow-hidden">
                <p className="text-white font-bold text-sm truncate">
                  {user?.name}
                </p>
                <p className="text-gray-400 text-xs truncate">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-zinc-800 hover:text-white rounded-xl transition"
            >
              <User size={15} className="text-gray-400" />
              My Profile
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-zinc-800 hover:text-white rounded-xl transition"
            >
              <LayoutDashboard size={15} className="text-gray-400" />
              Dashboard
            </Link>
            {/* <Link
              href="/settings"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-zinc-800 hover:text-white rounded-xl transition"
            >
              <Settings size={15} className="text-gray-400" />
              Settings
            </Link> */}

            <Link
              href="/profile" // ← /settings ki jagah /profile
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-zinc-800 hover:text-white rounded-xl transition"
            >
              <Settings size={15} className="text-gray-400" />
              Settings
            </Link>

            {/* Divider */}
            <div className="border-t border-zinc-800 my-2" />
            {/* Logout */}
            <button
              onClick={() => {
                setOpen(false);
                onLogout();
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-xl transition"
            >
              <LogOut size={15} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
