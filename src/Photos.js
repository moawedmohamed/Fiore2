import React from "react";
import first1 from "./website3/img25.jpg";
import first2 from "./website3/img26.jpg";
import first3 from "./website3/img27.jpg";
import first4 from "./website3/img28.jpg";
import first5 from "./website3/img29.jpg";
import first6 from "./website3/img30.jpg";
import first7 from "./website3/img32.png"
import "./Photos.css"
function Photos() {
    return (
        <>
            <p className="follow">Follow us</p>
            <div className="containerOfImages">
                <div>
                    <img src={first1} alt="img" ></img>
                </div>
                <div>
                    <img src={first2}alt="img" ></img>
                </div>
                <div>
                    <img src={first3}alt="img" ></img>
                </div>
                <div>
                    <img src={first4}alt="img" ></img>
                </div>
                <div>
                    <img src={first5}alt="img" ></img>
                </div>
                <div>
                    <img src={first6}alt="img" ></img>
                </div>


            </div>
            <div className="lastLetter">
                <div>
                    <p>
                        Our customers say
                        Excellent
                    </p>
                </div>
                <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div>
                    <p>
                        4.8 out of 5 based on
                    </p>

                </div>
                <div>
                    <p>
                        7,980 reviews
                    </p>
                </div>
                <div style={{
                    marginTop:"-20px"
                }} >
                    <img src={first7} alt="img" ></img>
                </div>

            </div>
        </>
    )
}
export default Photos