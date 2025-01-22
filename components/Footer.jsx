import React from 'react';
import { FaGlobe } from "react-icons/fa6";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2025 GK Headphones All rights reserverd</p>
      <p className="icons">
        <a href="https://gaurav-gk.netlify.app/">
          <FaGlobe />
        </a>
        <a href="https://www.linkedin.com/in/gauravkumarsony/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/gauravkumarsony">
          <AiFillGithub />
        </a>
      </p>
    </div>
  );
}

export default Footer