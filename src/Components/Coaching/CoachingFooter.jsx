import React from "react";
import before from "../../assets/before.png";
import after from "../../assets/after.png";
import { Link } from "react-router-dom";

const CoachingFooter = () => {
  return (
    <section>
      <div className="coaching_bottom mb-5 mt-5">
        <div className="container">
          <div className="mb-5 d-flex flex-column gap-3">
            <p>
              In einem unverbindlichen Vorgespräch beginnen wir mit der Klärung
              deines Anliegens und dem Wunsch nach einem Coaching. Dabei wirst du
              herausfinden, ob du dich mit mir als deinem Coach wohlfühlst und wir
              gemeinsam einen sicheren Raum für unsere weitere Arbeit miteinander
              kreieren möchten. Gerne berate ich dich über dein individuelles
              Coaching und deine Investition in dich selbst.
            </p>
            <p style={{ fontWeight: "800" }}>
              Welche Themen eignen sich für ein Coaching?
            </p>
            <div className="ps-3">
              <ul>
                <li>Klare Entscheidungen treffen</li>
                <li>Herausforderungen umdenken und anders begegnen</li>
                <li>Selbstbewusstsein / Selbstwert / Selbstliebe stärken</li>
                <li>Entwicklung und Gestaltung der eigenen Lebensvision</li>
                <li>Innere und äußere Konflikte lösen</li>
                <li>Findung der eigenen beruflichen / persönlichen / privaten Rolle</li>
                <li>Private und berufliche Veränderung und (Neu-) Orientierung </li>
              </ul>
            </div>
            <p>und viele mehr…</p>
            <p style={{ fontWeight: "800" }}>
              Was bringst du für ein erfolgreiches Coaching mit?
            </p>
            <div className="ps-3">
              <ul>
                <li>wahrer Wunsch zur Veränderung und Entwicklung</li>
                <li>Selbstwirksamkeit</li>
                <li>Offenheit für Perspektivenwechsel </li>
                <li>Selbstreflektion</li>
              </ul>
            </div>
          </div>
          

          <div className="next_btn coachingNext d-flex justify-content-between align-items-center">
            <Link to="/about">
              {" "}
              <button>
                <img className="img-fluid me-3" src={before} alt="Left Arrow" />
                Zurück
              </button>
            </Link>
            <Link to="/contact">
              <button className="after_btn">
                Jetzt Kontaktanfrage stellen
                <img className="img-fluid ms-3" src={after} alt="Right Arrow" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingFooter;
