import React, { useState } from "react";
import styles from "./Testimonials.module.scss";
import Testimonial from "../Testimonial";

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import testimonials from "../../data/testimonials";

const Testimonials = () => {

  const [count, setCount] = useState(0);

  const changeTestimonialIndex = (num) => {
    setCount(count + num);
  }

  return (
    <div className={styles.container}>
      <button
        disabled={count === 0}
        onClick={() => changeTestimonialIndex(-1)}
      ><FiChevronLeft /></button>
      <Testimonial testimonial={testimonials[count]} />
      <button
        disabled={count === testimonials.length - 1}
        onClick={() => changeTestimonialIndex(1)}
      ><FiChevronRight /></button>
    </div>
  );
};

export default Testimonials;
