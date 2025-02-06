/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS Import
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation Duration
      once: true, // Animation only runs once when scrolled into view
    });
  }, []);

  return (
    <footer className=" text-white py-12 px-6" data-aos="fade-up">
      <div className="max-w-screen-lg mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold">Let's Connect</h1>
        <p className="text-xl">
          I am always open to new opportunities and collaborations. Feel free to
          reach out to me!
        </p>

        <div className="flex justify-center space-x-6 mt-6">
          {/* Social Links */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-300 transition-all"
            data-aos="fade-up"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-300 transition-all"
            data-aos="fade-up"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-300 transition-all"
            data-aos="fade-up"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <div className="mt-8 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
