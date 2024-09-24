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
                    <img src={first1}></img>
                </div>
                <div>
                    <img src={first2}></img>
                </div>
                <div>
                    <img src={first3}></img>
                </div>
                <div>
                    <img src={first4}></img>
                </div>
                <div>
                    <img src={first5}></img>
                </div>
                <div>
                    <img src={first6}></img>
                </div>


            </div>
            <div className="lastLetter">
                <div>
                    <p>
                        Our customers say
                        Excellent
                    </p>
                </div>
                <div>
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
                <div>
                    <img src={first7}></img>
                </div>

            </div>
        </>
    )
}
export default Photos