import React from 'react'
import { motion } from 'framer-motion';
import {
  FiPhone,
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiMail,
} from "react-icons/fi";
import { FaLightbulb } from 'react-icons/fa';

export default function ContactConvo() {

   const fadeUp = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div>
       {/* SECOND SECTION */}
      <section className="py-24 px-6 lg:px-20 bg-white">

        <div className="max-w-7xl mx-auto">

          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[0.3em] text-sm text-stone-500 mb-4">
              Why People Reach Out
            </p>

            <h2 className="text-2xl md:text-3xl lg:4xl font-serif text-stone-800 leading-tight mb-6">
              Conversations that create impact.
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-stone-600 leading-relaxed">
              We collaborate with readers, creators, authors and brands who believe in meaningful storytelling and creativity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            <motion.div
              {...fadeUp}
              transition={{ duration: 1, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#f8f6f1] rounded-xs p-8 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-xs bg-stone-900 text-yellow-400 flex items-center justify-center text-3xl mb-6">
                <FiMail />
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Partnerships
              </h3>

              <p className="text-stone-600 leading-relaxed">
                Collaborate with TAP Books on creative campaigns, publishing opportunities and events.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 1, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-[#f8f6f1] rounded-xs p-8 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-xs bg-stone-900 text-yellow-400 flex items-center justify-center text-3xl mb-6">
                <FiClock />
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Fast Support
              </h3>

              <p className="text-stone-600 leading-relaxed">
                We prioritize quick and thoughtful responses to every message we receive.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 1, delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-[#f8f6f1] rounded-xs p-8 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-xs bg-stone-900 text-yellow-400 flex items-center justify-center text-3xl mb-6">
                <FiMapPin />
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Global Community
              </h3>

              <p className="text-stone-600 leading-relaxed">
                Readers and creatives from around the world connect through our platform.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="bg-stone-900 text-white rounded-xs p-8 shadow-xl"
            >
              <div className="w-16 h-16 rounded-xs bg-yellow-400 text-black flex items-center justify-center text-3xl mb-6">
                {/* <FiArrowRight /> */}
                <FaLightbulb />
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Creative Ideas
              </h3>

              <p className="text-stone-300 leading-relaxed">
                Every conversation starts with a story — and we are excited to hear yours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
















































// import { motion } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";

// import image5 from "../../assets/image5.jpg"; // replace with your image
// import { FaQuoteLeft } from "react-icons/fa";


// export default function ContactSignature() {
//   return (
//     <section className="bg-blue-50 flex items-center justify-center text-center">
      
//       {/* Content */}
//       <motion.div 
//         initial={{ opacity: 0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration:  1,
//         delay: 0.8
//         }}
//         className="max-w-3xl text-black/90 py-12 px-6">

//         {/* Author */}
//         <motion.p 
//          initial={{ opacity: 0, y: 80 }}
//          whileInView={{ opacity: 1, y: 0 }}
//          viewport={{ once: true }}
//          transition={{ duration:  1,
//          delay: 0.8}}
//          className="text-sm md:text-base opacity-90 underline"
//          >
//           TAP BOOKS
//         </motion.p>

//         {/* Main Quote */}
//         <motion.h1 
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration:  1,
//           delay: 1}}
//           className="text-lg md:text-xl py-6 font-medium leading-relaxed"
//           >
//           Interested in collaborations, interviews, speaking engagements or book-related enquiries? Feel free to get in touch anytime.
//         </motion.h1>

//         <motion.div 
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration:  1,
//           delay: 1.2}}
//         >

//           <button className="bg-black text-white cursor-pointer px-8 py-2 rounded-xs hover:bg-gray-800 transition">Chat on WhatsApp</button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }