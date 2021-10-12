import React from "react";
import styles from "./Footer.module.scss";

import logo from "../../assets/images/ftf-logo.png";
import { FiFacebook, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div className={styles.mobile_icons}>
        <a href="https://www.facebook.com/finetunefootball/" target="__blank">
          <FiFacebook />
        </a>
        <a href="https://www.instagram.com/finetunefootball/" target="__blank">
          <FiInstagram />
        </a>
      </div>
      <div>
        <img src={logo} alt="FTF Logo" />
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
        <a href="https://www.facebook.com/finetunefootball/" target="__blank">
          <h6>Facebook</h6>
        </a>
        <a href="https://www.instagram.com/finetunefootball/" target="__blank">
          <h6>Instagram</h6>
        </a>
        <h6>LinkedIn</h6>
      </div>
      <div>
        <a href="https://calendly.com/finetunefootball/coaching-session" target="__blank">
          <button>Book Now</button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
