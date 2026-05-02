import { RiDoubleQuotesL } from "react-icons/ri";

export default function TapBooksAboutPage() {
  return (
    <div className="bg-[#f8f6f1] text-[#1d1d1d] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex relative overflow-hidden bg-[#1f1f1f] text-white py-24 px-6 lg:px-20">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-yellow-400 mb-4">
              About TAP Books
            </p>

            <h1 className="text-2xl lg:text-4xl font-bold leading-tight mb-6">
              Stories, Knowledge & Inspiration For Every Reader.
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
              TAP Books is more than a bookstore — we are a community built
              around curiosity, imagination, and lifelong learning. We connect
              readers with books that inspire growth, creativity, and powerful
              conversations.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-7 py-4 rounded-xs cursor-pointer font-semibold transition">
                Explore Collection
              </button>

              <button className="border border-white/40 hover:bg-white hover:text-black px-7 py-4 rounded-xs cursor-pointer font-semibold transition">
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1974&auto=format&fit=crop"
              alt="Books"
              className="rounded-sm shadow-2xl object-cover h-[500px] w-full"
            />

            <div className="hidden md:block absolute -bottom-8 -left-8 bg-white text-black py-2 px-4 rounded-sm shadow-xl max-w-xs">
              <h3 className="text-xl font-bold mb-2">Intrigued Readers</h3>
              <p className="text-gray-600">
                Readers and book lovers connected through TAP Books.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Mission Section */}
      <section className="py-24 px-6 lg:px-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop"
              alt="Library"
              className="rounded-sm shadow-xl h-[500px] w-full object-cover"
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

            <p className="text-lg text-stone-700 max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover books that challenge your thinking, inspire creativity,
              and fuel your growth.
            </p>

            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-xs font-semibold cursor-pointer transition">
              Browse Books
            </button>
            </div>
          </div>
      </section>

      <section className="py-24 px-6 lg:px-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto mb-14 text-center">
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
        </div>

        <div className="flex cursor-pointer overflow-x-auto gap-4 [scrollbar-width: none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {[
            {
              name: 'Sarah Johnson',
              text: 'TAP Books helped me rediscover my love for reading. Their collection is amazing and delivery is always fast.',
            },
            {
              name: 'Michael Daniels',
              text: 'I love the modern experience and carefully curated books. Every recommendation has been worth it.',
            },
            {
              name: 'Aisha Bello',
              text: 'The platform feels personal and inspiring. I always find books that help me grow professionally and personally.',
            },
            {
              name: 'David Clark',
              text: 'Excellent customer service and a fantastic range of books. TAP Books stands out from other bookstores.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="min-w-[320px] lg:min-w-[380px] bg-[#f1f1f1] border border-gray-100 rounded-sm p-8 shadow-sm flex flex-col gap-6"
            >
              <div className="text-5xl text-stone-700">
                <RiDoubleQuotesL />
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                {item.text}
              </p>

              <div>
                <h3 className="font-semibold text-xl">{item.name}</h3>
                <p className="text-gray-500 text-sm">Verified Reader</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white px-6 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto bg-[#1f1f1f] rounded-sm text-white p-10 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

          <div className="relative z-10">
            <h2 className="text-lg lg:text-4xl font-bold mb-6 leading-tight">
              Start Your Reading Journey With TAP Books.
            </h2>

            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover books that challenge your thinking, inspire creativity,
              and fuel your growth.
            </p>

            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-sm font-semibold cursor-pointer transition">
              Browse Books
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
      

     