import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiAlertCircle,
} from "react-icons/fi";
import { useForm } from "@formspree/react";
import Toast from "../../helper/Toast";

//mvzzgoqp

export default function ContactForm() {
  const fadeUp = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  };

  const [state, handleSubmit] = useForm(
    import.meta.env.VITE_FORMSPREE_ID || "mrpbbjnz"
  );

  const [toast, setToast] = useState(null);

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const formRef = useRef(null);

  const toastTimerRef = useRef(null);

  /*
   * --------------------------------------------------
   * SHOW TOAST
   * --------------------------------------------------
   */

  const showToast = (type, message) => {
    try {
      setToast({
        type,
        message,
      });

      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }

      toastTimerRef.current = setTimeout(() => {
        setToast(null);
      }, 4000);
    } catch (error) {
      console.error("Toast error:", error);
    }
  };

  /*
   * --------------------------------------------------
   * CLEANUP TOAST TIMER
   * --------------------------------------------------
   */

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  /*
   * --------------------------------------------------
   * HANDLE INPUT CHANGE
   * --------------------------------------------------
   */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove the individual error as soon as
    // the user starts correcting the field.
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  /*
   * --------------------------------------------------
   * VALIDATE FORM
   * --------------------------------------------------
   */

  const validateForm = () => {
    const newErrors = {};

    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    /*
     * FIRST NAME
     */

    if (!firstName) {
      newErrors.firstName = "First name is required.";
    } else if (firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 characters.";
    }

    /*
     * LAST NAME
     */

    if (!lastName) {
      newErrors.lastName = "Last name is required.";
    } else if (lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters.";
    }

    /*
     * EMAIL
     */

    if (!email) {
      newErrors.email = "Email address is required.";
    } else {
      const emailRegex =
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    /*
     * SUBJECT
     */

    if (!subject) {
      newErrors.subject = "Subject is required.";
    } else if (subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    /*
     * MESSAGE
     */

    if (!message) {
      newErrors.message = "Message is required.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /*
   * --------------------------------------------------
   * FORM SUBMISSION
   * --------------------------------------------------
   */

  const onSubmit = async (e) => {
    e.preventDefault();

    /*
     * Prevent duplicate submissions.
     */

    if (state.submitting) {
      return;
    }

    /*
     * Validate before sending anything
     * to Formspree.
     */

    const isValid = validateForm();

    if (!isValid) {
      showToast(
        "error",
        "Please correct the highlighted fields and try again."
      );

      return;
    }

    try {
      await handleSubmit(e);
    } catch (error) {
      console.error("Form submission error:", error);

      showToast(
        "error",
        "Something went wrong 😢 Please try again."
      );
    }
  };

  /*
   * --------------------------------------------------
   * SUCCESS HANDLER
   * --------------------------------------------------
   */

  useEffect(() => {
    if (!state.succeeded) {
      return;
    }

    try {
      showToast(
        "success",
        "Message sent successfully 🎉"
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Success handling error:", error);
    }
  }, [state.succeeded]);

  /*
   * --------------------------------------------------
   * FORM SUBMISSION ERROR HANDLER
   * --------------------------------------------------
   */

  useEffect(() => {
    if (
      state.errors &&
      state.errors.length > 0 &&
      !state.submitting &&
      !state.succeeded
    ) {
      showToast(
        "error",
        "Something went wrong 😢 Please try again."
      );
    }
  }, [
    state.errors,
    state.submitting,
    state.succeeded,
  ]);

  /*
   * --------------------------------------------------
   * FORM INPUT STYLES
   * --------------------------------------------------
   */

  const inputClass =
    "w-full bg-white border rounded-xs px-5 py-3 outline-none transition";

  const normalInput =
    "border-stone-200 focus:border-stone-800";

  const errorInput =
    "border-red-400 focus:border-red-500";

  return (
    <>
      {/* TOAST */}

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <div className="px-6 lg:px-20 py-18 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">

        {/* =====================================================
            LEFT SIDE
        ====================================================== */}

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

        {/* =====================================================
            FORM SIDE
        ====================================================== */}

        <motion.form
          {...fadeUp}
          transition={{ duration: 1, delay: 0.4 }}
          ref={formRef}
          onSubmit={onSubmit}
          noValidate
          className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-xs shadow-2xl px-4 py-6"
        >

          <h2 className="text-2xl font-serif mb-3 text-stone-800">
            Leave us a message...
          </h2>

          {/* FIRST NAME / LAST NAME */}

          <div className="grid sm:grid-cols-2 gap-5 mb-5">

            {/* FIRST NAME */}

            <div>

              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                aria-invalid={!!errors.firstName}
                aria-describedby={
                  errors.firstName
                    ? "firstName-error"
                    : undefined
                }
                className={`${inputClass} ${
                  errors.firstName
                    ? errorInput
                    : normalInput
                }`}
              />

              {errors.firstName && (
                <p
                  id="firstName-error"
                  className="flex items-center gap-1 mt-1.5 text-xs text-red-500"
                >
                  <FiAlertCircle />
                  {errors.firstName}
                </p>
              )}

            </div>

            {/* LAST NAME */}

            <div>

              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                aria-invalid={!!errors.lastName}
                aria-describedby={
                  errors.lastName
                    ? "lastName-error"
                    : undefined
                }
                className={`${inputClass} ${
                  errors.lastName
                    ? errorInput
                    : normalInput
                }`}
              />

              {errors.lastName && (
                <p
                  id="lastName-error"
                  className="flex items-center gap-1 mt-1.5 text-xs text-red-500"
                >
                  <FiAlertCircle />
                  {errors.lastName}
                </p>
              )}

            </div>

          </div>

          <div className="space-y-5">

            {/* EMAIL */}

            <div>

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={
                  errors.email
                    ? "email-error"
                    : undefined
                }
                className={`${inputClass} ${
                  errors.email
                    ? errorInput
                    : normalInput
                }`}
              />

              {errors.email && (
                <p
                  id="email-error"
                  className="flex items-center gap-1 mt-1.5 text-xs text-red-500"
                >
                  <FiAlertCircle />
                  {errors.email}
                </p>
              )}

            </div>

            {/* SUBJECT */}

            <div>

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                aria-invalid={!!errors.subject}
                aria-describedby={
                  errors.subject
                    ? "subject-error"
                    : undefined
                }
                className={`${inputClass} ${
                  errors.subject
                    ? errorInput
                    : normalInput
                }`}
              />

              {errors.subject && (
                <p
                  id="subject-error"
                  className="flex items-center gap-1 mt-1.5 text-xs text-red-500"
                >
                  <FiAlertCircle />
                  {errors.subject}
                </p>
              )}

            </div>

            {/* MESSAGE */}

            <div>

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={
                  errors.message
                    ? "message-error"
                    : undefined
                }
                className={`${inputClass} ${
                  errors.message
                    ? errorInput
                    : normalInput
                } resize-none`}
              />

              {errors.message && (
                <p
                  id="message-error"
                  className="flex items-center gap-1 mt-1.5 text-xs text-red-500"
                >
                  <FiAlertCircle />
                  {errors.message}
                </p>
              )}

            </div>

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              disabled={state.submitting}
              className="group w-full bg-stone-900 hover:bg-stone-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-500 text-white px-8 py-3.5 rounded-xs flex justify-center items-center gap-3 cursor-pointer"
            >

              {state.submitting ? (
                <>
                  <span
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                    aria-hidden="true"
                  />

                  Sending...
                </>
              ) : (
                <>
                  Send Message

                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    <FiArrowRight />
                  </span>
                </>
              )}

            </button>

          </div>
        </motion.form>

      </div>
    </>
  );
}



























// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import {
//   FiMail,
//   FiPhone,
//   FiMapPin,
//   FiArrowRight,
// } from "react-icons/fi";
// import { useForm } from "@formspree/react";
// import Toast from "../../helper/Toast";

// export default function ContactForm() {

//   const fadeUp = {
//     initial: { opacity: 0, y: 80 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true, amount: 0.2 },
//   };



// const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID || "mvzzgoqp");

// // console.log("msg", import.meta.env.VITE_FORMSPREE_ID);

//   const [toast, setToast] = useState(null);

//   const formRef = useRef(null);


//   // SUCCESS MESSAGE
//   useEffect(() => {

//     if (state.succeeded) {

//       if(!state.succeeded) return;

//       setToast({
//         type: "success",
//         message: "Message sent successfully 🎉",
//       });


//       if (formRef.current) {
//         formRef.current.reset();
//       }


//       const timer = setTimeout(() => {
//         setToast(null);
//       }, 4000);


//       return () => clearTimeout(timer);
//     }


//   }, [state.succeeded]);



//   // ERROR MESSAGE
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

//       {
//         toast && (
//           <Toast
//             type={toast.type}
//             message={toast.message}
//             onClose={() => setToast(null)}
//           />
//         )
//       }



//       <div className="px-6 lg:px-20 py-18 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">


//         {/* LEFT SIDE */}

//         <motion.div
//           {...fadeUp}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="bg-stone-800 text-white rounded-xs p-8 lg:p-10 relative overflow-hidden"
//         >

//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_40%)]" />


//           <div className="relative z-10">


//             <h2 className="text-xl sm:text-2xl font-serif mb-4 font-medium leading-tight">
//               Let’s build something meaningful together.
//             </h2>


//             <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-8">
//               Feel free to reach out to inspire ideas,
//               creativity, and growth...
//             </p>



//             <div className="space-y-6">


//               {/* EMAIL */}

//               <div className="flex items-start gap-5 border border-white/10 rounded-xs p-5 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500">

//                 <div className="w-14 h-14 rounded-xs bg-yellow-400 text-black flex items-center justify-center text-2xl shrink-0">
//                   <FiMail />
//                 </div>


//                 <div>

//                   <h3 className="text-base sm:text-lg font-medium mb-1">
//                     Email Address
//                   </h3>


//                   <p className="text-xs sm:text-base text-stone-300">
//                     tapbooks2025@gmail.com
//                   </p>

//                 </div>

//               </div>





//               {/* PHONE */}

//               <div className="flex items-start gap-5 border border-white/10 rounded-xs p-5 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500">

//                 <div className="w-14 h-14 rounded-xs bg-yellow-400 text-black flex items-center justify-center text-2xl shrink-0">
//                   <FiPhone />
//                 </div>


//                 <div>

//                   <h3 className="text-base sm:text-lg font-medium mb-1">
//                     Phone Number
//                   </h3>


//                   <p className="text-xs sm:text-base text-stone-300">
//                     +234 701 0757 4608
//                   </p>

//                 </div>

//               </div>





//               {/* LOCATION */}

//               <div className="flex items-start gap-5 border border-white/10 rounded-xs p-5 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500">


//                 <div className="w-14 h-14 rounded-xs bg-yellow-400 text-black flex items-center justify-center text-2xl shrink-0">
//                   <FiMapPin />
//                 </div>



//                 <div>

//                   <h3 className="text-base sm:text-lg font-medium mb-1">
//                     Office Location
//                   </h3>


//                   <p className="text-xs sm:text-base text-stone-300">
//                     Lagos, Nigeria
//                   </p>


//                 </div>


//               </div>



//             </div>


//           </div>


//         </motion.div>





//         {/* FORM SIDE */}


//         <motion.form

//           {...fadeUp}

//           transition={{ duration: 1, delay: 0.4 }}

//           ref={formRef}

//           onSubmit={handleSubmit}

//           className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-xs shadow-2xl px-4 py-6"

//         >


//           <h2 className="text-2xl font-serif mb-3 text-stone-800">
//             Leave us a message...
//           </h2>





//           <div className="grid sm:grid-cols-2 gap-5 mb-5">


//             <input
//               name="firstName"
//               type="text"
//               placeholder="First Name"
//               required
//               className="bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
//             />



//             <input
//               name="lastName"
//               type="text"
//               placeholder="Last Name"
//               required
//               className="bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
//             />


//           </div>





//           <div className="space-y-5">


//             <input
//               name="email"
//               type="email"
//               placeholder="Email Address"
//               required
//               className="w-full bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
//             />



//             <input
//               name="subject"
//               type="text"
//               placeholder="Subject"
//               required
//               className="w-full bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition"
//             />



//             <textarea

//               name="message"

//               rows="6"

//               placeholder="Write your message..."

//               required

//               className="w-full bg-white border border-stone-200 rounded-xs px-5 py-3 outline-none focus:border-stone-800 transition resize-none"

//             />





//             <button

//               type="submit"

//               disabled={state.submitting}

//               className="group w-full bg-stone-900 hover:bg-stone-800 disabled:opacity-60 transition-all duration-500 text-white px-8 py-3.5 rounded-xs flex justify-center items-center gap-3 cursor-pointer"

//             >

//               {
//                 state.submitting
//                 ? "Sending..."
//                 : "Send Message"
//               }



//               <span className="group-hover:translate-x-1 transition-transform duration-300">

//                 <FiArrowRight />

//               </span>


//             </button>



//           </div>

//         </motion.form>

//       </div>

//     </>

//   );
// }




















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
