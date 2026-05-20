import React from 'react'
import { motion } from 'framer-motion';
import image1 from "../../assets/abtbg.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
// import image4 from "../../assets/image4.webp";
import image5 from "../../assets/image5.webp";
// import image6 from "../../assets/image5.webp";


export default function OurCulture() {

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
    <div>
              {/* CULTURE SECTION */}
      <section className="py-24 px-6 lg:px-16 bg-[#f3ece3]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <p className="uppercase tracking-[0.3em] text-sm text-stone-600">
              Our Culture
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-stone-800 leading-tight">
              Collaboration fuels
              everything we create.
            </h2>

            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              We believe the best work comes from teamwork, trust and shared creativity.
              From strategy to execution, every project is shaped by collaboration and passion.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">

              <div className="bg-white rounded-md p-6 shadow-sm">
                <h3 className="text-4xl font-serif text-stone-800 mb-2">
                  25+
                </h3>

                <p className="text-stone-600">
                  Creative Projects
                </p>
              </div>

              <div className="bg-white rounded-md p-6 shadow-sm">
                <h3 className="text-4xl font-serif text-stone-800 mb-2">
                  10+
                </h3>

                <p className="text-stone-600">
                  Industry Experts
                </p>
              </div>

            </div>
          </motion.div>


          {/* RIGHT */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >

            <div className="space-y-5">
              <img
                src={image1}
                alt="Team"
                className="rounded-md h-[250px] w-full object-cover"
                loading="lazy"
              />

              <img
                src={image3}
                alt="Team"
                className="rounded-md h-[180px] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-5 pt-12">
              <img
                src={image5}
                alt="Team"
                className="rounded-md h-[180px] w-full object-cover"
                loading="lazy"
              />

              <img
                src={image2}
                alt="Team"
                className="rounded-md h-[250px] w-full object-cover"
                loading="lazy"
              />
            </div>

          </motion.div>

        </div>
      </section>
    </div>
  )
}
