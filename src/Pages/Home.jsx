import React from "react";
import Banner from "../Components/Home/Banner";
import About from "../Components/Home/About";
import LifeCoaching from "../Components/Home/LifeCoaching";
import Coaching from "../Components/Home/Coaching";
import ClientReview from "../Components/Home/ClientReview";
import Contact from "../Components/Home/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <LifeCoaching />
      <Coaching />
      <ClientReview />
      <Contact />
    </div>
  );
};

export default Home;
