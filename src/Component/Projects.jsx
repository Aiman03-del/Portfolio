import { motion } from "framer-motion";
import donateBangladesh from "../assets/images/bloodDonation.png";
import careerCounselling from "../assets/images/careerCounceling.png";
import fitness from "../assets/images/fitness.png";
import GadgetHeaven from "../assets/images/gagetHeaven.png";
import restaurantManagement from "../assets/images/masterChef.png";
import parcelEse from "../assets/images/parcelease.png";
import petParadise from "../assets/images/petParadise.png";
import rinterio from "../assets/images/rinterio.png";
import sportifyGear from "../assets/images/sportifygear.png";
import yourDream11 from "../assets/images/yourDream11.png";
import SingleProject from "./SingleProject";
import Title from "./shared/Title/Title";

const Projects = () => {
  const projects = [
    {
      img: parcelEse,
      title: "Parcel Ease",
      description:
        "A full-stack website with separate user and admin functionalities.",
      technology: [
        "React",
        "TailwindCSS",
        "ShadCN UI",
        "Node.js",
        "Express.js",
        "Firebase",
        "MongoDB",
      ],
      livesite: "https://parcel-ease-76d37.web.app/",
    },
    {
      img: restaurantManagement,
      title: "Restaurant Management",
      description:
        "A restaurant management system with online food ordering features.",
      technology: [
        "React",
        "TailwindCSS",
        "DaisyUI",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
      ],
      livesite: "https://restaurant-management-7b76f.web.app/",
    },
    {
      img: sportifyGear,
      title: "Sportify Gear",
      description: "An e-commerce platform for sports gear and accessories.",
      technology: [
        "React",
        "TailwindCSS",
        "Redux",
        "Firebase",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      livesite: "https://sportify-gear.web.app/",
    },
    {
      img: careerCounselling,
      title: "Career Counselling",
      description:
        "A career guidance platform helping users set and achieve career goals.",
      technology: [
        "React",
        "TailwindCSS",
        "ShadCN UI",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
      ],
      livesite: "https://career-counselling-ddbf1.web.app/",
    },
    {
      img: GadgetHeaven,
      title: "Gadget Heaven",
      description:
        "A colorful and fun Gadget website with interactive animations.",
      technology: ["HTML", "CSS", "JavaScript", "GSAP", "Netlify"],
      livesite: "https://fanciful-lollipop-bcc619.netlify.app/",
    },
    {
      img: yourDream11,
      title: "Your Dream 11",
      description:
        "A fantasy sports platform for creating and managing dream teams.",
      technology: ["HTML", "CSS", "JavaScript"],
      livesite: "https://your-dream-11.surge.sh/",
    },
    {
      img: petParadise,
      title: "Pet Paradise",
      description: "A pet adoption and care platform connecting pet lovers.",
      technology: ["HTML", "CSS", "JavaScript"],
      livesite: "https://pet-paradise.surge.sh/",
    },
    {
      img: donateBangladesh,
      title: "Donate Bangladesh",
      description:
        "A donation platform for helping underprivileged people in Bangladesh.",
      technology: ["HTML", "CSS", "JavaScript"],
      livesite: "https://aiman03-del.github.io/Donate-Bangladesh/",
    },
    {
      img: rinterio,
      title: "Rinterio",
      description:
        "An academic project showcasing responsive design techniques.",
      technology: ["HTML", "CSS", "JavaScript"],
      livesite: "https://aiman03-del.github.io/third-assignment/",
    },
    {
      img: fitness,
      title: "Fitness",
      description:
        "An introductory website demonstrating CSS grid and flexbox layouts.",
      technology: ["HTML", "CSS"],
      livesite: "https://aiman03-del.github.io/second-assignment/",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div className="p-8">
      <div className="container mx-auto">
     <Title title="My Projects" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} whileHover="hover">
              <SingleProject project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
