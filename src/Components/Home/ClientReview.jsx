import React from "react";
import { Link } from "react-router-dom";

const ClientReview = () => {
  return (
    <section>
      <div className="client_review mb_140">
        <div className="container">
          <div className="d-flex flex-column justify-content-between">
            <div className="mb_review_350">
              <h3 className="text-center">Stimmen von Klient:innen</h3>
              <p>Lorem Ipsum</p>
              <span>Lorem Ipsum</span>
            </div>
            <Link className="reading_btn" to="/imprint">
              Weiterlesen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
