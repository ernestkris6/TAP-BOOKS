import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import coll9 from '../../assets/coll9.jpg';

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
          className="order-2 sm:order-1"
        >
          <img
            src={coll9}
            alt="Library"
            className="rounded-2xl shadow-xl h-[500px] w-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* TEXT SECTION */}
        <div className="space-y-1 order-1 sm:order-2">

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="uppercase pb-2 tracking-[0.3em] text-sm text-stone-500"
          >
            Our Mission
          </motion.p>

          <motion.h2
            {...fadeUp}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl lg:text-3xl font-semibold leading-tight text-stone-800"
          >
            Helping people discover books that truly matter.
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-stone-700 leading-relaxed"
          >
            To create faith-filled, imaginative children’s and YA books that teach, inspire, and delight. We craft stories that are fun to explore, giving young readers a vibrant space to relive cherished memories, discover and step boldly into their future.
            {/* At TAP Books, we believe books have the power to transform lives.
            Our mission is to make reading accessible, enjoyable, and deeply
            meaningful for everyone. */}
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
                {/* Curated Selection */}
                The Process:
              </h3>
              <p className="text-gray-600">
                {/* We carefully select books across genres to ensure quality,
                relevance, and inspiration. */}
                From the story to the edit to the illustrations…. The workflow process of our teams members input is each appreciated and identified. 
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 transition-all duration-500"
            >
              <h3 className="font-semibold text-xl mb-2">
                The Future:
              </h3>
              <p className="text-gray-600">
                {/* We build a strong community of readers who share ideas,
                insights, and recommendations. */}
                Interactive games, Godly action comic series and premium animation.
                Future Comic and Animation Title: The Adventures of Kuru series: The Three Captains and Jashobeam series.
              </p>
            </motion.div>

          </div>

        </div>
      </div>

      {/* FINAL CTA BLOCK */}
      <div className="max-w-5xl mx-auto text-center mt-24"
      >
        <motion.h2 
        {...fadeUp}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl lg:text-4xl font-semibold mb-6 leading-tight text-stone-800">
          OUR VISION - What We SEE
          {/* Start Your Reading Journey With TAP Books. */}
        </motion.h2>

        <motion.p 
        {...fadeUp}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-stone-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          To build a globally recognized, high-impact brand that weaves faith, imagination, and culture into diverse media. We envision weaving Godly values and thrilling stories that come alive through bestselling children’s books, dynamic youth sports novels, action-packed comic series, animation, and gaming—creating lucid, unforgettable experiences for the next generation.
        </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
           <Link to='books'>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-xs font-semibold cursor-pointer transition-all duration-500 hover:px-10 hover:shadow-lg">
                <Link to='/books'>Browse Books</Link>
              </button>
           </Link>
          </motion.div>
      </div>

    </section>
  );
}