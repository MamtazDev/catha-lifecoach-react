import React from "react";
import logo from "../assets/header_logo.svg";
import menu from "../assets/menu.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center gap-2">
            <Link className="navbar-brand" to="/">
              <img className="img-fluid" src={logo} alt="Logo" />
            </Link>
            <div>
              <p>Catharina Rettieck-Süfke</p>
              <span className="d-block">Life Coach</span>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><img src={menu} alt="menu" /></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  Über mich
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/coaching">
                  Coaching
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
