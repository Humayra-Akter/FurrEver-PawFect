import React from "react";
import Banner from "./Banner";
import KeyFeatures from "./KeyFeatures";
import CallToAction from "./CallToAction";
import FaqSection from "./FaqSection";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Banner />
      <KeyFeatures />
      <CallToAction />
      <FaqSection />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
