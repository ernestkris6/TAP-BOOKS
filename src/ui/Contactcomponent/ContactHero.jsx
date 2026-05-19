import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {

  const fadeUp = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div className="bg-[#f8f6f1] overflow-hidden text-stone-800">
      {/* HERO + CONTACT SECTION */}
      <section className="relative px-6 lg:px-20 py-24 bg-gradient-to-br from-[#f5eee3] via-[#faf7f2] to-[#efe2d1] overflow-hidden">

        <div className="absolute top-0 left-0 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* HEADING */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <p className="uppercase tracking-[0.3em] text-sm text-stone-600 mb-4">
              Contact Us
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium leading-tight mb-6 text-stone-800">
              Let's HEAR from YOU!
            </h1>

            <p className="mt-8 max-w-2xl mx-auto text-lg text-stone-600 leading-relaxed">
              Reach out for collaborations, inquiries, partnerships, or simply
              to connect with the TAP Books community.
            </p>
          </motion.div>          
        </div>
      </section>
    </div>
  );
}



