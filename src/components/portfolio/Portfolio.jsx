import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "E-commerce One",
    img: "public/hero.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maxime, facilis recusandae molestiae animi obcaecati consectetur accusantium est voluptatum nemo, omnis amet voluptates laborum. Voluptates illo nemo eos esse soluta.",
  },

  {
    id: 2,
    title: "E-commerce two",
    img: "public/hero.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maxime, facilis recusandae molestiae animi obcaecati consectetur accusantium est voluptatum nemo, omnis amet voluptates laborum. Voluptates illo nemo eos esse soluta.",
  },

  {
    id: 3,
    title: "E-commerce three ",
    img: "public/hero.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maxime, facilis recusandae molestiae animi obcaecati consectetur accusantium est voluptatum nemo, omnis amet voluptates laborum. Voluptates illo nemo eos esse soluta.",
  },

  {
    id: 4,
    title: "E-commerce four",
    img: "public/hero.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maxime, facilis recusandae molestiae animi obcaecati consectetur accusantium est voluptatum nemo, omnis amet voluptates laborum. Voluptates illo nemo eos esse soluta.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
