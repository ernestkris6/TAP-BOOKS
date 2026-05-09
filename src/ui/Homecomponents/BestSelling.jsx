import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import image1 from "../../assets/image1.webp";
import image4 from "../../assets/image4.webp";
import image3 from "../../assets/image3.webp";

const books = [
  {
    id: 1,
    title: "Mummy's Shopping List",
    image: image1,
    btn: "Order Your Copy",
  },
  {
    id: 2,
    title: "Teni's Bus",
    image: image3,
    btn: "Order Your Copy",
  },
  {
    id: 3,
    title: "Volley",
    image: image4,
    btn: "Order Your Copy",
  },
];

export default function BestSelling() {

  // Reusable animation
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
    <section className="bg-blue-50 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-4">

          <motion.h2
            {...fadeUp}
            transition={{
              duration: 0.8,
            }}
            className="text-4xl md:text-5xl font-serif text-gray-900"
          >
            Best selling books
          </motion.h2>

          <motion.div
            {...fadeUp}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          >
            <Link
              to="books"
              className="group flex items-center gap-2 text-gray-700 border-b border-gray-400 pb-1 hover:gap-3 transition-all"
            >
              View All Books

              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </motion.div>

        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 shrink-0">

          {books.map((book, index) => (
            <motion.div
              key={book.id}

              {...fadeUp}

              transition={{
                duration: 1,
                delay: index * 0.2,
              }}

              className="text-center space-y-5"
            >

              {/* Image */}
              <div className="overflow-hidden rounded-sm">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 className="text-base text-center md:text-lg font-serif text-gray-900">
                {book.title}
              </h3>

              {/* CTA */}
              <div className="flex justify-center items-center">
                <Link
                  to="books"
                  className="group inline-flex items-center gap-2 text-amber-900 border-b font-medium cursor-pointer hover:gap-3 transition-all duration-300"
                >
                  {book.btn}

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}






































// import { Link } from "react-router-dom";

// import image1 from '../../assets/image1.webp'
// import image4 from '../../assets/image4.webp'
// import image3 from '../../assets/image3.webp'

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
//     btn: "Order Your Copy"
//   },
// ];

// export default function BestSelling() {
//   return (
//     <section className="bg-blue-50  py-20 px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-4">
//           <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
//             Best selling books
//           </h2>

//           <Link
//             to="books"
//             className="group flex items-center gap-2 text-gray-700 border-b border-gray-400 pb-1 hover:gap-3 transition-all"
//           >
//             View All Books
//             <span className="group-hover:translate-x-1 transition-transform">
//               →
//             </span>
//           </Link>
//         </div>

//         {/* Books Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 shrink-0">

//           {books.map((book) => (
//             <div key={book.id} className="text-center space-y-5">

//               {/* Image */}
//               <div className="overflow-hidden rounded-sm">
//                 <img
//                   src={book.image}
//                   alt={book.title}
//                   className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="text-base text-center md:text-lg font-serif text-gray-900">
//                 {book.title}
//               </h3>

//               {/* CTA */}
//               <div className="flex justify-center items-center gap-2 hover:gap-3 ">
//               <Link 
//                 to='books' 
//                 className="group inline-flex items-center gap-2 text-amber-900 border-b font-medium cursor-pointer">
//                   {book.btn}
//             <   span className="transition-transform group-hover:translate-x-1">→</span>
//               </Link>
//               </div>
              
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }





