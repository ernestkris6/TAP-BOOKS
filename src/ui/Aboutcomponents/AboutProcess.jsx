import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineBookOpen,
  HiOutlinePencilSquare,
  HiOutlinePaintBrush,
  HiOutlineArchiveBox,
  HiOutlineLightBulb,
  HiOutlineArrowTrendingUp,
  HiOutlineSparkles,
} from "react-icons/hi2";

export default function AboutProcess() {

const fadeUp = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  };

  const process = [
    {
      title: "Story",
      icon: HiOutlineBookOpen,
      text: "Every great book begins with an inspired idea. We nurture stories that educate, inspire, and leave a lasting impression.",
    },
    {
      title: "Editing",
      icon: HiOutlinePencilSquare,
      text: "Our editors carefully refine every manuscript, ensuring clarity, excellence, and consistency while preserving the author's unique voice.",
    },
    {
      title: "Illustration",
      icon: HiOutlinePaintBrush,
      text: "Illustrators transform words into captivating visual experiences that enrich every page and bring stories to life.",
    },
    {
      title: "Publication",
      icon: HiOutlineArchiveBox,
      text: "Every contribution comes together to produce books that reflect creativity, quality, and meaningful impact.",
    },
  ];

  const values = [
    {
      title: "Ingenuity",
      icon: HiOutlineLightBulb,
      description:
        "Creativity begins with authenticity. We celebrate every individual's unique perspective and believe our greatest strength comes from people being fully themselves.",
    },
    {
      title: "Growth",
      icon: HiOutlineArrowTrendingUp,
      description:
        "We respect where we are today but never settle. Continuous learning, intentional improvement, and collaboration drive both our people and our organization forward.",
    },
    {
      title: "Impact",
      icon: HiOutlineSparkles,
      description:
        "We don't simply publish books—we create meaningful experiences that educate, inspire, build character, and positively shape communities for generations.",
    },
  ];





  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">
          <motion.p 
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2, }}
            className="uppercase tracking-[0.35em] text-stone-700 font-medium">
            The Process
          </motion.p>

          <motion.h2 
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.4, }}
            className="mt-4 text-2xl md:text-3xl font-semibold text-stone-800">
            Every Great Book Begins With a Process
          </motion.h2>

          <motion.p 
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg leading-8 text-gray-600">
            At <span className="font-semibold">TAP Books</span>, every story
            journeys from a simple idea to a published masterpiece. Each stage
            of our workflow is intentional, collaborative, and driven by
            excellence, ensuring every contributor's creativity is recognized
            and valued.
          </motion.p>
        </div>

        {/* Process */}

        <div className="relative mt-20">

          {/* Desktop Connecting Line */}

          <div className="absolute left-20 right-20 top-10 hidden h-0.5 bg-yellow-400 lg:block"></div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-stone-800">
                    <Icon className="h-10 w-10 text-yellow-400" />
                  </div>

                  <h3 className="mt-6 text-center text-2xl font-medium text-stone-800">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-center leading-7 text-gray-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Values */}

        <div className="mt-28 text-center">
          <motion.p 
            {...fadeUp}
            transition={{ duration: 0.8,
                delay: 0.2,
             }}
            className="uppercase tracking-[0.35em] text-yellow-400 font-semibold">
            Our Core Values
          </motion.p>

          <motion.h2 
            {...fadeUp}
            transition={{ duration: 0.8, 
                delay: 0.4,
             }}
            className="mt-4 text-5xl font-serif font-medium text-stone-800">
            I.G.I
          </motion.h2>

          <motion.p 
          {...fadeUp}
          transition={{ duration: 0.8,
            delay: 0.6
           }}
          className="mt-3 text-xl text-gray-500">
            Ingenuity • Growth • Impact
          </motion.p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-stone-800 transition-all duration-300 group-hover:bg-yellow-400">
                  <Icon className="h-10 w-10 text-yellow-400 transition-all duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-8 text-3xl font-medium text-stone-800">
                  {item.title}
                </h3>

                <p className="mt-6 leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="mt-24 overflow-hidden rounded-lg bg-stone-800 px-10 py-16 text-center text-white shadow-xl">

          <motion.h2 
          {...fadeUp}
          transition={{ duration: 0.8,
            delay: 0.2
           }}
          className="text-3xl font-medium md:text-4xl">
            Every Story Matters. Every Team Member Matters.
          </motion.h2>

          <motion.p 
          {...fadeUp}
          transition={{ duration: 0.8,
            delay: 0.4
           }}
          className="mx-auto mt-6 max-w-3xl leading-8 text-white/90">
            From the first spark of imagination to the final published page,
            TAP Books celebrates collaboration, creativity, and excellence.
            Together we transform ideas into stories that educate, inspire,
            build character, and leave a lasting legacy for generations.
          </motion.p>

          <div className="mt-10 inline-flex rounded-sm bg-white/20 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm sm:text-base font-semibold tracking-wider uppercase">
              Creativity • Excellence • Legacy
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}