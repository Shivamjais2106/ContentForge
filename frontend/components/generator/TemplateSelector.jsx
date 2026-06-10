"use client";

const templates = [
  { type: "blog", label: "Blog Post", icon: "📝", desc: "Long-form articles" },
  { type: "social", label: "Social Media", icon: "📱", desc: "Captions & posts" },
  { type: "email", label: "Email Copy", icon: "📧", desc: "newsletters & outreach" },
  { type: "ad", label: "Ad Copy", icon: "🎯", desc: "Marketing & ads" },
];

export default function TemplateSelector({ selected, onChange }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <p className="text-sm font-medium text-gray-400 mb-3">Content Type</p>
      <div className="grid grid-cols-2 gap-2">
        {templates.map(({ type, label, icon, desc }) => (
          <button
            key={type}
            onClick={() => onChange(type)}
            className={`flex flex-col items-start p-3 rounded-lg border transition-all text-left ${
              selected === type
                ? "border-purple-500 bg-purple-500/10"
                : "border-gray-700 bg-gray-800 hover:border-gray-600"
            }`}
          >
            <span className="text-xl mb-1">{icon}</span>
            <span className="text-sm font-medium text-white">{label}</span>
            <span className="text-xs text-gray-500">{desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}