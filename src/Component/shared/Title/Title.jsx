import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const Title = ({ title ,subtitle}) => {
  return (
    <motion.div
className="my-5"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1
            className="text-center text-4xl sm:text-5xl font-bold ">{title}</h1>
      <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
    </motion.div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};


export default Title;
