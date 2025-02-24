import React from "react";
import d1 from "../assets/d1.png";
import d2 from "../assets/d2.png";
import d3 from "../assets/d3.png";
import d4 from "../assets/d4.png";
import d5 from "../assets/d5.png";

const Recommendation = () => {
  return (
    <div className="px-4 md:px-[13vw] mt-10">
      <h1 className="text-center text-[10vw] md:text-[4vw] mb-1 cambria">
        Recommendations
      </h1>
      <div className="w-25 h-[1.5px] bg-[#707070] relative left-1/2 -translate-x-1/2 mb-3"></div>
      <p className="text-center mb-20 md:mb-24 text-[4vw] md:text-[1.3vw] font-light">
        提携先クリニックからひとこと
      </p>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[30%] flex items-center justify-center mb-6 md:mb-0">
          <img src={d1} alt="" className="h-[105vw] md:h-[80%]" />
        </div>
        <div className="w-full md:w-[70%] md:pl-16 pt-0 md:pt-6 px-1 md:px-0">
          <div className="flex gap-2 items-end">
            <div className="w-7 h-[1.5px] bg-[#70707079] mb-3"></div>
            <p className="text-[6vw] md:text-[1.2vw] text-[#70707079] cambria">
              doctor
            </p>
          </div>
          <h1 className="text-[12vw] md:text-[3vw] font-light">⑤大西 真代</h1>
          <p className="italic text-[6.5vw] md:text-[1.5vw] mb-5">
            GRACY TOKYO CLINIC 院長
          </p>
          <p className="text-[5vw] md:text-[1.3vw] font-light leading-10">
            世界中のアートメイクイベントでスピーカーや審査員として活躍する、業界を代表するアーティストです。彼女の卓越した技術と知識は、国内外で高く評価されており、イタリア・ミラノでのコンペティションでの優勝や、世界的権威「Beauty
            Angel Master」の資格取得など、その実績は枚挙に暇がありません。
            <br />
            技術もさることながら、患者さんに対するホスピタリティーも最高で、人としてもとても尊敬出来ます。
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mb-10 mt-40 md:mt-30">
        <div className="w-full md:w-[30%] flex items-center justify-center mb-6 md:mb-0">
          <img src={d2} alt="" className="h-[105vw] md:h-[80%]" />
        </div>
        <div className="w-full md:w-[70%] md:pl-16 pt-0 md:pt-6 px-1 md:px-0">
          <div className="flex gap-2 items-end">
            <div className="w-7 h-[1.5px] bg-[#70707079] mb-3"></div>
            <p className="text-[6vw] md:text-[1.2vw] text-[#70707079] cambria">
              doctor
            </p>
          </div>
          <h1 className="text-[12vw] md:text-[3vw] font-light">④池田 欣生</h1>
          <p className="italic text-[6.5vw] md:text-[1.5vw] mb-5">
            SHIBAURA B.CLINIC 院長
          </p>
          <p className="text-[5vw] md:text-[1.3vw] font-light leading-10">
            永森友美氏は、看護師としての経験を基盤に、大手美容外科での豊富な実務経験を通じて美容医療の技術を習得した後、アートメイク分野で目覚ましい成果を上げてきたプロフェッショナルです。日本初の「Beauty
            Angel Master」資格取得者であり、
            <br />
            真の美しさを追求し続けています。
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mb-10 mt-40 md:mt-30">
        <div className="w-full md:w-[30%] flex items-center justify-center mb-6 md:mb-0">
          <img src={d3} alt="" className="h-[105vw] md:h-[80%]" />
        </div>
        <div className="w-full md:w-[70%] md:pl-16 pt-0 md:pt-6 px-1 md:px-0">
          <div className="flex gap-2 items-end">
            <div className="w-7 h-[1.5px] bg-[#70707079] mb-3"></div>
            <p className="text-[6vw] md:text-[1.2vw] text-[#70707079] cambria">
              doctor
            </p>
          </div>
          <h1 className="text-[12vw] md:text-[3vw] font-light">③田中優太</h1>
          <p className="italic text-[6.5vw] md:text-[1.5vw] mb-5">
            HAAB DREAM BEAUTY CLINIC 東京本院 院長
          </p>
          <p className="text-[5vw] md:text-[1.3vw] font-light leading-10">
            永森友美氏は、国内外で数々の実績を持つアートメイクのスペシャリストです。HAABではアートメイク部門の立ち上げから、現在はHAABアートメイク統括として活躍中。お客様からの評判も大変良く、著名人も数多く担当しています。
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mb-10 mt-40 md:mt-30">
        <div className="w-full md:w-[30%] flex items-center justify-center mb-6 md:mb-0">
          <img src={d4} alt="" className="h-[105vw] md:h-[80%]" />
        </div>
        <div className="w-full md:w-[70%] md:pl-16 pt-0 md:pt-6 px-1 md:px-0">
          <div className="flex gap-2 items-end">
            <div className="w-7 h-[1.5px] bg-[#70707079] mb-3"></div>
            <p className="text-[6vw] md:text-[1.2vw] text-[#70707079] cambria">
              doctor
            </p>
          </div>
          <h1 className="text-[12vw] md:text-[3vw] font-light">①前田 拓摩</h1>
          <p className="italic text-[6.5vw] md:text-[1.5vw] mb-5">
            札幌ル・トロワ ビューティクリニック Vogue 院長
          </p>
          <p className="text-[5vw] md:text-[1.3vw] font-light leading-10">
            世界で活躍されている永森友美氏のアートメイク技術に感動し、最先端のアートメイクを札幌で受けられる事ができたら、という思いからビューティクリニックvogueでその場を提供させていただくことになりました。
            Beauty
            Angelという名門アカデミーにおけるマスター資格は日本人初であり、そんな永森氏による施術は世界でもトップクラスのものだと思います。皆さんにも施術を受けてとらいこの感動を伝えられたらと思っています
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mb-10 mt-40 md:mt-30">
        <div className="w-full md:w-[30%] flex items-center justify-center mb-6 md:mb-0">
          <img src={d5} alt="" className="h-[105vw] md:h-[80%]" />
        </div>
        <div className="w-full md:w-[70%] md:pl-16 pt-0 md:pt-6 px-1 md:px-0">
          <div className="flex gap-2 items-end">
            <div className="w-7 h-[1.5px] bg-[#70707079] mb-3"></div>
            <p className="text-[6vw] md:text-[1.2vw] text-[#70707079] cambria">
              doctor
            </p>
          </div>
          <h1 className="text-[12vw] md:text-[3vw] font-light">②細井 龍</h1>
          <p className="italic text-[6.5vw] md:text-[1.5vw] mb-5">
            アマソラクリニック院長
          </p>
          <p className="text-[5vw] md:text-[1.3vw] font-light leading-10">
            アマソラクリニックでは、SVIATOコンペティション優勝の実績を持つ永森友美氏によるアートメイク施術をご提供しています。日本初のBeauty
            Angel
            Masterとして、国内外の資格を多数取得し、美容業界での豊富な経験を積み重ねた技術で、自然で美しい仕上がりを追求しています。患者さま一人ひとりに合わせた丁寧なデザインをご提案いたします。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
