import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const AboutMe = () => {
  const experiences = [
    {
      company: "Lead Bangladesh",
      position: "Motion Graphic Designer",
      year: "July, 2022 - Nov, 2024"
    },
    {
      company: "Signature 360",
      position: "Core designer",
      year: "November 2019 – July 2022"
    },
    {
      company: "Opportunities For Kids (OFK)",
      position: "Head of Visual and Graphics",
      year: "November 2019 – July 2022"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-black text-white">
      {/* Left Section */}
      <div className="flex-1 md:sticky md:top-8 md:h-fit">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-bold text-3xl uppercase mb-8 md:mb-0"
          style={{ letterSpacing: '-0.8px' }}
        >
          EXPERIENCE
        </motion.h2>
      </div>

      {/* Right Section */}
      <Parallax 
      speed={60}
        className="flex-1 flex flex-col gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="flex flex-col gap-4"
            variants={itemVariants}
          >
            {/* Company Name */}
            <h3 className="text-3xl font-bold uppercase" style={{ letterSpacing: '-0.6px' }}>
              {exp.company}
            </h3>

            {/* Position & Year */}
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold uppercase">{exp.position}</p>
              <p className="text-xl font-bold uppercase text-right">{exp.year}</p>
            </div>

            {/* Separator Line */}
            <div className="border-t border-white/20 w-full pt-4" />
          </motion.div>
        ))}
      </Parallax>
    </div>
  );
};

export default AboutMe;