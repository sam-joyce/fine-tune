import React from "react";
import styles from "./ContactInfo.module.scss";

import { FiPhone, FiMail,FiFacebook, FiInstagram } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className={styles.contact_info}>
      <div>
        <h3>Contact Information</h3>
        <p>Fill out the form and I’ll endeavour to get back to you as quick as I can.</p>
      </div>
      <div className={styles.wrapper}>

          <FiPhone />
          <a href="tel: +44 7532 368881">
            <h4>+44 7532 368881</h4>
          </a>

          <FiMail />
          <a href="mailto: olliemoloney@outlook.com">
            <h4>olliemoloney@outlook.com</h4>
          </a>

          <IoLocationOutline />
          <a href="#">
            <h4>Beacon Park, Lichfield</h4>
          </a>

      </div>
      <div className={styles.icons}>
        <FiFacebook />
        <FiInstagram />
      </div>
    </div>
  );
};

export default ContactInfo;
