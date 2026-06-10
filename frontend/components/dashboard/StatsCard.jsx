export default function StatsCard({ title, value, icon, color }) {
  const colors = {
    purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    green: "bg-green-500/10 border-green-500/20 text-green-400",
    blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  };

  return (
    <div
      className={`rounded-xl border p-6 ${colors[color] || colors.purple}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="text-sm mt-1 opacity-80">{title}</p>
    </div>
  );
}