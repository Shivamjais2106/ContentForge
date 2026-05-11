"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { 
  Rocket, BookOpen, Lightbulb, HelpCircle, 
  CheckCircle2, AlertCircle, Terminal, Copy, 
  Zap, ShieldCheck, Globe 
} from "lucide-react";

export default function DocsPage() {
  const [active, setActive] = useState("getting-started");
  const router = useRouter();
const [activeStep, setActiveStep] = useState(0); // Pehla step by default active rahega
const [copied, setCopied] = useState(false);
  const menu = [
    { id: "getting-started", label: "Getting Started", icon: <Rocket size={18} /> },
    { id: "how-to-use", label: "How to Use", icon: <BookOpen size={18} /> },
    { id: "tips", label: "Pro Tips", icon: <Lightbulb size={18} /> },
    { id: "faq", label: "FAQ", icon: <HelpCircle size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-72 border-r border-slate-200 p-6 hidden md:block sticky top-0 h-screen bg-white">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
            <Zap size={20} fill="currentColor" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-800">
            ContentForge <span className="text-indigo-600">AI</span>
          </h2>
        </div>

        <nav className="space-y-1">
          <p className="text-[10px] font-uppercase font-bold text-slate-400 mb-3 px-3 tracking-widest uppercase">
            Documentation
          </p>
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                active === item.id
                  ? "bg-indigo-50 text-indigo-700 shadow-sm shadow-indigo-100"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span className={active === item.id ? "text-indigo-600" : "text-slate-400"}>
                {item.icon}
              </span>
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 px-6 md:px-16 py-12 max-w-5xl overflow-x-hidden">
        
        {/* ===== GETTING STARTED ===== */}
        {active === "getting-started" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              v2.0 is now live
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Supercharge your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Content Workflow</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Welcome to the future of content creation. ContentForge AI combines the power of GPT-4 and custom fine-tuned models to help you scale your digital presence.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                <Globe className="text-blue-500 mb-3" />
                <h4 className="font-bold mb-1">Multi-language</h4>
                <p className="text-xs text-slate-500">Generate content in 30+ languages naturally.</p>
              </div>
              <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                <ShieldCheck className="text-green-500 mb-3" />
                <h4 className="font-bold mb-1">Plagiarism Free</h4>
                <p className="text-xs text-slate-500">100% unique content passed by AI detectors.</p>
              </div>
              <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                <Zap className="text-amber-500 mb-3" />
                <h4 className="font-bold mb-1">Fast Export</h4>
                <p className="text-xs text-slate-500">Export to WordPress, PDF, or Markdown.</p>
              </div>
            </div>

            {/* ================= INTERACTIVE PREVIEW (MOCKUP) ================= */}
            <div className="mt-12 p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-xl">
              <div className="bg-white rounded-[22px] overflow-hidden">
                <div className="flex border-b border-slate-100 bg-slate-50/50 p-3 items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="mx-auto bg-white border border-slate-200 px-4 py-1 rounded-md text-[10px] text-slate-400 font-mono">
                    app.contentforge.ai/editor
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 h-[350px]">
                  {/* Input Side */}
                  <div className="p-6 border-r border-slate-100 bg-slate-50/30">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Input Prompt</label>
                    <div className="mt-3 p-4 bg-white border border-slate-200 rounded-xl shadow-sm italic text-slate-400 text-sm leading-relaxed">
                      "Write a catchy Instagram caption for a new coffee shop opening in Mumbai..."
                    </div>
                   <button 
  onClick={() => router.push("/generator")}
  className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 transition-all active:scale-95"
>
  <Zap size={16} fill="white" /> Generate Content
</button>
                  </div>

                  {/* Output Side */}
                  <div className="p-6 bg-white overflow-y-auto">
                    <label className="text-xs font-bold text-indigo-500 uppercase tracking-wider">AI Result</label>
                    <div className="mt-3 space-y-3">
                      <div className="h-4 bg-slate-100 rounded-full w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-slate-100 rounded-full w-full animate-pulse"></div>
                      <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-slate-700 text-sm leading-relaxed border-l-4 border-l-indigo-500">
                        ☕️ Mumbai, your mornings just got a massive upgrade! 🚀 We're finally open in Bandra. Come for the aroma, stay for the vibes. #CoffeeLove #MumbaiFoodie
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= LOGO CLOUD ================= */}
            <div className="mt-16 text-center">
              <p className="text-sm text-slate-400 font-medium mb-8 uppercase tracking-widest">Trusted by teams at</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <span className="text-2xl font-black tracking-tighter">Spotify</span>
                <span className="text-2xl font-black tracking-tighter">Stripe</span>
                <span className="text-2xl font-black tracking-tighter">Airbnb</span>
                <span className="text-2xl font-black tracking-tighter">Adobe</span>
              </div>
            </div>

            {/* Quick Setup Terminal */}
            <div className="mt-20 bg-slate-900 rounded-2xl p-6 text-slate-300 relative overflow-hidden group">
              <Terminal className="absolute right-[-20px] bottom-[-20px] text-white/5 w-48 h-48" />
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Terminal size={18} className="text-indigo-400" /> Quick Setup
              </h3>
              <p className="text-sm mb-4">No complex installation. Just get your API key and start generating.</p>
              <div className="bg-slate-800/50 rounded-lg p-3 font-mono text-xs flex justify-between items-center border border-slate-700">
                <span>npm install @contentforge/core</span>
                <Copy size={14} className="cursor-pointer hover:text-white transition" />
              </div>
            </div>
          </div>
        )}

       {/* ===== HOW TO USE (INTERACTIVE UI) ===== */}
{active === "how-to-use" && (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
    <h1 className="text-4xl font-bold mb-4 tracking-tight">Mastering the Platform</h1>
    <p className="text-slate-500 text-lg mb-12">Chaliye seekhte hain ContentForge AI ko use karne ka sahi tarika, sirf 4 steps mein.</p>

    {/* STEPPER NAV (CIRCLES) */}
    <div className="relative flex justify-between items-center mb-16 px-4">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0" />
      
      {/* Progress Line (Dynamic) */}
      <div 
        className="absolute top-1/2 left-0 h-1 bg-indigo-600 -translate-y-1/2 z-0 transition-all duration-500" 
        style={{ width: `${(activeStep / 3) * 100}%` }}
      />

      {[
        { title: "Select", icon: "01" },
        { title: "Context", icon: "02" },
        { title: "Magic", icon: "03" },
        { title: "Export", icon: "04" },
      ].map((s, idx) => (
        <div key={idx} className="relative z-10 flex flex-col items-center">
          <button
            onClick={() => setActiveStep(idx)}
            className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-sm transition-all duration-300 ${
              activeStep === idx
                ? "bg-indigo-600 border-indigo-100 text-white scale-125 shadow-lg shadow-indigo-200"
                : activeStep > idx 
                ? "bg-indigo-500 border-indigo-50 text-white"
                : "bg-white border-slate-200 text-slate-400 hover:border-indigo-300"
            }`}
          >
            {activeStep > idx ? <CheckCircle2 size={18} /> : s.icon}
          </button>
          <span className={`absolute -bottom-8 text-xs font-bold uppercase tracking-wider transition-colors ${
            activeStep === idx ? "text-indigo-600" : "text-slate-400"
          }`}>
            {s.title}
          </span>
        </div>
      ))}
    </div>

    {/* DYNAMIC CONTENT CARD */}
    <div className="grid md:grid-cols-5 gap-8 items-center bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-100 transition-all duration-500">
      
      {/* Left: Step Details */}
      <div className="md:col-span-3 space-y-6">
        {[
          { 
            title: "Select the Perfect Template", 
            desc: "Choose from 50+ specialized templates designed for SEO, social media, and academic writing. Har template ko specific algorithms ke saath optimize kiya gaya hai.",
            features: ["Blog Posts", "Ad Copy", "Email Drafts"]
          },
          { 
            title: "Give Context to AI", 
            desc: "Apne topic ke bare mein details bhariye. Aap tone (Professional, Witty, Creative) aur keywords bhi select kar sakte hain taaki results aapke brand voice se match karein.",
            features: ["Tone Selection", "Keywords", "Audience Targeting"]
          },
          { 
            title: "Generate with Magic", 
            desc: "Sirf ek click mein, hamara AI aapke liye 3 alag-alag variations create karega. Aap inmein se best choose kar sakte hain ya fir 'Re-generate' kar sakte hain.",
            features: ["GPT-4 Powered", "Instant Results", "100% Unique"]
          },
          { 
            title: "Review, Polish & Export", 
            desc: "Final content ko hamare built-in rich text editor mein edit karein. Ek baar satisfied hone par, direct WordPress, PDF ya Google Docs par export karein.",
            features: ["Rich Text Editor", "Direct CMS Export", "Format Support"]
          },
        ].map((content, i) => (
          activeStep === i && (
            <div key={i} className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="inline-block px-3 py-1 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold mb-4">
                STEP {i + 1}
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4 leading-tight">{content.title}</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">{content.desc}</p>
              
              <div className="flex flex-wrap gap-3">
                {content.features.map(f => (
                  <span key={f} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-500">
                    <CheckCircle2 size={12} className="text-indigo-500" /> {f}
                  </span>
                ))}
              </div>
            </div>
          )
        ))}

        <div className="pt-6 flex gap-4">
          <button 
            disabled={activeStep === 0}
            onClick={() => setActiveStep(prev => prev - 1)}
            className="px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            Back
          </button>
          <button 
            onClick={() => activeStep === 3 ? router.push("/generator") : setActiveStep(prev => prev + 1)}
            className="px-8 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all flex items-center gap-2"
          >
            {activeStep === 3 ? "Try Now" : "Next Step"} <Zap size={14} fill="currentColor" />
          </button>
        </div>
      </div>

      {/* Right: Visual Mockup */}
      <div className="md:col-span-2 relative">
        <div className="aspect-square bg-gradient-to-br from-indigo-50 to-white rounded-3xl border border-slate-100 flex items-center justify-center overflow-hidden">
          {/* Dynamic Icon based on step */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-400 blur-[60px] opacity-20 animate-pulse" />
            {activeStep === 0 && <BookOpen size={80} className="text-indigo-600 relative" />}
            {activeStep === 1 && <Terminal size={80} className="text-indigo-600 relative" />}
            {activeStep === 2 && <Zap size={80} className="text-indigo-600 relative animate-bounce" />}
            {activeStep === 3 && <CheckCircle2 size={80} className="text-indigo-600 relative" />}
          </div>
        </div>
      </div>
    </div>
  </div>
)}

       {/* ===== TIPS ===== */}
{active === "tips" && (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="mb-10">
      <h1 className="text-4xl font-black mb-4 tracking-tight text-slate-900">Expert Tips 🧠</h1>
      <p className="text-slate-500 text-lg max-w-2xl">
        Unlock the full potential of ContentForge with these power-user strategies to get 10x better results.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: "Be Hyper-Specific",
          desc: "Instead of 'Write about dogs', try 'Write an educational blog about training Golden Retriever puppies in small apartments.'",
          icon: <Lightbulb className="text-amber-500" />,
          color: "bg-amber-50",
          border: "hover:border-amber-200"
        },
        {
          title: "Use Anchor Keywords",
          desc: "List 3-5 target keywords to guide the AI's SEO focus without making the content sound robotic.",
          icon: <CheckCircle2 className="text-emerald-500" />,
          color: "bg-emerald-50",
          border: "hover:border-emerald-200"
        },
        {
          title: "Tone is Everything",
          desc: "Use adjectives like 'Witty', 'Professional', or 'Sarcastic' to drastically change the output style.",
          icon: <Zap className="text-indigo-500" />,
          color: "bg-indigo-50",
          border: "hover:border-indigo-200"
        },
        {
          title: "A/B Testing",
          desc: "Generate the same prompt with different creative temperatures to find your perfect balance.",
          icon: <ShieldCheck className="text-blue-500" />,
          color: "bg-blue-50",
          border: "hover:border-blue-200"
        }
      ].map((tip, i) => (
        <div key={i} className={`group p-8 rounded-[2rem] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${tip.border}`}>
          <div className={`w-12 h-12 ${tip.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
            {tip.icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-800">{tip.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{tip.desc}</p>
        </div>
      ))}
    </div>

    {/* Pro Callout */}
    <div className="mt-12 p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Zap size={120} fill="white" />
      </div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2 text-indigo-400">Golden Rule: The 80/20 Principal</h3>
        <p className="text-slate-400 max-w-xl">
          Let AI do 80% of the heavy lifting (drafting, research, structure), and you spend the final 20% adding your unique human touch and personal anecdotes.
        </p>
      </div>
    </div>
  </div>
)}
{/* ===== FAQ SECTION ===== */}
{active === "faq" && (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="text-center mb-16">
      <h1 className="text-4xl font-black mb-4 tracking-tight">Frequently Asked Questions</h1>
      <p className="text-slate-500 text-lg">Everything you need to know about ContentForge.</p>
      
      {/* Centered Modern Search Bar */}
      <div className="mt-8 relative max-w-xl mx-auto">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <HelpCircle className="h-5 w-5 text-indigo-500" />
        </div>
        <input 
          type="text" 
          placeholder="Search for answers..." 
          className="block w-full pl-12 pr-4 py-4 border-2 border-slate-100 rounded-2xl bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm text-sm"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Category Navigation */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm sticky top-24">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 px-2">Support Categories</h3>
          <nav className="space-y-2">
            {['General', 'Billing', 'Technical', 'Security'].map((cat) => (
  <button 
    key={cat} 
    className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-slate-600 bg-white border border-transparent hover:bg-slate-50 hover:border-slate-100 hover:text-indigo-600 transition-all duration-200 group flex items-center justify-between"
  >
    <span>{cat}</span>
  
  </button>
))}
          </nav>
          
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100">
            <h4 className="font-bold text-indigo-900 mb-1 text-sm">Still stuck?</h4>
            <p className="text-xs text-indigo-600/70 mb-4 leading-relaxed">Our support team typically responds in under 2 hours.</p>
            <button className="w-full py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition shadow-md">
              Chat with Us
            </button>
          </div>
        </div>
      </div>

      {/* Accordion List */}
      <div className="lg:col-span-8 space-y-4">
        {[
          { q: "Is the content truly original?", a: "Ji haan! ContentForge AI har sentence ko scratch se generate karta hai. Ye 100% plagiarism-free hota hai.", icon: "💎" },
          { q: "How many languages do you support?", a: "Filhaal hum 32+ languages support karte hain jisme Hindi aur regional dialects bhi shamil hain.", icon: "🌍" },
          { q: "Can I cancel my subscription anytime?", a: "Bilkul! Koi hidden contract nahi hai. Aap kabhi bhi dashboard se ek click mein cancel kar sakte hain.", icon: "💳" },
          { q: "How secure is my data?", a: "Aapka data encrypted rehta hai. Hum aapke content ko training ke liye use nahi karte.", icon: "🔒" },
        ].map((faq, i) => (
          <details key={i} className="group border border-slate-100 rounded-[2rem] bg-white overflow-hidden transition-all hover:border-indigo-300">
            <summary className="p-6 cursor-pointer flex justify-between items-center list-none font-bold text-slate-800 focus:outline-none">
              <div className="flex items-center gap-4">
                <span className="text-xl">{faq.icon}</span>
                <span className="text-md">{faq.q}</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-open:rotate-180 transition-all group-open:bg-indigo-50 group-open:text-indigo-600">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M2 4L6 8L10 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </summary>
            <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed ml-12 border-t border-slate-50 pt-4">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  </div>
)}

      </main>
    </div>
  );
}