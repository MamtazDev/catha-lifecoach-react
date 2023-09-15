import React from "react";
import { Link } from "react-router-dom";

const ClientReview = () => {
  return (
    <section>
      <div className="client_review mb_140">
        <div className="container">
          <div className="mx-auto" style={{ maxWidth: "640px" }}>
            <h3 className="text-center mb-4">Stimmen von Klient:innen</h3>
            <div className="mb-4">
              <p>
                “Wenn du es nicht schaffst, aus deinem Gedankenkarussell zu
                entkommen, empfehle ich das Coaching mit Catharina. Durch
                gezieltes Nachfragen hilft sie, Situationen aus anderen
                Perspektiven zu betrachten und macht dich deiner eigenen
                Ressource bewusst - dir selbst. Mir hat es beruflich und privat
                enorm geholfen.”
              </p>
              <span>-Doris B.</span>
            </div>
            <div className="mb-4">
              <p>
                “ Mit ihrer offenen und authentische Art ist Catharina einfach
                ein toller Coach! Sie hörte sich unvoreingenommen mein Anliegen
                an und half mir dabei, die für mich richtige Entscheidung und
                neue Perspektive zu finden. Vor allem durch ihre natürliche
                Empathie habe ich schnell Vertrauen zu ihr aufbauen können und
                kann ihr Coaching nur weiterempfehlen.”
              </p>
              <span>-Lisa D.</span>
            </div>
            <div>
              <p>
                “Ich war bei Catharina, um eine Vision für meine berufliche
                Zukunft zu entwickeln. Dabei haben mich vor allem ihre sehr
                präzisen Fragen und ihr ganz genaues Hinhören weitergebracht.
                Sehr wertschätzend und ehrlich ist sie in die Tiefe gegangen und
                hat mich souverän durch den Prozess geführt. Ich würde jederzeit
                wieder ein Coaching bei Catharina in Anspruch nehmen.”
              </p>
              <span>-Personalsachbearbeiterin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
