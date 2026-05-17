import { motion } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function AboutReaders() {
  const readers = [
    {
      name: "Sarah Johnson",
      text: "TAP Books helped me rediscover my love for reading. Their collection is amazing and delivery is always fast.",
    },
    {
      name: "Michael Daniels",
      text: "I love the modern experience and carefully curated books. Every recommendation has been worth it.",
    },
    {
      name: "Aisha Bello",
      text: "The platform feels personal and inspiring. I always find books that help me grow professionally and personally.",
    },
    {
      name: "David Clark",
      text: "Excellent customer service and a fantastic range of books. TAP Books stands out from other bookstores.",
    },
  ];

  // SAME STYLE AS YOUR OTHER SECTIONS
  const fadeUp = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section className="py-24 px-6 lg:px-20 bg-white overflow-hidden">

      {/* HEADER */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto mb-14 text-center"
      >
        <p className="uppercase tracking-[0.3em] text-sm text-stone-700 mb-4">
          Reader Stories
        </p>

        <h2 className="text-4xl text-stone-800 lg:text-5xl font-semibold mb-6">
          What Readers Say About TAP Books
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Our readers trust TAP Books for discovering inspiring,
          educational, and life-changing books.
        </p>
      </motion.div>

      {/* MARQUEE */}
      <div className="relative overflow-hidden">

        <div className="marquee-track flex gap-6 w-max cursor-pointer">

          {[...readers, ...readers].map((item, index) => (
            <motion.div
              key={index}
              {...fadeUp}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="w-[270px] sm:w-[280px] lg:w-[320px] flex-shrink-0 bg-[#f6f6f6] border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col gap-6 transition-all duration-500"
            >

              {/* QUOTE ICON */}
              <div className="text-4xl text-stone-700">
                <RiDoubleQuotesL />
              </div>

              {/* TEXT */}
              <p className="text-gray-600 leading-relaxed text-lg">
                {item.text}
              </p>

              {/* NAME */}
              <div>
                <h3 className="font-semibold text-xl text-stone-800">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  Verified Reader
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
