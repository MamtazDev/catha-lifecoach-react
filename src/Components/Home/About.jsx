import React from "react";
import about from "../../assets/about_me.png";

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
              <a className="reading_btn" href="about_me.html">
                Weiterlesen
              </a>
            </div>
            <div>
              <a href="about_me.html">über mich</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
