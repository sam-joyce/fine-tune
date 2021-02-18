import React from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div className={styles.contact_form_container}>
      <form>
        <div className={styles.names_wrapper}>
          <div className={styles.wrappers}>
            <label>First Name</label>
            <input type="text" name="first_name" />
          </div>
          <div className={styles.wrappers}>
            <label>Last Name</label>
            <input type="text" name="last_name" />
          </div>
        </div>
        <div className={styles.wrappers}>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.wrappers}>
          <label>Subject</label>
          <input type="text" name="subject" />
        </div>
        <div className={styles.wrappers}>
          <label>Message</label>
          <textarea type="text" cols="20" rows="5" name="message" />
        </div>
        <input type="submit" value="Submit Request" />
      </form>
    </div>
  );
};

export default ContactForm;
