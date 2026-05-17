import React from "react";
import { motion } from "framer-motion";

export default function AboutCta() {

  const fadeUp = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section className="bg-white px-6 lg:px-20 pb-24">

      {/* MAIN CARD */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto bg-[#1f1f1f] rounded-2xl text-white p-10 lg:p-20 text-center relative overflow-hidden hover:scale-[1.01] transition-transform duration-700"
      >

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="relative z-10 space-y-6">

          {/* TITLE */}
          <motion.h2
            {...fadeUp}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl lg:text-4xl font-bold leading-tight"
          >
            Start Your Reading Journey With TAP Books.
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            {...fadeUp}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Discover books that challenge your thinking, inspire creativity,
            and fuel your growth.
          </motion.p>

          {/* BUTTON */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-xs font-semibold cursor-pointer transition-all duration-500 hover:px-10 hover:shadow-lg">
              Browse Books
            </button>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}














// import React from 'react'

// export default function AboutCta() {
//   return (
//     <section className="bg-white px-6 lg:px-20 pb-24">
//         <div className="max-w-7xl mx-auto bg-[#1f1f1f] rounded-sm text-white p-10 lg:p-20 text-center relative overflow-hidden">
//           <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

//           <div className="relative z-10">
//             <h2 className="text-lg lg:text-4xl font-bold mb-6 leading-tight">
//               Start Your Reading Journey With TAP Books.
//             </h2>

//             <p className="text-base text-center md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
//               Discover books that challenge your thinking, inspire creativity,
//               and fuel your growth.
//             </p>

//             <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-sm font-semibold cursor-pointer transition">
//               Browse Books
//             </button>
//           </div>
//         </div>
//       </section>
//   )
// }
