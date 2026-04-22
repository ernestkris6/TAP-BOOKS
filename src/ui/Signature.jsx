import { RiDoubleQuotesL } from "react-icons/ri";
import image5 from "../assets/image5.jpg"; // replace with your image
// import { FaQuoteLeft } from "react-icons/fa";


export default function Signature() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Background Image */}
      <img
        src={image5}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#8a6b3f]/60 backdrop-brightness-75" />

      {/* Content */}
      <div className="relative max-w-3xl text-white">
        
        {/* Quote Icon */}
        <p className="flex text-3xl md:text-4xl items-center justify-center opacity-80 mb-4">
          <RiDoubleQuotesL />
        </p>

        {/* Signature (optional stylized text) */}
        <p className="italic text-xl mb-6 opacity-90">
          My Story
        </p>

        {/* Main Quote */}
        <h1 className="text-2xl md:text-4xl font-serif font-medium leading-relaxed">
          I write Stories for curious minds and kind hearts,
          no matter the age.
        </h1>

        {/* Author */}
        <p className="mt-6 text-sm font-serif md:text-base opacity-90">
          Temilorun Adebiyi
        </p>
      </div>
    </section>
  );
}