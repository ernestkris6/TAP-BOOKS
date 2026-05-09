import React from 'react'

export default function AboutMission() {
  return (
    <section className="py-24 px-6 lg:px-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop"
              alt="Library"
              className="hidden lg:block rounded-sm shadow-xl h-[500px] w-full object-cover"
            />
          </div>

           <div className="space-y-5">
            <p className="uppercase tracking-[0.3em] text-sm text-stone-500 mb-4">
              Our Mission
            </p>
            <h2 className="text-lg lg:text-4xl font-semibold mb-6 leading-tight">
              Helping people discover books that truly matter.
            </h2>

            <p className="text-stone-700 leading-relaxed mb-6 text-lg">
              At TAP Books, we believe books have the power to transform lives.
              Our mission is to make reading accessible, enjoyable, and deeply
              meaningful for everyone.
            </p>
           </div>

           <div className="space-y-5">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-xl mb-2">Curated Selection</h3>
                <p className="text-gray-600">
                  We carefully select books across genres to ensure quality,
                  relevance, and inspiration.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-xl mb-2">Reader Community</h3>
                <p className="text-gray-600">We carefully select books across genres to ensure quality,
                  relevance, and inspiration.</p>
              </div> 
            </div>
            <div className="relative z-10">
              <h2 className="text-lg lg:text-4xl font-semibold mb-6 leading-tight">
              Start Your Reading Journey With TAP Books.
            </h2>

            <p className="text-lg text-stone-700 max-w-2xl mb-10 leading-relaxed">
              Discover books that challenge your thinking, inspire creativity,
              and fuel your growth.
            </p>

            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-xs font-semibold cursor-pointer transition">
              Browse Books
            </button>
            </div>
          </div>
      </section>
  )
}
