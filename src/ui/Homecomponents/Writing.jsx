import React from 'react'
import Counter from "../../helper/Counter";
import coll6 from '../../assets/coll6.jpg'
import coll7 from '../../assets/coll7.jpg'
import coll8 from '../../assets/coll8.jpg'
import coll5 from '../../assets/coll5.jpg'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Writing() {

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
    <div className='bg-white'>
      <div className='pt-18 px-6 lg:px-16'>
        <motion.h1 
        {...fadeUp}
           transition={{
             duration: 0.8,
           }}
        className="font-serif font-medium text-stone-800 text-xl md:text-2xl lg:text-3xl text-center leading-tight">Writing that SPEAKS, Stories that LAST</motion.h1>

        <motion.div 
          {...fadeUp}
           transition={{
             duration: 1,
             delay: 0.2,
           }}
          className='py-5'>
          <p className="text-center text-stone-800">
            Words have the power to linger long after the final page is turned.
          </p>
          <p className="text-center text-stone-800">
            Here, you find stories shaped with care, crafted to stir emotions
           beautiful enough to stay with you.
         </p>
        </motion.div>
      </div>
              {/* CULTURE SECTION */}
      <section className=" py-24 px-6 lg:px-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
            className="space-y-2 order-2"
          >
            <p className="uppercase tracking-[0.3em] text-sm text-stone-600">
              THE STORY OF
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-stone-800 leading-tight">
              TAP BOOKS
            </h2>

            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              TAP Books was founded on a deep love for storytelling and the belief that words have the power to shape minds and inspire change. Each book we publish is carefully crafted to connect with readers, spark imagination, and leave a meaningful impact long after the final page is turned.
            </p>
            
            <p className='text-stone-600 text-base md:text-lg leading-relaxed'>Stories have the power to transform the way we see the world — and at TAP Books, that belief drives everything we do.</p>

            <motion.div 
            {...fadeUp}
               transition={{
                 duration: 1,
                 delay: 0.2,
               }}
            >
             <Link to='about'>
               <button className="group inline-flex items-center gap-2 text-black/80 font-medium border-b-2 border-stone-500 pb-1 hover:gap-3 transition-all duration-300 cursor-pointer">
                 Read More

                 <span className="group-hover:translate-x-1 transition-transform">
                   →
                 </span>
               </button>
             </Link>
            </motion.div>



            <div className="grid grid-cols-2 gap-6 pt-4">

              <div className="bg-blue-200 rounded-md p-6 shadow-sm">
                <h3 className="font-serif text-stone-800 mb-2">
                  <Counter
                 end={10}
                 label="Books Published"
               />
                </h3>
              </div>

              <div className="bg-yellow-300 rounded-md p-6 shadow-sm">
                <h3 className="font-serif text-stone-800 mb-2">
                  <Counter
                 end={4}
                 label="Best Selling Books"
               />
                </h3>
              </div>

            </div>
          </motion.div>


          {/* RIGHT */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-2 gap-5 order-1"
          >

            <div className="space-y-5">
              <img
                src={coll5}
                alt="Team"
                className="rounded-md h-[250px] w-full object-cover"
                loading="lazy"
              />

              <img
                src={coll6}
                alt="Team"
                className="rounded-md h-[250px] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-5">
              <img
                src={coll7}
                alt="Team"
                className="rounded-md h-[250px] w-full object-cover"
                loading="lazy"
              />

              <img
                src={coll8}
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




// import React from "react";
// import { motion } from "framer-motion";

// import writer from "../../assets/writer.webp";

// import Counter from "../../helper/Counter";

// export default function Writing() {
//   // 🔥 reusable animation

//     const fadeUp = {
//     initial: {
//       opacity: 0,
//       y: 80,
//     },

//     whileInView: {
//       opacity: 1,
//       y: 0,
//     },

//     viewport: {
//       once: true,
//       amount: 0.2,
//     },
//   };


//   return (
//     <section className="bg-white/80 px-8 pt-12 pb-12 overflow-hidden">
      
//       {/* TOP INTRO */}
//       <div className="space-y-3.5 py-24">

//         <motion.h1
//           {...fadeUp}
//           transition={{
//             duration: 0.8,
//           }}
//           className="font-serif font-medium text-stone-700 text-xl md:text-2xl lg:text-3xl text-center leading-tight"
//         >
//           Writing that SPEAKS, Stories that LAST
//         </motion.h1>

//         <motion.div
//           {...fadeUp}
//           transition={{
//             duration: 1,
//             delay: 0.2,
//           }}
//         >
//           <p className="text-center text-stone-500">
//             Words have the power to linger long after the final page is turned.
//           </p>

//           <p className="text-center text-stone-500">
//             Here, you find stories shaped with care, crafted to stir emotions
//             beautiful enough to stay with you.
//           </p>
//         </motion.div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="py-12">
//         <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-14 items-center">

//           {/* LEFT IMAGE */}
//           <motion.div
//             {...fadeUp}
//             transition={{
//               duration: 1,
//             }}
//           >
//             <img
//               className="w-full object-cover rounded-sm"
//               src={writer}
//               alt="Writer"
//               loading="lazy"
//             />
//           </motion.div>

//           {/* RIGHT CONTENT */}
//           <div className="space-y-8">

//             {/* Header */}
//             <div>

//               <motion.p
//                 {...fadeUp}
//                 transition={{
//                   duration: 1,
//                   delay: 0.2,
//                 }}
//                 className="text-sm uppercase tracking-widest text-stone-600 pt-1 md:pt-0"
//               >
//                 The story of
//               </motion.p>

//               <motion.h2
//                 {...fadeUp}
//                 transition={{
//                   duration: 1,
//                   delay: 0.4,
//                 }}
//                 className="text-4xl md:text-5xl font-serif font-medium text-stone-700 mt-2"
//               >
//                 TAP BOOKS
//               </motion.h2>

//             </div>

//             {/* Description */}
//             <div className="space-y-4 text-stone-600 leading-relaxed text-base">

//               <motion.p
//                 {...fadeUp}
//                 transition={{
//                   duration: 1,
//                   delay: 0.6,
//                 }}
//               >
//                 TAP Books was founded on a deep love for storytelling and the
//                 belief that words have the power to shape minds and inspire
//                 change. Each book we publish is carefully crafted to connect
//                 with readers, spark imagination, and leave a meaningful impact
//                 long after the final page is turned.
//               </motion.p>

//               <motion.p
//                 {...fadeUp}
//                 transition={{
//                   duration: 1,
//                   delay: 0.8,
//                 }}
//               >
//                 Stories have the power to transform the way we see the world —
//                 and at TAP Books, that belief drives everything we do.
//               </motion.p>

//             </div>

//             {/* BUTTON */}
//             <motion.div
//               {...fadeUp}
//               transition={{
//                 duration: 1,
//                 delay: 1,
//               }}
//             >
//               <button className="group inline-flex items-center gap-2 text-black/80 font-medium border-b-2 border-stone-500 pb-1 hover:gap-3 transition-all duration-300">
//                 Read More

//                 <span className="group-hover:translate-x-1 transition-transform">
//                   →
//                 </span>
//               </button>
//             </motion.div>

//             {/* COUNTERS */}
//             {/* ✅ NO MOTION WRAPPER HERE */}
//             <div className="mt-10 border-t border-b border-stone-200 py-8 flex flex-col sm:flex-row gap-8 sm:gap-0 sm:divide-x sm:divide-stone-200">

//               <Counter
//                 end={10}
//                 label="Books Published"
//               />

//               {/* MOBILE DIVIDER */}
//               <div className="border-b h-6 text-stone-200 sm:hidden" />

//               <Counter
//                 end={4}
//                 label="Best Selling Books"
//               />

//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }















