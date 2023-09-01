import React from "react";
import contact from "../../assets/contact.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contactHome">
      <div className="contact mb_140">
        <div className="container">
          <div className="contact_inner d-flex justify-content-between flex-md-row flex-column-reverse  gap-5">
            <div className="d-none d-md-block">
              <img className="img-fluid" src={contact} alt="Contact" />
            </div>
            <div className="d-block d-lg-none">
              <p className="mb-5 text-start pt-lg-4">
                Kontaktiere mich gern für ein kostenloses Vorgespräch.<br className="d-none d-lg-block" />
                Ich freue mich darauf, dich auf deiner Reise begleiten zu dürfen.
              </p>
              <Link className="reading_btn" to="/contact">
                Kontakt
              </Link>
            </div>
            <div>
              <div className="d-none d-lg-block">
                <p className="mb-5 text-start pt-lg-4">
                  Kontaktiere mich gern für ein kostenloses Vorgespräch.<br className="d-none d-lg-block" />
                  Ich freue mich darauf, dich auf deiner Reise begleiten zu dürfen.
                </p>
                <Link className="reading_btn" to="/contact">
                  Kontakt
                </Link>
              </div>
              <div className="d-block d-md-none">
                <img className="img-fluid" src={contact} alt="Contact" />
              </div>
            </div>
            <div>
              <h3 to="" className="pt-4">Kontakt</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
