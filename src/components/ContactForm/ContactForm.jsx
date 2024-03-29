import React from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
      <section className={styles.map_wrapper}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19350.862124549178!2d-1.8440242173480594!3d52.68060622162287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870a0d4349c7951%3A0xb240fde135248da8!2sLichfield!5e0!3m2!1sen!2suk!4v1618373618170!5m2!1sen!2suk" height="450" allowfullscreen="" loading="lazy"></iframe>
      </section>
  );
};

export default ContactForm;
