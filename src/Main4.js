import React from "react";
import "./Main4.css";
import image1 from "./website3/img21.webp";
import image2 from "./website3/img22.webp";
import image3 from "./website3/img23.jpg";
import im4ge4 from "./website3/image.png";  

// import image3 from "";
function Main4() {
  return (
    <>
      <div className="Journal">
        <p>The Journal</p>
      </div>
      <div className="containerOfIms">
        <div className="Plants">
          <img className="im1" src={image1}></img>
          <h2>Plants</h2>
          <h1>Celebrating: Diversity and pride</h1>
          <p>
            May – a month which welcomes an<br></br> abundance of flowers, but there is
            one stem whose <br></br> return truly sets hearts aflutter. From late April
            the peony, cel…
          </p>
        </div>
        <div className="Plants">
          <img className="im2" src={image2}></img>
          <h2>Plants</h2>
          <h1>Seasonal favourite: Peonies</h1>
          <p>
            Whether it’s the hue of a precious gem or a stem that reminds them
            of a special time or place – our florists take inspiration from a
            plethora of su…
          </p>
        </div>
        <div className="Plants">
          <img className="im1" src={image3}></img>
          <h2>Plants</h2>
          <h1>How to dress a festive table</h1>
          <p>
            For those of you hosting this Christmas, read on; it’s time to
            polish up the cutlery, bring out the china plates, and brush up on
            our top tips on…
          </p>
        </div>
      </div>
      <div className="im4Div">
        <img className="im4" src={im4ge4}></img>
      </div>
    </>
  );
}

export default Main4;
