import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Admin Dashboard",
    img: "https://i.ibb.co/Mh81Ms3/GB-dark-Dashboard.jpg",
    desc: "An advanced management dashboard developed using the MERN stack. The backend is built using powerful and secure technologies such as Node.js, Express.js, Mongoose, and MongoDB, enabling efficient data modeling and retrieval. Advanced tools like Material UI, Nivo Charts and Redux Toolkit have been used in the front-end.",
    link: "https://ad-dashboard-one.vercel.app/dashboard",
  },
  {
    id: 2,
    title: "Monueh Shop",
    img: "https://i.ibb.co/nDYYdT7/Browse-thousands-of-Landing-Food-Delivery-images-for-design-inspiration.jpg",
    desc: "This is the final project at which is an e-commerce website showcasing classic and quality products Products taken by mountain village people, advanced Customers for safe and child-safe shopping.",
    link: "https://monuehshop.vercel.app/",
  },
  {
    id: 3,
    title: "Hssn.Tech Project",
    img: "https://i.ibb.co/C2S8XGp/ODESZA-promo-website-redesign-concept-UI-UX.jpg",
    desc: "A Portfolio project with the guidance and inspiration provided by the Al Zero Web School channel. What started as a source of knowledge and ideas soon transformed into a canvas for innovation and a testament to my commitment to continuous learning.",
    link: "https://template-three.onrender.com/#",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

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
            <a href={item.link}>
              <button>See Demo</button>
            </a>
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
