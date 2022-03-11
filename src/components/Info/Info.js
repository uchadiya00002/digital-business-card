import react from "react";
import image from "../../images/a.jpeg";
import { AiFillMail, AiFillLinkedin } from "react-icons/ai";

import "./Info.style.css";

const Info = () => (
  <header className="info">
    <img src={image} className="info-image" />
    <h3 className="info-title">Avinash Uchadiya</h3>
    <p className="info-subtitle">Frontend Developer</p>
    <button type="button" className="info-button_email">
      <AiFillMail style={{ color: "#1E1F26", fontSize: "12px" }} /> Email
    </button>
    <button type="button" className="info-button_linkdin">
      <AiFillLinkedin style={{ color: "#fff", fontSize: "12px" }} />
      Linkden
    </button>
  </header>
);

export default Info;
