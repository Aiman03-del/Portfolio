import { motion } from 'framer-motion';
import { Parallax, useParallax } from 'react-scroll-parallax';
import Title from "./shared/Title/Title";
import { useEffect } from 'react';

const AboutMe = () => {
  const parallax = useParallax({
    speed: -50,
    translateY: [20, 0],
  });

  // Track scroll position for logging
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const section = document.getElementById('about');
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    console.log('Current Scroll Position:', scrollPosition);
    console.log('Section Start:', sectionTop);
    console.log('Section End:', sectionBottom);

    // Detect if the scroll position is in the middle of the section
    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
      const middle = sectionTop + (sectionBottom - sectionTop) / 2;
      console.log('Middle of Section:', middle);
      if (scrollPosition > middle) {
        console.log('Past the middle point');
      } else {
        console.log('Before the middle point');
      }
    }
  };

  // Listen for scroll events
 useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={parallax.ref} id="about" className="py-16 ">
      <motion.div 
        className="container mx-auto p-8 rounded-lg shadow-lg "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="py-20">
            <Parallax speed={-7}>
              <Title title="About Me" />
            </Parallax>
          </div>
          <div>
            <Parallax speed={30}>
              <p className="text-lg mb-4">
                Hello! My name is [Your Name], and I am a passionate software developer with a love for creating innovative solutions. My programming journey began [number] years ago when I discovered my fascination with technology and coding. Since then, I have honed my skills in various programming languages and frameworks, constantly striving to improve and stay updated with the latest industry trends.
              </p>
              <p className="text-lg mb-4">
                I enjoy working on projects that challenge me and allow me to think outside the box. Whether it&apos;s developing web applications, mobile apps, or exploring new technologies, I find great satisfaction in bringing ideas to life through code. Collaboration and problem-solving are at the core of my work ethic, and I thrive in environments where I can contribute to a team&apos;s success.
              </p>
              <p className="text-lg mb-4">
                Outside of programming, I have a diverse range of hobbies and interests. I am an avid [sport] enthusiast and enjoy [activity related to sport]. Additionally, I have a passion for [another hobby, e.g., painting], which allows me to express my creativity in different ways. These activities help me maintain a balanced lifestyle and bring fresh perspectives to my work.
              </p>
              <p className="text-lg">
                I believe that a well-rounded individual is not only defined by their professional achievements but also by their personal interests and values. I am excited to continue my journey in the tech world, constantly learning and growing both as a developer and as a person.
              </p>
            </Parallax>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
