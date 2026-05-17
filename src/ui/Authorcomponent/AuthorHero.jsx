import { motion } from "framer-motion";

import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiArrowRight,
} from "react-icons/fi";


export default function AuthorHero() {

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
    <div className="bg-[#faf7f2] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[#f7f1e8] via-[#fdfbf7] to-[#efe3d3]">

        <div className="absolute top-10 left-10 w-40 h-40 bg-amber-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-orange-200/40 rounded-full blur-3xl" />

        <div className="mx-auto text-center relative z-10">

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.3em] text-sm text-stone-600 mb-5"
          >
            Meet The Team
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-stone-800 leading-tight"
          >
            The creative minds 
            behind 
            <br />
            Our Brand.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We are a passionate team of creators, strategists, designers and developers
            committed to building experiences that inspire people and elevate brands.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10"
          >
            <button className="group bg-stone-900 text-white px-8 py-4 rounded-xs inline-flex items-center gap-3 hover:px-10 transition-all duration-500 cursor-pointer">
              Explore Our Team

              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <FiArrowRight />
              </span>
            </button>
          </motion.div>

        </div>
      </section>   
    </div>
  );
}