import React from "react";
import before from "../../assets/before.png";
import after from "../../assets/after.png";

const CoachingFooter = () => {
  return (
    <section>
      <div className="coaching_bottom mb-5 mt-5">
        <div className="container">
          <p className="mb-5">
            In einem unverbindlichen Vorgespräch beginnen wir mit der Klärung
            deines Anliegens und dem Wunsch nach einem Coaching. Dabei wirst du
            herausfinden, ob du dich mit mir als deinem Coach wohlfühlst und wir
            gemeinsam einen sicheren Raum für unsere weitere Arbeit miteinander
            kreieren möchten. Gerne berate ich dich über dein individuelles
            Coaching und deine Investition in dich selbst. 
          </p>

          <div className="next_btn d-flex justify-content-between align-items-center">
            <button>
              <img className="img-fluid me-3" src={before} alt="Left Arrow" />
              Zurück
            </button>
            <button className="after_btn">
              zum Coaching
              <img className="img-fluid ms-3" src={after} alt="Right Arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingFooter;
