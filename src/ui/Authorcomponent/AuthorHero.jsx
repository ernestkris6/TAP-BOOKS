// # Creative Meet The Team Page (React + Tailwind CSS)

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

export default function MeetTeam() {

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
    <div className="bg-[#faf7f2] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[#f7f1e8] via-[#fdfbf7] to-[#efe3d3]">

        <div className="absolute top-10 left-10 w-40 h-40 bg-amber-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-orange-200/40 rounded-full blur-3xl" />

        <div className="mx-auto text-center relative z-10">

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.3em] text-sm text-stone-600 mb-5"
          >
            Meet The Team
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-stone-800 leading-tight"
          >
            The creative minds 
            behind 
            <br />
            Our Brand.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We are a passionate team of creators, strategists, designers and developers
            committed to building experiences that inspire people and elevate brands.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10"
          >
            <button className="group bg-stone-900 text-white px-8 py-4 rounded-xs inline-flex items-center gap-3 hover:px-10 transition-all duration-500 cursor-pointer">
              Explore Our Team

              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <FiArrowRight />
              </span>
            </button>
          </motion.div>

        </div>
      </section>


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
                className="group bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
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


      {/* CULTURE SECTION */}
      <section className="py-24 px-6 lg:px-16 bg-[#f3ece3]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <p className="uppercase tracking-[0.3em] text-sm text-stone-600">
              Our Culture
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 leading-tight">
              Collaboration fuels
              everything we create.
            </h2>

            <p className="text-stone-600 text-lg leading-relaxed">
              We believe the best work comes from teamwork, trust and shared creativity.
              From strategy to execution, every project is shaped by collaboration and passion.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-4xl font-serif text-stone-800 mb-2">
                  25+
                </h3>

                <p className="text-stone-600">
                  Creative Projects
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-4xl font-serif text-stone-800 mb-2">
                  10+
                </h3>

                <p className="text-stone-600">
                  Industry Experts
                </p>
              </div>

            </div>
          </motion.div>


          {/* RIGHT */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >

            <div className="space-y-5">
              <img
                src={image1}
                alt="Team"
                className="rounded-[30px] h-[250px] w-full object-cover"
                loading="lazy"
              />

              <img
                src={image3}
                alt="Team"
                className="rounded-[30px] h-[180px] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-5 pt-12">
              <img
                src={image5}
                alt="Team"
                className="rounded-[30px] h-[180px] w-full object-cover"
                loading="lazy"
              />

              <img
                src={image2}
                alt="Team"
                className="rounded-[30px] h-[250px] w-full object-cover"
                loading="lazy"
              />
            </div>

          </motion.div>

        </div>
      </section>


      {/* FINAL CTA SECTION */}
      <section className="relative py-28 px-6 lg:px-16 overflow-hidden bg-stone-900 text-white">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl" />

        <motion.div
          {...fadeUp}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >

          <p className="uppercase tracking-[0.3em] text-sm text-stone-300 mb-6">
            Work With Us
          </p>

          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            Let’s create something
            extraordinary together.
          </h2>

          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you're building a brand, launching a product or creating
            a digital experience, our team is ready to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

            <button className="bg-white text-stone-900 px-8 py-4 rounded-xs font-medium hover:px-10 transition-all duration-500 cursor-pointer">
              Start A Project
            </button>

            <button className="border border-white/30 px-8 py-4 rounded-xs hover:bg-white hover:text-stone-900 transition-all duration-500 cursor-pointer">
              Join Our Team
            </button>

          </div>

        </motion.div>
      </section>

    </div>
  );
}

// import { motion } from "framer-motion";

// import image1 from "../../assets/abtbg.webp";
// import image2 from "../../assets/image2.webp";
// import image3 from "../../assets/image3.webp";
// import image4 from "../../assets/image4.webp";
// import image5 from "../../assets/image5.webp";
// import image6 from "../../assets/image5.webp";

// import {
//   FiInstagram,
//   FiTwitter,
//   FiLinkedin,
//   FiArrowRight,
// } from "react-icons/fi";

// const teamMembers = [
//   {
//     name: "Sophia Williams",
//     role: "Creative Director",
//     image: image1,
//     bio: "Leads the brand vision and ensures every project feels timeless, elegant and impactful.",
//   },

//   {
//     name: "Daniel Carter",
//     role: "Frontend Developer",
//     image: image2,
//     bio: "Builds smooth, responsive interfaces that bring digital experiences to life beautifully.",
//   },

//   {
//     name: "Amara Johnson",
//     role: "Product Designer",
//     image: image3,
//     bio: "Designs intuitive user experiences with modern layouts and thoughtful visual storytelling.",
//   },

//   {
//     name: "Michael Brown",
//     role: "Backend Engineer",
//     image: image4,
//     bio: "Handles APIs, databases and architecture powering reliable scalable platforms.",
//   },

//   {
//     name: "Grace Thompson",
//     role: "Marketing Strategist",
//     image: image5,
//     bio: "Crafts campaigns that connect emotionally and help brands grow authentically.",
//   },

//   {
//     name: "David Smith",
//     role: "Project Manager",
//     image: image6,
//     bio: "Keeps projects organized, collaborative and delivered with excellence every time.",
//   },
// ];

// export default function MeetTeam() {

//   const fadeUp = {
//     initial: {
//       opacity: 0,
//       y: 80,
//     },

//     whileInView: {
//       opacity: 1,
//       y: 0,
//     },

//     viewport: {
//       once: true,
//       amount: 0.2,
//     },
//   };

//   return (
//     <div className="bg-[#faf7f2] overflow-hidden">

//       {/* HERO SECTION */}
//       <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[#f7f1e8] via-[#fdfbf7] to-[#efe3d3]">

//         <div className="absolute top-10 left-10 w-40 h-40 bg-amber-200/40 rounded-full blur-3xl" />
//         <div className="absolute bottom-10 right-10 w-52 h-52 bg-orange-200/40 rounded-full blur-3xl" />

//         <div className="max-w-5xl mx-auto text-center relative z-10">

//           <motion.p
//             {...fadeUp}
//             transition={{ duration: 0.8 }}
//             className="uppercase tracking-[0.3em] text-sm text-stone-600 mb-5"
//           >
//             Meet The Team
//           </motion.p>

//           <motion.h1
//             {...fadeUp}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-stone-800 leading-tight"
//           >
//             The creative minds
//             <br />
//             behind our brand.
//           </motion.h1>

//           <motion.p
//             {...fadeUp}
//             transition={{ duration: 1, delay: 0.4 }}
//             className="mt-8 text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed"
//           >
//             We are a passionate team of creators, strategists, designers and developers
//             committed to building experiences that inspire people and elevate brands.
//           </motion.p>

//           <motion.div
//             {...fadeUp}
//             transition={{ duration: 1, delay: 0.6 }}
//             className="mt-10"
//           >
//             <button className="group bg-stone-900 text-white px-8 py-4 rounded-full inline-flex items-center gap-3 hover:px-10 transition-all duration-500 cursor-pointer">
//               Explore Our Team

//               <span className="group-hover:translate-x-1 transition-transform duration-300">
//                 <FiArrowRight />
//               </span>
//             </button>
//           </motion.div>

//         </div>
//       </section>


//       {/* TEAM GRID SECTION */}
//       <section className="py-24 px-6 lg:px-16">

//         <div className="max-w-7xl mx-auto">

//           <motion.div
//             {...fadeUp}
//             transition={{ duration: 1 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-5">
//               Built by passionate people
//             </h2>

//             <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed text-lg">
//               Every member of our team brings unique creativity, energy and expertise
//               that helps us deliver unforgettable experiences.
//             </p>
//           </motion.div>


//           {/* TEAM CARDS */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={index}
//                 {...fadeUp}
//                 transition={{
//                   duration: 1,
//                   delay: index * 0.1,
//                 }}
//                 className="group bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
//               >

//                 {/* IMAGE */}
//                 <div className="overflow-hidden relative">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
//                     loading="lazy"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">

//                     <div className="flex items-center gap-4 text-white text-xl">
//                       <span className="hover:scale-110 transition-transform cursor-pointer">
//                         <FiInstagram />
//                       </span>

//                       <span className="hover:scale-110 transition-transform cursor-pointer">
//                         <FiTwitter />
//                       </span>

//                       <span className="hover:scale-110 transition-transform cursor-pointer">
//                         <FiLinkedin />
//                       </span>
//                     </div>

//                   </div>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-8">

//                   <p className="text-amber-700 text-sm uppercase tracking-widest mb-2">
//                     {member.role}
//                   </p>

//                   <h3 className="text-2xl font-serif text-stone-800 mb-4">
//                     {member.name}
//                   </h3>

//                   <p className="text-stone-600 leading-relaxed">
//                     {member.bio}
//                   </p>

//                 </div>
//               </motion.div>
//             ))}

//           </div>
//         </div>
//       </section>


//       {/* CULTURE SECTION */}
//       <section className="py-24 px-6 lg:px-16 bg-[#f3ece3]">

//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT */}
//           <motion.div
//             {...fadeUp}
//             transition={{ duration: 1 }}
//             className="space-y-8"
//           >
//             <p className="uppercase tracking-[0.3em] text-sm text-stone-600">
//               Our Culture
//             </p>

//             <h2 className="text-4xl md:text-5xl font-serif text-stone-800 leading-tight">
//               Collaboration fuels
//               everything we create.
//             </h2>

//             <p className="text-stone-600 text-lg leading-relaxed">
//               We believe the best work comes from teamwork, trust and shared creativity.
//               From strategy to execution, every project is shaped by collaboration and passion.
//             </p>

//             <div className="grid grid-cols-2 gap-6 pt-4">

//               <div className="bg-white rounded-2xl p-6 shadow-sm">
//                 <h3 className="text-4xl font-serif text-stone-800 mb-2">
//                   25+
//                 </h3>

//                 <p className="text-stone-600">
//                   Creative Projects
//                 </p>
//               </div>

//               <div className="bg-white rounded-2xl p-6 shadow-sm">
//                 <h3 className="text-4xl font-serif text-stone-800 mb-2">
//                   10+
//                 </h3>

//                 <p className="text-stone-600">
//                   Industry Experts
//                 </p>
//               </div>

//             </div>
//           </motion.div>


//           {/* RIGHT */}
//           <motion.div
//             {...fadeUp}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="grid grid-cols-2 gap-5"
//           >

//             <div className="space-y-5">
//               <img
//                 src={image1}
//                 alt="Team"
//                 className="rounded-[30px] h-[250px] w-full object-cover"
//                 loading="lazy"
//               />

//               <img
//                 src={image3}
//                 alt="Team"
//                 className="rounded-[30px] h-[180px] w-full object-cover"
//                 loading="lazy"
//               />
//             </div>

//             <div className="space-y-5 pt-12">
//               <img
//                 src={image5}
//                 alt="Team"
//                 className="rounded-[30px] h-[180px] w-full object-cover"
//                 loading="lazy"
//               />

//               <img
//                 src={image2}
//                 alt="Team"
//                 className="rounded-[30px] h-[250px] w-full object-cover"
//                 loading="lazy"
//               />
//             </div>

//           </motion.div>

//         </div>
//       </section>

//     </div>
//   );
// }

// ## Features Included

// * Fully responsive layout
// * Creative hero section
// * Animated Framer Motion reveals
// * Team member cards
// * Hover social overlays
// * Responsive grid system
// * Modern luxury UI
// * Smooth hover transitions
// * Culture/about section
// * Mobile optimized
// * Lazy-loaded images for performance

















// import React from 'react'

// export default function AuthorHero() {
//   return (
//     <div>AuthorHero</div>
//   )
// }