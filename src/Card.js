import React from "react";
import image10 from "./website3/img24.jpg";
import "./Card.css";
function Card() {
  return (
    <section className="full">
      <div className="card">
        <div className="img">
          <img src={image10} alt="img" />
        </div>
        <br></br>
        <div className="store-container">
          <h1 className="store-title">Our Store</h1>

          <div className="store-info">
            <div className="left-column">
              <p>
                Goddard Hall 80
                <br />
                Washington Square E,
                <br />
                New York, NY 10003, USA
              </p>
            </div>
            <div className="right-column">
              <p>
                <span>+44 (0) 207 739 1521</span>
                <br />
                <span>info@fiore.com</span>
              </p>
            </div>
          <hr></hr>
          </div>
          <div className="store-hours">
            <p>
              Monday – Friday:
              <br /> 7am – 7pm
            </p>
            <p>
              Saturday – Sunday:
              <br /> 8am – 7pm
            </p>
          </div>

          <div className="map-button">
            <button>VIEW ON MAP</button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Card;
