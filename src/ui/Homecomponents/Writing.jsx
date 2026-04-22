import React from 'react'
import writer from '../../assets/writer.jpg'
import Counter from '../../helper/Counter'

//text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-gray-900 leading-tight
export default function Writing() {
  return (
    <section className='bg-white/80 px-8 pt-12 pb-12'>
        <div className='space-y-3.5 py-24'>
            <h1 className='font-serif font-medium text-stone-700 text-xl md:text-2xl lg:text-3xl text-center leading-tight'>Writing that SPEAKS, Stories that LAST</h1>
            <div>
              <p className='text-center text-stone-500'>Words have the power to linger long after the final page is turned.</p>
            <p className='text-center text-stone-500'>Here, you find stories shaped with care, crafted to stir emotions beautiful enough to stay with you. </p>
            </div>
        </div>   

        {/* Story of tapbooks */}

    <div className="py-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE (can be image later) */}
        <div className="">
            <img className='rounded-sm' src={writer} alt="" />
     

          {/* decorative floating shape */}
          {/* <div className="absolute -top-6 -left-6 w-32 h-32 bg-stone-100 rounded-2xl rotate-6">

          </div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-stone-200 rounded-2xl -rotate-6">
            
          </div> */}
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="space-y-8">

          {/* Header */}
          <div>
            <p className="text-sm uppercase tracking-widest text-stone-600 pt-1 md:pt-0">
              The story of
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-medium text-stone-700 mt-2">
              TAP BOOKS
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-4 text-stone-600 leading-relaxed text-base">
            <p>
              TAP Books was founded on a deep love for storytelling and the belief that words have the power to shape minds and inspire change. Each book we publish is carefully crafted to connect with readers, spark imagination, and leave a meaningful impact long after the final page is turned.
            </p>

            <p>
              Stories have the power to transform the way we see the world—and at TAP Books, that belief drives everything we do.
            </p>
          </div>

          {/* Button */}
          <div>
            <button className="group inline-flex items-center gap-2 text-black/80 font-medium border-b-2 border-stone-500 pb-1 hover:gap-3 transition-all duration-300">
              Read More
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 border-t border-b border-stone-200 py-8 flex flex-col sm:flex-row gap-8 sm:gap-0 sm:divide-x sm:divide-stone-200">
   
            <div className="flex-1 text-center">
                  <Counter 
                    end={10} 
                    label="Books Published" 
                  />
            </div>

                {/*Mid divider on mobile*/}
              <div className="border-b h-6 text-stone-200 sm:hidden"/>
            
            <div className="flex-1 text-center">
                  <Counter 
                    end={4} 
                    label="Best Selling Books" 
                  />
            </div>
            
          </div>
        </div>
      </div>
    </div>   

    </section>
  )
}



// export default function BooksSection() {
//   return (
    
//   );
// }


//  <section className="px-4 md:px-10 lg:px-20 py-10">

//       {/* Top Divider */}
//       <div className="border-t border-rose-300 mb-6"></div>

//       {/* Wrapper */}
//       <div
//         className="
//           flex flex-col items-start text-left
//           md:items-center md:text-center
//           lg:flex-row lg:items-center lg:justify-between lg:text-left
//         "
//       >

//         {/* Item 1 */}
//         <div className="flex items-center gap-4 py-4">
//           <span className="text-5xl md:text-6xl lg:text-7xl text-[#A68A64] font-light">
//             10
//           </span>
//           <p className="text-gray-800 text-sm md:text-base">
//             Books Published
//           </p>
//         </div>

//         {/* Divider */}
//         <div
//           className="
//             hidden lg:block 
//             w-px h-16 bg-rose-300
//           "
//         ></div>

//         {/* Item 2 */}
//         <div className="flex items-center gap-4 py-4">
//           <span className="text-5xl md:text-6xl lg:text-7xl text-[#A68A64] font-light">
//             07
//           </span>
//           <p className="text-gray-800 text-sm md:text-base">
//             Best Selling Books
//           </p>
//         </div>

//       </div>

//       {/* Bottom Divider */}
//       <div className="border-t border-rose-300 mt-6"></div>

//     </section>
