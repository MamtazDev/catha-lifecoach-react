import React, { useEffect } from "react";
import Banner from "../Components/Home/Banner";
import About from "../Components/Home/About";
import LifeCoaching from "../Components/Home/LifeCoaching";
import Coaching from "../Components/Home/Coaching";
import ClientReview from "../Components/Home/ClientReview";
import Contact from "../Components/Home/Contact";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);
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
