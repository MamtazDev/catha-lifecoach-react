import React from "react";
import before from "../assets/before.png";

const Imprint = () => {
  return (
    <div>
      <section className="imprint">
        <div className="darkBoxImprint"></div>
        <div className="container">
          <div style={{ maxWidth: "580px", margin: "auto" }}>
            <h2 className="mt-3 mb-3 mt-lg-5 mb-lg-5">Impressum</h2>
            <h6 className="mb-3">Angaben gemäß § 5 TMG</h6>
            <h6>Catharina Rettieck-Süfke</h6>
            <p>Life Coach</p>
            <p>Rhiemsweg 12 </p>
            <p className="mb-3"> 22111 Hamburg </p>
            <h6>Kontakt</h6>
            <p>Telefon: 017682010686</p>
            <p className="mb-3">E-Mail: kontakt@rettieck-suefke-coaching.de</p>
            <h6>Redaktionell verantwortlich</h6>
            <p className="mb-3">Catharina Rettieck-Süfke </p>
            <h6>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h6>
            <p className="mb-3">
              Ich bin nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen. Gemäß der EU-Verordnung Nr. 524/2013 bin ich
              gleichwohl verpflichtet, darauf hinzuweisen, dass die Europäische
              Kommission eine Plattform zur Online-Streitbeilegung (OS)
              bereitstellt, die unter{" "}
              <a href="https://ec.europa.eu/consumers/odr/">
                https://ec.europa.eu/consumers/odr/
              </a>{" "}
              erreichbar ist.
            </p>
            <h6>Quelle:</h6>
            <p className="mb-3">
              <a href="https://www.e-recht24.de/impressum-generator.html">
                https://www.e-recht24.de/impressum-generator.html
              </a>
            </p>
            <h6>Credits</h6>
            <p>Design: Martin Heidenreich Design</p>
            <p>Fotos: Tim Plamper</p>
            <p className="mb-3">Texte: Catharina Rettieck-Süfke</p>
            <p className="mb-5">
              Inhalt (Texte, Bilder und Grafiken) sowie die Struktur dieser
              Webseite unterliegen den Urheberrechtsschutz.
            </p>
          </div>
        </div>
      </section>

      <div className="mb-5">
        <div className="container">
          <div
            style={{ maxWidth: "580px", margin: "auto" }}
            className="next_btn d-flex justify-content-between align-items-center"
          >
            <button>
              <img className="img-fluid me-3" src={before} alt="Left Arrow" />
              Zurück
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;