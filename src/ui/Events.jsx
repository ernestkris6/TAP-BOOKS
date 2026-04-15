import React from "react";
import image2 from '../assets/image2.jpg' 

export default function SignedCopySection() {
  return (
    <section className="w-full bg-[#f7f5f2] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="order-1 md:order-2">
          <img
            src={image2} // replace with your image path
            alt="Reading book"
            className="w-full h-[568px] object-cover rounded-sm shadow-sm"
          />
        </div>

        {/* Content */}
        <div className="order-2 md:order-1 space-y-6">
          <p className="text-sm text-[#b08a5b]">Don't miss it!</p>

          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
            Get a special copy signed by me
          </h2>

          <p className="text-gray-600 max-w-md">
            Own a signed copy, personally inscribed straight from me to you.
          </p>

          {/* Divider */}
          <div className="border-t border-[#d8cfc5] w-full" />

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>070107574608</span>
            </div>

            <div className="hidden sm:block h-5 w-px bg-[#d8cfc5]" />

            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Lagos, Nigeria.</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#d8cfc5] w-full" />

          {/* CTA */}
          <button className="group inline-flex items-center gap-2 text-gray-900 font-medium">
            Get Tickets To The Event
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}