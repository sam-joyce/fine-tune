import React from "react";
import styles from "./Contact.module.scss";
import { BsArrowDownShort } from 'react-icons/bs';
import landing from "../../assets/images/landing.png";
import ContactInfo from "../../components/ContactInfo";
import ContactForm from "../../components/ContactForm";
// import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

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
        <hr />
      </section>
      <section className={styles.contact_container}>
        <ContactInfo />
        <ContactForm />
      </section>
      <section className={styles.map_wrapper}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2419.4135988792955!2d-1.8210418484029698!3d52.670568632712765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870a794e7e18d05%3A0x9fc87ed5972d38ec!2sCromwells%20Meadow%2C%20Lichfield!5e0!3m2!1sen!2suk!4v1613686807446!5m2!1sen!2suk" height="450" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </section>
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
};

export default Contact;
