/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { TfiNewWindow } from "react-icons/tfi";

const SingleProject = ({ project }) => {
  const { img, title, description, technology, livesite } = project;

  return (
    <motion.a
      href={livesite}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block p-4 shadow-lg rounded-lg overflow-hidden text-white"
      whileHover={{ scale: 1.05 }}
    >
      <img className="w-full rounded-t-lg" src={img} alt={title} />
      <div className="flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent">
        <h5 className="text-xl font-bold">{title}</h5>
        <p className="mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {technology.map((tech, index) => (
            <span key={index} className="bg-gray-800 text-white px-2 py-1 rounded-lg">
              {tech}
            </span>
          ))}
        </div><div className="absolute top-2 right-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <TfiNewWindow className="text-2xl" />
      </div>
      </div>
      
    </motion.a>
  );
};

export default SingleProject;
