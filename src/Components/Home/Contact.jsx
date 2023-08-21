import React from "react";
import contact from "../../assets/contact.png";

const Contact = () => {
  return (
    <section>
      <div className="contact mb_140">
        <div className="container">
          <div className="contact_inner d-flex justify-content-between align-items-center gap-5">
            <div>
              <img className="img-fluid" src={contact} alt="Contact" />
            </div>
            <div>
              <p className="mb-5">
                Kontaktiere mich gern für ein kostenloses Vorgespräch.
                <br className="d-none d-lg-block" />
                Ich freue mich darauf, dich auf deiner Reise begleiten zu
                dürfen..
              </p>
              <a className="reading_btn" href="contact.html">
                Kontakt
              </a>
            </div>
            <div>
              <a href="contact.html">Kontakt</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
