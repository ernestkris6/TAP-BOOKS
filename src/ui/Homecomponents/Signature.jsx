import { motion } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";
import image5 from "../../assets/image5.webp";

export default function Signature() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, delay },
  });

  return (
    <section className="relative flex items-center justify-center text-center px-6 overflow-hidden">

      {/* Background Image */}
      <img
        src={image5}
        alt="background"
        className="absolute inset-0 w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#8a6b3f]/60 backdrop-brightness-75" />

      {/* Content */}
      <div className="relative max-w-3xl text-white py-14">

        {/* Quote Icon */}
        <motion.div {...fadeUp(0)}>
          <RiDoubleQuotesL className="text-3xl md:text-4xl mx-auto opacity-80 mb-4" />
        </motion.div>

        {/* Title */}
        <motion.p
          {...fadeUp(0.1)}
          className="italic text-xl mb-6 opacity-90"
        >
          My Story
        </motion.p>

        {/* Main Quote */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-2xl md:text-4xl font-serif font-medium leading-relaxed"
        >
          I write stories for curious minds and kind hearts,
          no matter the age.
        </motion.h1>

        {/* Author */}
        <motion.p
          {...fadeUp(0.3)}
          className="mt-6 text-sm md:text-base font-serif opacity-90"
        >
          Temilorun Adebiyi
        </motion.p>

      </div>
    </section>
  );
}