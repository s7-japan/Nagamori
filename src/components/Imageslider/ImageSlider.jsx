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
        <div className="moving">
          <div className="left"></div>
          <div className="move">
            <img src={sliderone} alt="" className="_4UWLcg" />
            <img src={slidertwo} alt="" className="_4UWLcg" />
            <img src={sliderthree} alt="" className="_4UWLcg" />
            <img src={sliderfour} alt="" className="_4UWLcg" />
          </div>
          <div className="move">
            <img src={sliderone} alt="" className="_4UWLcg" />
            <img src={slidertwo} alt="" className="_4UWLcg" />
            <img src={sliderthree} alt="" className="_4UWLcg" />
            <img src={sliderfour} alt="" className="_4UWLcg" />
          </div>
          <div className="right"></div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
