"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  LayoutDashboard, Wand2, FileText,
  User, LogOut, Zap, MessageSquare, Crown,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Generator", href: "/generator", icon: Wand2 },
  { label: "Chatbot", href: "/chatbot", icon: MessageSquare },
  { label: "Templates", href: "/templates", icon: FileText },
  { label: "Profile", href: "/profile", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-950 border-r border-gray-800/50 flex flex-col">

      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2.5 px-6 py-5 border-b border-gray-800/50 hover:opacity-80 transition-all"
      >
        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <span className="text-lg font-bold text-white tracking-tight">
          ContentForge
        </span>
      </Link>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/60"
              }`}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-white" : "text-gray-500 group-hover:text-white"}`} />
              <span className="text-sm font-medium">{label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="px-3 py-4 border-t border-gray-800/50 space-y-3">

        {/* Upgrade Banner */}
        {user?.plan === "free" && (
          <Link
            href="/pricing"
            className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 hover:from-purple-600/30 hover:to-indigo-600/30 border border-purple-500/30 rounded-xl transition-all group"
          >
            <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Crown className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-purple-300">Upgrade to Pro</p>
              <p className="text-xs text-gray-500">{user?.credits || 0} credits left</p>
            </div>
            <Zap className="w-3.5 h-3.5 text-purple-400 group-hover:text-purple-300" />
          </Link>
        )}

        {/* User Info */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-800/60 transition-all">
          {user?.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-xl object-cover flex-shrink-0" />
          ) : (
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
              {user?.name?.[0]?.toUpperCase()}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{user?.name}</p>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-3 py-2.5 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all group"
        >
          <LogOut className="w-4 h-4 group-hover:text-red-400" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}