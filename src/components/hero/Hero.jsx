import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const imageVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        {/* TEXT FOR THE HERO SECTION  */}
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HASSAN HAMMOUD</motion.h2>
          <motion.h1 variants={textVariants}>
            FULL STACK WEB DEVELOPER
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              whileHover={{ cursor: "pointer" }}
            >
              See The Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{ cursor: "pointer" }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="https://i.ibb.co/BKXK3QW/scroll.png"
            alt="scrollButton"
            whileHover={{ cursor: "pointer" }}
          />
        </motion.div>
      </div>

      <motion.div
        className="sliderTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        WEB DEVELOPER PHOTOGRAPHER TOUR GUIDE
      </motion.div>
      {/* IMAGE FOR THE HERO SECTION  */}
      <motion.div
        className="imageContainer"
        variants={imageVariants}
        initial="initial"
        animate="animate"
      >
        <img src="https://i.ibb.co/Jj94xvp/Hssn.png" alt="HeroSection" />
        {/* <img src="/public/hssn.png" alt="HeroSection" /> */}
      </motion.div>
    </div>
  );
};

export default Hero;
