import React from "react";
import intersection from "../assets/Intersection.png";
import concept from "../assets/concept.png";

const HeroContent = () => {
  return (
    <div className="px-6 md:px-[13vw] flex-row md:flex md:mt-32">
      <div className="w-full md:w-1/2 flex flex-col relative">
        <div className="absolute top-12 md:top-0">
          <img src={concept} alt="" className="h-40" />
        </div>
        <p className="text-[7vw] md:text-[3vw] mt-20 md:mt-30">
          リアルで自然な眉を描く
        </p>
        <p className="text-lg md:text-[1.2vw] mt-5 md:mt-12 font-light mb-20 md:mb-0">
          現在の主流としては使い捨ての医療⽤ニードルと⾊素を⽤いて、⽪膚の真⽪上層部に染⾊していく⾏為です。
          <br />
          <br />
          アートメイクの施術直後は濃く発⾊しますが、1週間程で半分くらいの発⾊に落ち着きます。個⼈差が⽣じますが、数ヶ⽉〜数年かけて徐々に薄くなりますが、完全に消えることはありません。⾊の定着に個⼈差がありますので、2〜3回の回数が必要な⽅がいます。
          <br />
          <br />
          仕上がりが希望の⾊・形と異なるリスクがあります。ニードルの刺激により、発⾚・腫脹・疼痛・搔痒感が数⽇続く場合があります。また、感染・予期せぬアレルギー等の副作⽤が起こる可能性があります。
        </p>
        <button className="hidden md:block border-2 border-[#979797] py-2 px- w-60 mt-10">
          予約確認はこちら→
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-end">
        <img src={intersection} alt="" className="w-full md:w-[80%]" />
      </div>
      <button className="md:hidden border-2 border-[#979797] py-2 px- w-60 mt-10">
        予約確認はこちら→
      </button>
    </div>
  );
};

export default HeroContent;
