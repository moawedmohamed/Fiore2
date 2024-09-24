import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./website3/img04.webp";
import image2 from "./website3/img05.webp";
import image3 from "./website3/img06.webp";
import "./Carousel.css";

const FlowerSlider = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <button className="slick-next slick-arrow">Next</button>,
    prevArrow: <button className="slick-prev slick-arrow">Prev</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={image1} alt="In Bloom" />
          <h3>In Bloom</h3>
          <p>$65.00 - $98.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="slide">
          <img src={image2} alt="Vintage Heur" />
          <h3>Vintage Heur</h3>
          <p>$65.00 - $90.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="slide">
          <img src={image3} alt="Burnished Blossom" />
          <h3>Burnished Blossom</h3>
          <p>$43.00 - $63.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </Slider>
    </div>
  );
};

export default FlowerSlider;
