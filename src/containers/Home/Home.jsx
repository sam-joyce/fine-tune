import React from "react";
import styles from "./Home.module.scss";

import {home_text} from "../../data/landing";
import LandingPage from "../../components/LandingPage";
import Mission from "../../components/Mission";

const Home = () => {  
  return (
    <>
      <LandingPage data={home_text} />
      <Mission />
      <section className={styles.why}>
        <h3>Why Train with FineTune?</h3>
        <p>Egestas orci eget turpis tempus dis. Mi nec nulla sed aliquam. Ac lectus sed mauris imperdiet ac dis rhoncus enim.</p>
        <p>Et cras quis semper risus amet ipsum. Etiam elit donec dictum neque quam egestas. Malesuada nam magna dictum eget ultricies hendrerit nisl. Cursus nulla ac vulputate ac, pellentesque enim viverra odio.</p>
        <p>Aliquet sed mattis tristique maecenas sed a purus, augue. Velit fermentum scelerisque feugiat a sed in ut fames posuere. Consequat pellentesque neque ut duis posuere penatibus.</p>
      </section>
    </>
  );
};

export default Home;
