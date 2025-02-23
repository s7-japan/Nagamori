import React from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";

const Menu = () => {
  return (
    <div className="px-6 md:px-[13vw] flex flex-col items-center mt-12 md:mt-30">
      <h1 className="text-center text-[8vw] md:text-[4vw] mb-1">Menu</h1>
      <div className="w-15 h-[1.5px] bg-[#707070] mb-3"></div>
      <p className="text-center mb-14 md:mb-12 text-[4vw] md:text-[1.3vw] font-light">
        施術例
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div>
          <div>
            <img src={three} alt="" />
          </div>
          <p>リップアートメイク</p>
          <p>￥ 100,000~</p>
        </div>
        <div>
          <div>
            <img src={four} alt="" />
          </div>
          <p>リップアートメイク</p>
          <p>￥ 100,000~</p>
        </div>
        <div>
          <div>
            <img src={one} alt="" />
          </div>
          <p>リップアートメイク</p>
          <p>￥ 100,000~</p>
        </div>
        <div>
          <div>
            <img src={two} alt="" />
          </div>
          <p>リップアートメイク</p>
          <p>￥ 100,000~</p>
        </div>
      </div>
      <button className="border-2 border-[#979797] py-3 px-10 mt-6 md:mt-12">
        予約確認はこちら→
      </button>
      <p className="mt-6 md:mt-12">初めての方も、ご気軽のお問い合わせください。</p>
    </div>
  );
};

export default Menu;
