import React from 'react'
import writer from '../assets/writer.jpg'
import Counter from '../components/Counter'

export default function Writing() {
  return (
    <section>
        <div className='px-12 pt-12 pb-6 space-y-3.5'>
            <h1 className='font-semibold text-xl md:text-2xl lg:text-3xl text-center'>Writing that SPEAKS, Stories that LAST</h1>
            <p className='text-center'>Words have the power to linger long after the final page is turned.</p>
            <p className='text-center'>Here, you find stories shaped with care, crafted to stir emotions beautiful enough to stay with you. </p>
        </div>   

        {/* Story of tapbooks */}

    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE (can be image later) */}
        <div className="">
            <img className='' src={writer} alt="" />
     

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
            <p className="text-sm uppercase tracking-widest text-stone-900 pt-1 md:pt-0">
              The story of
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-2">
              TAPS BOOKS
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
            <p>
              Dapibus id interdum fusce sed odio massa tellus amet, faucibus nibh consequat justo mauris, donec nec tempus in volutpat iaculis pellentesque in urna.
            </p>

            <p>
              Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam rhoncus, mollis arcu pharetra quis duis morbi a nunc diam mauris ut tortor ipsum.
            </p>
          </div>

          {/* Button */}
          <div>
            <button className="group inline-flex items-center gap-2 text-black font-medium border-b-2 border-stone-500 pb-1 hover:gap-3 transition-all duration-300">
              Read More
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 border-t border-b border-stone-200 py-8 flex flex-col sm:flex-row gap-8 sm:gap-0 sm:divide-x sm:divide-stone-200">

            <div className="flex-1 text-center">
             <Counter end={10} label="Books Published" />
              <p className="text-4xl font-serif font-bold text-stone-700">
                10
              </p>
              <p className="text-gray-600 mt-1">Books Published</p>
            </div>

            <div className="flex-1 text-center">
              <p className="text-4xl font-serif font-bold text-stone-700">
                07
              </p>
              <p className="text-gray-600 mt-1">Best Selling Books</p>

              <div className="mt-10 border-t border-b border-amber-200 py-8 flex flex-col sm:flex-row gap-8 sm:gap-0 sm:divide-x sm:divide-amber-200">


  

</div>
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