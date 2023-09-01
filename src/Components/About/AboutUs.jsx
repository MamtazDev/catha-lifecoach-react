import React from "react";
import about from "../../assets/about_hero.jpg";
import mabout from "../../assets/mabout_hero.png";

const AboutUs = () => {
  return (
    <section>
      <div className="about_outter"></div>
      <div className="about_hero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 pe-md-0">
              <div className="d-block d-md-none d-flex justify-content-center">
                <img
                  className="img-fluid"
                  src={mabout}
                  alt="About Me"
                />
              </div>
              <div className="d-none d-md-block">
                <div className="d-flex flex-column justify-content-between h-100">
                  <h1>Über mich</h1>
                  <div className="about_inner" style={{ paddingRight: "25px" }}>
                    <p className="mb-3 mb-lg-5">
                      Ich war nie der Typ für “den roten Faden”. Ich stand immer
                      schon für Neugier, Veränderung, Lebenslust und war immer
                      darauf aus, einfach loszulegen! Und was hindert mich auch
                      daran? Richtig - Faktisch nichts! Aber diese Erkenntnis
                      braucht lange Zeit und das ist auch gut so! Auch ich bin
                      noch lange nicht fertig mit innerem Wachstum und
                      Entwicklung.
                    </p>

                    <p className="mb-3 mb-xl-5">
                      Denn genau dieser kurvenreiche Weg macht mich aus. Nach über einem Jahrzehnt öffentlichen Dienstes, einem Burnout später und mit Beginn meines neuen Jahrzehnts, war es endlich an der Zeit, in das Leben einzutauchen und zu starten, dass ICH wollte. Kreativ, empathisch, voller Charisma, mit einer gehörigen Portion Humor und einer lauten Lache! Denn Lachen ist für mich das Schönste!
                    </p>

                    <p>
                      Ich stehe 100 % hinter einem selbstbestimmten Weg des Lebens
                      und dem Ausleben der individuellen, wichtigsten Werte.
                      Angefangen bei meinen eigenen, wie Selbstwert, Selbstliebe,
                      Selbstbestimmung, Respekt, Empathie und Humor. Meine Arbeit
                      mit dir ist kein straighter Sprint, sondern ein
                      vertrauensvoller Marathon auf Augenhöhe und ja, Lachen ist
                      erlaubt und gewünscht!
                    </p>
                  </div>
                  <article className="about_dark">
                    <p className="mb-2">
                      “Darling, don’t quit your daydream,
                      <br className="d-none d-lg-block" />
                      it’s your life that you’re making.”
                    </p>
                    <span>Lily Meola</span>
                  </article>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 p-0">
              <div className="d-none d-md-block">
                <img
                  className="img-fluid w-100 d-none d-md-block"
                  src={about}
                  alt="About Me"
                />
              </div>
              <div className="d-block d-md-none">
                <div className="d-flex flex-column justify-content-between h-100">
                  <h1>Über mich</h1>
                  <div className="about_inner" style={{ paddingRight: "25px" }}>
                    <p className="mb-3 mb-lg-5">
                      Ich war nie der Typ für “den roten Faden”. Ich stand immer
                      schon für Neugier, Veränderung, Lebenslust und war immer
                      darauf aus, einfach loszulegen! Und was hindert mich auch
                      daran? Richtig - Faktisch nichts! Aber diese Erkenntnis
                      braucht lange Zeit und das ist auch gut so! Auch ich bin
                      noch lange nicht fertig mit innerem Wachstum und
                      Entwicklung.
                    </p>

                    <p className="mb-3 mb-xl-5">
                      Denn genau dieser kurvenreiche Weg macht mich aus. Nach über einem Jahrzehnt öffentlichen Dienstes, einem Burnout später und mit Beginn meines neuen Jahrzehnts, war es endlich an der Zeit, in das Leben einzutauchen und zu starten, dass ICH wollte. Kreativ, empathisch, voller Charisma, mit einer gehörigen Portion Humor und einer lauten Lache! Denn Lachen ist für mich das Schönste!
                    </p>

                    <p>
                      Ich stehe 100 % hinter einem selbstbestimmten Weg des Lebens
                      und dem Ausleben der individuellen, wichtigsten Werte.
                      Angefangen bei meinen eigenen, wie Selbstwert, Selbstliebe,
                      Selbstbestimmung, Respekt, Empathie und Humor. Meine Arbeit
                      mit dir ist kein straighter Sprint, sondern ein
                      vertrauensvoller Marathon auf Augenhöhe und ja, Lachen ist
                      erlaubt und gewünscht!
                    </p>
                  </div>
                  <article className="about_dark">
                    <p className="mb-2">
                      “Darling, don’t quit your daydream,
                      <br className="d-none d-lg-block" />
                      it’s your life that you’re making.”
                    </p>
                    <span>Lily Meola</span>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
