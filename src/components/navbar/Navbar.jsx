import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* SIDEBAR  */}
      <Sidebar />
      <div className="wrapper">
        <motion.a
          href="/"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          HASSAN TECH
        </motion.a>
        <div className="social">
          <a href="https://www.facebook.com/hassan.hammoud.7127/">
            <img src="/facebook.png" alt="" />
          </a>

          <a href="https://www.instagram.com/hssn_3ha/">
            <img src="/instagram.png" alt="" />
          </a>

          <a href="https://github.com/Hassan-Hammoud">
            <img src="/dribble.png" alt="" />
          </a>

          <a href="https://www.linkedin.com/in/hassan-hammoud-3ha/">
            <img src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
