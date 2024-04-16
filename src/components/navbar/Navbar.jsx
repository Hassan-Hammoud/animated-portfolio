import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
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
          className="logoName"
        >
          HASSAN TECH
        </motion.a>
        <div className="social">
          <a href="https://www.linkedin.com/in/hassan-hammoud-3ha/">
            <FaLinkedin style={{ color: "#0077B5" }} />
          </a>

          <a href="https://github.com/Hassan-Hammoud">
            <FaSquareGithub style={{ color: "#8c8ca3" }} />
          </a>

          <a href="https://www.facebook.com/hassan.hammoud.7127/">
            <FaSquareFacebook style={{ color: "#4267B2" }} />
          </a>

          <a href="https://www.instagram.com/hssn_3ha/">
            <FaInstagram
              style={{
                background:
                  "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                borderRadius: "6px",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
