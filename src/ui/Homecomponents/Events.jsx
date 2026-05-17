import React from "react";
import { motion } from "framer-motion";

import image2 from "../../assets/image2.webp";

import { FiMapPin, FiPhone } from "react-icons/fi";

export default function Events() {

  // 🔥 Reusable animation
  // const fadeUp = {
  //   initial: {
  //     opacity: 0,
  //     y: 80,
  //   },

  //   whileInView: {
  //     opacity: 1,
  //     y: 0,
  //   },

  //   viewport: {
  //     once: true,
  //     amount: 0.3,
  //   },
  // };

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
    <section className="bg-[#f7f5f2] py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <motion.div
          {...fadeUp}
          transition={{
            duration: 1,
          }}
          className="order-1 md:order-2"
        >
          <img
            src={image2}
            alt="Reading book"
            className="w-full object-cover rounded-sm shadow-sm"
            loading="lazy"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="order-2 md:order-1 space-y-6">

          <motion.p
            {...fadeUp}
            transition={{
              duration: 0.8,
            }}
            className="text-sm text-[#b08a5b]"
          >
            Don't miss it!
          </motion.p>

          <motion.h2
            {...fadeUp}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="text-3xl md:text-4xl font-serif font-medium text-gray-900"
          >
            Get a special copy signed by me
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="text-gray-600 max-w-md"
          >
            Own a signed copy, personally inscribed straight from me to you.
          </motion.p>

          {/* Divider */}
          <motion.div
            {...fadeUp}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="border-t border-[#d8cfc5] w-full"
          />

          {/* Contact Info */}
          <motion.div
            {...fadeUp}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            className="flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-4 text-gray-700"
          >

            <div className="flex items-center gap-2">
              <span>
                <FiPhone />
              </span>

              <span className="no-underline text-inherit">
                +234 701 0757 4608
              </span>
            </div>

            <div className="hidden sm:block h-5 w-px bg-[#d8cfc5]" />

            <div className="flex items-center gap-2">
              <span>
                <FiMapPin />
              </span>

              <span>Lagos, Nigeria.</span>
            </div>

          </motion.div>

          {/* Divider */}
          <motion.div
            {...fadeUp}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="border-t border-[#d8cfc5] w-full"
          />

          {/* CTA */}
          <motion.div
            {...fadeUp}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
          >
            <button className="group inline-flex items-center gap-2 text-gray-900 border-b font-medium hover:gap-3 transition-all duration-300">
              Get Tickets To The Event

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
























// import React from "react";
// import image2 from '../../assets/image2.webp' 
// import { FiMapPin, FiPhone } from "react-icons/fi";

// export default function Events() {
//   return (
//     <section className="bg-[#f7f5f2] py-16 px-6 md:px-12">
//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         {/* Image */}
//         <div className="order-1 md:order-2">
//           <img
//             src={image2} // replace with your image path
//             alt="Reading book"
//             className="w-full object-cover rounded-sm shadow-sm"
//           />
//         </div>

//         {/* Content */}
//         <div className="order-2 md:order-1 space-y-6">
//           <p className="text-sm text-[#b08a5b]">Don't miss it!</p>

//           <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900">
//             Get a special copy signed by me
//           </h2>

//           <p className="text-gray-600 max-w-md">
//             Own a signed copy, personally inscribed straight from me to you.
//           </p>

//           {/* Divider */}
//           <div className="border-t border-[#d8cfc5] w-full" />

//           {/* Contact Info */}
//           <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-4 text-gray-700">
//             <div className="flex items-center gap-2">
//               <span><FiPhone /></span>
//               <span className="no-underline text-inherit">+234 701 0757 4608</span>
//             </div>

//             <div className="hidden sm:block h-5 w-px bg-[#d8cfc5]" />

//             <div className="flex items-center gap-2">
//               <span><FiMapPin  /></span>
//               <span>Lagos, Nigeria.</span>
//             </div>
//           </div>

//           {/* Divider */}
//           <div className="border-t border-[#d8cfc5] w-full" />

//           {/* CTA */}
//           <button className="group inline-flex items-center gap-2 text-gray-900 border-b font-medium">
//             Get Tickets To The Event
//             <span className="transition-transform group-hover:translate-x-1">→</span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }