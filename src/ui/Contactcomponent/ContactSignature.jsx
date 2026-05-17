import { motion } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";
// import image5 from "../../assets/image5.jpg"; // replace with your image
// import { FaQuoteLeft } from "react-icons/fa";


export default function ContactSignature() {
  return (
    <section className="bg-blue-50 flex items-center justify-center text-center">
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration:  1,
        delay: 0.8
        }}
        className="max-w-3xl text-black/90 py-12 px-6">

        {/* Author */}
        <motion.p 
         initial={{ opacity: 0, y: 80 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration:  1,
         delay: 0.8}}
         className="text-sm md:text-base opacity-90 underline"
         >
          TAP BOOKS
        </motion.p>

        {/* Main Quote */}
        <motion.h1 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration:  1,
          delay: 1}}
          className="text-lg md:text-xl py-6 font-medium leading-relaxed"
          >
          Interested in collaborations, interviews, speaking engagements or book-related enquiries? Feel free to get in touch anytime.
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration:  1,
          delay: 1.2}}
        >

          <button className="bg-black text-white cursor-pointer px-8 py-2 rounded-xs hover:bg-gray-800 transition">Chat on WhatsApp</button>
        </motion.div>
      </motion.div>
    </section>
  );
}