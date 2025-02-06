import { motion } from "framer-motion";
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

const BackgroundAnimation = () => {
  const codeSnippets = [
    <FaHtml5 className="text-4xl opacity-30 text-orange-600" key="html5" />,
    <FaCss3Alt className="text-4xl opacity-30 text-blue-600" key="css3" />,
    <FaJs className="text-4xl opacity-30 text-yellow-500" key="js" />,
    <FaReact className="text-4xl opacity-30 text-blue-400" key="react" />,
    <FaNodeJs className="text-4xl opacity-30 text-green-500" key="nodejs" />,
    <SiExpress className="text-4xl opacity-30 text-gray-500" key="express" />,
    <RiFirebaseFill className="text-4xl opacity-30 text-yellow-600" key="firebase" />,
    <SiFramer className="text-4xl opacity-30 text-pink-500" key="framer" />,
    <FaDatabase className="text-4xl opacity-30 text-purple-600" key="database" />,
    <FaHtml5 className="text-4xl opacity-30 text-orange-600" key="html5" />,
    <FaCss3Alt className="text-4xl opacity-30 text-blue-600" key="css3" />,
    <FaJs className="text-4xl opacity-30 text-yellow-500" key="js" />,
    <FaReact className="text-4xl opacity-30 text-blue-400" key="react" />,
    <FaNodeJs className="text-4xl opacity-30 text-green-500" key="nodejs" />,
    <SiExpress className="text-4xl opacity-30 text-gray-500" key="express" />,
    <RiFirebaseFill className="text-4xl opacity-30 text-yellow-600" key="firebase" />,
    <SiFramer className="text-4xl opacity-30 text-pink-500" key="framer" />,
    <FaDatabase className="text-4xl opacity-30 text-purple-600" key="database" />,
    <FaHtml5 className="text-4xl opacity-30 text-orange-600" key="html5" />,
    <FaCss3Alt className="text-4xl opacity-30 text-blue-600" key="css3" />,
    <FaJs className="text-4xl opacity-30 text-yellow-500" key="js" />,
    <FaReact className="text-4xl opacity-30 text-blue-400" key="react" />,
    <FaNodeJs className="text-4xl opacity-30 text-green-500" key="nodejs" />,
    <SiExpress className="text-4xl opacity-30 text-gray-500" key="express" />,
    <RiFirebaseFill className="text-4xl opacity-30 text-yellow-600" key="firebase" />,
    <SiFramer className="text-4xl opacity-30 text-pink-500" key="framer" />,
    <FaDatabase className="text-4xl opacity-30 text-purple-600" key="database" />,
  ];

  return (
    <div className="fixed inset-0 bg-black overflow-hidden z-[-1]">
      {codeSnippets.map((snippet, i) => {
        const randomDuration = Math.random() * 10 + 5; 
        const randomX = Math.random() * 1300 - 650; 
        const randomY = Math.random() * 700 - 350; 

        return (
          <motion.div
            key={i}
            className="absolute text-xs font-mono"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
            animate={{
              rotate: [0, 360],
              x: [randomX, -randomX],
              y: [randomY, -randomY],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            }}
          >
            {snippet}
          </motion.div>
        );
      })}

      {/* Background Grid */}
      <motion.div
        className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1, transition: { duration: 2 } }}
      >
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="w-full h-full bg-green-900 opacity-10 border border-green-700"
            whileHover={{ opacity: 0.5 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BackgroundAnimation;
