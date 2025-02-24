import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";
import p12 from "../assets/p12.png";
import btn4 from "../assets/btn4.png"

const Portfolio = () => {
  return (
    <div className="px-6 md:px-[13vw] flex flex-col items-center mt-15 md:mt-20">
      <h1 className="text-center text-[15vw] md:text-[4vw] mb-1 cambria">Portfolio</h1>
      <div className="w-25 h-[1.5px] bg-[#707070] mb-3"></div>
      <p className="text-center mb-12 md:mb-18 text-[4vw] md:text-[1.3vw] font-light">
        施術例
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <img src={p1} alt="" />
        <img src={p2} alt="" />
        <img src={p3} alt="" />
        <img src={p4} alt="" />
        <img src={p5} alt="" />
        <img src={p6} alt="" />
        <img src={p7} alt="" />
        <img src={p8} alt="" />
        <img src={p9} alt="" />
        <img src={p10} alt="" />
        <img src={p11} alt="" />
        <img src={p12} alt="" />
      </div>
      <img src={btn4} alt="" className="mt-10 w-60"/>
    </div>
  );
};

export default Portfolio;
