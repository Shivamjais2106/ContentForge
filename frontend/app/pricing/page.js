"use client";

import Script from "next/script";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Rocket } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹0",
    desc: "Good for trying out the AI",
    features: ["1,000 words/mo", "Basic templates", "1 User seat"],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹999",
    desc: "Perfect for professional creators",
    features: [
      "Unlimited words",
      "SEO Optimization",
      "Premium support",
      "5 User seats",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Scale your business with AI",
    features: [
      "Dedicated manager",
      "Custom AI models",
      "SSO & Security",
      "Unlimited seats",
    ],
    popular: false,
  },
];

export default function LandingPage() {
  const [activePlan, setActivePlan] = useState("Pro");
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      {/* 🔥 HERO SECTION */}
      <section
        className="relative pt-44 pb-32 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/1550242596/photo/businessman-hand-touching-global-network-and-data-exchanges-over-the-world-3d-rendering.jpg?s=612x612&w=0&k=20&c=O3T78jErNhOVdoIh6t60beewlhedNLUzqlzJkBZmkUk=")`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Write{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                10x Faster
              </span>
              <br />
              with AI Intelligence
            </h1>

            <p className="mt-8 text-lg text-gray-200 max-w-2xl mx-auto">
              Join 10,000+ creators using ContentForge to automate blogs, ads,
              and social media.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => router.push("/generator")}
                className="bg-white text-black px-10 py-4 rounded-2xl font-bold hover:bg-indigo-500 hover:text-white transition"
              >
                Start for free
              </button>

              <button
                onClick={() => router.push("/resources/tutorials")}
                className="border border-white px-10 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition"
              >
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. LOGO CLOUD */}
      <section className="py-10 border-y border-slate-50 bg-slate-50/30">
        <p className="text-center text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8">
          Trusted by industry leaders
        </p>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
          {["NOTION", "LINEAR", "VERCEL", "STRIPE", "FRAMER"].map((brand) => (
            <span
              key={brand}
              className="text-2xl font-black tracking-tighter text-slate-800"
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* 3. PREMIUM PRICING */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h2>
            <p className="text-slate-500 text-lg">
              No hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {pricingPlans.map((plan, i) => {
              const isActive = activePlan === plan.name;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -12, scale: 1.02 }}
                  onClick={() => setActivePlan(plan.name)}
                  className={`relative cursor-pointer rounded-[2.5rem] p-[2px] transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl"
                      : "bg-slate-200 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-purple-500"
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem]"></div>
                  )}
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-10 flex flex-col justify-between h-full">
                    {plan.popular && (
                      <span className="absolute top-6 right-6 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Most Popular
                      </span>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">
                        {plan.name}
                      </h3>
                      <p className="text-slate-500 text-sm mt-2">{plan.desc}</p>
                      <div className="mt-6">
                        <span className="text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                        {plan.price !== "Custom" && (
                          <span className="text-slate-400 font-medium">
                            /mo
                          </span>
                        )}
                      </div>
                      <ul className="mt-8 space-y-4">
                        {plan.features.map((feat, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-slate-600 text-sm font-medium"
                          >
                            <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center text-xs shadow">
                              ✓
                            </div>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={async () => {
                        // ✅ FREE PLAN
                        if (plan.name === "Starter") {
                          alert("✅ Free plan activated!");
                          return;
                        }

                        // ✅ ENTERPRISE
                        if (plan.name === "Enterprise") {
                          alert("Contact Sales");
                          return;
                        }

                        try {
                        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/create-order`, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },

                            // ❗ FIX: activePlan ❌ → plan.name ✅
                            body: JSON.stringify({ plan: plan.name }),
                          });

                          if (!res.ok) {
                            alert("❌ Server error");
                            return;
                          }

                          const order = await res.json();

                          // ✅ Razorpay loaded check
                          if (!window.Razorpay) {
                            alert("Razorpay not loaded. Refresh page.");
                            return;
                          }

                          const options = {
                            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, 
                            amount: order.amount,
                            currency: "INR",
                            order_id: order.id,

                            name: "ContentForge",

                            // ❗ FIX: activePlan ❌ → plan.name ✅
                            description: plan.name + " Plan",

                            handler: function (response) {
                              alert("✅ Payment Success 🎉");
                              console.log(response);
                            },

                            theme: {
                              color: "#6366f1",
                            },
                          };

                          const rzp = new window.Razorpay(options);
                          rzp.open();
                        } catch (err) {
                          console.error(err);
                          alert("❌ Payment failed");
                        }
                      }}
                      className={`mt-10 w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                          : "bg-slate-100 text-slate-800"
                      }`}
                    >
                      {plan.name === "Enterprise"
                        ? "Contact Sales"
                        : "Get Started"}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FEATURE SHOWCASE */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-20 max-w-4xl leading-[1.1]"
          >
            ContentForge empowers teams to scale high-quality output{" "}
            <span className="text-indigo-600">with AI precision.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              whileHover={{ y: -5 }}
              className="border border-slate-200 rounded-3xl p-10 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 flex flex-col justify-between bg-white"
            >
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="bg-indigo-50 p-3 rounded-xl text-indigo-600">
                    <Sparkles size={24} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    AI Content Strategy
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                  Optimizing search rankings across 500+ enterprise domains
                </h3>
                <p className="text-lg text-slate-500 italic mb-10 border-l-4 border-indigo-500 pl-6 py-1">
                  "ContentForge didn't just write articles; it understood our
                  brand voice. We moved from 5 pieces a week to 50 without
                  losing quality."
                </p>
              </div>

              <div className="flex gap-16 pt-8 border-t border-slate-100">
                <div>
                  <div className="text-4xl font-bold text-slate-900 tracking-tighter">
                    4.5<span className="text-indigo-600">x</span>
                  </div>
                  <div className="text-sm text-slate-400 font-semibold uppercase mt-1">
                    ROI Growth
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900 tracking-tighter">
                    70<span className="text-indigo-600">%</span>
                  </div>
                  <div className="text-sm text-slate-400 font-semibold uppercase mt-1">
                    Faster Delivery
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="border border-slate-200 rounded-3xl p-10 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 flex flex-col justify-between bg-white"
            >
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="bg-purple-50 p-3 rounded-xl text-purple-600">
                    <Rocket size={24} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Marketing Scale
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                  Generating hyper-personalized ad copy for global campaigns
                </h3>
                <p className="text-lg text-slate-500 italic mb-10 border-l-4 border-purple-500 pl-6 py-1">
                  "The ability to generate 1,000+ variants of high-converting
                  copy in minutes changed our entire performance marketing
                  game."
                </p>
              </div>

              <div className="flex gap-16 pt-8 border-t border-slate-100">
                <div>
                  <div className="text-4xl font-bold text-slate-900 tracking-tighter">
                    120<span className="text-purple-600">%</span>
                  </div>
                  <div className="text-sm text-slate-400 font-semibold uppercase mt-1">
                    CTR Increase
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900 tracking-tighter">
                    300<span className="text-purple-600">+</span>
                  </div>
                  <div className="text-sm text-slate-400 font-semibold uppercase mt-1">
                    Daily Assets
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
