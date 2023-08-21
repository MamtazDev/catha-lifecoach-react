import React from "react";
import logo from "../assets/footer_logo.png";
import instagram from "../assets/ig.png";
import linkedIn from "../assets/linkedIn.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="foo_inner">
          <div className="text-center mb-5">
            <img src={logo} alt="" />
          </div>
          <div className="foo_link d-flex flex-wrap justify-content-center align-items-center">
            <a href="contact.html">Kontakt</a>
            <a href="imprint.html">Impressum</a>
            <a href="protect_data.html">Datenschutz</a>
            <div className="d-flex justify-content-between align-items-center gap-2">
              <a href="#">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="#">
                <img src={linkedIn} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div>
            <p>Copyright © Catharina Rettieck-Süfke</p>
            <p>Design by Heidenreich.Design</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
