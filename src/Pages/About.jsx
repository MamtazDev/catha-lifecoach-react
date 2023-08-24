import React, { useEffect } from "react";
import AboutUs from "../Components/About/AboutUs";
import AboutFooter from "../Components/About/AboutFooter";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);
  return (
    <div>
      <AboutUs />
      <AboutFooter />
    </div>
  );
};

export default About;
