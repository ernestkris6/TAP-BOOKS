import React from "react";
// import { Twitter, Youtube, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] text-gray-800 px-6 py-20">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="font-serif text-3xl md:text-4xl leading-relaxed mb-6">
          Get all the latest news and info
          <br />
          sent to your inbox.
        </h2>

        {/* Email Input */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
        {/* Nav */}
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-black transition">Home</a>
          <a href="#" className="hover:text-black transition">About</a>
          <a href="#" className="hover:text-black transition">Books</a>
          <a href="#" className="hover:text-black transition">Contact</a>
        </div>

        {/* Brand */}
        <div className="text-center font-serif">
          <span className="block text-xs tracking-[0.3em] font-sans text-gray-600 mb-1">
            GRACE
          </span>
          <span className="text-2xl md:text-3xl font-semibold">Bryant</span>
        </div>

        {/* Socials */}
        <div className="flex gap-5 text-gray-600">
          {/* <Twitter className="w-5 h-5 hover:text-black cursor-pointer" /> */}
          {/* <Youtube className="w-5 h-5 hover:text-black cursor-pointer" /> */}
          {/* <Facebook className="w-5 h-5 hover:text-black cursor-pointer" /> */}
          {/* <Instagram className="w-5 h-5 hover:text-black cursor-pointer" /> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500">
        Copyright ©️ 2026 TAP Books
      </div>
    </footer>
  );
}