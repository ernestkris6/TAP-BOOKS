import React from 'react'
import Counter from "../../helper/Counter";
import coll6 from '../../assets/coll6.jpg'
import coll7 from '../../assets/coll7.jpg'
import coll8 from '../../assets/coll8.jpg'
import coll5 from '../../assets/coll5.jpg'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Writing() {

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
    <div className='bg-white'>
      <div className='pt-18 px-6 lg:px-16'>
        <motion.h1 
        {...fadeUp}
           transition={{
             duration: 0.8,
           }}
        className="font-serif font-medium text-stone-800 text-xl md:text-2xl lg:text-3xl text-center leading-tight">Writing that SPEAKS, Stories that LAST</motion.h1>

        <motion.div 
          {...fadeUp}
           transition={{
             duration: 1,
             delay: 0.2,
           }}
          className='py-5'>
          <p className="text-center text-stone-800">
            {/* Words have the power to linger long after the final page is turned. */}
            Weaving words. Creating lucid images and experiences across diverse storytelling forms."
          </p>
          {/* <p className="text-center text-stone-800">
            Here, you find stories shaped with care, crafted to stir emotions
           beautiful enough to stay with you.
         </p> */}
        </motion.div>
      </div>
              {/* CULTURE SECTION */}
      <section className=" py-24 px-6 lg:px-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
            className="space-y-2 order-2"
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-stone-600">
              THE STORY OF
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-stone-800 leading-tight">
              TAP BOOKS
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              God gives the ideas. We write it!
              Welcome to TAP Books!
              Where storytelling is seamlessly weaved with fun, faith, and interactive learning. We don't just write stories—we build worlds. Dive into our vibrant collection of children’s and YA books, packed with hands-on activities, paper checklists, and engaging word and picture play. We offer a curated selection of compelling general fiction.
              There is a story waiting here for everyone!
              {/* TAP Books was founded on a deep love for storytelling and the belief that words have the power to shape minds and inspire change. Each book we publish is carefully crafted to connect with readers, spark imagination, and leave a meaningful impact long after the final page is turned. */}
            </p>
            
            <p className='text-stone-600 text-base md:text-lg leading-relaxed'>Stories have the power to transform the way we see the world — and at TAP Books, that belief drives everything we do.</p>

            <motion.div 
            {...fadeUp}
               transition={{
                 duration: 1,
                 delay: 0.2,
               }}
            >
             <Link to='about'>
               <button className="group inline-flex items-center gap-2 text-black/80 font-medium border-b-2 border-stone-500 pb-1 hover:gap-3 transition-all duration-300 cursor-pointer">
                 Read More

                 <span className="group-hover:translate-x-1 transition-transform">
                   →
                 </span>
               </button>
             </Link>
            </motion.div>



            <div className="grid grid-cols-2 gap-6 pt-4">

              <div className="bg-blue-200 rounded-md p-6 shadow-sm">
                <h3 className="font-serif text-stone-800 mb-2">
                  <Counter
                 end={10}
                 label="Books Published"
               />
                </h3>
              </div>

              <div className="bg-yellow-300 rounded-md p-6 shadow-sm">
                <h3 className="font-serif text-stone-800 mb-2">
                  <Counter
                 end={4}
                 label="Best Selling Books"
               />
                </h3>
              </div>

            </div>
          </motion.div>


          {/* RIGHT */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-2 gap-5 order-1"
          >

            <div className="space-y-5">
              <img
                src={coll5}
                alt="Team"
                className="rounded-md h-[250px] w-full object-cover"
                loading="lazy"
              />

              <img
                src={coll6}
                alt="Team"
                className="rounded-md h-[250px] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-5">
              <img
                src={coll7}
                alt="Team"
                className="rounded-md h-[250px] w-full object-cover"
                loading="lazy"
              />

              <img
                src={coll8}
                alt="Team"
                className="rounded-md h-[250px] w-full object-cover"
                loading="lazy"
              />
            </div>

          </motion.div>

        </div>
      </section>
    </div>
  )
}















