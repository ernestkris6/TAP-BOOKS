import { motion } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";
import image5 from "../../assets/image5.webp"; // replace with your image
import { FaQuoteLeft } from "react-icons/fa";
// import { RiDoubleQuotesL } from "react-icons/ri";



export default function Signature() {

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
      amount: 0.3,
    },
  };


  return (
    <section className="relative flex items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Background Image */}
      <img
        src={image5}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#8a6b3f]/60 backdrop-brightness-75" />

      {/* Content */}
      <div className="relative max-w-3xl text-white py-14">
         {/* Quote Icon */}
  <motion.p
    {...fadeUp}
    transition={{
      duration: 0.8,
    }}
    className="flex text-3xl md:text-4xl items-center justify-center opacity-80 mb-4"
  >
    <RiDoubleQuotesL />
  </motion.p>

  {/* Signature */}
  <motion.p
    {...fadeUp}
    transition={{
      duration: 1,
      delay: 0.2,
    }}
    className="italic text-xl mb-6 opacity-90"
  >
    My Story
  </motion.p>

  {/* Main Quote */}
  <motion.h1
    {...fadeUp}
    transition={{
      duration: 1,
      delay: 0.4,
    }}
    className="text-2xl md:text-4xl font-serif font-medium leading-relaxed"
  >
    I write Stories for curious minds and kind hearts,
    no matter the age.
  </motion.h1>

  {/* Author */}
  <motion.p
    {...fadeUp}
    transition={{
      duration: 1,
      delay: 0.6,
    }}
    className="mt-6 text-sm font-serif md:text-base opacity-90"
  >
    Temilorun Adebiyi
  </motion.p>

        
        
        {/* Quote Icon */}
        {/* <p className="flex text-3xl md:text-4xl items-center justify-center opacity-80 mb-4">
          <RiDoubleQuotesL />
        </p> */}

        {/* Signature (optional stylized text) */}
        {/* <p className="italic text-xl mb-6 opacity-90">
          My Story
        </p> */}

        {/* Main Quote */}
        {/* <h1 className="text-2xl md:text-4xl font-serif font-medium leading-relaxed">
          I write Stories for curious minds and kind hearts,
          no matter the age.
        </h1> */}

        {/* Author */}
        {/* <p className="mt-6 text-sm font-serif md:text-base opacity-90">
          Temilorun Adebiyi
        </p> */}
      </div>
    </section>
  );
}




// <div className="text-center max-w-4xl mx-auto overflow-hidden">

//   {/* Quote Icon */}
//   <motion.p
//     {...fadeUp}
//     transition={{
//       duration: 0.8,
//     }}
//     className="flex text-3xl md:text-4xl items-center justify-center opacity-80 mb-4"
//   >
//     <RiDoubleQuotesL />
//   </motion.p>

//   {/* Signature */}
//   <motion.p
//     {...fadeUp}
//     transition={{
//       duration: 1,
//       delay: 0.2,
//     }}
//     className="italic text-xl mb-6 opacity-90"
//   >
//     My Story
//   </motion.p>

//   {/* Main Quote */}
//   <motion.h1
//     {...fadeUp}
//     transition={{
//       duration: 1,
//       delay: 0.4,
//     }}
//     className="text-2xl md:text-4xl font-serif font-medium leading-relaxed"
//   >
//     I write Stories for curious minds and kind hearts,
//     no matter the age.
//   </motion.h1>

//   {/* Author */}
//   <motion.p
//     {...fadeUp}
//     transition={{
//       duration: 1,
//       delay: 0.6,
//     }}
//     className="mt-6 text-sm font-serif md:text-base opacity-90"
//   >
//     Temilorun Adebiyi
//   </motion.p>

// </div>