"use client";
import { useState } from "react";
import { useContent } from "@/context/ContentContext";
import { useRouter } from "next/navigation";
import { Wand2 } from "lucide-react";

const templates = [
  // Blog Templates
  {
    id: 1,
    category: "blog",
    title: "How-To Guide",
    desc: "Step-by-step tutorial format",
    icon: "📖",
    prompt: "Write a detailed how-to guide about",
    tone: "professional",
  },
  {
    id: 2,
    category: "blog",
    title: "Listicle",
    desc: "Top 10 / Best of format",
    icon: "📋",
    prompt: "Write a listicle blog post about top 10",
    tone: "casual",
  },
  {
    id: 3,
    category: "blog",
    title: "Opinion Piece",
    desc: "Thought leadership article",
    icon: "💡",
    prompt: "Write an opinion piece about",
    tone: "formal",
  },
  {
    id: 4,
    category: "blog",
    title: "Product Review",
    desc: "Detailed review format",
    icon: "⭐",
    prompt: "Write a detailed product review for",
    tone: "professional",
  },

  // Social Media Templates
  {
    id: 5,
    category: "social",
    title: "Instagram Caption",
    desc: "Engaging IG post caption",
    icon: "📸",
    prompt: "Write an engaging Instagram caption for",
    tone: "casual",
    platform: "instagram",
  },
  {
    id: 6,
    category: "social",
    title: "LinkedIn Post",
    desc: "Professional network post",
    icon: "💼",
    prompt: "Write a professional LinkedIn post about",
    tone: "professional",
    platform: "linkedin",
  },
  {
    id: 7,
    category: "social",
    title: "Twitter Thread",
    desc: "Viral thread format",
    icon: "🐦",
    prompt: "Write a Twitter thread about",
    tone: "casual",
    platform: "twitter",
  },
  {
    id: 8,
    category: "social",
    title: "Facebook Post",
    desc: "Community engagement post",
    icon: "👥",
    prompt: "Write a Facebook post about",
    tone: "casual",
    platform: "facebook",
  },

  // Email Templates
  {
    id: 9,
    category: "email",
    title: "Cold Outreach",
    desc: "B2B sales email",
    icon: "📨",
    prompt: "Write a cold outreach email for",
    tone: "professional",
  },
  {
    id: 10,
    category: "email",
    title: "Newsletter",
    desc: "Weekly newsletter format",
    icon: "📰",
    prompt: "Write a newsletter email about",
    tone: "casual",
  },
  {
    id: 11,
    category: "email",
    title: "Follow-Up",
    desc: "Post-meeting follow up",
    icon: "🔄",
    prompt: "Write a follow-up email after",
    tone: "formal",
  },
  {
    id: 12,
    category: "email",
    title: "Welcome Email",
    desc: "Onboarding new users",
    icon: "👋",
    prompt: "Write a welcome email for new users of",
    tone: "casual",
  },

  // Ad Copy Templates
  {
    id: 13,
    category: "ad",
    title: "Google Ad",
    desc: "Search ad copy",
    icon: "🔍",
    prompt: "Write a Google search ad copy for",
    tone: "persuasive",
  },
  {
    id: 14,
    category: "ad",
    title: "Facebook Ad",
    desc: "Social media ad copy",
    icon: "🎯",
    prompt: "Write a Facebook ad copy for",
    tone: "persuasive",
  },
  {
    id: 15,
    category: "ad",
    title: "Product Launch",
    desc: "Launch announcement copy",
    icon: "🚀",
    prompt: "Write a product launch ad copy for",
    tone: "persuasive",
  },
  {
    id: 16,
    category: "ad",
    title: "Discount Offer",
    desc: "Sale & promo copy",
    icon: "🏷️",
    prompt: "Write a discount offer ad copy for",
    tone: "casual",
  },
];

const categories = [
  { key: "all", label: "All Templates", icon: "✨" },
  { key: "blog", label: "Blog", icon: "📝" },
  { key: "social", label: "Social Media", icon: "📱" },
  { key: "email", label: "Email", icon: "📧" },
  { key: "ad", label: "Ad Copy", icon: "🎯" },
];

const categoryColors = {
  blog: "border-blue-500/30 bg-blue-500/5 hover:border-blue-500/60",
  social: "border-pink-500/30 bg-pink-500/5 hover:border-pink-500/60",
  email: "border-green-500/30 bg-green-500/5 hover:border-green-500/60",
  ad: "border-orange-500/30 bg-orange-500/5 hover:border-orange-500/60",
};

const badgeColors = {
  blog: "bg-blue-500/20 text-blue-400",
  social: "bg-pink-500/20 text-pink-400",
  email: "bg-green-500/20 text-green-400",
  ad: "bg-orange-500/20 text-orange-400",
};

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filtered = templates.filter((t) => {
    const matchCategory =
      activeCategory === "all" || t.category === activeCategory;
    const matchSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleUseTemplate = (template) => {
    // Generator page pe pre-filled prompt ke saath bhejo
    const params = new URLSearchParams({
      type: template.category,
      prompt: template.prompt,
      tone: template.tone,
      ...(template.platform && { platform: template.platform }),
    });
    router.push(`/generator?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Templates</h1>
        <p className="text-gray-400 mt-1">
          Ready-made prompts — ek click mein generator mein load ho jayenge
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Template search karo..."
        className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-purple-500 transition-all placeholder-gray-600"
      />

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap">
        {categories.map(({ key, label, icon }) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeCategory === key
                ? "bg-purple-600 text-white"
                : "bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600"
            }`}
          >
            <span>{icon}</span>
            {label}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <p className="text-4xl mb-3">🔍</p>
          <p>Koi template nahi mila</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((template) => (
            <div
              key={template.id}
              className={`group border rounded-xl p-5 cursor-pointer transition-all duration-200 ${
                categoryColors[template.category]
              }`}
              onClick={() => handleUseTemplate(template)}
            >
              {/* Icon */}
              <div className="text-3xl mb-3">{template.icon}</div>

              {/* Badge */}
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${
                  badgeColors[template.category]
                }`}
              >
                {template.category}
                {template.platform && ` • ${template.platform}`}
              </span>

              {/* Title + Desc */}
              <h3 className="text-white font-semibold mt-2 mb-1">
                {template.title}
              </h3>
              <p className="text-gray-500 text-xs">{template.desc}</p>

              {/* Hover CTA */}
              <div className="mt-4 flex items-center gap-1.5 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-all">
                <Wand2 className="w-3.5 h-3.5" />
                Use this template
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}