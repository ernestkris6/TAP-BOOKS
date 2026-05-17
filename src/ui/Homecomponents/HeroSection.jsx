import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import image1 from "../../assets/image1.webp";
import image4 from "../../assets/image4.webp";
import image3 from "../../assets/image3.webp";

export default function HeroSection() {

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
    <section className="bg-gradient-to-br from-[#f8f5f0] via-[#fffdf9] to-[#efe3d3] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-4">

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.2em] text-sm text-stone-600"
          >
            Best Selling Book
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-stone-800 leading-tight"
          >
            Discover the magical journey
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-stone-600 text-lg leading-relaxed max-w-xl"
          >
            Step into stories filled with suspense, unforgettable characters
            and unexpected twists by
            <span className="block mt-2 font-medium tracking-wide text-stone-700">
              TEMILORUN AEBIYI PRISCILLA
            </span>
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-6"
          >

            <Link to="/books">
              <button className="bg-stone-900 text-white px-7 py-3.5 rounded-xs hover:px-9 transition-all duration-500 cursor-pointer">
                Explore Books
              </button>
            </Link>

            <Link to="/author">
              <button className="border border-stone-800 text-stone-800 px-7 py-3.5 rounded-xs hover:bg-stone-900 hover:text-white transition-all duration-500 cursor-pointer">
                Meet Our Team
              </button>
            </Link>

          </motion.div>

        </div>


        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center items-center min-h-[550px]">

          {/* Soft Glow */}
          <div className="absolute w-72 h-72 bg-amber-200/40 blur-3xl rounded-full" />


          {/* BACK IMAGE */}
          <motion.img
            {...fadeUp}
            transition={{ duration: 1, delay: 0.3 }}
            src={image1}
            alt="Library"
            className="absolute top-[-20px] left-[-10px] md:left-0 w-[200px] md:w-[260px] h-[260px] md:h-[320px] object-cover rounded-[28px] shadow-lg rotate-[-6deg] opacity-90 hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />


          {/* MAIN IMAGE */}
          <motion.img
            {...fadeUp}
            transition={{ duration: 1, delay: 0.5 }}
            src={image4}
            alt="Books"
            className="relative z-20 w-[280px] md:w-[360px] h-[380px] md:h-[480px] object-cover rounded-[32px] shadow-2xl hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />


          {/* FRONT IMAGE */}
          <motion.img
            {...fadeUp}
            transition={{ duration: 1, delay: 0.7 }}
            src={image3}
            alt="Reading"
            className="absolute bottom-[-10px] right-[-10px] md:right-0 w-[180px] md:w-[220px] h-[220px] md:h-[260px] object-cover rounded-[28px] shadow-lg rotate-[6deg] opacity-95 hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />


          {/* FLOATING LABEL */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute -bottom-6 left-6 md:left-14 bg-white/90 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl z-30 hidden md:block"
          >

            <p className="text-sm text-stone-500">
              Latest Release
            </p>

            <h3 className="font-serif text-lg text-stone-800">
              The Silent Pages
            </h3>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
