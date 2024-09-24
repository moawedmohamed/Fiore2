import React from "react";
import image1 from "./img12.webp";
import image2 from "./img13.webp";
import image3 from "./img14.webp";
import image4 from "./img15.webp";
import image5 from "./img16.png";
import image6 from "./4abdad36-8da8-4603-98b2-b52d34b0d1c4.png";
import image7 from "./website3/img17.webp";
import image8 from "./website3/img18.webp";
import image9 from "./website3/img19.webp";
import image10 from "./website3/img20.webp";
import "animate.css/animate.min.css";
import "animate.css";
// import image6 from "./website3"
import "./Main3.css";

function Main3() {
  return (
    <>
      <h1
        style={{
          fontFamily: " 'Times New Roman', Times, serif",
          display: "flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        Shop by Popular Ocasions
      </h1>
      <div className="imgs">
        <div className="image1">
          <img src={image1}></img>
          <p>Christmas</p>
        </div>
        <div className="image1">
          <img src={image2}></img>
          <p>Birthday</p>
        </div>
        <div className="image1">
          <img src={image3}></img>
          <p>Autumn</p>
        </div>
        <div className="image1">
          <img src={image4}></img>
          <p>Anniversary</p>
        </div>
      </div>
      <div></div>
      <div className="image5">
        <img style={{ height: "300px", width: "600px" }} src={image5}></img>
      </div>
      <p className="PMain3">
        A parent and Family <br></br> Owned Luxury Floral <br></br> Boutique
      </p>
      <div>
        <div className="image6">
          <img src={image6}></img>
        </div>
      </div>
      <div className="text">
        <h1>Gifts</h1>
        <p>
          Furnish your beautiful bouquet with a gift from our handpicked edit.
        </p>
      </div>
      <div className="TOtalSlides">
        <div className="slide">
          <img src={image7} alt="In Bloom" />
          <h3>In Bloom</h3>
          <p>$65.00 - $98.00</p>
          <div className="animate__backInUp">
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        <div className="slide">
          <img src={image8} alt="Vintage Heur" />
          <h3>Vintage Heur</h3>
          <p>$65.00 - $90.00</p>
          <di0v className="animate__backInUp">
            <button className="add-to-cart">Add to Cart</button>
          </di0v>
        </div>
        <div className="slide">
          <img src={image9} alt="Burnished Blossom" />
          <h3>Burnished Blossom</h3>
          <p>$43.00 - $63.00</p>
          <div className="animate__backInUp">
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="midBtn">
        <button>VIEW ALL GIFTS</button>
      </div>
      <div>
        <div className="final">
          <div className="picture">
            <img className="pic" src={image10}></img>
          </div>
          <div className="Discover">
            <p className="first">
              Fiore Flower <br /> School
            </p>
            <p className="secondP">
              Discover our world-renowned school in the heart of Mayfair – and
              it’s rich programme of fun workshops and ambitious courses.
            </p>

            <p className="thirdP">Find out more</p>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Main3;
