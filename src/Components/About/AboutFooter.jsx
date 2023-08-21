import React from "react";
import before from "../../assets/before.png";
import after from "../../assets/after.png";

const AboutFooter = () => {
  return (
    <section>
      <div className="about_bottom mb-5 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <p className="mb-2">
                Also lass mich dir ein paar wichtige Fakten über mich noch
                vorweg beantworten:
              </p>
              <p>
                Mein Herz schlägt auch für Tier- und Umweltschutz. Ich glaube
                fest an die eigenen Fähigkeiten, sich das schönste Leben selbst
                kreieren zu können und zu dürfen. Entwicklung, Heilung und
                Veränderung beginnt immer in einem selbst.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <p className="mb-1">_ Life Coach (DBCA)</p>
              <p className="mb-3">
                Meine Ausbildung habe ich an der renommierten Dr. Bock Coaching
                Akademie in Berlin absolviert, die als Eliteschmiede im Coaching
                und als das “Harvard des Coachings” bekannt ist, absolviert, und
                ist nach den Richtlinien der International Coach Federation
                (ICF) anerkannt.
              </p>
              <p className="mb-3">_ Sachbearbeiterin in Kommunalverwaltung</p>
              <p className="mb-3">
                _ Ausbildung zur Verwaltungsfachangestellten
              </p>
            </div>
          </div>

          <div className="next_btn d-flex justify-content-between align-items-center">
            <button>
              <img className="img-fluid me-3" src={before} alt="Left Arrow" />
              Zurück
            </button>
            <button className="after_btn">
              zum Coaching
              <img className="img-fluid ms-3" src={after} alt="Right Arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFooter;
