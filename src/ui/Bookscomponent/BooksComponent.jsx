import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import image1 from "../../assets/cover.jpg";
import image2 from "../../assets/tenibus.jpg";
import image3 from "../../assets/newimage.jpg";

const books = [
  {
    id: 1,
    title: "Mummy's Shopping List",
    image: image1,
    price: "₦7,500",
    desc: "A beautifully crafted children's story filled with imagination and meaningful lessons that children will treasure.",
  },

  {
    id: 2,
    title: "Teni's Bus",
    image: image2,
    price: "₦6,500",
    desc: "An inspiring adventure designed to spark curiosity, confidence and wonder in every young reader.",
  },

  {
    id: 3,
    title: "Volley",
    image: image3,
    price: "₦8,000",
    desc: "A heartfelt story about friendship, courage, resilience and believing in yourself.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: {
    once: true,
    amount: 0.2,
  },
};

export default function Books() {
  return (
    <section className="bg-[#f8f5f0] overflow-hidden">

      {/* HERO */}

      <div className="relative py-16 lg:py-20 px-6 lg:px-16">

        <div className="absolute top-0 left-0 w-56 h-56 bg-amber-200/30 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-56 h-56 bg-orange-200/20 blur-3xl rounded-full" />

        <motion.div
          {...fadeUp}
          transition={{ duration: .8 }}
          className="relative max-w-3xl"
        >

          <p className="uppercase tracking-[0.3em] text-xs text-stone-500 mb-4">
            Explore The Collection
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-800 leading-tight mb-6">
            Stories designed
            <br />
            to live in hearts.
          </h1>

          <p className="text-base md:text-lg text-stone-600 leading-8">
            Discover meaningful books thoughtfully written to inspire,
            educate and spark imagination across every generation.
          </p>

        </motion.div>

      </div>

      {/* BOOKS */}

      <div className="space-y-16 lg:space-y-20 pb-20">

        {books.map((book, index) => (

          <motion.div
            key={book.id}
            {...fadeUp}
            transition={{
              duration: .8,
              delay: index * .15,
            }}
            className="px-6 lg:px-16"
          >

            <div
              className={`max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center ${
                index % 2 === 1
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >

              {/* IMAGE */}

              <div className="relative flex justify-center group">

                <div className="absolute w-72 h-72 bg-gradient-to-r from-amber-100/40 to-orange-100/30 blur-3xl rounded-full" />

                <img
                  src={book.image}
                  alt={book.title}
                  loading="lazy"
                  className="relative w-full md:w-[300px] lg:w-[340px] aspect-[2/3] object-cover rounded-lg shadow-2xl transition duration-700 group-hover:scale-105"
                />

              </div>

              {/* CONTENT */}

              <div className="max-w-lg">

                <p className="uppercase tracking-[0.25em] text-xs text-stone-500 mb-4">
                  Featured Book
                </p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-800 leading-tight mb-5">
                  {book.title}
                </h2>

                <p className="text-stone-600 leading-8 mb-8">
                  {book.desc}
                </p>

                <div className="mb-8">

                  <p className="uppercase tracking-widest text-xs text-stone-500 mb-2">
                    Price
                  </p>

                  <h3 className="text-3xl font-serif text-amber-700">
                    {book.price}
                  </h3>

                </div>

                <div className="flex flex-wrap gap-4">

                  <button className="group bg-stone-900 hover:bg-black text-white px-7 py-3.5 rounded-lg transition duration-300 flex items-center gap-2 cursor-pointer">

                    Add To Cart

                    <span className="group-hover:translate-x-1 transition">
                      →
                    </span>

                  </button>

                  <Link
                    to={`/books/${book.id}`}
                    className="px-7 py-3.5 rounded-lg border border-stone-300 hover:border-stone-700 transition duration-300"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

      {/* QUOTE */}

      <motion.div
        {...fadeUp}
        transition={{ duration: .8 }}
        className="px-6 lg:px-16 pb-20"
      >

        <div className="max-w-full mx-auto bg-[#1f1f1f] rounded-sm p-8 md:p-12 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-56 h-56 bg-white/5 blur-3xl rounded-full" />

          <div className="relative text-center">

            <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-5">
              Why Readers Love TAP Books
            </p>

            <h2 className="text-base sm:text-lg md:text-4xl font-serif text-white leading-relaxed max-w-3xl mx-auto">
              "Books are more than pages—they are experiences that inspire imagination, shape character and leave lasting memories."
            </h2>

            <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black px-7 py-3.5 rounded-sm transition duration-300 cursor-pointer">

              CHAT WITH US

            </button>

          </div>

        </div>

      </motion.div>

    </section>
  );
}






















// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// import image1 from "../../assets/cover.jpg";
// import image2 from "../../assets/tenibus.jpg";
// import image3 from "../../assets/newimage.jpg";
// // import image4 from "../../assets/image1.webp";

// const books = [
//   {
//     id: 1,
//     title: "Mummy's Shopping List",
//     image: image1,
//     price: "₦7,500",
//     desc: "A beautifully crafted children’s story filled with imagination and meaningful lessons.",
//   },

//   {
//     id: 2,
//     title: "Teni's Bus",
//     image: image2,
//     price: "₦6,500",
//     desc: "An inspiring adventure designed to spark curiosity and wonder in young readers.",
//   },

//   {
//     id: 3,
//     title: "Volley",
//     image: image3,
//     price: "₦8,000",
//     desc: "A heartfelt story about growth, courage, friendship and self-belief.",
//   },
// ];

// const fadeUp = {
//   initial: { opacity: 0, y: 80 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
// };

// export default function Books() {
//   return (
//     <section className="bg-[#f8f5f0] overflow-hidden">

//       {/* HERO */}
//       <div className="relative px-6 lg:px-20 py-28">

//         <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/30 blur-3xl rounded-full" />
//         <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-200/20 blur-3xl rounded-full" />

//         <motion.div
//           {...fadeUp}
//           transition={{ duration: 1 }}
//           className="relative max-w-4xl"
//         >

//           <p className="uppercase tracking-[0.3em] text-sm text-stone-500 mb-5">
//             Explore The Collection
//           </p>

//           <h1 className="text-5xl md:text-7xl font-serif text-stone-800 leading-tight mb-8">
//             Stories designed
//             <br />
//             to live in hearts.
//           </h1>

//           <p className="text-stone-600 text-lg max-w-2xl leading-relaxed">
//             Discover meaningful books carefully written to inspire,
//             educate and spark imagination across every generation.
//           </p>

//         </motion.div>
//       </div>

//       {/* BOOK SHOWCASE */}
//       <div className="space-y-24 pb-24">

//         {books.map((book, index) => (
//           <motion.div
//             key={book.id}
//             {...fadeUp}
//             transition={{
//               duration: 1,
//               delay: index * 0.2,
//             }}
//             className={`px-6 lg:px-20`}
//           >

//             <div
//               className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center ${
//                 index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
//               }`}
//             >

//               {/* IMAGE */}
//               <div className="relative group">

//                 <div className="absolute inset-4 bg-gradient-to-r from-amber-100/40 to-orange-100/30 rounded-[40px] blur-2xl opacity-70 group-hover:opacity-100 transition duration-700" />

//                 <div className="relative overflow-hidden rounded-lg">
//                   <img
//                     src={book.image}
//                     alt={book.title}
//                     className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>

//               </div>

//               {/* CONTENT */}
//               <div className="max-w-xl">

//                 <p className="uppercase tracking-[0.25em] text-sm text-stone-500 mb-5">
//                   Featured Book
//                 </p>

//                 <h2 className="text-4xl md:text-5xl font-serif text-stone-800 leading-tight mb-6">
//                   {book.title}
//                 </h2>

//                 <p className="text-stone-600 leading-relaxed text-lg mb-8">
//                   {book.desc}
//                 </p>

//                 {/* PRICE */}
//                 <div className="mb-10">
//                   <p className="text-sm uppercase tracking-widest text-stone-500 mb-2">
//                     Price
//                   </p>

//                   <h3 className="text-3xl font-serif text-amber-700">
//                     {book.price}
//                   </h3>
//                 </div>

//                 {/* BUTTONS */}
//                 <div className="flex flex-col sm:flex-row gap-4">

//                   <button className="group bg-stone-900 hover:bg-black text-white px-8 py-4 rounded-lg transition-all duration-500 cursor-pointer flex items-center justify-center gap-3">

//                     Add To Cart

//                     <span className="group-hover:translate-x-1 transition-transform duration-300">
//                       →
//                     </span>

//                   </button>

//                   <Link
//                     to={`/books/${book.id}`}
//                     className="border border-stone-300 hover:border-stone-800 text-stone-700 hover:text-stone-900 px-8 py-4 rounded-lg transition-all duration-500 flex justify-center items-center"
//                   >
//                     View Details
//                   </Link>

//                 </div>

//               </div>
//             </div>
//           </motion.div>
//         ))}

//       </div>

//       {/* QUOTE SECTION */}
//       <motion.div
//         {...fadeUp}
//         transition={{ duration: 1 }}
//         className="px-6 lg:px-20 pb-28"
//       >

//         <div className="max-w-6xl mx-auto bg-[#1e1e1e] rounded-[45px] p-10 md:p-16 text-center relative overflow-hidden">

//           <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

//           <div className="relative z-10">

//             <p className="uppercase tracking-[0.3em] text-sm text-stone-400 mb-6">
//               Why Readers Love TAP Books
//             </p>

//             <h2 className="text-3xl md:text-5xl font-serif text-white leading-relaxed max-w-4xl mx-auto">
//               “Books are more than pages —
//               they are experiences that shape imagination,
//               emotions and growth.”
//             </h2>

//             <button className="mt-10 bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-full transition-all duration-500 cursor-pointer">
//               Explore All Books
//             </button>

//           </div>
//         </div>
//       </motion.div>

//     </section>
//   );
// }














// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// import image1 from "../../assets/image1.webp";
// import image2 from "../../assets/image1.webp";
// import image3 from "../../assets/image1.webp";
// import image4 from "../../assets/image1.webp";

// const books = [
//   {
//     id: 1,
//     title: "Mummy's Shopping List",
//     image: image1,
//     price: "₦7,500",
//     desc: "A heartwarming children’s story filled with fun, adventure, and valuable lessons.",
//   },

//   {
//     id: 2,
//     title: "Teni's Bus",
//     image: image2,
//     price: "₦6,500",
//     desc: "An inspiring journey of courage, imagination, and childhood discovery.",
//   },

//   {
//     id: 3,
//     title: "Volley",
//     image: image3,
//     price: "₦8,000",
//     desc: "A moving story about friendship, determination, and self-belief.",
//   },

//   {
//     id: 4,
//     title: "The Little Dreamer",
//     image: image4,
//     price: "₦7,000",
//     desc: "Beautiful storytelling crafted to inspire curious young minds.",
//   },
// ];

// const fadeUp = {
//   initial: { opacity: 0, y: 70 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
// };

// export default function Bookscomponent() {
//   return (
//     <section className="bg-[#f8f5f0] min-h-screen">

//       {/* HERO */}
//       <div className="relative overflow-hidden py-28 px-6 lg:px-20">

//         <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl" />

//         <motion.div
//           {...fadeUp}
//           transition={{ duration: 1 }}
//           className="relative max-w-5xl mx-auto text-center"
//         >

//           <p className="uppercase tracking-[0.3em] text-sm text-stone-500 mb-5">
//             Explore The Collection
//           </p>

//           <h1 className="text-5xl md:text-6xl font-serif text-stone-800 leading-tight mb-6">
//             Books that inspire,
//             <br />
//             educate & spark imagination.
//           </h1>

//           <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
//             Discover beautifully written stories crafted for curious minds,
//             growing readers, and hearts that love meaningful adventures.
//           </p>

//         </motion.div>
//       </div>

//       {/* BOOKS GRID */}
//       <div className="px-6 lg:px-20 pb-24">

//         <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

//           {books.map((book, index) => (
//             <motion.div
//               key={book.id}
//               {...fadeUp}
//               transition={{
//                 duration: 0.9,
//                 delay: index * 0.15,
//               }}
//               className="group bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100"
//             >

//               {/* IMAGE */}
//               <div className="overflow-hidden relative">

//                 <img
//                   src={book.image}
//                   alt={book.title}
//                   className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
//                 />

//                 {/* PRICE TAG */}
//                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium text-stone-800 shadow-md">
//                   {book.price}
//                 </div>

//               </div>

//               {/* CONTENT */}
//               <div className="p-6">

//                 <h2 className="text-2xl font-serif text-stone-800 mb-3 leading-snug">
//                   {book.title}
//                 </h2>

//                 <p className="text-stone-600 leading-relaxed mb-6 text-sm">
//                   {book.desc}
//                 </p>

//                 {/* BUTTONS */}
//                 <div className="space-y-3">

//                   <button className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3 rounded-2xl transition-all duration-500 cursor-pointer">
//                     Add To Cart
//                   </button>

//                   <Link
//                     to={`/books/${book.id}`}
//                     className="group flex justify-center items-center gap-2 border border-stone-300 hover:border-stone-800 py-3 rounded-2xl text-stone-700 hover:text-stone-900 transition-all duration-500"
//                   >
//                     View Details

//                     <span className="group-hover:translate-x-1 transition-transform duration-300">
//                       →
//                     </span>
//                   </Link>

//                 </div>
//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>

//       {/* FEATURE SECTION */}
//       <div className="px-6 lg:px-20 pb-24">

//         <motion.div
//           {...fadeUp}
//           transition={{ duration: 1 }}
//           className="max-w-7xl mx-auto bg-gradient-to-r from-stone-900 to-stone-800 rounded-[40px] overflow-hidden grid lg:grid-cols-2 items-center"
//         >

//           {/* LEFT */}
//           <div className="p-10 lg:p-16 text-white">

//             <p className="uppercase tracking-[0.3em] text-sm text-stone-300 mb-4">
//               Featured Collection
//             </p>

//             <h2 className="text-4xl lg:text-5xl font-serif leading-tight mb-6">
//               Stories that stay with you long after the final page.
//             </h2>

//             <p className="text-stone-300 leading-relaxed mb-8 max-w-xl">
//               Every book is thoughtfully written to spark imagination,
//               encourage learning, and create unforgettable reading moments.
//             </p>

//             <button className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-2xl font-medium transition-all duration-500 cursor-pointer">
//               Explore Collection
//             </button>

//           </div>

//           {/* RIGHT */}
//           <div className="h-full">
//             <img
//               src={image1}
//               alt=""
//               className="w-full h-full object-cover"
//             />
//           </div>

//         </motion.div>
//       </div>

//     </section>
//   );
// }