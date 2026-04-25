import React from "react";
import { FaPhone } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail, FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import { SiTiktok, SiWhatsapp } from "react-icons/si";
import shake from '../../assets/shake.jpg';

export default function ContactPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={shake}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
        {/* Left - Contact Info */}
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white/10 backdrop-blur-lg p-8 shadow-xl rounded-b-xs mb-18 md:mb-12">
        <div className="text-white space-y-6">
          <h2 className="text-3xl font-bold pt-6">Let's Talk...</h2>
          <p className="text-white/90 w-2/3">
            Have a question, idea or a friendly hello? Feel free to reach out.  We'd love to hear from you.
          </p>

          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FiMapPin />
              <p>Lagos, Nigeria.</p>
            </div>
            <hr className="text-white" />

            <div className="flex items-center gap-3">
              <FiMail/>
              <p>tapbooks2025@gmail.com</p>
            </div>
            <hr className="text-white" />

            <div className="flex items-center gap-3">
              <FaPhone />
              <span>+234 701 0757 4608</span>
            </div>
            <hr className="text-white" />
          </div>
        </div>

        {/* Right - Form */}
        <form className="bg-white/95 rounded-xs p-4 shadow-md space-y-4">
          <h3 className="text-xl font-semibold">Send US a Message</h3>

          <input
            type="text"
            placeholder="Full name"
            className="w-full p-2 border rounded-xs focus:outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-2 border rounded-xs focus:outline-none focus:ring-1 focus:ring-black"
          />

          <textarea
            placeholder="Type your message..."
            rows="5"
            className="w-full p-2 border rounded-xs focus:outline-none focus:ring-1 focus:ring-black"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white cursor-pointer py-2 rounded-xs hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-6 gap-6 text-white">
        <div className="flex gap-5">
        <p className="">Follow US</p>
                  <FiTwitter className="w-5 h-5 hover:text-stone-300 cursor-pointer" />
                  <FiFacebook className="w-5 h-5 hover:text-stone-300 cursor-pointer" />
                  <FiInstagram className="w-5 h-5 hover:text-stone-300 cursor-pointer" />
                  <SiWhatsapp className="w-5 h-5 hover:text-stone-300 cursor-pointer" />
                  <SiTiktok className="w-5 h-5 hover:text-stone-300 cursor-pointer" />
                </div>

      </div>
    </section>
  );
}