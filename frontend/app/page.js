// "use client";
// import { useState } from "react";
// import Link from "next/link";

// // ✅ Swiper imports
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { useRouter } from "next/navigation";

// import {
//   PenLine,
//   Rocket,
//   Mail,
//   Share2,
//   ShoppingCart,
//   Video,
// } from "lucide-react";

// import {
//   Pagination,
//   Navigation,
//   Autoplay,
//   HashNavigation,
// } from "swiper/modules";

// export default function HomePage() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const router = useRouter();
//   const cards = [
//     {
//       title: "Blog Articles",
//       desc: "Write detailed, SEO-friendly blog posts with proper structure, keywords, and readability.",
//       icon: PenLine,
//       gradient: "from-blue-500 to-indigo-600",
//     },
//     {
//       title: "Social Media Posts",
//       desc: "Generate viral captions, threads, and posts tailored for every platform.",
//       icon: Share2,
//       gradient: "from-green-400 to-teal-500",
//     },
//     {
//       title: "Ad Campaigns",
//       desc: "Create high-performing ad copy that increases clicks and conversions.",
//       icon: Rocket,
//       gradient: "from-purple-500 to-pink-600",
//     },
//     {
//       title: "Email Campaigns",
//       desc: "Design engaging email sequences that boost open rates and sales.",
//       icon: Mail,
//       gradient: "from-orange-400 to-red-500",
//     },
//     {
//       title: "Product Content",
//       desc: "Craft compelling product descriptions that attract and convert buyers.",
//       icon: ShoppingCart,
//       gradient: "from-yellow-400 to-orange-500",
//     },
//     {
//       title: "Video Scripts",
//       desc: "Generate scripts for YouTube, reels, and ads with strong storytelling.",
//       icon: Video,
//       gradient: "from-indigo-400 to-purple-600",
//     },
//   ];

//   const companies = [
//     {
//       name: "YipitData",
//       logo: "https://cdn-images.himalayas.app/4ou6thwql1calbrwk9sh10g64a6o",
//     },
//     {
//       name: "RapidSOS",
//       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9I5Y8UHaHjy3AEomFuXMBJJpZNuA7gJa-A&s",
//     },
//     {
//       name: "Smartling",
//       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYpa6wFwNTKQJyoTlb9q2rrIoctrv-ehx4oA&s",
//     },
//     {
//       name: "TransPerfect",
//       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4THjtT-FxxZ04DadpE2WvjEPZGtfHrJPCQ&s",
//     },
//     {
//       name: "Crusoe",
//       logo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/crusoe-color.png",
//     },
//   ];
//   const testimonials = [
//     {
//       title: "Jean English",
//       company: "Former CMO @ Juniper Networks",
//       desc: "Thanks to ContentForge, we’re generating 5x more meetings with our AI-powered strategy.",
//       image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
//     },
//     {
//       title: "Rahul Sharma",
//       company: "Marketing Lead @ StartupX",
//       desc: "We scaled our content production 10x without hiring more writers.",
//       image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
//     },
//     {
//       title: "Priya Verma",
//       company: "Founder @ GrowthHub",
//       desc: "Our ad campaigns are converting better than ever.",
//       image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
//     },
//   ];
//   return (
//     <>
//     {/* HERO SECTION */}
// <section 
//   className="relative w-full py-32 md:py-48 bg-cover bg-center bg-no-repeat"
//   style={{ 
//     backgroundImage: `url('https://plus.unsplash.com/premium_photo-1677529497024-00d7310248bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwbWVldGluZ3N8ZW58MHx8MHx8fDA%3D')` 
//   }}
// >
//   {/* Dark Overlay - Text ko saaf dikhane ke liye */}
//   <div className="absolute inset-0 bg-black/60"></div>

//   <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
    
//     {/* Heading - Text color white kiya hai taaki background pe dikhe */}
//     <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mt-0 drop-shadow-lg">
//       Put AI to work <br /> <span className="text-white">for your content</span>
//     </h1>

//     {/* Description */}
//     <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
//       Create blogs, ads, emails and social media posts in seconds using
//       powerful AI tools built for creators and businesses.
//     </p>

//     {/* Buttons */}
//     <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
//       <button 
//         onClick={() => router.push('/generator')}
//         className="bg-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all shadow-xl hover:scale-105 active:scale-95"
//       >
//         Start Free Trial
//       </button>

//       <button 
//         onClick={() => router.push('/generator')}
//         className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all active:scale-95"
//       >
//         Get a Demo
//       </button>
//     </div>
//   </div>
// </section>
//       {/* AI TOOLS */}
//       <section className="w-full bg-white py-10 overflow-hidden">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
//           Powerful AI Tools
//         </h2>

//         <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {[
//             {
//               title: "AI Blog Generator",
//               desc: "Generate long-form, SEO-optimized blog posts with structured headings and engaging content in seconds.",
//               icon: "📝",
//             },
//             {
//               title: "Social Media Content",
//               desc: "Create scroll-stopping posts, captions, and hashtags for Instagram, LinkedIn, and Twitter.",
//               icon: "📱",
//             },
//             {
//               title: "Ad Copy Generator",
//               desc: "Write high-converting ad copy for Facebook, Google, and landing pages that drive clicks.",
//               icon: "📢",
//             },
//             {
//               title: "Email Campaign Writer",
//               desc: "Craft personalized email sequences, newsletters, and cold emails that boost conversions.",
//               icon: "✉️",
//             },
//             {
//               title: "Product Descriptions",
//               desc: "Generate persuasive ecommerce descriptions that highlight features and increase sales.",
//               icon: "🛍️",
//             },
//             {
//               title: "Content Rewriter",
//               desc: "Rewrite and improve your content instantly for clarity, tone, and better engagement.",
//               icon: "♻️",
//             },
//             {
//               title: "AI Script Writer",
//               desc: "Create scripts for YouTube videos, reels, and ads with powerful storytelling.",
//               icon: "🎬",
//             },
//             {
//               title: "SEO Optimization Tool",
//               desc: "Optimize your content with smart keyword suggestions and ranking insights.",
//               icon: "📈",
//             },
//           ].map((card, i) => (
//             <div
//               key={i}
//               className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
//             >
//               {/* ICON */}
//               <div className="text-3xl mb-4">{card.icon}</div>

//               {/* TITLE */}
//               <h3 className="text-lg font-semibold text-gray-900">
//                 {card.title}
//               </h3>

//               {/* DESC */}
//               <p className="text-gray-600 mt-3 text-sm leading-relaxed">
//                 {card.desc}
//               </p>

//               {/* CTA */}
//               <p className="text-indigo-600 font-medium mt-5 text-sm hover:underline">
//                 Start Writing →
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* ✅ ENHANCED "WHAT YOU CAN CREATE" SECTION */}
//       <section className="w-full bg-slate-50 py-24 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
//               What You Can <span className="text-indigo-600">Create</span>
//             </h2>
//             <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
//               Empower your workflow with AI-driven precision. From long-form
//               narratives to punchy ad copy.
//             </p>
//           </div>
//           <Swiper
//             modules={[Pagination, Navigation]}
//             spaceBetween={30}
//             slidesPerView={1.2}
//             loop={true}
//             centeredSlides={true}
//             pagination={{ clickable: true }}
//             navigation={true}
//             breakpoints={{
//               640: { slidesPerView: 1.5 },
//               768: { slidesPerView: 2.2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="pb-16"
//           >
//             {cards.map((card, i) => (
//               <SwiperSlide key={i}>
//                 <div className="group relative h-[340px] rounded-[2rem] p-[1px] bg-gradient-to-br from-slate-200 to-slate-300 hover:from-indigo-500 hover:to-purple-500 transition-all duration-500">
//                   {/* Glow Effect */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-gradient-to-r from-indigo-500 to-purple-600 transition duration-500"></div>

//                   <div className="relative bg-white rounded-[2rem] p-8 h-full flex flex-col justify-between overflow-hidden">
//                     {/* Floating Gradient Blob */}
//                     <div
//                       className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${card.gradient} opacity-10 rounded-full group-hover:scale-150 transition duration-700`}
//                     ></div>

//                     {/* TOP CONTENT */}
//                     <div>
//                       {/* Icon */}
//                       <div
//                         className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-3xl shadow-xl mb-6 group-hover:rotate-6 group-hover:scale-110 transition duration-300`}
//                       >
//                         <card.icon />
//                       </div>

//                       {/* Title */}
//                       <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition">
//                         {card.title}
//                       </h3>

//                       {/* Desc */}
//                       <p className="text-gray-600 mt-4 leading-relaxed text-[15px] line-clamp-3">
//                         {card.desc}
//                       </p>
//                     </div>

//                     {/* BOTTOM CTA */}
//                     <div className="flex items-center justify-between mt-6">
//                       <span className="text-sm font-semibold text-indigo-500 group-hover:translate-x-1 transition">
//                         Forge Now →
//                       </span>

//                       <button className="bg-gray-900 text-white p-2.5 rounded-full hover:bg-indigo-600 hover:scale-110 transition-all duration-300 shadow-md">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-5 w-5"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M14 5l7 7m0 0l-7 7m7-7H3"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>
//       {/* LOGO SECTION */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Heading */}
//           <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-12 tracking-tight">
//             Trusted by teams at{" "}
//             <span className="text-indigo-600 font-bold">
//               fast-growing companies
//             </span>
//           </h2>

//           {/* Logos */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
//             {companies.map((company) => (
//               <div
//                 key={company.name}
//                 className="flex items-center justify-center gap-3 hover:scale-105 transition cursor-pointer"
//               >
//                 {/* Logo */}
//                 <img
//                   src={company.logo}
//                   alt={company.name}
//                   className="h-15 w-auto object-contain grayscale hover:grayscale-0 transition"
//                 />

//                 {/* Name */}
//                 <p className="text-gray-700 text-base md:text-lg font-semibold hover:text-indigo-600 transition whitespace-nowrap">
//                   {company.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* TESTIMONIAL SWIPER */}
//       <section className="py-24 bg-gradient-to-b from-white to-gray-50">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
//             Customer Success Stories
//           </h2>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             See how creators and businesses are scaling faster using
//             ContentForge AI.
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto px-6">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             navigation
//             pagination={{ clickable: true }}
//             loop={true}
//             spaceBetween={30}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             className="pb-12"
//           >
//             {testimonials.map((card, i) => (
//               <SwiperSlide key={i}>
//                 <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl bg-white group">
//                   {/* IMAGE */}
//                   <div className="relative h-[300px] md:h-auto overflow-hidden">
//                     <img
//                       src={card.image}
//                       alt={card.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden"></div>
//                   </div>

//                   {/* CONTENT */}
//                   <div className="bg-gray-950 text-white p-10 flex flex-col justify-center relative">
//                     <div className="text-6xl text-indigo-500 opacity-20 absolute top-4 left-6">
//                       “
//                     </div>

//                     <p className="text-lg md:text-xl leading-relaxed mb-8 relative z-10">
//                       {card.desc}
//                     </p>

//                     <div className="mt-auto">
//                       <h3 className="text-lg font-semibold">{card.title}</h3>
//                       <p className="text-gray-400 text-sm mt-1">
//                         {card.company}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>
//       {/* DEMO CARD SECTION */}
//       <section className="w-full px-6 py-20 bg-black">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
//           {/* LEFT CONTENT */}
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
//               See the ContentForge <br /> platform in action
//             </h2>

//             <p className="text-gray-400 mt-6 max-w-md">
//               Get a demo and discover how marketing teams use ContentForge to
//               generate blogs, ads and social media content faster using AI
//               powered tools.
//             </p>

//             <button 
//             onClick={() => router.push("/generator")}
//             className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
//               Get a demo →
//             </button>
//           </div>

//           {/* RIGHT GRAPHIC */}
//           <div className="relative h-[300px] md:h-[400px]">
//             <div className="absolute w-full h-full border border-gray-700 rotate-12"></div>

//             <div className="absolute w-3/4 h-3/4 border border-gray-600 right-0 bottom-0"></div>

//             <div className="absolute w-1/2 h-1/2 border border-gray-500 left-10 top-10"></div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


"use client";
import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  PenLine, Rocket, Mail, Share2, ShoppingCart, Video,
} from "lucide-react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function HomePage() {
  const router = useRouter();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      router.push("/generator");
    } else {
      router.push("/signup");
    }
  };

  const cards = [
    {
      title: "Blog Articles",
      desc: "Write detailed, SEO-friendly blog posts with proper structure, keywords, and readability.",
      icon: PenLine,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Social Media Posts",
      desc: "Generate viral captions, threads, and posts tailored for every platform.",
      icon: Share2,
      gradient: "from-green-400 to-teal-500",
    },
    {
      title: "Ad Campaigns",
      desc: "Create high-performing ad copy that increases clicks and conversions.",
      icon: Rocket,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Email Campaigns",
      desc: "Design engaging email sequences that boost open rates and sales.",
      icon: Mail,
      gradient: "from-orange-400 to-red-500",
    },
    {
      title: "Product Content",
      desc: "Craft compelling product descriptions that attract and convert buyers.",
      icon: ShoppingCart,
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Video Scripts",
      desc: "Generate scripts for YouTube, reels, and ads with strong storytelling.",
      icon: Video,
      gradient: "from-indigo-400 to-purple-600",
    },
  ];

  const companies = [
    { name: "YipitData", logo: "https://cdn-images.himalayas.app/4ou6thwql1calbrwk9sh10g64a6o" },
    { name: "RapidSOS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9I5Y8UHaHjy3AEomFuXMBJJpZNuA7gJa-A&s" },
    { name: "Smartling", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYpa6wFwNTKQJyoTlb9q2rrIoctrv-ehx4oA&s" },
    { name: "TransPerfect", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4THjtT-FxxZ04DadpE2WvjEPZGtfHrJPCQ&s" },
    { name: "Crusoe", logo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/crusoe-color.png" },
  ];

  const testimonials = [
    {
      title: "Jean English",
      company: "Former CMO @ Juniper Networks",
      desc: "Thanks to ContentForge, we're generating 5x more meetings with our AI-powered strategy.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    },
    {
      title: "Rahul Sharma",
      company: "Marketing Lead @ StartupX",
      desc: "We scaled our content production 10x without hiring more writers.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    },
    {
      title: "Priya Verma",
      company: "Founder @ GrowthHub",
      desc: "Our ad campaigns are converting better than ever.",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative w-full py-32 md:py-48 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1677529497024-00d7310248bc?w=600&auto=format&fit=crop&q=60')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Put AI to work <br />
            <span className="text-white">for your content</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Create blogs, ads, emails and social media posts in seconds using
            powerful AI tools built for creators and businesses.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleGetStarted}
              className="bg-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Start Free Trial
            </button>
            <button
              onClick={handleGetStarted}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all active:scale-95"
            >
              Get a Demo
            </button>
          </div>
        </div>
      </section>

      {/* AI TOOLS */}
      <section className="w-full bg-white py-20 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Powerful AI Tools
        </h2>
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { title: "AI Blog Generator", desc: "Generate long-form, SEO-optimized blog posts with structured headings and engaging content in seconds.", icon: "📝" },
            { title: "Social Media Content", desc: "Create scroll-stopping posts, captions, and hashtags for Instagram, LinkedIn, and Twitter.", icon: "📱" },
            { title: "Ad Copy Generator", desc: "Write high-converting ad copy for Facebook, Google, and landing pages that drive clicks.", icon: "📢" },
            { title: "Email Campaign Writer", desc: "Craft personalized email sequences, newsletters, and cold emails that boost conversions.", icon: "✉️" },
            { title: "Product Descriptions", desc: "Generate persuasive ecommerce descriptions that highlight features and increase sales.", icon: "🛍️" },
            { title: "Content Rewriter", desc: "Rewrite and improve your content instantly for clarity, tone, and better engagement.", icon: "♻️" },
            { title: "AI Script Writer", desc: "Create scripts for YouTube videos, reels, and ads with powerful storytelling.", icon: "🎬" },
            { title: "SEO Optimization Tool", desc: "Optimize your content with smart keyword suggestions and ranking insights.", icon: "📈" },
          ].map((card, i) => (
            <div
              key={i}
              onClick={handleGetStarted}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">{card.desc}</p>
              <p className="text-indigo-600 font-medium mt-5 text-sm hover:underline">
                Start Writing →
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU CAN CREATE */}
      <section className="w-full bg-slate-50 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              What You Can <span className="text-indigo-600">Create</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              Empower your workflow with AI-driven precision.
            </p>
          </div>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1.2}
            loop={true}
            centeredSlides={true}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="group relative h-[340px] rounded-[2rem] p-[1px] bg-gradient-to-br from-slate-200 to-slate-300 hover:from-indigo-500 hover:to-purple-500 transition-all duration-500">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-gradient-to-r from-indigo-500 to-purple-600 transition duration-500" />
                  <div className="relative bg-white rounded-[2rem] p-8 h-full flex flex-col justify-between overflow-hidden">
                    <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${card.gradient} opacity-10 rounded-full group-hover:scale-150 transition duration-700`} />
                    <div>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-xl mb-6 group-hover:rotate-6 group-hover:scale-110 transition duration-300`}>
                        <card.icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 mt-4 leading-relaxed text-[15px] line-clamp-3">
                        {card.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <span
                        onClick={handleGetStarted}
                        className="text-sm font-semibold text-indigo-500 group-hover:translate-x-1 transition cursor-pointer"
                      >
                        Forge Now →
                      </span>
                      <button
                        onClick={handleGetStarted}
                        className="bg-gray-900 text-white p-2.5 rounded-full hover:bg-indigo-600 hover:scale-110 transition-all duration-300 shadow-md"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* TRUSTED COMPANIES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-12 tracking-tight">
            Trusted by teams at{" "}
            <span className="text-indigo-600 font-bold">fast-growing companies</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {companies.map((company) => (
              <div key={company.name} className="flex items-center justify-center gap-3 hover:scale-105 transition cursor-pointer">
                <img src={company.logo} alt={company.name} className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition" />
                <p className="text-gray-700 text-base font-semibold hover:text-indigo-600 transition whitespace-nowrap">
                  {company.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Customer Success Stories
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            See how creators and businesses are scaling faster using ContentForge AI.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="pb-12"
          >
            {testimonials.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl bg-white group">
                  <div className="relative h-[300px] md:h-auto overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
                  </div>
                  <div className="bg-gray-950 text-white p-10 flex flex-col justify-center relative">
                    <div className="text-6xl text-indigo-500 opacity-20 absolute top-4 left-6">"</div>
                    <p className="text-lg md:text-xl leading-relaxed mb-8 relative z-10">{card.desc}</p>
                    <div className="mt-auto">
                      <h3 className="text-lg font-semibold">{card.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{card.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* DEMO SECTION */}
      <section className="w-full px-6 py-20 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              See the ContentForge <br /> platform in action
            </h2>
            <p className="text-gray-400 mt-6 max-w-md">
              Get a demo and discover how marketing teams use ContentForge to generate blogs, ads and social media content faster using AI powered tools.
            </p>
            <button
              onClick={handleGetStarted}
              className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              Get a demo →
            </button>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <div className="absolute w-full h-full border border-gray-700 rotate-12" />
            <div className="absolute w-3/4 h-3/4 border border-gray-600 right-0 bottom-0" />
            <div className="absolute w-1/2 h-1/2 border border-gray-500 left-10 top-10" />
          </div>
        </div>
      </section>
    </>
  );
}