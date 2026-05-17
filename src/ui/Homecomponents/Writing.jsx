import React from "react";
import { motion } from "framer-motion";

import writer from "../../assets/writer.webp";

import Counter from "../../helper/Counter";

export default function Writing() {
  // 🔥 reusable animation

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
    <section className="bg-white/80 px-8 pt-12 pb-12 overflow-hidden">
      
      {/* TOP INTRO */}
      <div className="space-y-3.5 py-24">

        <motion.h1
          {...fadeUp}
          transition={{
            duration: 0.8,
          }}
          className="font-serif font-medium text-stone-700 text-xl md:text-2xl lg:text-3xl text-center leading-tight"
        >
          Writing that SPEAKS, Stories that LAST
        </motion.h1>

        <motion.div
          {...fadeUp}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          <p className="text-center text-stone-500">
            Words have the power to linger long after the final page is turned.
          </p>

          <p className="text-center text-stone-500">
            Here, you find stories shaped with care, crafted to stir emotions
            beautiful enough to stay with you.
          </p>
        </motion.div>
      </div>

      {/* MAIN CONTENT */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            {...fadeUp}
            transition={{
              duration: 1,
            }}
          >
            <img
              className="w-full object-cover rounded-sm"
              src={writer}
              alt="Writer"
              loading="lazy"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="space-y-8">

            {/* Header */}
            <div>

              <motion.p
                {...fadeUp}
                transition={{
                  duration: 1,
                  delay: 0.2,
                }}
                className="text-sm uppercase tracking-widest text-stone-600 pt-1 md:pt-0"
              >
                The story of
              </motion.p>

              <motion.h2
                {...fadeUp}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
                className="text-4xl md:text-5xl font-serif font-medium text-stone-700 mt-2"
              >
                TAP BOOKS
              </motion.h2>

            </div>

            {/* Description */}
            <div className="space-y-4 text-stone-600 leading-relaxed text-base">

              <motion.p
                {...fadeUp}
                transition={{
                  duration: 1,
                  delay: 0.6,
                }}
              >
                TAP Books was founded on a deep love for storytelling and the
                belief that words have the power to shape minds and inspire
                change. Each book we publish is carefully crafted to connect
                with readers, spark imagination, and leave a meaningful impact
                long after the final page is turned.
              </motion.p>

              <motion.p
                {...fadeUp}
                transition={{
                  duration: 1,
                  delay: 0.8,
                }}
              >
                Stories have the power to transform the way we see the world —
                and at TAP Books, that belief drives everything we do.
              </motion.p>

            </div>

            {/* BUTTON */}
            <motion.div
              {...fadeUp}
              transition={{
                duration: 1,
                delay: 1,
              }}
            >
              <button className="group inline-flex items-center gap-2 text-black/80 font-medium border-b-2 border-stone-500 pb-1 hover:gap-3 transition-all duration-300">
                Read More

                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </motion.div>

            {/* COUNTERS */}
            {/* ✅ NO MOTION WRAPPER HERE */}
            <div className="mt-10 border-t border-b border-stone-200 py-8 flex flex-col sm:flex-row gap-8 sm:gap-0 sm:divide-x sm:divide-stone-200">

              <Counter
                end={10}
                label="Books Published"
              />

              {/* MOBILE DIVIDER */}
              <div className="border-b h-6 text-stone-200 sm:hidden" />

              <Counter
                end={4}
                label="Best Selling Books"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}















