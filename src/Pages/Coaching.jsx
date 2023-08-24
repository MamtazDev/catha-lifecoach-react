import React, { useEffect } from "react";
import CoachingBanner from "../Components/Coaching/CoachingBanner";
import CoachingFooter from "../Components/Coaching/CoachingFooter";

const Coaching = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);
  return (
    <div>
      <CoachingBanner />
      <CoachingFooter />
    </div>
  );
};

export default Coaching;
