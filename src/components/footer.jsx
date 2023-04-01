import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { DiJavascript, DiCss3 } from "react-icons/di";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <p>
        This project build by: <b>Amjad Arab</b>
      </p>
      <p>
        Using: ReactJS <GrReactjs />, JavaScript <DiJavascript />, CSS{" "}
        <DiCss3 />.
      </p>
      <p>
        Visit my links:{"  "}
        <a href="https://github.com/JadRusus" target="_blank">
          <AiFillGithub size={25} />
        </a>
        <a href="https://www.linkedin.com/in/amjadarab7/" target="_blank">
          <AiFillLinkedin size={25} />
        </a>
      </p>
    </div>
  );
};
