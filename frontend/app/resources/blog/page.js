"use client";

import { useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const blogs = [
    {
      title: "How to Write Better Content with AI",
      desc: "Learn how AI can help you create high-quality content faster with advanced prompting techniques and smart workflows.",
      date: "April 2026",
      category: "AI Guide",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Top 10 Content Marketing Tips",
      desc: "Boost your content strategy with proven techniques that actually drive conversions in 2026.",
      date: "Feb 2026",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const featured = blogs[0];

  // ✅ SUBSCRIBE FUNCTION
  const handleSubscribe = async () => {
    if (!email) {
      alert("Enter email first");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Subscribed successfully 🎉");
        setEmail("");
      } else {
        alert(data.error || "Something went wrong");
      }

    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 pb-20">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold mb-4">
          <BookOpen size={14} />
          OUR JOURNAL
        </div>

        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
          Insights &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Ideas.
          </span>
        </h1>

        <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
          Stay ahead of the curve with our latest thoughts on AI, content strategy, and digital growth.
        </p>
      </div>

      {/* FEATURED BLOG */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white border rounded-[2.5rem] overflow-hidden shadow-sm mb-16">
          
          <div className="h-80 md:h-[450px]">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
              {featured.category}
            </span>

            <h2 className="text-3xl md:text-4xl font-black mt-4 mb-4">
              {featured.title}
            </h2>

            <p className="text-slate-500 text-lg">
              {featured.desc}
            </p>
          </div>
        </div>

        {/* CATEGORY + NEWSLETTER */}
        <div className="grid lg:grid-cols-3 gap-12 mt-20">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black mb-8">
              Explore by Category
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {["AI Strategy", "Content Writing", "SEO", "Social Growth"].map((cat) => (
                <div key={cat} className="flex justify-between p-6 bg-white border rounded-3xl hover:shadow-md transition cursor-pointer">
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-50 flex items-center justify-center rounded-xl text-indigo-600">
                      <BookOpen size={20} />
                    </div>
                    <span className="font-bold">{cat}</span>
                  </div>

                  <ArrowRight size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - NEWSLETTER */}
          <div>
            <div className="sticky top-8 p-8 bg-black rounded-[2.5rem] text-white">

              <h3 className="text-2xl font-black mb-4">
                Never miss an update.
              </h3>

              <p className="text-gray-300 mb-6">
                Get latest AI tips directly in your inbox.
              </p>

              <div className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none"
                />

                <button
                  onClick={handleSubscribe}
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-white text-indigo-600 font-bold hover:bg-indigo-50 transition"
                >
                  {loading ? "Subscribing..." : "Subscribe Now"}
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-6 text-center">
                Join 5,000+ creators 🚀
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}