import React from "react";
import image1 from "./img08.webp";
import image2 from "./img09.webp";
import image3 from "./img11.jpg";
import "./Main2.css";
export default function Main2() {
  return (
    <>
      <div className="container-fluid">
        <div className="img1">
          <img
            style={{
              marginLeft: "45px",
              width: "300px",
              borderStartStartRadius: "50%",
              borderStartEndRadius: "50%",
            }}
            src={image1}
          ></img>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Weddings
          </h1>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              width: "280px",
              marginLeft: "20%",
            }}
          >
            Our talented wedding team is dedicated to telling your unique story
            through extraordinary and memorable floral designs.
          </p>
          <p className="hover"> Find Out More</p>
        </div>
        <div className="img3">
          <img
            style={{
              width: "400px",
              height: "600px",
            }}
            src={image2}
          ></img>
        </div>
        <div className="image3">
          <img
            style={{
              width: "300px",
              height: "340px",
              marginLeft: "45px",
            }}
            src={image3}
          ></img>

          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Private Events
          </h1>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              width: "280px",
              marginLeft: "20%",
            }}
          >
            We are on hand to speak with you to create the most beautiful
            flowers and plants for your event.
          </p>
          <p className="hover"> Find Out More</p>
        </div>
      </div>
    </>
  );
}
