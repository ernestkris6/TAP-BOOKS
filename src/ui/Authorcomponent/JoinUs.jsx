import React from 'react'
import { motion } from 'framer-motion';

export default function JoinUs() {

    
  const fadeUp = {
    initial: {
      opacity: 0,
      y: 80,
    },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.2,
    },
  };


  return (
    <section className="relative py-28 px-6 lg:px-16 overflow-hidden bg-stone-900 text-white">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl" />

        <motion.div
          {...fadeUp}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >

          <p className="uppercase tracking-[0.3em] text-sm text-stone-300 mb-6">
            Work With Us
          </p>

          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            Let’s create something
            extraordinary together.
          </h2>

          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you're building a brand, launching a product or creating
            a digital experience, our team is ready to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

            <button className="bg-white text-stone-900 px-8 py-4 rounded-xs font-medium hover:px-10 transition-all duration-500 cursor-pointer">
              Start A Project
            </button>

            <button className="border border-white/30 px-8 py-4 rounded-xs hover:bg-white hover:text-stone-900 transition-all duration-500 cursor-pointer">
              Join Our Team
            </button>

          </div>

        </motion.div>
      </section>

  )
}
