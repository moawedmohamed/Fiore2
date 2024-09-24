import React from "react";
import image10 from "./website3/img24.jpg";
import "./Card.css";
function Card() {
  return (
    <>
      <div className="card">
      <div className="titleCard">
        <h1>Our Store</h1>
      </div>
        <div className="pictureOfCard">
          <img className="picCard" src={image10}></img>
        </div>

        <div className="Discover2">
          <div className="First">
            <p>Goddard  Hall 80</p>
            <p>Washington Square E,</p>
            <p>New York,NY 10003</p>
          </div>
          <div className="Second">
            <p>
              +44 (0) 207 739 1521
            </p>
            <p>info@fiore.com</p>
          </div>
        </div>
        <div className="section">
          <div className="Monday">
            <p>
              Monday – Friday: <br></br> 7am – 7pm
            </p>
          </div>
          <div className="Saturday">
            <p>
              Saturday – Sunday: <br></br> 8am – 7pm
            </p>
          </div>
        </div>
      </div>
      <div className="btn1">
        <button>VIEW ON MAP</button>
      </div>
    </>
  );
}

export default Card;
