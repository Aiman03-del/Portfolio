import { motion } from "framer-motion";

const tools = [
  { name: "Photoshop", image: "https://framerusercontent.com/images/..." },
  { name: "Illustrator", image: "https://framerusercontent.com/images/..." },
  { name: "After Effects", image: "https://framerusercontent.com/images/..." },
  { name: "Premiere Pro", image: "https://framerusercontent.com/images/..." },
  { name: "Capcut", image: "https://framerusercontent.com/images/..." },
  { name: "Figma", image: "https://framerusercontent.com/images/..." },
  { name: "Framer", image: "https://framerusercontent.com/images/..." },
];

export default function Skills() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl mx-auto p-6">
      {/* Left Section */}
      <div className="flex-1">
        <h2 className="text-[30px] font-bold uppercase leading-[30px] tracking-[-0.8px] text-white">
          Favourite
          <br />
          Skills
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex-1 w-full overflow-hidden">
        <motion.div
          className="flex gap-[100px]"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="w-[74px] h-[72px] flex-shrink-0"
            >
              <div className="w-full h-full bg-white rounded-2xl p-4 relative">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}