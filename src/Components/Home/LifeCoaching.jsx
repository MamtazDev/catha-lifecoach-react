import React from "react";
import lifeCoach from "../../assets/life_coach.png";
import { Link } from "react-router-dom";
const LifeCoaching = () => {
  return (
    <section>
      <div className="coaching mb_140">
        <div className="container">
          <div className="coaching_inner d-flex justify-content-between align-items-center gap-3 gap-lg-5">
            <div>
              <Link className="text-end" to="/coaching">
                Life Coaching
              </Link>
            </div>

            <div>
              <p className="mb-3 mb-lg-5">
                Mein Coaching ist eine vertrauensvolle und prozessbegleitende
                Arbeit zwischen Erwachsenen auf Augenhöhe. Mit dir als Klient*in
                und mir als deinem Coach. Ich unterstütze dich in der
                Strategiefindung, die dich zu deiner ganz eigenen und besten
                Vision deines Lebens führen wird.
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
