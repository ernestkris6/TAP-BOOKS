import { RiDoubleQuotesL } from "react-icons/ri";
// import image5 from "../../assets/image5.jpg"; // replace with your image
// import { FaQuoteLeft } from "react-icons/fa";


export default function ContactSignature() {
  return (
    <section className="bg-blue-50 flex items-center justify-center text-center">
      
      {/* Content */}
      <div className="max-w-3xl text-black/90 py-12 px-6">
        
        {/* Quote Icon */}
        {/* <p className="flex text-3xl md:text-4xl items-center justify-center opacity-80 mb-4">
          <RiDoubleQuotesL />
        </p> */}

        {/* Signature (optional stylized text) */}
        {/* <p className="italic text-xl mb-6 opacity-90">
          My Story
        </p> */}

        {/* Author */}
        <p className="text-sm md:text-base opacity-90 underline">
          TAP BOOKS
        </p>

        {/* Main Quote */}
        <h1 className="text-lg md:text-xl py-6 font-medium leading-relaxed">
          Interested in collaborations, interviews, speaking engagements or book-related enquiries? Feel free to get in touch anytime.
        </h1>


        <div className="mt-4">
          <button className="bg-black text-white cursor-pointer px-8 py-2 rounded-xs hover:bg-gray-800 transition">Chat on WhatsApp</button>
        </div>
      </div>
    </section>
  );
}