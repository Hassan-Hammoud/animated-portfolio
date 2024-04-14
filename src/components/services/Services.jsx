import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   animate="animate"
      //   whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I Focus On Helping Your Brand Grow <br /> And Move Forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="https://i.ibb.co/w7Cc8dY/people.webp" alt="people" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>

        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Concept To Creation</h2>
          <p>
            I take your ideas and concepts and turn them into fully functional,
            beautifully designed websites. Whether it&apos;s a sleek portfolio,
            an e-commerce platform, or a custom web application, I&apos;ve got
            you covered.
          </p>
          <a href="#contact">
            {/* <button>GO</button> */}
            GO
          </a>
        </motion.div>

        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Technical Expertise</h2>
          <p>
            From HTML and CSS to JavaScript, React, Node.js, and databases, I
            deeply understand the technologies that power modern web
            applications. I ensure that your site is fast, secure, and reliable.
          </p>
          <a href="#contact">GO</a>
        </motion.div>

        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Responsive And Mobile-Friendly</h2>
          <p>
            Your website will look great on all devices, from desktop computers
            to smartphones and tablets. I prioritize responsive design to reach
            your audience wherever they are.
          </p>
          <a href="#contact">GO</a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
