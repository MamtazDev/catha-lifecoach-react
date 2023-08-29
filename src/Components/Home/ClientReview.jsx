import React from "react";
import { Link } from "react-router-dom";

const ClientReview = () => {
  return (
    <section>
      <div className="client_review mb_140">
        <div className="container">
          <div className="mx-auto" style={{ maxWidth: "640px" }}>
            <h3 className="text-center mb-4">Stimmen von Klient:innen</h3>
            <p>
              “Wenn du es nicht schaffst, aus deinem Gedankenkarussell zu entkommen, empfehle ich das Coaching mit Catharina. Durch gezieltes Nachfragen hilft sie, Situationen aus anderen Perspektiven zu betrachten und macht dich deiner eigenen Ressource bewusst - dir selbst. Mir hat es beruflich und privat enorm geholfen.”
            </p>
            <span>-Doris B.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
