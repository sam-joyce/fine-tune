import React from "react";
import styles from "./Footer.module.scss";

import logo from "../../assets/images/ftf-logo.png";
import { AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="FTF Logo"/>
        <h4>Fine Tune Football</h4>
      </div>
      <div>
        <h4>Company</h4>
        <h6>Home</h6>
        <h6>About</h6>
        <h6>Contact</h6>
      </div>
      <div>
        <h4>Social</h4>
        <h6>Facebook</h6>
        <h6>Instagram</h6>
        <h6>LinkedIn</h6>
      </div>
      <div>
        <button>Book Now</button>
        {/* <a href="tel:+44 7532 368881">
          <h5><AiOutlinePhone />+44 7532 368881</h5>
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
