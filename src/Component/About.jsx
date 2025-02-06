import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS Import
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { SiExpress, SiFramer } from "react-icons/si";
import { useParallax } from "react-scroll-parallax";
import Title from "./shared/Title/Title";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation Duration
      once: true, // Animation only runs once when scrolled into view
    });
  }, []);

  const parallax = useParallax({
    speed: -150,
    translateY: [0, -100],
    easing: "easeInOutQuad",
    startScroll: 0,
    endScroll: 500,
  });
  const parallaxFrontend = useParallax({
    speed: -30,
    translateX: [-80, 0],
    easing: "easeInOutQuad",
    startScroll: 0,
    endScroll: 500,
  });
  const parallaxBackend = useParallax({
    speed: -30,
    translateX: [80, 0],
    easing: "easeInOutQuad",
    startScroll: 0,
    endScroll: 500,
  });

  const iconScrollVariants = {
    animate: {
      x: [850, -820],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "easeIn",
        },
      },
    },
  };

  const iconScrollVariantsReverse = {
    animate: {
      x: [-820, 850],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "easeIn",
        },
      },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16"
      ref={parallax.ref}
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <Title title="About Me" subtitle="Junior Web Developer | Passionate about building responsive,
          user-friendly websites | Specializing in React, Tailwind CSS | Always
          learning to enhance user experiences."/>
  

        <div className="flex flex-col gap-8 mt-10">
          {/* Skill 1 */}
          <motion.div
            ref={parallaxFrontend.ref}
            className="card bg-opacity-50 shadow-inner shadow-slate-400 p-6 text-center"
          >
            <h3 className="text-2xl font-semibold mb-4 ">
              Frontend Development
            </h3>
            <div className="flex justify-center space-x-40 mb-4 overflow-hidden">
              <motion.div variants={iconScrollVariants} animate="animate">
                <FaHtml5 className="text-8xl text-orange-600" />
              </motion.div>
              <motion.div variants={iconScrollVariants} animate="animate">
                <FaCss3Alt className="text-8xl text-blue-600" />
              </motion.div>
              <motion.div variants={iconScrollVariants} animate="animate">
                <FaJs className="text-8xl text-yellow-500" />
              </motion.div>
              <motion.div variants={iconScrollVariants} animate="animate">
                <FaReact className="text-7xl text-blue-500" />
              </motion.div>
              <motion.div variants={iconScrollVariants} animate="animate">
                <SiFramer className="text-7xl text-[#BCBCBC]" />
              </motion.div>
            </div>
            <p className="text-lg text-gray-400">
              I specialize in building dynamic, responsive user interfaces with
              HTML, CSS, JavaScript, and React.
            </p>
          </motion.div>

          {/* Skill 2 */}
          <motion.div
            ref={parallaxBackend.ref}
            className="card bg-opacity-50 shadow-inner shadow-slate-400 p-6 text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Backend Development
            </h3>
            <div className="flex justify-center space-x-40 mb-4 overflow-hidden">
              <motion.div variants={iconScrollVariantsReverse} animate="animate">
                <FaNodeJs className="text-8xl text-green-600" />
              </motion.div>
              <motion.div variants={iconScrollVariantsReverse} animate="animate">
                <SiExpress className="text-8xl text-gray-300" />
              </motion.div>
              <motion.div variants={iconScrollVariantsReverse} animate="animate">
                <FaDatabase className="text-8xl text-gray-400" />
              </motion.div>
              <motion.div variants={iconScrollVariantsReverse} animate="animate">
                <RiFirebaseFill className="text-8xl text-orange-600" />
              </motion.div>
            </div>
            <p className="text-lg text-gray-400">
              I have experience working with server-side technologies such as
              Node.js, Express, and databases like MongoDB.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
