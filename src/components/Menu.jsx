import React from "react";
import one from "../assets/menu1.png";
import two from "../assets/menu2.png";
import three from "../assets/menu3.png";
import four from "../assets/menu4.png";
import btn2 from "../assets/btn2.png"

const Menu = () => {
  return (
    <div className="px-6 md:px-[13vw] flex flex-col items-center mt-24 md:mt-24">
      <h1 className="text-center text-[15vw] md:text-[4vw] mb-1 cambria">Menu</h1>
      <div className="w-25 h-[1.5px] bg-[#707070] mb-3"></div>
      <p className="text-center mb-14 md:mb-12 text-[4vw] md:text-[1.1vw] font-light">
      施術メニュー
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-8">
        <div>
          <div className="mb-1">
            <img src={one} alt="" />
          </div>
          <p className="text-[3vw] md:text-[1vw]">眉アートメイク</p>
          <p className="text-[3vw] md:text-[0.8vw]">￥ 100,000~</p>
        </div>
        <div>
          <div className="mb-1">
            <img src={two} alt="" />
          </div>
          <p className="text-[3vw] md:text-[1vw]">アイラインアートメイク</p>
          <p className="text-[3vw] md:text-[0.8vw]">￥ 100,000~</p>
        </div>
        <div>
          <div className="mb-1">
            <img src={three} alt="" />
          </div>
          <p className="text-[3vw] md:text-[1vw]">リップアートメイク</p>
          <p className="text-[3vw] md:text-[0.8vw]">￥ 100,000~</p>
        </div>
        <div>
          <div className="mb-1">
            <img src={four} alt="" />
          </div>
          <p className="text-[3vw] md:text-[1vw]">ヘアライン, 涙袋 etc</p>
          <p className="text-[3vw] md:text-[0.8vw]">￥ 100,000~</p>
        </div>
      </div>
      <img src={btn2} alt="" className="mt-5 w-60"/>
      <p className="mt-4 md:mt-9 text-[3.3vw] md:text-[1vw]">初めての方も、ご気軽のお問い合わせください。</p>
    </div>
  );
};

export default Menu;
