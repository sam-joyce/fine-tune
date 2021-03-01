import React from "react";
import styles from "./About.module.scss";

import LandingPage from "../../components/LandingPage";

import { about_text } from "../../data/landing";
import Bio from "../../components/Bio";
import Testimonials from "../../components/Testimonials";
import GetInTouch from "../../components/GetInTouch";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
      <LandingPage data={about_text} />
      <Bio />
      {/* <Testimonials /> */}
      <GetInTouch />
      <Footer />
    </>
  );
};

export default About;
