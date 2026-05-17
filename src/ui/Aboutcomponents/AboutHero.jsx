import { motion } from "framer-motion";
import abtbg from "../../assets/abtbg.webp";

export default function TapBooksAboutPage() {

  const fadeUp = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div className="bg-[#f8f6f1] text-[#1d1d1d]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#1f1f1f] text-white py-24 px-6 lg:px-20">

        {/* BACKGROUND IMAGE */}
        <img
          src={abtbg}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.8 }}
              className="uppercase tracking-[0.3em] text-sm text-yellow-400"
            >
              About TAP Books
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl lg:text-5xl font-bold leading-tight"
            >
              Stories, Knowledge & Inspiration For Every Reader.
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              TAP Books is more than just reading — we are a community built
              around curiosity, imagination, and lifelong learning. We connect
              readers with books that inspire growth, creativity, and powerful
              conversations.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-7 py-4 rounded-xs font-semibold transition-all duration-500 hover:px-9">
                Explore Collection
              </button>

              <button className="border border-white/40 hover:bg-white hover:text-black px-7 py-4 rounded-xs font-semibold transition-all duration-500">
                Contact Us
              </button>
            </motion.div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <motion.img
              {...fadeUp}
              transition={{ duration: 1, delay: 0.4 }}
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1974&auto=format&fit=crop"
              alt="Books"
              className="hidden lg:block rounded-2xl shadow-2xl object-cover h-[500px] w-full hover:scale-105 transition-transform duration-700"
            />

            {/* FLOATING CARD */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 1, delay: 0.8 }}
              className="hidden lg:block absolute -bottom-8 -left-8 bg-white text-black py-4 px-5 rounded-2xl shadow-xl max-w-xs"
            >
              <h3 className="text-lg text-stone-600 font-medium mb-2">
                Intrigued Readers
              </h3>

              <p className="text-stone-700 text-sm leading-relaxed">
                Book lovers and readers connect through TAP Books.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}
     