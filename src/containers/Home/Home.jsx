import React from "react";
import styles from "./Home.module.scss";
import LandingPage from "../../components/LandingPage";
import Mission from "../../components/Mission";

import {home_text} from "../../data/landing";
import inplay1 from "../../assets/images/inplay1.png";
import inplay2 from "../../assets/images/inplay2.png";
import inplay3 from "../../assets/images/inplay3.png";
import Testimonials from "../../components/Testimonials";
import GetInTouch from "../../components/GetInTouch";
import Footer from "../../components/Footer";


const Home = () => {  
  return (
    <>
      <LandingPage data={home_text} />
      <Mission />
      <section className={styles.why}>
        <h3>Why Train with FineTune?</h3>
        <hr/>
        <p>Despite attending numerous high-quality group sessions over the years, I have always felt that I would have reached the next level from focussed one-to-one sessions. Fine Tune Football is now able to address this development need.</p>
        <p>Fine Tune Football is designed to be a one-to-one football coaching service to allow players of all levels to develop their skillset and confidence outside of team training sessions. Team training is vital, but I feel it can often overlook the needs of the individual. Training in a team environment is largely ‘one size fits all’ and can feel repetitive, this is where Fine Tune Football can help.</p>
        <p>The FTF bespoke training programme offers individuals the opportunity to work on specific skillsets.  Programmes will be adapted and tailored to you. My goal is to not only develop your skillset, but also confidence in yourself. Having confidence in any walk of life is important but particularly in football. Confidence will enable you to best express your ability and flair on the pitch, implementing what you learn, enhancing your all-round game.</p>
        <p>The tailored programme will follow our Review – Refine – Repeat ethos, giving you time to enhance the skills that you already possess but taking them, and your fitness, to the next level.</p>
        <div>
          <img src={inplay1} alt="Womens football"/>
          <img src={inplay2} alt="Womens football"/>
        </div>
      </section>
      <section className={styles.sessions}>
        <h3>Our Sessions</h3>
        <hr/>
        <p><span>Bookings:</span> Bookings are all made on our online calendar booking system – found on the Booking tab on our website at finetunefootball.com</p>
        <p><span>Location:</span> Light permitting, all sessions will be conducted outdoors at local parks and amenity areas. All sessions last one hour unless mutually agreed otherwise. Training can be given at your home if garden space permits.</p>
        <p><span>Payments:</span> Payment for sessions should be made at least 24 hours in advance to allow for direct bank transfers. Alternatively, payments can be made via PayPal or in cash prior to the beginning of the individual session.</p>
        <p><span>Cancellation Policy:</span> If you need to cancel a session, this needs to be done a minimum of 3 hours before the scheduled start time for a full payment refund or rescheduling of a session to be confirmed. Later cancellations or ‘no shows’ will be charged at full rate.</p>
        <img src={inplay3} alt="Candid football shot"/>
      </section>
      <section className={styles.nutshell}>
        <h3>In a nutshell...</h3>
        <hr/>
        <div className={styles.details}>
          <article>
            <h4>Single Session - 60 mins</h4>
            <h6>£25</h6>
            <ul>
              <li>Areas for player development identified at the session itself. Alternatively, players can confirm in advance which FTF Fundamental they would like to work on during the session</li>
              <li>Fitness section incorporated into session</li>
              <li>Review of session with action points for potential future sessions</li>
            </ul>
          </article>
          <article>
            <h4>Fine Tune for Two</h4>
            <h6>£30</h6>
            <ul>
              <li>Combined session with a friend that can provide benefits of dynamic opposition/teammate in drill scenarios</li>
              <li>Review at end of session, with myself and players identifying areas of own development but also of one another</li>
              <li>Gives players an opportunity to develop playing relationships and communication eg. Strike Partners or a Fullback and Winger</li>
            </ul>
          </article>
          <article>
            <h4>6 session programme</h4>
            <h6>£140</h6>
            <ul>
              <li>Player observed in a match situation pre tuition (if possible)</li>
              <li>Development programme devised and shared by email</li>
              <li>4 x focussed skills and fitness development sessions, including bleep tests</li>
              <li>Observed in a match situation following tuition </li>
              <li>Closure report provided by email noting progression or areas for further development</li>
            </ul>
          </article>
        </div>
      </section>
      <Testimonials />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Home;
