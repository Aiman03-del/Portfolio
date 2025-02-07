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
const skills = [
  { component: FaHtml5, color: "text-orange-600" },
  { component: FaCss3Alt, color: "text-blue-600" },
  { component: FaJs, color: "text-yellow-500" },
  { component: FaReact, color: "text-blue-500" },
  { component: SiFramer, color: "text-[#BCBCBC]" },
  { component: FaNodeJs, color: "text-green-600" },
  { component: SiExpress, color: "text-gray-300" },
  { component: FaDatabase, color: "text-gray-400" },
  { component: RiFirebaseFill, color: "text-orange-600" },
];

const Skills=()=> {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl mx-auto p-6">
      {/* Left Section */}
      <div className="flex-1">
        <h2 className="text-[30px] font-bold uppercase leading-[30px] tracking-[-0.8px] text-white">
         
          Skills
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex-1 w-full overflow-hidden">
        <motion.div
          className="flex gap-[100px]"
          animate={{
            x: ["0%", "-200%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill.component.name}-${index}`}
              className="w-[74px] h-[72px] flex-shrink-0"
            >
              <div className="w-full h-full bg-white bg-opacity-50 rounded-2xl p-4 relative">
                <skill.component className={`w-full h-full ${skill.color}`} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
export default Skills