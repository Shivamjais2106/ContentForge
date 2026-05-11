"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  BookOpen,
  Zap,
  Lightbulb,
  PlayCircle,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Video,
  Award
} from "lucide-react";

export default function TutorialsPage() {
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();

  const categories = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Getting Started",
      desc: "Learn basics, dashboard & generate your first AI content.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "AI Tools Guides",
      desc: "Master Email Writer, Ads Generator & more tools.",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Advanced Tips",
      desc: "Prompt engineering & high-quality content secrets.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Use Cases",
      desc: "Real-world use: business, Instagram & blogs.",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  const allTutorials = [
    { title: "Create Your First AI Content", desc: "Learn step-by-step how to generate content.", level: "Beginner", time: "5 min" },
    { title: "Write High-Converting Emails", desc: "Create professional emails that increase open rates.", level: "Intermediate", time: "8 min" },
    { title: "Generate Viral Instagram Captions", desc: "Boost engagement with powerful hooks.", level: "Advanced", time: "10 min" },
    { title: "Ad Copy That Sells", desc: "Learn how to generate ads that actually convert.", level: "Intermediate", time: "7 min" },
    { title: "SEO Blog Writing with AI", desc: "Write blog posts optimized for Google ranking.", level: "Advanced", time: "12 min" },
    { title: "Prompt Engineering Basics", desc: "Understand how to write powerful prompts.", level: "Beginner", time: "6 min" }
  ];

  const visibleTutorials = showAll ? allTutorials : allTutorials.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900">

      {/* 🔥 HERO SECTION */}
      <section className="pt-16 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-100 blur-[150px] opacity-40"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold mb-6">
            <Sparkles size={14} /> AI Learning Academy
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Master AI Content <br />
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text">
              Like a Pro 🚀
            </span>
          </h1>

          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10">
            Everything you need to know about AI content creation in one place.
          </p>

          {/* NEW: QUICK STATS INSTEAD OF SEARCH BAR */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-slate-100 shadow-sm max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Video size={20}/></div>
              <div className="text-left">
                <div className="font-bold text-xl line-height-1">24+</div>
                <div className="text-xs text-slate-500">Modules</div>
              </div>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><Users size={20}/></div>
              <div className="text-left">
                <div className="font-bold text-xl line-height-1">10k+</div>
                <div className="text-xs text-slate-500">Students</div>
              </div>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100 rounded-lg text-amber-600"><Award size={20}/></div>
              <div className="text-left">
                <div className="font-bold text-xl line-height-1">Certified</div>
                <div className="text-xs text-slate-500">Program</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* CATEGORIES GRID */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {categories.map((cat, i) => (
            <div key={i} className="p-6 bg-white border rounded-2xl hover:shadow-xl transition cursor-pointer group">
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 group-hover:scale-110 transition ${cat.color}`}>
                {cat.icon}
              </div>
              <h3 className="font-bold text-lg">{cat.title}</h3>
              <p className="text-sm text-slate-500 mt-2">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* TUTORIALS SECTION */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold">Popular Tutorials</h2>
              <p className="text-slate-500 text-sm mt-1">Handpicked lessons for you.</p>
            </div>

            <button
              onClick={() => setShowAll(!showAll)}
              className="text-indigo-600 font-medium flex items-center gap-2 hover:underline"
            >
              {showAll ? "Show Less" : "View All Tutorials"}
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {visibleTutorials.map((t, i) => (
              <div key={i} className="bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition flex flex-col">
                <div className="h-40 bg-slate-100 flex items-center justify-center relative group cursor-pointer">
                  <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition"></div>
                  <PlayCircle className="text-indigo-500 w-12 h-12 group-hover:scale-125 transition" />
                  <span className="absolute top-3 left-3 bg-white px-3 py-1 text-xs font-bold rounded-full shadow">
                    {t.level}
                  </span>
                </div>

                <div className="p-6 flex-grow">
                  <h3 className="font-bold text-xl mb-2">{t.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{t.desc}</p>
                </div>

                <div className="px-6 pb-6 mt-auto">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span className="flex items-center gap-1">⏱ {t.time}</span>
                    <button className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg font-bold flex items-center gap-1 hover:bg-indigo-600 hover:text-white transition">
                      Start <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRO TIPS SECTION */}
        <div className="bg-slate-900 text-white p-12 rounded-3xl mb-20 relative overflow-hidden">
           <div className="absolute right-[-50px] top-[-50px] w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-bold mb-6">Pro Tips ⚡</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["Use clear prompts", "Define tone properly", "Edit results", "Try variations"].map((tip, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="text-indigo-400" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER CTA */}
      <footer className="bg-slate-50 py-20 text-center border-t">
        <h2 className="text-3xl font-bold mb-4">Ready to create amazing content?</h2>
        <p className="text-slate-500 mb-6">Start generating powerful AI content now.</p>
        <button 
          onClick={() => router.push('/generator')} 
          className="bg-black text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-600 transition shadow-lg hover:shadow-indigo-200">
          Get Started For Free
        </button>
      </footer>
    </div>
  );
}