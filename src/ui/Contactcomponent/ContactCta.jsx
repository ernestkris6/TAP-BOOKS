import React from 'react'
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function ContactCta() {

    const fadeUp = {
        initial: { opacity: 0, y: 80 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
  };

    return (
    <section className="px-6 lg:px-20 pb-24 bg-white">
        <motion.div
          {...fadeUp}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto relative overflow-hidden rounded-xs bg-gradient-to-br from-stone-900 via-[#2a2a2a] to-black p-10 lg:p-20"
        >

          <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-400/10 rounded-xs blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 rounded-xs blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <motion.p
                {...fadeUp}
                transition={{ duration: 1, delay: 0.1 }}
                className="uppercase tracking-[0.3em] text-sm text-yellow-400 mb-4"
              >
                Let’s Connect
              </motion.p>

              <motion.h2
                {...fadeUp}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-2xl md:text-3xl lg:4xl font-serif text-white leading-tight mb-6"
              >
                Your next great conversation starts here.
              </motion.h2>

              <motion.p
                {...fadeUp}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-stone-300 text-base leading-relaxed max-w-2xl"
              >
                Reach out to TAP Books and become part of a growing community built around stories, ideas and creativity.
              </motion.p>
            </div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xs p-8 lg:p-10"
            >

              <div className="space-y-6">

                <div>
                  <p className="text-stone-400 text-sm mb-2">
                    Email Us
                  </p>

                  <h3 className="text-base sm:text-lg text-white font-semibold">
                    tapbooks2025@gmail.com
                  </h3>
                </div>

                <div>
                  <p className="text-stone-400 text-sm mb-2">
                    Call Us
                  </p>

                  <h3 className="text-base sm:text-lg text-white font-semibold">
                    +234 701 0757 4608
                  </h3>
                </div>

                <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-xs font-semibold transition-all duration-500 hover:px-10 cursor-pointer inline-flex items-center gap-3">
                  WhatsApp

                  <FiArrowRight />
                </button>

              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>
  )
}

      