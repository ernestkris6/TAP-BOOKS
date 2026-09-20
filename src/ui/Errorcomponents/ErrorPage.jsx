import { motion } from "framer-motion";
import { FiArrowLeft, FiBookOpen } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ErrorPage () {
  return (
    <section className="min-h-screen bg-[#F8F5EF] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        {/* Book Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 rounded-full bg-[#007589]/10 flex items-center justify-center">
            <FiBookOpen
              size={30}
              className="text-[#007589]"
            />
          </div>
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            font-['Crimson_Text']
            text-[100px]
            md:text-[140px]
            leading-none
            font-bold
            text-[#252321]
          "
        >
          404
        </motion.h1>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="
            font-['Crimson_Text']
            text-3xl
            md:text-4xl
            text-[#252321]
            mb-4
          "
        >
          Page not found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="
            text-[#6B665F]
            text-sm
            md:text-base
            leading-7
            max-w-md
            mx-auto
            mb-8
          "
        >
          Sorry, the page you're looking for doesn't exist or may have
          been moved to another shelf.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              bg-black/90
              hover:bg-black/60
              text-white
              px-6
              py-3
              rounded-xs
              text-sm
              font-medium
              transition-colors
              duration-300
            "
          >
            <FiArrowLeft size={17} />
            Back to Home
          </Link>
        </motion.button>

      </div>
    </section>
  );
};

