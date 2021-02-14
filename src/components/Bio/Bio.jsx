import React from "react";
import styles from "./Bio.module.scss";

import headshot from "../../assets/images/ollie-headshot.jpg";

const Bio = () => {
  return (
    <>
    <section className={styles.bio}>
      <h1>Hello. I'm <span>Ollie.</span></h1>
      <hr/>
      <img src={headshot} alt="Ollie Headshot"/>
      <p>My name is Oliver Moloney, 23, raised and educated in Lichfield. I graduated last year from Nottingham Trent University with a degree in Business Management and Entrepreneurship. I chose my degree to build of my academic business foundations, but also to equip me with the tools and confidence needed to establish and run my own business.</p>
      <p>Fine Tune Football was created to combine my business acumen with my passion for coaching the sport I love. I have played football for as long as I can remember and benefitted from thousands of hours of coaching along the way, experiencing the very good and the very bad. I began my transition into coaching at 16, running a variety of sports sessions for Excel Arts and Sports summer camps. Over the subsequent years I have spent time coaching at Whittington Albion and I ran the soccer programme at Camp Turk in New York, USA. I was voted by fellow colleagues and Camp Directors as the ‘Male Counsellor of the Year’ and by the Field Sports Director as ‘Field Staff MVP’.</p>
    </section>
    <section className={styles.qualifications}>
      <h3>Qualifications / Certifications</h3>
      <ul>
        <li>Valid and current DBS check</li>
        <li>First aid trained</li>
        <li>Safeguarding for Children</li>
        <li>Safeguarding for all</li>
        <li>FA Talent Identification Level 1</li>
        <li>FA Level 1 Coaching Qualification</li>
      </ul>
    </section>
    </>
  );
};

export default Bio;
