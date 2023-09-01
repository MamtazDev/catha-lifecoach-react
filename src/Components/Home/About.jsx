import React from "react";
import about from "../../assets/about_me.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="about_me mb_140">
        <div className="container">
          <div className="about_me_inner d-flex justify-content-between flex-md-row flex-column-reverse gap-5">
            <div className="d-none d-lg-block">
              <img src={about} alt="About Me" />
            </div>
            <div className="d-block d-lg-none">
                <p className="mb-5 pt-lg-4 text-start">
                  Hallo, ich bin Catharina Rettieck-Süfke. Ich freue mich, dich kennenzulernen und dich in deinem selbstbestimmten Prozess hin zu der schönsten Vision deines eigenen Lebens zu begleiten.
                </p>
                <Link className="reading_btn" to="/about">
                  Weiterlesen
                </Link>
              </div>
            <div>
              <div className="d-none d-lg-block">
                <p className="mb-5 pt-lg-4 text-start">
                  Hallo, ich bin Catharina Rettieck-Süfke. Ich freue mich, dich kennenzulernen und dich in deinem selbstbestimmten Prozess hin zu der schönsten Vision deines eigenen Lebens zu begleiten.
                </p>
                <Link className="reading_btn" to="/about">
                  Weiterlesen
                </Link>
              </div>
              <div className="d-block d-lg-none">
                <img src={about} alt="About Me" />
              </div>
            </div>
            <div>
              <h3 to="" className="pt-lg-4">über mich</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
