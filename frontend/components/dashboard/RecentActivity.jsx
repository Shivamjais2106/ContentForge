import Link from "next/link";
import { Trash2, Star } from "lucide-react";
import { useContent } from "@/context/ContentContext";

const typeColors = {
  blog: "bg-blue-500/20 text-blue-400",
  social: "bg-pink-500/20 text-pink-400",
  email: "bg-green-500/20 text-green-400",
  ad: "bg-orange-500/20 text-orange-400",
};

export default function RecentActivity({ history }) {
  const { toggleFavorite, deleteContent } = useContent();

  if (!history?.length) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
        <p className="text-gray-400">Koi content abhi tak generate nahi hua</p>
        <Link
          href="/generator"
          className="inline-block mt-3 text-purple-400 hover:text-purple-300 text-sm"
        >
          Pehla content generate karo →
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
        <Link
          href="/generator"
          className="text-sm text-purple-400 hover:text-purple-300"
        >
          View All →
        </Link>
      </div>

      <div className="space-y-3">
        {history.map((item) => (
          <div
            key={item._id}
            className="flex items-start justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all"
          >
            {/* Left */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${
                    typeColors[item.type]
                  }`}
                >
                  {item.type}
                </span>
                {item.platform && (
                  <span className="text-xs text-gray-500 capitalize">
                    {item.platform}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-300 truncate">{item.prompt}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(item.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={() => toggleFavorite(item._id)}
                className={`p-1.5 rounded-lg transition-all ${
                  item.isFavorite
                    ? "text-yellow-400 bg-yellow-500/10"
                    : "text-gray-500 hover:text-yellow-400 hover:bg-gray-700"
                }`}
              >
                <Star className="w-4 h-4" fill={item.isFavorite ? "currentColor" : "none"} />
              </button>
              <button
                onClick={() => deleteContent(item._id)}
                className="p-1.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-gray-700 transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}