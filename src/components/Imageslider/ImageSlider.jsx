import React from "react";
import "./ImageSlider.css";
import sliderone from "../../assets/slider1.png";
import slidertwo from "../../assets/slider2.png";
import sliderthree from "../../assets/slider3.png";
import sliderfour from "../../assets/slider4.png";

const ImageSlider = () => {
  return (
    <>
      <div id="main">
        <div className="moving mt-4 md:mt-0">
          <div className="left"></div>
          <div className="move">
            <img src={sliderone} alt="" className="h-25 md:h-[9vw]" />
            <img src={slidertwo} alt="" className="h-25 md:h-[9vw]" />
            <img src={sliderthree} alt="" className="h-25 md:h-[9vw]" />
            <img src={sliderfour} alt="" className="h-25 md:h-[9vw]" />
            <img src={sliderone} alt="" className="h-25 md:h-[9vw]" />
            <img src={slidertwo} alt="" className="h-25 md:h-[9vw]" />
            <img src={sliderthree} alt="" className="h-25 md:h-[9vw]" />
            <img src={sliderfour} alt="" className="h-25 md:h-[9vw]" />
            <img src={sliderone} alt="" className="h-25 md:h-[9vw]" />
            <img src={slidertwo} alt="" className="h-25 md:h-[9vw]" />
            <img src={sliderthree} alt="" className="h-25 md:h-[9vw]" />
            <img src={sliderfour} alt="" className="h-25 md:h-[9vw]" />
            <img src={sliderone} alt="" className="h-25 md:h-[9vw]" />
            <img src={slidertwo} alt="" className="h-25 md:h-[9vw]" />
            <img src={sliderthree} alt="" className="h-25 md:h-[9vw]" />
            <img src={sliderfour} alt="" className="h-25 md:h-[9vw]" />
          </div>
          <div className="right"></div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
