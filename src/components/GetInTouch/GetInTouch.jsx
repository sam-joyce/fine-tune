import React from "react";
import styles from "./GetInTouch.module.scss";

const GetInTouch = () => {
  return (
    <section className={styles.wrapper}>
      <h2>Any further queries or would like to know more?</h2>
      <p>Then please get in touch using the contact button below, it would be great to hear from you!</p>
      <button>GET IN TOUCH</button>
    </section>
  );
};

export default GetInTouch;
