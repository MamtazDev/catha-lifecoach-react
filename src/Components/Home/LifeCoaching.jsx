import React from "react";
import lifeCoach from "../../assets/life_coach.jpg";
import { Link } from "react-router-dom";
const LifeCoaching = () => {
  return (
    <section>
      <div className="coaching mb_140">
        <div className="container">
          <div className="coaching_inner d-flex justify-content-between gap-3 gap-lg-5">
            <div>
              <h3 className="text-end pt-lg-4" to="">
                Life Coaching
              </h3>
            </div>

            <div>
              <p className="mb-3 pt-lg-4 mb-lg-5 text-start">
                Mein Coaching ist eine vertrauensvolle und prozessbegleitende Arbeit zwischen gesunden Erwachsenen auf Augenhöhe. Mit dir als Klient*in und mir als deinem Coach. Ich unterstütze dich in der Strategiefindung, die dich zu deiner ganz eigenen und besten Vision deines Lebens führen wird.
              </p>
              <Link to="/coaching" className="reading_btn">
                Weiterlesen
              </Link>
            </div>

            <div>
              <img src={lifeCoach} alt="Life Coach" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeCoaching;
