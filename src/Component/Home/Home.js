import React from "react";
import Banner from "./Banner";
import KeyFeatures from "./KeyFeatures";
import CallToAction from "./CallToAction";
import FaqSection from "./FaqSection";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <KeyFeatures />
      <CallToAction />
      <FaqSection />
      <Contact />
    </div>
  );
};

export default Home;
