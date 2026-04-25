import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { NavLink } from "react-router-dom";
// import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiMail, FiTwitter, } from "react-icons/fi";
import { SiTiktok, SiWhatsapp } from "react-icons/si";


export default function Footer() {

  // const navLinkClass = ({isActive}) => {
  //   isActive ? "hover:text-black transition border-b-2" : "hover:text-black transition"
  // }

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-black font-medium border-b-2 border-black pb-1"
      : "text-gray-600 hover:text-black transition";


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
            className="w-full sm:w-80 px-4 py-3 rounded-xs border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-800"
          />
          <button className="px-6 py-3 rounded-xs bg-black cursor-pointer text-white hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
        {/* Nav */}
        <div className="flex gap-6 text-sm text-gray-600">
          <NavLink to='/' className={navLinkClass}>Home</NavLink>
          <NavLink to='about' className={navLinkClass}>About</NavLink>
          <NavLink to='books' className={navLinkClass}>Books</NavLink>
          <NavLink to='contact' className={navLinkClass}>Contact</NavLink>
          <NavLink to='author'className={navLinkClass}>Author</NavLink>
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
          <FiTwitter className="w-5 h-5 hover:text-black/80 cursor-pointer" />
          <FiFacebook className="w-5 h-5 hover:text-black/80 cursor-pointer" />
          <FiInstagram className="w-5 h-5 hover:text-black/80 cursor-pointer" />
          <SiWhatsapp className="w-5 h-5 hover:text-black/80 cursor-pointer" />
          <SiTiktok className="w-5 h-5 hover:text-black/80 cursor-pointer" />
          <FiMail className="w-5 h-5 hover:text-black/80 cursor-pointer" />
        </div>
      </div>
        <hr className="py-2 text-stone-200"/>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500">
        Copyright &copy; {new Date().getFullYear()} TAP Books
      </div>
    </footer>
  );
}