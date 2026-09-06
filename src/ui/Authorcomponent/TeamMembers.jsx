import { motion } from "framer-motion";
import Temi from "../../assets/Temilorun.jpg";
import rol from "../../assets/rol.jpg";
import vic from "../../assets/vic.jpg";
import temi2 from "../../assets/temi2.png";
import Joshua from "../../assets/Joshua.jpg";
import Adediran from "../../assets/Adediran.jpg";

import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

const teamMembers = [
  {
    name: "Temilorun Adebiyi Priscilla",
    role: "Creative Writer",
    image: Temi,
    bio: "Adebiyi Temilorun Priscilla writes Children’s and Young Adults literature With a B.Ed. in Educational Management from Obafemi Awolowo University and a professional background in Human Resources (ACIPM), When she isn’t writing or watching children play, she is an aspiring pro athlete in volleyball and badminton. ",
  },
  
  {
    name: "Adediran Progress",
    role: "Children's Book Illustrator",
    image: Adediran,
    bio: "Adediran Progress Oluwatobiloba is a graduate of the department of Architecture O.A.U and an Illustrator with a passion for visual story telling and art.",
  },
  
  {
    name: "Victor Pelumi Akintade",
    role: "Y.A Developmental & Line Editor/Legal Personnel",
    image: vic,
    bio: "Akintade Jesupelumi Victor is a Lawyer and Content Strategist that help brands build authority with the right kind of content. When he isn't writing and strategizing, he is reading a book, watching anime or discussing scriptures.",
  },
  
  {
    name: "Rolake Ogunfeitimi",
    role: "Y.A Editor & Proof Reader",
    image: rol,
    bio: "Rolake Ogunfeitimi is a writer, communications professional, and creative storyteller with experience in media, branding, and strategic communications. She is passionate about meaningful storytelling, creativity, and using communication to inspire impact and connection. She enjoys editing, creative writing, and helping bring projects to life through thoughtful feedback and attention to detail. As a contribution to the team, she supports content development by reviewing and refining written materials, polishing copy, and ensuring clarity and consistency.",
  },
  {
    name: "Adewoyin Temiloluwa",
    role: "Children's Book Editor",
    image: temi2,
    bio: "Adewoyin Temiloluwa Omoladearugbo is a Student of Philosophy at the University of Ibadan with a passion for critical thinking, creativity, and meaningful expression. Alongside academic interests in philosophy, writing poems, and reading books. Temi is also an editor with a keen eye for detail and storytelling. Known for blending intellect with creativity, Temi enjoys writing, content creation, and exploring deep conversations that connect ideas, people, and society.",
  },

  {
    name: "Joshua Comanche",
    role: "Y.A Novel Sports Editor",
    image: Joshua,
    bio: "Joshua enjoys playing a lot of sports , volleyball included and fears God. He has a background in software engineering and spends most of the time working as a Q.A engineer. When not working, he is fun to have around and has a number of hobbies. He keeps himself company by watching movies/series , playing games , conversations etc.",
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
   <div id='team'>
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
                      that helps us deliver beautiful experiences.
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