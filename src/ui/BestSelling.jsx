import { Link } from "react-router-dom";

import image1 from '../assets/image1.jpg'
import image4 from '../assets/image4.jpg'
import image3 from '../assets/image3.jpg'

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
    btn: "Order Your Copy"
  },
];

export default function BestSellingBooks() {
  return (
    <section className="bg-blue-50  py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-4">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            Best selling books
          </h2>

          <Link
            to="books"
            className="group flex items-center gap-2 text-gray-700 border-b border-gray-400 pb-1 hover:gap-3 transition-all"
          >
            View All Books
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {books.map((book) => (
            <div key={book.id} className="text-center space-y-5">

              {/* Image */}
              <div className="overflow-hidden rounded-md">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-[578px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="text-base text-center md:text-lg font-serif text-gray-900">
                {book.title}
              </h3>

              {/* CTA */}
              <button className="group gap-2 text-amber-700 border-b border-amber-500 pb-1 hover:gap-3 transition-all">{book.btn}
                <span className="group-hover:translate-x-1 transition-transform">
                    →
                </span>
              </button>
              
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}



// <button className="group gap-2 text-amber-700 border-b border-amber-500 pb-1 hover:gap-3 transition-all">
//                 Order Your Copy
//                 <span className="group-hover:translate-x-1 transition-transform">
//                   →
//                 </span>
//               </button>













// import React from 'react'
// import { Link } from 'react-router-dom'
// import image1 from '../assets/image1.jpg'
// import image2 from '../assets/image2.jpg'
// import image3 from '../assets/image3.jpg'



// export default function BestSelling() {

//     const books = [
//         {
//             id: 0,
//             img: image1,
//             name: "Mummy's Shopping List",
//             btn: 'Order Your Copy',
//             alt: "books",
//         },
//         {
//             id: 1,
//             img: image2,
//             name: "Teni's Bus",
//             btn: 'Order Your Copy',
//             alt: "books"
//         },
//         {
//             id: 2,
//             img: image3,
//             name: "Volley",
//             btn: 'Order Your Copy',
//             alt: "books",
//         },
//     ]

//   return (
//     <section className='px-12 py-12'>
//         {/* header */}
//         <div className='flex flex-col text-center md:text-current space-y-2 md:flex-row md:justify-between md:px-8'>
//             <h1 className='text-xl md:text-3xl lg:text-4xl'>Best selling books</h1>
//             <div>
//             <button className="group inline-flex items-center gap-2 text-black font-medium border-b-2 border-stone-500 pb-1 hover:gap-3 transition-all duration-300">
//               View All Books
//               <span className="group-hover:translate-x-1 transition-transform">
//                 →
//               </span>
//             </button>
//             </div>

//         </div>

//         {/* books */}
//         <div className='py-12 grid grid-cols-1 md:grid-cols-3 gap-12'>
//             {books.map((book)=> (
//                 <div key={book.id}>
//                     <div className=''>
//                         <img className='object-cover w-full h-[568px]' src={book.img} alt="" />
//                     </div>
//                     <div>
//                         <p>{book.name}</p>
//                     </div>
//                     <div>
//                         <button>{book.btn}</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
        
//     </section>
//   )
// }
