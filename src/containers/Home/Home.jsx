import React from "react";
import styles from "./Home.module.scss";

import {home_text} from "../../data/landing";
import LandingPage from "../../components/LandingPage";

const Home = () => {  
  return (
    <>
      <LandingPage data={home_text} />
    </>
  );
};

export default Home;
