import { FaArrowRight } from "react-icons/fa";
import image2 from '../../assets/image2.jpg';

export default function AuthorHero() {
  return (
    <section className="bg-[#F7F5F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight">
            About <span className="italic text-[#A68A64]">me</span>
          </h1>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-[#A68A64] mt-6 mb-6"></div>

          {/* Paragraph */}
          <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
            I am a storyteller at heart, passionate about creating words that
            connect people of all ages. My writing is inspired by everyday
            moments, imagination, and the desire to share meaningful stories
            that stay with readers.
          </p>

          {/* Button */}
          <button className="mt-8 flex cursor-pointer items-center gap-3 border border-[#A68A64] px-6 py-3 text-sm tracking-wide text-gray-900 hover:bg-[#A68A64] hover:text-white transition duration-300">
            Learn more about my journey
            <FaArrowRight className="text-sm" />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src={image2}// replace with your image
            alt="About hero"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-sm"
          />
        </div>

      </div>

      {/* BOTTOM FEATURES */}
      <div className="border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid md:grid-cols-3 gap-8 text-center">

          {/* Item 1 */}
          <div className="flex flex-col items-center gap-3">
            <div className="text-[#A68A64] text-3xl">📖</div>
            <h3 className="font-medium text-lg">Storyteller</h3>
            <p className="text-gray-600 text-sm">
              Crafting stories that inspire and connect.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center gap-3 border-y md:border-y-0 md:border-x border-gray-200 py-6 md:py-0">
            <div className="text-[#A68A64] text-3xl">✒️</div>
            <h3 className="font-medium text-lg">Passionate Writer</h3>
            <p className="text-gray-600 text-sm">
              Turning ideas and moments into meaningful words.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center gap-3">
            <div className="text-[#A68A64] text-3xl">🤍</div>
            <h3 className="font-medium text-lg">Purpose Driven</h3>
            <p className="text-gray-600 text-sm">
              Sharing stories that leave a lasting impact.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}