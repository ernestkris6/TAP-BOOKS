import abtbg from '../../assets/abtbg.webp';
import { RiDoubleQuotesL } from "react-icons/ri";


//bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop')]


export default function TapBooksAboutPage() {
  return (
    <div className="bg-[#f8f6f1] text-[#1d1d1d]">
      {/* Hero Section */}
      <section className="flex relative overflow-hidden bg-[#1f1f1f] text-white py-24 px-6 lg:px-20">
        <img src={abtbg} className="absolute h-full w-full inset-0 opacity-20  bg-cover bg-center" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-yellow-400 mb-4">
              About TAP Books
            </p>

            <h1 className="text-2xl lg:text-4xl font-bold leading-tight mb-6">
              Stories, Knowledge & Inspiration For Every Reader.
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
              TAP Books is more than just reading — we are a community built
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
              className="hidden lg:block rounded-sm shadow-2xl object-cover h-[500px] w-full"
            />

            <div className="hidden lg:block absolute -bottom-8 -left-8 bg-white text-black py-2 px-2 rounded-sm shadow-xl max-w-xs">
              <h3 className="text-xl text-stone-500 font-medium mb-2">Intrigued Readers</h3>
              <p className="text-stone-700">
                Book lovers and readers connect through TAP Books.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Mission Section */}
      
    </div>
  );
}
      

     