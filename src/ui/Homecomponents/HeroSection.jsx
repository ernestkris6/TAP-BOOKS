import { Link } from "react-router-dom";
import image1 from '../../assets/image1.jpg';
import image4 from '../../assets/image4.jpg'
import image3 from '../../assets/image3.jpg'

export default function HeroSection() {

    // bg-gradient-to-b from-blue to-pink-200
    // bg-gradient-to-b from-amber-50 via-white to stone-100 

  return (
    <section className="bg-gradient-to-b from-blue to-pink-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-3">
            <p className="text-gray-600">
                Best Selling Book
            </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-gray-900 leading-tight">
            Discover the magical journey
          </h1>

          <p className="text-base text-gray-600 font-medium md:text-base max-w-lg">
            Step into stories filled with suspense, unforgettable characters and unexpected twists by <br /> TEMILORUN AEBIYI
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="books">
              <button className="bg-stone-700 text-white px-6 py-3 rounded-xs hover:bg-gray-800 transition duration-300">
                Explore Books
              </button>
            </Link>

            <Link to="/author">
              <button className="border border-black px-6 py-3 rounded-xs hover:bg-black hover:text-white transition duration-300">
                Chat with US
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center items-center">

          {/* Soft background glow */}
          <div className="absolute w-72 h-72 bg-yellow-200 blur-3xl opacity-30 rounded-full"></div>

          {/* Back Image */}
          <img
            src={image1}
            alt="Library"
            className="absolute top-[-30px] left-[-40px] w-[200px] md:w-[260px] h-[260px] md:h-[320px] object-cover rounded-2xl shadow-lg rotate-[-6deg] opacity-90 transition-transform duration-500 hover:scale-105"
          />

          {/* Main Image */}
          <img
            src={image4}
            alt="Books"
            className="w-[280px] md:w-[360px] h-[380px] md:h-[480px] object-cover rounded-2xl shadow-xl z-20 transition-transform duration-500 hover:scale-105"
          />

          {/* Front Image */}
          <img
            src={image3}
            alt="Reading"
            className="absolute bottom-[-30px] right-[-30px] w-[180px] md:w-[220px] h-[220px] md:h-[260px] object-cover rounded-2xl shadow-lg rotate-[6deg] opacity-95 transition-transform duration-500 hover:scale-105"
          />

          {/* Floating Label */}
          <div className="absolute -bottom-10 left-10 bg-white px-4 py-3 rounded-xl shadow-md z-30 hidden md:block">
            <p className="text-sm text-gray-500">Latest Release</p>
            <h3 className="font-semibold text-gray-800">
              The Silent Pages
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

































// import { Link } from "react-router-dom";

// export default function Hero() {
//   return (
//     <section className="bg-gradient-to-b from-white to-gray-100">
//       <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        
//         {/* Left Content */}
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
//             Stories that stay with you long after the last page
//           </h1>

//           <p className="text-gray-600 text-lg max-w-lg">
//             Discover captivating novels, unforgettable characters, and timeless storytelling. Dive into a world crafted with passion and imagination.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-wrap gap-4 pt-4">
//             <Link to="/books">
//               <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
//                 Explore Books
//               </button>
//             </Link>

//             <Link to="/author">
//               <button className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
//                 About the Author
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="relative">
//           {/* <img
//             src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
//             alt="Books"
//             className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-lg"
//           /> */}
//           <div className="relative flex justify-center items-center">

//   {/* Main Image */}
//   <img
//     src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
//     alt="Books"
//     className="w-[280px] md:w-[360px] h-[380px] md:h-[480px] object-cover rounded-2xl shadow-xl z-20"
//   />

//   {/* Back Image (Top Left) */}
//   <img
//     src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
//     alt="Library"
//     className="absolute top-[-30px] left-[-40px] w-[200px] md:w-[260px] h-[260px] md:h-[320px] object-cover rounded-2xl shadow-lg rotate-[-6deg] opacity-90"
//   />

//   {/* Front Accent Image (Bottom Right) */}
//   <img
//     src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
//     alt="Reading"
//     className="absolute bottom-[-30px] right-[-30px] w-[180px] md:w-[220px] h-[220px] md:h-[260px] object-cover rounded-2xl shadow-lg rotate-[6deg] opacity-95"
//   />

// </div>

//           {/* Decorative overlay */}
//           <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-md hidden md:block">
//             <p className="text-sm text-gray-500">Latest Release</p>
//             <h3 className="font-semibold text-gray-800">
//               The Silent Pages
//             </h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }