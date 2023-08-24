import React, { useEffect } from "react";
import logo from "../assets/footer_logo.png";
import instagram from "../assets/ig.png";
import linkedIn from "../assets/linkedIn.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="foo_inner">
          <div className="text-center mb-5">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="foo_link d-flex flex-wrap justify-content-center align-items-center">
            <Link to="/contact">Kontakt</Link>
            <Link to="/imprint">Impressum</Link>
            <Link to="protect-data">Datenschutz</Link>
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Link
                target="_blank"
                to="https://www.instagram.com/rettieck_suefke_coaching/"
              >
                <img src={instagram} alt="Instagram" />
              </Link>
              <Link
                target="_blank"
                to="https://de.linkedin.com/in/catharina-rettieck-s%C3%BCfke-8173b8255"
              >
                <img src={linkedIn} alt="LinkedIn" />
              </Link>
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
