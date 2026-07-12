import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";
import { useForm } from "@formspree/react";
import Toast from "../../helper/Toast";

export default function ContactForm() {

  const fadeUp = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  };


  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

console.log("msg", import.meta.env.VITE_FORMSPREE_ID);

  const [toast, setToast] = useState(null);

  const formRef = useRef(null);


  // SUCCESS MESSAGE
  useEffect(() => {

    if (state.succeeded) {

      setToast({
        type: "success",
        message: "Message sent successfully 🎉",
      });


      if (formRef.current) {
        formRef.current.reset();
      }


      const timer = setTimeout(() => {
        setToast(null);
      }, 4000);


      return () => clearTimeout(timer);
    }


  }, [state.succeeded]);



  // ERROR MESSAGE
  useEffect(() => {

    if (state.errors?.length && !state.submitting) {

      setToast({
        type: "error",
        message: "Something went wrong 😢 Please try again.",
      });

    }

  }, [state.errors, state.submitting]);



  return (

    <>

      {
        toast && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)}
          />
        )
      }



      <div className="px-6 lg:px-20 py-18 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">


        {/* LEFT SIDE */}

        <motion.div
          {...fadeUp}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-stone-800 text-white rounded-xs p-8 lg:p-10 relative overflow-hidden"
        >

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_40%)]" />


          <div className="relative z-10">


            <h2 className="text-xl sm:text-2xl font-serif mb-4 font-medium leading-tight">
              Let’s build something meaningful together.
            </h2>


            <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-8">
              Feel free to reach out to inspire ideas,
              creativity, and growth...
            </p>



            <div className="space-y-6">


              {/* EMAIL */}

              <div className="flex items-start gap-5 border border-white/10 rounded-xs p-5 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500">

                <div className="w-14 h-14 rounded-xs bg-yellow-400 text-black flex items-center justify-center text-2xl shrink-0">
                  <FiMail />
                </div>


                <div>

                  <h3 className="text-base sm:text-lg font-medium mb-1">
                    Email Address
                  </h3>


                  <p className="text-xs sm:text-base text-stone-300">
                    tapbooks2025@gmail.com
                  </p>

                </div>

              </div>





              {/* PHONE */}

              <div className="flex items-start gap-5 border border-white/10 rounded-xs p-5 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500">

                <div className="w-14 h-14 rounded-xs bg-yellow-400 text-black flex items-center justify-center text-2xl shrink-0">
                  <FiPhone />
                </div>


                <div>

                  <h3 className="text-base sm:text-lg font-medium mb-1">
                    Phone Number
                  </h3>


                  <p className="text-xs sm:text-base text-stone-300">
                    +234 701 0757 4608
                  </p>

                </div>

              </div>





              {/* LOCATION */}

              <div className="flex items-start gap-5 border border-white/10 rounded-xs p-5 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500">


                <div className="w-14 h-14 rounded-xs bg-yellow-400 text-black flex items-center justify-center text-2xl shrink-0">
                  <FiMapPin />
                </div>



                <div>

                  <h3 className="text-base sm:text-lg font-medium mb-1">
                    Office Location
                  </h3>


                  <p className="text-xs sm:text-base text-stone-300">
                    Lagos, Nigeria
                  </p>


                </div>


              </div>



            </div>


          </div>


        </motion.div>





        {/* FORM SIDE */}


        <motion.form

          {...fadeUp}

          transition={{ duration: 1, delay: 0.4 }}

          ref={formRef}

          onSubmit={handleSubmit}

          className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-xs shadow-2xl px-4 py-6"

        >


          <h2 className="text-2xl font-serif mb-3 text-stone-800">
            Leave us a message...
          </h2>





          <div className="grid sm:grid-cols-2 gap-5 mb-5">


            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              required
              className="bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
            />



            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              required
              className="bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
            />


          </div>





          <div className="space-y-5">


            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
            />



            <input
              name="subject"
              type="text"
              placeholder="Subject"
              required
              className="w-full bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
            />



            <textarea

              name="message"

              rows="6"

              placeholder="Write your message..."

              required

              className="w-full bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition resize-none"

            />





            <button

              type="submit"

              disabled={state.submitting}

              className="group w-full bg-stone-900 hover:bg-stone-800 disabled:opacity-60 transition-all duration-500 text-white px-8 py-3.5 rounded-xs flex justify-center items-center gap-3 cursor-pointer"

            >

              {
                state.submitting
                ? "Sending..."
                : "Send Message"
              }



              <span className="group-hover:translate-x-1 transition-transform duration-300">

                <FiArrowRight />

              </span>


            </button>



          </div>



        </motion.form>



      </div>

    </>

  );
}




















// import React, {useState, useEffect, useRef} from 'react'
// import { motion } from 'framer-motion';
// import {
//   FiMail,
//   FiPhone,
//   FiMapPin,
//   FiArrowRight,
// } from "react-icons/fi";
// import { useForm, ValidationError } from '@formspree/react';
// import Toast from '../../helper/Toast';

// export default function ContactForm() {

// const fadeUp = {
//     initial: { opacity: 0, y: 80 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true, amount: 0.2 },
//   };


// const [state, handleSubmit] = useForm("mvzzgoqp");
//   const [toast, setToast] = useState(null);
//   const formRef = useRef(null);

//   // ✅ Success handler
//   useEffect(() => {
//   if (state.succeeded) {
//     setToast({
//       type: "success",
//       message: "Message sent successfully 🎉",
//     });

//   }
//   //Reset form
//     formRef.current.reset();
    
// }, [state.succeeded]);

// // ❌ Error handler
//   useEffect(() => {
//     if (state.errors?.length && !state.submitting) {
//       setToast({
//         type: "error",
//         message: "Something went wrong 😢 Please try again.",
//       });
//     }
//   }, [state.errors, state.submitting]);


//   return (
//     <>
//       {toast && (
//         <Toast
//         type={toast.type}
//             message={toast.message}
//             onClose={() => setToast(null)}
//           />
//         )}


//       <div className=" px-6 lg:px-20 py-18 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">

//             {/* LEFT */}
//             <motion.div
//               {...fadeUp}
//               transition={{ duration: 1, delay: 0.2 }}
//               className="bg-stone-800 text-white rounded-xs p-8 lg:p-10 relative overflow-hidden"
//             >

//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_40%)]" />

//               <div className="relative z-10">

//                 <h2 className="text-xl sm:text-2xl font-serif mb-4 font-medium leading-tight">
//                   Let’s build something meaningful together.
//                 </h2>
//                   {/* Connect with Our Team is always open to conversations that inspire ideas,
//                   creativity, and growth. */}

//                 <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-8">
//                   Feel free to reach out to inspire ideas,
//                   creativity, and growth...
//                 </p>

//                 <div className="space-y-6">

//                   <div className="flex items-start gap-5 border border-white/10 rounded-xs p-5 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500">
//                     <div className="w-14 h-14 rounded-xs bg-yellow-400 text-black flex items-center justify-center text-2xl shrink-0">
//                       <FiMail />
//                     </div>

//                     <div>
//                       <h3 className="text-base sm:text-lg font-medium mb-1">Email Address</h3>
//                       <p className="text-xs sm:text-base text-stone-300">
//                         tapbooks2025@gmail.com
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-5 border border-white/10 rounded-xs p-5 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500">
//                     <div className="w-14 h-14 rounded-xs bg-yellow-400 text-black flex items-center justify-center text-2xl shrink-0">
//                       <FiPhone />
//                     </div>

//                     <div>
//                       <h3 className="text-base sm:text-lg font-medium mb-1">Phone Number</h3>
//                       <p className="text-xs sm:text-base text-stone-300">
//                         +234 701 0757 4608
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-5 border border-white/10 rounded-xs p-5 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500">
//                     <div className="w-14 h-14 rounded-xs bg-yellow-400 text-black flex items-center justify-center text-2xl shrink-0">
//                       <FiMapPin />
//                     </div>

//                     <div>
//                       <h3 className="text-base sm:text-lg font-medium mb-1">Office Location</h3>
//                       <p className="text-xs sm:text-base text-stone-300">
//                         Lagos, Nigeria
//                       </p>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </motion.div>

//             {/* FORM */}
//             <motion.div
//               {...fadeUp}
//               transition={{ duration: 1, delay: 0.4 }}
//               className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-xs shadow-2xl px-4 py-6"
//               ref={formRef}
//               onSubmit={handleSubmit}
//             >

//               <h2 className="text-2xl font-serif mb-3 text-stone-800">
//                 Leave us a message...
//               </h2>

//               {/* <p className="text-stone-600 mb-8 leading-relaxed">
//                 Fill out the form below and our team will get back to you shortly.
//               </p> */}

//               <div className="grid sm:grid-cols-2 gap-5 mb-5">
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   className="bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   className="bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
//                 />
//               </div>

//               <div className="space-y-5">
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   className="w-full bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
//                 />

//                 <textarea
//                   rows="6"
//                   placeholder="Write your message..."
//                   className="w-full bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition resize-none"
//                 />

//                 <button className="group w-full bg-stone-900  hover:bg-stone-800 hover:px-10 transition-all duration-500 text-white px-8 py-3.5 rounded-xs flex justify-center items-center gap-3 cursor-pointer">
//                   Send Message

//                   <span className="group-hover:translate-x-1 transition-transform duration-300">
//                     <FiArrowRight />
//                   </span>
//                 </button>
//               </div>

//             </motion.div>
//           </div>
//         </>
//   )
// }
