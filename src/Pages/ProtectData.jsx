import React, { useEffect } from "react";

const ProtectData = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);
  return (
    <section className="imprint">
      <div className="darkBoxImprint"></div>
      <div className="container">
        <div style={{ height: "500px", margin: "auto" }}></div>
      </div>
    </section>
  );
};

export default ProtectData;
