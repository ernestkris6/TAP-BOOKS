import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import image1 from "../../assets/cover.jpg";
import image3 from "../../assets/tenibus.jpg";
import image4 from "../../assets/newimage.jpg";

const books = [
  {
    id: 1,
    title: "Mummy's Shopping List",
    image: image1,
    desc: "A heartwarming adventure that teaches responsibility, curiosity and everyday life lessons.",
  },
  {
    id: 2,
    title: "Teni's Bus",
    image: image3,
    desc: "A delightful story filled with imagination, friendship and unforgettable experiences.",
  },
  {
    id: 3,
    title: "Volley",
    image: image4,
    desc: "An inspiring journey about teamwork, determination and believing in yourself.",
  },
];

export default function BestSelling() {
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
    <section className="bg-[#f7f5f2] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.3em] text-sm text-stone-500 mb-4">
              Reader Favorites
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-800 leading-tight">
              Best Selling Books
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          >
            <Link
              to="/books"
              className="group inline-flex items-center gap-2 text-stone-700 border-b border-stone-400 pb-1 hover:gap-3 transition-all duration-300"
            >
              View All Books

              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Editorial Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {books.map((book, index) => (
            <motion.div
              key={book.id}
              {...fadeUp}
              transition={{
                duration: 1,
                delay: index * 0.2,
              }}
              className={`group ${
                index === 1 ? "lg:mt-8" : ""
              }`}
            >
              <div className="bg-white rounded-xs overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    loading="lazy"
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-8">

                  <h3 className="text-2xl font-serif text-stone-800 mb-4">
                    {book.title}
                  </h3>

                  <p className="text-stone-600 leading-relaxed mb-6">
                    {book.desc}
                  </p>

                  <Link
                    to="/books"
                    className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white px-5 py-3 rounded-xs transition-all duration-300"
                  >
                    Order Your Copy

                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}




















// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// import image1 from "../../assets/image1.webp";
// import image4 from "../../assets/image4.webp";
// import image3 from "../../assets/image3.webp";

// const books = [
//   {
//     id: 1,
//     title: "Mummy's Shopping List",
//     image: image1,
//     btn: "Order Your Copy",
//   },
//   {
//     id: 2,
//     title: "Teni's Bus",
//     image: image3,
//     btn: "Order Your Copy",
//   },
//   {
//     id: 3,
//     title: "Volley",
//     image: image4,
//     btn: "Order Your Copy",
//   },
// ];

// export default function BestSelling() {

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
//     <section className="bg-blue-50 py-20 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-4">

//           <motion.h2
//             {...fadeUp}
//             transition={{
//               duration: 0.8,
//             }}
//             className="text-4xl md:text-5xl font-serif text-gray-900"
//           >
//             Best selling books
//           </motion.h2>

//           <motion.div
//             {...fadeUp}
//             transition={{
//               duration: 1,
//               delay: 0.2,
//             }}
//           >
//             <Link
//               to="books"
//               className="group flex items-center gap-2 text-gray-700 border-b border-gray-400 pb-1 hover:gap-3 transition-all"
//             >
//               View All Books

//               <span className="group-hover:translate-x-1 transition-transform">
//                 →
//               </span>
//             </Link>
//           </motion.div>

//         </div>

//         {/* Books Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 shrink-0">

//           {books.map((book, index) => (
//             <motion.div
//               key={book.id}

//               {...fadeUp}

//               transition={{
//                 duration: 1,
//                 delay: index * 0.2,
//               }}

//               className="text-center space-y-5"
//             >

//               {/* Image */}
//               <div className="overflow-hidden rounded-sm">
//                 <img
//                   src={book.image}
//                   alt={book.title}
//                   className="w-full object-cover transition-transform duration-700 hover:scale-105"
//                   loading="lazy"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="text-base text-center md:text-lg font-serif text-gray-900">
//                 {book.title}
//               </h3>

//               {/* CTA */}
//               <div className="flex justify-center items-center">
//                 <Link
//                   to="books"
//                   className="group inline-flex items-center gap-2 text-amber-900 border-b font-medium cursor-pointer hover:gap-3 transition-all duration-300"
//                 >
//                   {book.btn}

//                   <span className="transition-transform group-hover:translate-x-1">
//                     →
//                   </span>
//                 </Link>
//               </div>

//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }




