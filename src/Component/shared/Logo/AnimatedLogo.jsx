import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full text-white font-bold relative"
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <motion.h1
        animate={{ opacity: [0, 5, 0], textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)" }}
        transition={{ repeat: Infinity, duration: 2 }}
        className='whitespace-nowrap text-xl md:text-2xl lg:text-3xl'
      >
        {'< AIMAN />'}
      </motion.h1>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-70"
          style={{ width: "5px", height: "5px", top: "50%", left: "50%" }}
          animate={{
            y: [0, -10, 0],
            opacity: [1, 0],
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </motion.div>
  );
};

export default AnimatedLogo;
