import React from "react";
import walktalk from "../../assets/walk_talk.png";
import coaching from "../../assets/coaching.png";
import onlineCoaching from "../../assets/online_coaching.png";

const Coaching = () => {
  const datas = [
    {
      title: "walk & Talk",
      pic: walktalk,
      overlay:
        "Die Kombination von Bewegung, Natur und vertraulichem Gespräch gibt dir die Möglichkeit, Klarheit über deine Themen zu bekommen und Lösungsmöglichkeiten zu entwickeln.Ich begleite dich dabei, dein Potenzial und neue Energie freizusetzen und positive Veränderung anzustoßen.",
    },
    {
      title: "1 : 1 Coaching",
      pic: coaching,
      overlay:
        " In einem 1:1 Coaching biete ich dir im Rahmen eines vertraulichen Settings die Möglichkeit, deine individuellen Bedürfnisse und Ziele klar zu benennen und weiter zu verfolgen. Dabei lege ich großen Wert auf eine respektvolle und wertschätzende Atmosphäre, sodass du einen reflektierten Einblick in dich selbst erhalten, sich innere Blockaden lösen und du in die Umsetzung deiner Ziele gehen kannst.",
    },
    {
      title: "Online Coaching",
      pic: onlineCoaching,
      overlay:
        " Durch ein Online Coaching kannst du mithilfe von Zoom in der Umgebung deines Zuhauses oder von überall aus, deutschland- / oder weltweit, bequem an unseren Sessions teilnehmen.",
    },
  ];
  return (
    <section>
      <div className="walk_talk mb_140">
        <div className="container">
          <div className="row gy-5">
            {datas.map((data, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 ">
                <p className="mb-3">{data.title}</p>
                <div className="talk ">
                  <div
                    className="imageContainer d-flex justify-content-center align-items-center"
                    data-content={data.overlay}
                  >
                    <img
                      className="img-fluid "
                      src={data.pic}
                      alt="Walk & Talk"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaching;
