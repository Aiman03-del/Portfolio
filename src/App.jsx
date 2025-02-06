// App.jsx
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Element } from "react-scroll";
import "./App.css";
import AboutMe from "./Component/AboutMe";
import Contact from "./Component/Contact";
import CustomCursor from "./Component/CustomCursor";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Projects from "./Component/Projects";
import BackgroundAnimation from "./Component/shared/BackgroundAnimation"; // Import BackgroundAnimation

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-montserrat h-full overflow-hidden relative">
      {/* Add BackgroundAnimation component */}
      <CustomCursor />
      <div className="bg-gray-800 relative z-10"> <BackgroundAnimation />
        <Header />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          
          >
            <Element name="home">
              <Home />
            </Element>
            <Element name="about">
              <AboutMe />
            </Element>
            <Element name="projects">
              <Projects />
            </Element>
            <Element name="contact">
              <Contact />
            </Element>
            <Footer />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
