"use client";

import {
  FaPlay,
  FaBolt,
  FaLayerGroup,
  FaMicrophone,
  FaComments,
  FaUsers,
  FaMoneyBill,
  FaCog,
  FaPen,
} from "react-icons/fa";

export default function HelpCenterPage() {

  const categories = [
    {
      title: "Getting Started",
      desc: "Learn how to use ContentForge from scratch. Understand the basics, explore features, and start generating content within minutes.",
      icon: <FaPlay />,
    },
    {
      title: "Workflows",
      desc: "Automate your content creation process with smart workflows. Save time and increase productivity using AI-powered automation.",
      icon: <FaBolt />,
    },
    {
      title: "Infobase",
      desc: "Store your brand information and use it to generate consistent, personalized, and high-quality content across all platforms.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Brand Voice",
      desc: "Define your brand tone and maintain consistency in every piece of content.",
      icon: <FaMicrophone />,
    },
    {
      title: "Chat",
      desc: "Communicate with AI in real-time and generate ideas instantly.",
      icon: <FaComments />,
    },
    {
      title: "Teams & Admin",
      desc: "Manage your team and collaborate efficiently.",
      icon: <FaUsers />,
    },
    {
      title: "Billing & Pricing",
      desc: "Explore pricing plans and manage subscriptions.",
      icon: <FaMoneyBill />,
    },
    {
      title: "Account Settings",
      desc: "Customize your profile and preferences.",
      icon: <FaCog />,
    },
    {
      title: "Prompt Engineering",
      desc: "Learn how to write effective prompts for better results.",
      icon: <FaPen />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-black px-6 py-10">

      <div className="max-w-7xl mx-auto">

        {/* ✅ NEW CONTENT SECTION (replaces search bar) */}
        <div className="mb-12 bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl border border-purple-200">
          <h1 className="text-3xl font-bold mb-3">
            Welcome to ContentForge Help Center 🚀
          </h1>
          <p className="text-gray-700 text-lg">
            Explore guides, tutorials, and resources to help you create powerful AI-generated content. 
            Whether you're just getting started or looking to master advanced features, we've got you covered.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {categories.map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-200 rounded-2xl p-8 cursor-pointer 
              transition-all duration-300 hover:-translate-y-2 
              hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 
              hover:border-purple-300 hover:shadow-[0_10px_30px_rgba(168,85,247,0.3)]"
            >
              <div className="text-purple-600 text-3xl mb-6">
                {item.icon}
              </div>

              <h2 className="text-xl font-semibold mb-3">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Section */}
        <div className="mt-20 bg-white border border-gray-200 rounded-2xl p-8 flex justify-between items-center">
          
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Still need help?
            </h3>
            <p className="text-gray-500">
              Our support team is here to help you anytime
            </p>
          </div>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            Contact Support
          </button>

        </div>

      </div>
    </div>
  );
}