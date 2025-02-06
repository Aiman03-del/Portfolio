import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Button from "./shared/Button/Button";
import AnimatedLogo from "./shared/Logo/AnimatedLogo";

const navLinks = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Contact", url: "/contact" },
];

function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <nav className="py-4 px-4 relative z-20">
      <div className="container mx-auto flex justify-between items-center mt-4">
        <AnimatedLogo />
        <div className="flex items-center z-50">
          {showModal ? (
            <motion.div
              className="text-2xl md:text-3xl lg:text-4xl text-white cursor-pointer"
              onClick={toggleModal}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaTimes />
            </motion.div>
          ) : (
            <motion.div
              className="text-2xl md:text-3xl lg:text-4xl text-white cursor-pointer"
              onClick={toggleModal}
              initial={{ rotate: 0 }}
              whileTap={{rotate:360}}
              // animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaBars />
            </motion.div>
          )}
        </div>
        <Button buttonTitle="My Resume" />
      </div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <motion.div
              className="flex items-center justify-center bg-black w-full"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
                exit: {
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                  },
                },
              }}
            >
              <div className="flex flex-col gap-8 items-center justify-center h-full">
                {navLinks.map((link, index) => (
                  <motion.span
                    key={index}
                    className="text-white font-light text-2xl md:text-4xl lg:text-6xl cursor-pointer"
                    initial={{ opacity: 0, y: "50%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "50%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Link to={link.url.slice(1)} smooth={true} duration={500} onClick={toggleModal}>
                      {link.title}
                    </Link>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Header;
