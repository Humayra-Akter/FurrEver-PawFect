import React from "react";
import Navbar from "./Navbar/Navbar";
import Card from "./Card/Card";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import LoginHome from "./LoginHome/LoginHome";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Card />
      <div className="flex">
        <LoginHome />
        {/* <Contact /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
