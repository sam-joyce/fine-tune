import React from "react";
import styles from "./ContactInfo.module.scss";

import { FiPhone, FiMail, FiFacebook, FiInstagram } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className={styles.contact_info}>
      <div>
        <h3>Contact Information</h3>
        <p>Please fill out the form or email me below and I will endeavour to get back to you as quick as I can.</p>
      </div>
      <div className={styles.wrapper}>

        {/* <FiPhone />
          <a href="tel: +44 7532 368881">
            <h4>+44 7532 368881</h4>
          </a> */}

        <FiMail />
        <a href="mailto: ollie@finetunefootball.com">
          <h4>ollie@finetunefootball.com</h4>
        </a>

        <IoLocationOutline />
        <a href="https://goo.gl/maps/zwmM45nVNH9XEbR36" target="__blank">
          <h4>Beacon Park, Lichfield</h4>
        </a>

      </div>
      <div className={styles.icons}>
        <a href="https://www.facebook.com/finetunefootball/" target="__blank" >
          <FiFacebook />
        </a>
        <a href="https://www.instagram.com/finetunefootball/" target="__blank">
          <FiInstagram />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
