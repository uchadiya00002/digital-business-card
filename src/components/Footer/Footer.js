import react from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

import "./Footer.style.css";

const Footer = () => (
  <footer className="footer">
    <FaTwitterSquare />
    <FaFacebookSquare />
    <FaInstagramSquare />
    <FaGithubSquare />
  </footer>
);

export default Footer;
