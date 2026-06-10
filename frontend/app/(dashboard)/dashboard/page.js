"use client";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useContent } from "@/context/ContentContext";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { getStats } from "@/lib/api";
import { useState } from "react";
import { Wand2 } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { user } = useAuth();
  const { fetchHistory, history } = useContent();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchHistory();
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data } = await getStats();
      setStats(data.stats);
    } catch (err) {
      console.error("Stats fetch failed:", err.message);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Welcome back, {user?.name?.split(" ")[0]} 👋
          </h1>
          <p className="text-gray-400 mt-1">
            Here's what's happening with your content
          </p>
        </div>
        <Link
          href="/generator"
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg transition-all font-medium"
        >
          <Wand2 className="w-4 h-4" />
          Generate Content
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Generated"
          value={stats?.total || 0}
          icon="📝"
          color="purple"
        />
        <StatsCard
          title="Favorites"
          value={stats?.favorites || 0}
          icon="⭐"
          color="yellow"
        />
        <StatsCard
          title="Credits Left"
          value={user?.credits || 0}
          icon="⚡"
          color="green"
        />
      </div>

      {/* Content Type Breakdown */}
      {stats?.byType?.length > 0 && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">
            Content Breakdown
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.byType.map((item) => (
              <div
                key={item._id}
                className="bg-gray-800 rounded-lg p-4 text-center"
              >
                <p className="text-2xl font-bold text-purple-400">
                  {item.count}
                </p>
                <p className="text-sm text-gray-400 capitalize mt-1">
                  {item._id}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Activity */}
      <RecentActivity history={history.slice(0, 5)} />
    </div>
  );
}