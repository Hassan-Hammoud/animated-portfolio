import { motion } from "framer-motion";
const Test = () => {
  return (
    <div className="course">
      <motion.div
        animate={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="box"
      ></motion.div>
    </div>
  );
};

export default Test;
