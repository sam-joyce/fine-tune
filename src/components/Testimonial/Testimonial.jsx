import React from "react";
import styles from "./Testimonial.module.scss";

const Testimonial = (props) => {
  console.log(props);
  
  return (
    <div className={styles.testimonial}>
      <img src={props.testimonial.image} alt="Testimonial Headshot"/>
      <h3>{props.testimonial.name}</h3>
      <p>{props.testimonial.quote}</p>
    </div>
  );
};

export default Testimonial;
