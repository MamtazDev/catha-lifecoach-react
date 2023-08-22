import React from "react";
import about from "../../assets/about_me.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="about_me mb_140">
        <div className="container">
          <div className="about_me_inner d-flex justify-content-between align-items-center gap-5">
            <div>
              <img src={about} alt="About Me" />
            </div>
            <div>
              <p className="mb-5">
                Hallo, ich bin Catharina Rettieck-Süfke. Ich freue mich dich
                kennenzulernen und dich in deinem selbstbestimmten Prozess hin
                zu deiner schönsten Vision deines eigenen Lebens zu begleiten.
              </p>
              <Link className="reading_btn" to="/about">
                Weiterlesen
              </Link>
            </div>
            <div>
              <Link to="/about">über mich</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
