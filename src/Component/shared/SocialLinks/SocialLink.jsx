import { FaFacebook, FaGithub, FaLinkedin, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const SocialLink = () => {
  return (
    /* From Uiverse.io by akshat-patel28 */ 
    <section className="flex justify-center items-center gap-4">
     
      <button
        href="https://facebook.com"
        className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#B5C423]"      >
        <FaXTwitter /> 
      </button>
      <button
        href="https://facebook.com"
        className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#B5C423]"      >
        <FaFacebook />
      </button>
      <button
        href="https://github.com"
        className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#B5C423]"
      >
        <FaGithub />
      </button>
      <button
        href="https://linkedin.com"
        className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#B5C423]"
      >
        <FaLinkedin />
      </button>
    </section>
  );
};

export default SocialLink;
