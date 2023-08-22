import React from "react";
import contactbanner from "../assets/contact-banner.png";
import before from "../assets/before.png";
import after from "../assets/after.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <section className="contactAll">
        <div className="darkBox"></div>
        <div className="container">
          <img className="mb-5 img-fluid" src={contactbanner} alt="" />
          <div
            style={{ maxWidth: "760px", margin: "auto" }}
            className="contact_form"
          >
            <h2 className="text-center mb-3">
              Kostenloses Vorgespräch vereinbaren
            </h2>
            <form>
              <div className="d-flex gap-4 mb-3">
                <div className="w-100">
                  <label>Vorname*</label>
                  <input className="w-100" type="text" />
                </div>
                <div className="w-100">
                  <label>Nachname*</label>
                  <input className="w-100" type="text" />
                </div>
              </div>
              <div className="mb-3">
                <label>E-Mail*</label>
                <input className="w-100" type="email" />
              </div>
              <div className="mb-3">
                <label>E-Telefon*</label>
                <input className="w-100" type="tel" />
              </div>
              <div className="mb-3">
                <label>Thema</label>
                <input className="w-100" type="text" />
              </div>
              <div className="mb-3">
                <label>Nachricht</label>
                <textarea className="w-100" cols="30" rows="6"></textarea>
              </div>
              <div className="confirmForm d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkBox"
                    name="weeklyMail"
                    value="yes"
                  />
                  <label>Receive weekly mails</label>
                </div>
                <p>
                  Mit * gekennzeichnete Felder sind
                  <br className="d-none d-lg-block" /> nötig für den weiteren
                  Kontakt.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="mb-5">
        <div className="container">
          <div
            style={{ maxWidth: "760px", margin: "auto" }}
            className="next_btn d-flex justify-content-between align-items-center"
          >
            <Link to="/coaching">
              {" "}
              <button>
                <img className="img-fluid me-3" src={before} alt="Left Arrow" />
                Zurück
              </button>
            </Link>
            <Link to="/imprint">
              {" "}
              <button className="after_btn">
                zum Impressum
                <img className="img-fluid ms-3" src={after} alt="Right Arrow" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
