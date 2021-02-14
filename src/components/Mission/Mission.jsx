import React from "react";
import styles from "./Mission.module.scss";

import { BsArrowDownShort } from 'react-icons/bs';

const Mission = () => {
  return (
    <>
      <section className={styles.mission_wrapper}>
        <div className={styles.inner}>
          <h2>MY MISSION</h2>
          <h4>I help to recognise and nurture your potential.</h4>
          <hr />
          <div>
            <h6>Identify fundamental areas for development in your game</h6>
            <BsArrowDownShort />
          </div>
          <div>
            <h6>Develop an agreed plan, tailored to your specific needs</h6>
            <BsArrowDownShort />
          </div>
          <div>
            <h6>Directly address the areas for development whilst improving your overall game</h6>
            <BsArrowDownShort />
          </div>
          <div>
            <h6>Improve general fitness in parallel with specific skill development</h6>
            <BsArrowDownShort />
          </div>
          <div>
            <h6>Develop the confidence to use the enhanced skills in a match environment</h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
