import React from "react";
import intersection from "../assets/Intersection2.png";
import instagram from "../assets/instalogo.png";
import btn3 from "../assets/btn3.png"

const Info = () => {
  return (
    <div className="px-6 md:px-[13vw] flex-row md:flex mt-14 md:mt-32">
      <div className="md:hidden">
        <p className="text-[#7070706e] text-[6vw] md:text-[1.5vw]">Makeup Artist</p>
        <div className="flex flex-col">
          <div className="flex justify-between md:gap-16 items-center">
            <h1 className="text-[12vw] md:text-[3.5vw] font-light">永森友美</h1>
            <img src={instagram} alt="" className="h-10" />
          </div>
          <p className="italic text-[4vw] md:text-[1.2vw] mb-5">Nagamori Tomomi</p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={intersection} alt="" className="w-full" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:justify-between pl-0 md:pl-20">
        <div className="hidden md:block">
          <p className="text-[#7070706e] text-[1.6vw]">Makeup Artist</p>
          <div className="flex flex-col">
            <div className="flex gap-16 items-center">
              <h1 className="text-[3.5vw] font-light">永 森 友 美</h1>
              <img src={instagram} alt="" className="h-10" />
            </div>
            <p className="italic text-[1.3vw]">Nagamori Tomomi</p>
          </div>
        </div>
        <p className="text-lg md:text-[1vw] mt-5 md:mt-0 font-light leading-9 md:leading-7 2xl:leading-8 2xl:text-[1.4vw]">
          総合病院での看護経験の後，大手美容外科，美容皮膚科で
          長年経験を積み，美容に関する技術と知識を習得その後，HAAB
          でアートメイク部門を立ち上げる。
          <br />
          <br />
          国内外のあらゆる資格を取得し，とくに世界的に認められている Beauty
          Angel Master を日本で初めて取得。
          <br />
          <br />
          イタリア・ミラノで開催された米国 SVIATO アカデミーのコンペティションで
          1 位獲得。
          <br />
          <br />
          AMASORA
          Clinic、札幌ルトロワビューティクリニックVogueでのアートメイクを開始。
          <br />
          <br />
          世界で開催されるアートメイクイベントにスピーカーや審査員として招待される。
        </p>
        <div className="flex justify-center md:justify-start">
        <img src={btn3} alt="" className="mt-10 md:mt-0"/>
        </div>
      </div>
    </div>
  );
};

export default Info;
