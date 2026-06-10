"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { updateProfile } from "@/lib/api";
import { User, Mail, Crown, Zap, Save, Loader2 } from "lucide-react";

export default function ProfilePage() {
  const { user, setUser } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSave = async () => {
    if (!name.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const { data } = await updateProfile({ name });
      setUser(data.user);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  const planColors = {
    free: "text-gray-400 bg-gray-800",
    pro: "text-purple-400 bg-purple-500/20",
    enterprise: "text-yellow-400 bg-yellow-500/20",
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Profile</h1>
        <p className="text-gray-400 mt-1">Apni account settings manage karo</p>
      </div>

      {/* Avatar + Name Card */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <div className="flex items-center gap-5 mb-6">
          {/* Avatar */}
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover ring-2 ring-purple-500"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-3xl font-bold text-white ring-2 ring-purple-500">
              {user?.name?.[0]?.toUpperCase()}
            </div>
          )}
          <div>
            <h2 className="text-xl font-semibold text-white">{user?.name}</h2>
            <p className="text-gray-400 text-sm">{user?.email}</p>
            <span
              className={`inline-block mt-2 text-xs px-3 py-1 rounded-full font-medium capitalize ${
                planColors[user?.plan] || planColors.free
              }`}
            >
              {user?.plan || "free"} Plan
            </span>
          </div>
        </div>

        {/* Name Edit */}
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-purple-500 transition-all"
              placeholder="Apna naam likho"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </label>
            <input
              type="email"
              value={user?.email || ""}
              disabled
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-500 text-sm cursor-not-allowed"
            />
            <p className="text-xs text-gray-600 mt-1">Email change nahi ho sakta</p>
          </div>

          {/* Error / Success */}
          {error && (
            <p className="text-sm text-red-400 bg-red-500/10 px-4 py-2 rounded-lg">
              {error}
            </p>
          )}
          {success && (
            <p className="text-sm text-green-400 bg-green-500/10 px-4 py-2 rounded-lg">
              ✅ Profile update ho gaya!
            </p>
          )}

          <button
            onClick={handleSave}
            disabled={loading || name === user?.name}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>

      {/* Plan + Credits Card */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Crown className="w-5 h-5 text-yellow-400" />
          Plan & Credits
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-xs text-gray-400 mb-1">Current Plan</p>
            <p className="text-lg font-bold text-white capitalize">
              {user?.plan || "Free"}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-xs text-gray-400 mb-1">Credits Left</p>
            <p className="text-lg font-bold text-white flex items-center gap-1">
              <Zap className="w-4 h-4 text-yellow-400" />
              {user?.credits || 0}
            </p>
          </div>
        </div>

        {/* Upgrade CTA — free users ke liye */}
        {user?.plan === "free" && (
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-4">
            <h4 className="text-white font-semibold mb-1">Pro plan lo 🚀</h4>
            <p className="text-gray-400 text-sm mb-3">
              Unlimited generations + priority support + all templates
            </p>
            <a
              href="/pricing"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-lg transition-all font-medium"
            >
              Upgrade Now — ₹999/mo
            </a>
          </div>
        )}
      </div>

      {/* Account Info */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Account Info</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Member since</span>
            <span className="text-white">
              {new Date(user?.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Login method</span>
            <span className="text-white">
              {user?.googleId ? "Google OAuth" : "Email & Password"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}