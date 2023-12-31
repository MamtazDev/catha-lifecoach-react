import React from "react";
import banner from "../../assets/banner.jpg";
import mbanner from "../../assets/mBanner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section>
      <div className="hero_outter">
        <div className="hero">
          <div className="container">
            <div className="mb-5">
              <div className="row">
                <div className="col-12 col-lg-7">
                  <div className="d-flex justify-content-center">
                    <img className="img-fluid w-100 d-none d-md-block" src={banner} alt="Image" />
                    <img className="d-block d-md-none" src={mbanner} alt="Image" />
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="hero_inner_text">
                    <h1 className=" mb-3">
                      Was darf passieren, damit Sie wahrhaftig glücklich auf
                      Ihr Leben zurückschauen?
                    </h1>
                    <span className="mb-5">Dr. Petra Back</span>

                    <p className="mb-2">
                      Für mich war die Antwort darauf, dass ich im hohen Alter
                      auf mein Leben zurückblicken möchte und glücklich sein
                      werde. Ich möchte ein Leben führen, das ich nach meinem
                      eigenen Weg, Entscheidungen und Bedürfnissen gelebt habe,
                      sodass nur eine einzige Person hierüber stolz sein kann.
                      Nämlich ich!
                    </p>
                    <p className="mb-4">
                      Wir ziehen Veränderungen meistens erst dann ernsthaft in
                      Betracht, wenn ein Ereignis eintritt, nach welchem wir uns
                      vielleicht das erste Mal wahrhaftig mit uns selbst
                      auseinandersetzen.
                    </p>
                    {/* <Link to="/about" className="reading_btn">
                      Weiterlesen
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <article>
              <p>
                {/* Veränderung ist die Konstanteund
                <br className="d-none d-lg-block" /> selbst die Veränderung
                verändert sich. */}
                Veränderung ist die Konstante<br className="d-none d-lg-block" /> und selbst die Veränderung verändert sich.
              </p>
              <span>Simone Menne</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
