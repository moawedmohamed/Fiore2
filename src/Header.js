import React from "react";
import "./Header.css";
import { useState } from "react";
import image from "./img03.png";
export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // // Function to toggle dark mode
  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode); // Toggle dark mode state
  //   // Toggle a class on the body for dark mode styles
  //   if (!isDarkMode) {
  //     document.body.classList.add("dark-mode");
  //   } else {
  //     document.body.classList.remove("dark-mode");
  //   }
  // };
  return (
    <>
      <div className="header">
        <div className="word">
          <h1>
            We Tell Stories
            <br></br>With Flowers
          </h1>
          <button>SHOW NOW</button>
        </div>
        <div className="divImg">
          <img src={image} alt="img"></img>
        </div>
      </div>
    </>
  );
}
