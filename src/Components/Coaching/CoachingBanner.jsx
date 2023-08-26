import React from "react";
import banner from "../../assets/coaching_banner.png";

const CoachingBanner = () => {
  return (
    <section>
      <div className="about_outter"></div>
      <div className="coaching_hero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 pe-md-0">
              <div className="d-flex flex-column justify-content-between h-100">
                <h1>Coaching</h1>
                <div className="coachingInner" style={{ paddingRight:"25px" }}>
                  <p className="mb-3">
                    Beschreibe mir dein Leben, wenn es zu 100 % deiner Vision
                    entspricht und noch mehr.
                  </p>

                  <p className="mb-3">
                    Mein Coaching ist eine vertrauensvolle und
                    prozessbegleitende Arbeit zwischen zwei Erwachsenen auf
                    Augenhöhe. Mit dir als Klient*in und mir als deinem Coach.
                    Ich unterstütze dich vom anfänglichen Wunsch eines Coachings
                    bis hin zur Strategiefindung, die dich zu deiner ganz
                    eigenen und besten Vision deines Lebens führen wird.
                  </p>

                  <p className="mb-2">
                    Meine Grundannahme ist: Du bist Expert*in deines eigenen
                    Lebens. Du weißt allein, was das Beste für dich ist.
                  </p>
                </div>
                <article>
                  <p className="mb-2">
                    Die Welt ist so Gross wie das Fenster,
                    <br className="d-none d-lg-block" /> das du Ihr öffnest.
                  </p>
                  <span className="mb-3">Prentice Mulford</span>
                  <p className="coachingSub">
                    Lieblingszitat von Dipl.- Psych. Susanne Eggers,
                    <br className="d-none d-lg-block" />
                    Mentorin & langjährige Wegbegleiterin
                  </p>
                </article>
                <p className="coachingDes" style={{ paddingRight:"25px" }}>
                  Als Life Coach unterstütze ich dich dabei, den Fokus auf deine
                  bisherigen bewussten und unbewussten Erfolge zu setzen und
                  mithilfe deiner ureigenen Fähigkeiten, Ressourcen und
                  Kompetenzen die beste Strategie für deinen individuellen
                  Lebensweg zu eröffnen und weiter zu ebnen. Ich lade dich dazu
                  ein, hinter alte Verhaltensmuster, Glaubenssätze und Blockaden
                  zu schauen, diese zu lösen und durch neue Visionen und Ziele
                  zu ersetzen.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 p-0 d-none d-md-block">
              <img
                className="img-fluid w-100 h-100 d-none d-md-block"
                src={banner}
                alt="Coaching"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingBanner;
