import { useParallax } from "react-scroll-parallax";
import Typewriter from "typewriter-effect";
import portfolioImage from "../assets/images/pp3.jpg";
import Button from "./shared/Button/Button";
import SocialLink from "./shared/SocialLinks/SocialLink";

const Home = () => {
  const parallax = useParallax({
    speed: -10, // Adjusted speed
    translateY: [0, -150], // Adjusted translateY
    easing: "easeInOutQuad",
    startScroll: 0,
    endScroll: 600, // Adjusted endScroll
  });
  const introdata = {
    title: "I’m Aiman",
    animated: {
      first: "I love coding.",
      second: "I create websites with React.",
      third: "I build full-stack websites.",
    },
    description: "Frontend developer skilled in React, Node.js, and Firebase.",
    your_img_url: portfolioImage,
  };

  return (
    <section ref={parallax.ref} id="home" className="min-h-screen p-6 lg:p-8">
      <div className="container mx-auto my-8 grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-8">
        <div className="pl-6 w-full flex flex-col justify-center items-center lg:items-start">
          <h1 className="mb-4 text-xl lg:text-3xl font-bold">
            {introdata.title}
          </h1>
          <h1 className="mb-4 text-2xl lg:text-4xl font-bold whitespace-nowrap">
            <Typewriter
              options={{
                strings: [
                  introdata.animated.first,
                  introdata.animated.second,
                  introdata.animated.third,
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </h1>
          <p className="mb-4 text-sm lg:text-lg">{introdata.description}</p>
          <div className="intro_btn-action pb-5 flex flex-col sm:flex-row gap-4 lg:gap-20">
            <Button buttonTitle="My Resume" />
          </div>
          <div>
            <SocialLink/>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 lg:mt-0">
          <img className="w-4/5 sm:w-3/5 lg:w-4/5 rounded-full" src={introdata.your_img_url} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
