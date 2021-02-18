import React from "react";
import styles from "./Contact.module.scss";
import { BsArrowDownShort } from 'react-icons/bs';
import landing from "../../assets/images/landing.png";
import ContactInfo from "../../components/ContactInfo";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  return (
    <>
      <section className={styles.landing}>
        <img src={landing} alt="Footbal pitch at night" />
        <div className={styles.text_wrapper}>
          <h1>I’D LOVE TO HEAR FROM YOU!</h1>
          <span>
            <BsArrowDownShort />
          </span>
        </div>
      </section>
      <section className={styles.wrapper}>
        <h2>GET IN TOUCH</h2>
        <p>If you have any questions before booking, please either call me or or use the form below.</p>
        <hr/>
      </section>
      <section className={styles.contact_container}>
        <ContactInfo />
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
