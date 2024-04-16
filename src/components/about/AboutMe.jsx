// import "./about.scss";
// import { motion } from "framer-motion";

// const AboutMe = () => {
//   const containerVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const childVariants = {
//     hidden: {
//       opacity: 0,
//       y: 20,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//     },
//   };

//   return (
//     <motion.section
//       className="intro"
//       id="about"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//     >
//       <div className="container">
//         <div className="row">
//           <motion.div
//             className="col-md-8 col-md-offset-2 wp1"
//             variants={childVariants}
//           >
//             <motion.h1 className="arrow" variants={childVariants}>
//               A little <span>about</span> me
//             </motion.h1>
//             <motion.p variants={childVariants}>
//               As a full-stack developer, my mission is to turn your digital
//               dreams into reality. I bring your vision to life by crafting
//               stunning, user-friendly websites and web applications from start
//               to finish. From the moment we discuss your project to the final
//               launch, I&apos;m your dedicated partner in creating exceptional
//               online experiences
//             </motion.p>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default AboutMe;
import "./about.scss";
import { motion } from "framer-motion";

const AboutMe = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const heroVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const animatedLetters = (text) =>
    text.split("").map((letter, index) => (
      <motion.span
        key={index}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: 0.3,
          delay: index * 0.05,
        }}
      >
        {letter}
      </motion.span>
    ));

  return (
    <motion.section
      className="intro"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container">
        <div className="row">
          <motion.div
            className="col-md-8 col-md-offset-2 wp1"
            variants={childVariants}
          >
            <motion.h1 className="arrow" variants={heroVariants}>
              {animatedLetters("A little about me")}
            </motion.h1>
            <motion.p variants={childVariants}>
              As a full-stack developer, my mission is to turn your digital
              dreams into reality. I bring your vision to life by crafting
              stunning, user-friendly websites and web applications from start
              to finish. From the moment we discuss your project to the final
              launch, I&apos;m your dedicated partner in creating exceptional
              online experiences
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
