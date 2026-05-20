import React from 'react'
import { motion } from "framer-motion";
import image1 from "../../assets/abtbg.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.webp";
import image5 from "../../assets/image5.webp";
import image6 from "../../assets/image5.webp";

import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiArrowRight,
} from "react-icons/fi";

const teamMembers = [
  {
    name: "Sophia Williams",
    role: "Creative Director",
    image: image1,
    bio: "Leads the brand vision and ensures every project feels timeless, elegant and impactful.",
  },

  {
    name: "Daniel Carter",
    role: "Frontend Developer",
    image: image2,
    bio: "Builds smooth, responsive interfaces that bring digital experiences to life beautifully.",
  },

  {
    name: "Amara Johnson",
    role: "Product Designer",
    image: image3,
    bio: "Designs intuitive user experiences with modern layouts and thoughtful visual storytelling.",
  },

  {
    name: "Michael Brown",
    role: "Backend Engineer",
    image: image4,
    bio: "Handles APIs, databases and architecture powering reliable scalable platforms.",
  },

  {
    name: "Grace Thompson",
    role: "Marketing Strategist",
    image: image5,
    bio: "Crafts campaigns that connect emotionally and help brands grow authentically.",
  },

  {
    name: "David Smith",
    role: "Project Manager",
    image: image6,
    bio: "Keeps projects organized, collaborative and delivered with excellence every time.",
  },
];


export default function TeamMembers() {

    const fadeUp = {
    initial: {
      opacity: 0,
      y: 80,
    },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.2,
    },
  };

  return (
   <div>
        {/* TEAM GRID SECTION */}
              <section className="py-24 px-6 lg:px-16">
        
                <div className="max-w-7xl mx-auto">
        
                  <motion.div
                    {...fadeUp}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-5">
                      Built by passionate people
                    </h2>
        
                    <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed text-lg">
                      Every member of our team brings unique creativity, energy and expertise
                      that helps us deliver unforgettable experiences.
                    </p>
                  </motion.div>
        
        
                  {/* TEAM CARDS */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
                    {teamMembers.map((member, index) => (
                      <motion.div
                        key={index}
                        {...fadeUp}
                        transition={{
                          duration: 1,
                          delay: index * 0.1,
                        }}
                        className="group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                      >
        
                        {/* IMAGE */}
                        <div className="overflow-hidden relative">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
        
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
        
                            <div className="flex items-center gap-4 text-white text-xl">
                              <span className="hover:scale-110 transition-transform cursor-pointer">
                                <FiInstagram />
                              </span>
        
                              <span className="hover:scale-110 transition-transform cursor-pointer">
                                <FiTwitter />
                              </span>
        
                              <span className="hover:scale-110 transition-transform cursor-pointer">
                                <FiLinkedin />
                              </span>
                            </div>
        
                          </div>
                        </div>
        
                        {/* CONTENT */}
                        <div className="p-8">
        
                          <p className="text-amber-700 text-sm uppercase tracking-widest mb-2">
                            {member.role}
                          </p>
        
                          <h3 className="text-2xl font-serif text-stone-800 mb-4">
                            {member.name}
                          </h3>
        
                          <p className="text-stone-600 leading-relaxed">
                            {member.bio}
                          </p>
        
                        </div>
                      </motion.div>
                    ))}
        
                  </div>
                </div>
              </section>
   </div>
   
  )
}