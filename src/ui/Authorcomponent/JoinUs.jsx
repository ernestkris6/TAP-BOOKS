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
            Whether you're a lover of good reads, a young adult or a fanatic, our team is ready to give you OUR VERY BEST!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

            <a href="https://wa.me/2347010757468?text=Hello%20TAP%20Books%2C%20I%20would%20like%20to%20make%20an%20inquiry%about%your%books" target="_blank" rel="noopener noreferrer">
            <button 
              className="bg-white text-stone-900 px-8 py-4 rounded-xs font-medium hover:px-10 transition-all duration-500 cursor-pointer">
                CHAT WITH US
            </button>
          </a>

            <button className="border border-white/30 px-8 py-4 rounded-xs hover:bg-white hover:text-stone-900 transition-all duration-500 cursor-pointer">
              Join US
            </button>

          </div>

        </motion.div>
      </section>

  )
}









