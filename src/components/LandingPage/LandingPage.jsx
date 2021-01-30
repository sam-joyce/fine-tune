import React from "react";
import styles from "./LandingPage.module.scss";
import { FiArrowDownRight } from 'react-icons/fi';

import landing from "../../assets/images/landing.png";

const LandingPage = (props) => {
  console.log(props.data);
  const { header, text, button_text } = props.data;
  return (
    <>
      <section className={styles.landing}>
        <img src={landing} alt="Footbal pitch at night" />
        <div className={styles.text_wrapper}>
          <h1>{header}</h1>
          <p>{text}</p>
          <button>{button_text} <span><FiArrowDownRight/></span></button>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
