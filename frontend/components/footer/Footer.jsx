import React from "react";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-300 pt-24 pb-10 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-14">
        {/* Brand */}
        {/* <div>
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Content<span className='text-red-600 text-2xl'>Forge</span> AI
          </h2>
          <p className="mt-5 text-base text-gray-400 leading-relaxed">
            AI powered content generator for bloggers, marketers and creators.
            Generate blogs, ads and social posts in seconds.
          </p>
        </div> */}

        {/* Platform */}
        <div>
          <h3 className="text-white font-semibold text-2xl mb-5">Features</h3>
          <ul className="space-y-4 text-base">
            {[
              "AI Blog Generator",
              "Social Media Generator",
              "Product Description",
              "Content Rewriter",
              "AI Image Generator",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href="/"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold text-2xl mb-5">Platform</h3>
          <ul className="space-y-4 text-base">
            {[
              "Blog Generator",
              "Social Posts",
              "Ad Copy",
              "SEO Content",
              "Template",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href="/"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="text-white font-semibold text-2xl mb-5">Use Cases</h3>
          <ul className="space-y-4 text-base">
            {["Marketing", "Blogging", "Ecommerce", "SEO ", "Social Media"].map(
              (item, i) => (
                <li key={i}>
                  <Link
                    href="/"
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold text-2xl mb-5">Resources</h3>
          <ul className="space-y-4 text-base">
            {[
              "Blog",
              "Documentation",
              "Tutorials",
              "Webinars",
              "Help Center",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href="/"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-white font-semibold text-2xl mb-5">Subscribe</h3>
          <p className="text-lg mb-4 text-gray-400">
            Get updates about new AI tools
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="px-4 py-3 w-full rounded-l-md bg-zinc-800 text-lg outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-600 hover:bg-red-800 px-5 py-3 rounded-r-md text-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 text-white">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      {/* Bottom */}
      <div className="border-t border-zinc-800 mt-16 pt-6 px-6 md:px-22 flex flex-col md:flex-row justify-between items-center md:items-start text-gray-400">
        {/* ✅ LEFT: Logo */}
        <Link
          href="/"
          className="text-5xl font-bold tracking-wide mb-6 md:mb-0"
        >
          <span className="text-white text-5xl">Content</span>
          <span className="text-red-600 text-4xl">Forge</span>
        </Link>

        {/* ✅ RIGHT: Icons + Text */}
        <div className="flex flex-col items-center md:items-end space-y-3 text-center md:text-right">
          {/* Icons (UPPER) */}
          <div className="flex gap-8 mb-4 text-lg">
            <a
              href="https://x.com/shivamjais_noxx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-white cursor-pointer transition" />
            </a>

            <a
              href="https://www.facebook.com/share/1JENHwz2Ea/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-white cursor-pointer transition" />
            </a>

            <a
              href="https://www.instagram.com/shivam.noxx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-white cursor-pointer transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/shivam-jaiswal-37a951369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-white cursor-pointer transition" />
            </a>

            <a
              href="https://github.com/shivamjasi2106"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-white cursor-pointer transition" />
            </a>

            {/* <FaTwitter className="hover:text-white cursor-pointer transition" />
            <FaFacebookF className="hover:text-white cursor-pointer transition" />
            <FaInstagram className="hover:text-white cursor-pointer transition" />
            <FaLinkedinIn className="hover:text-white cursor-pointer transition" />
            <FaYoutube className="hover:text-white cursor-pointer transition" /> */}
          </div>

          {/* Text (NEECHE) */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
            <p>© 2026 ContentForge AI, Inc.</p>

            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
            {/* <Link href="#" className="hover:text-white transition">
              Legal Center
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;