import React from 'react'
import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

export default function ContactForm() {

const fadeUp = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
      <div className=" px-6 lg:px-20 py-18 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">

            {/* LEFT */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-[#1f1f1f]/80 text-white rounded-xs p-8 lg:p-10 relative overflow-hidden"
            >

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_40%)]" />

              <div className="relative z-10">

                <h2 className="text-2xl font-serif mb-4 leading-tight">
                  Let’s build something meaningful together.
                </h2>

                <p className="text-stone-300 leading-relaxed mb-10">
                  Our team is always open to conversations that inspire ideas,
                  creativity, and growth.
                </p>

                <div className="space-y-6">

                  <div className="flex items-start gap-5 border border-white/10 rounded-xs p-5 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500">
                    <div className="w-14 h-14 rounded-xs bg-yellow-400 text-black flex items-center justify-center text-2xl shrink-0">
                      <FiMail />
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-1">Email Address</h3>
                      <p className="text-stone-300">
                        tapbooks2025@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 border border-white/10 rounded-xs p-5 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500">
                    <div className="w-14 h-14 rounded-xs bg-yellow-400 text-black flex items-center justify-center text-2xl shrink-0">
                      <FiPhone />
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone Number</h3>
                      <p className="text-stone-300">
                        +234 701 0757 4608
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 border border-white/10 rounded-xs p-5 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500">
                    <div className="w-14 h-14 rounded-xs bg-yellow-400 text-black flex items-center justify-center text-2xl shrink-0">
                      <FiMapPin />
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-1">Office Location</h3>
                      <p className="text-stone-300">
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-xs shadow-2xl p-8 lg:p-10"
            >

              <h2 className="text-2xl font-serif mb-3 text-stone-800">
                Leave us a message...
              </h2>

              {/* <p className="text-stone-600 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you shortly.
              </p> */}

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
                />
              </div>

              <div className="space-y-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
                />

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition resize-none"
                />

                <button className="group w-full bg-stone-700 hover:px-10 transition-all duration-500 text-white px-8 py-3.5 rounded-xs flex justify-center items-center gap-3 cursor-pointer">
                  Send Message

                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    <FiArrowRight />
                  </span>
                </button>
              </div>

            </motion.div>
          </div>
  )
}
