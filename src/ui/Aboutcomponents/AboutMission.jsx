import React from "react";
import { motion } from "framer-motion";

export default function AboutMission() {

  const fadeUp = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section className="py-24 px-6 lg:px-20">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop"
            alt="Library"
            className="hidden lg:block rounded-2xl shadow-xl h-[500px] w-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* TEXT SECTION */}
        <div className="space-y-6">

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.3em] text-sm text-stone-500"
          >
            Our Mission
          </motion.p>

          <motion.h2
            {...fadeUp}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl lg:text-4xl font-semibold leading-tight text-stone-800"
          >
            Helping people discover books that truly matter.
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-stone-700 leading-relaxed text-lg"
          >
            At TAP Books, we believe books have the power to transform lives.
            Our mission is to make reading accessible, enjoyable, and deeply
            meaningful for everyone.
          </motion.p>

          {/* CARDS */}
          <div className="space-y-5">

            <motion.div
              {...fadeUp}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 transition-all duration-500"
            >
              <h3 className="font-semibold text-xl mb-2">
                Curated Selection
              </h3>
              <p className="text-gray-600">
                We carefully select books across genres to ensure quality,
                relevance, and inspiration.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 transition-all duration-500"
            >
              <h3 className="font-semibold text-xl mb-2">
                Reader Community
              </h3>
              <p className="text-gray-600">
                We build a strong community of readers who share ideas,
                insights, and recommendations.
              </p>
            </motion.div>

          </div>

        </div>
      </div>

      {/* FINAL CTA BLOCK */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 1, delay: 0.7 }}
        className="max-w-5xl mx-auto text-center mt-24"
      >
        <h2 className="text-2xl lg:text-4xl font-semibold mb-6 leading-tight text-stone-800">
          Start Your Reading Journey With TAP Books.
        </h2>

        <p className="text-lg text-stone-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover books that challenge your thinking, inspire creativity,
          and fuel your growth.
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-xs font-semibold cursor-pointer transition-all duration-500 hover:px-10">
          Browse Books
        </button>
      </motion.div>

    </section>
  );
}