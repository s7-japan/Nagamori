import React from "react";
import techniq from "../assets/techniq.svg";
import menu2_1 from "../assets/menu2_1.png";
import menu2_2 from "../assets/menu2_2.png";
import menu2_3 from "../assets/menu2_3.png";
import menu2_4 from "../assets/menu2_4.png";
import tail from "../assets/Tail.png";
import shadow from "../assets/Shadow.png";
import hairline from "../assets/Hairline.png";
import lips from "../assets/Lips.png";

const Menu2 = () => {
  return (
    <div className="px-12 md:px-[16vw] flex flex-col items-center mt-12 md:mt-[8vw] relative">
      <div className="absolute top-0 bg-[#B6BFBC] left-0 h-[95%] w-[28%] opacity-[12%] hidden md:block"></div>
      <img
        src={techniq}
        alt=""
        className="h-[20vw] md:h-[5vw] absolute top-10 -rotate-[20deg] md:top-0 md:rotate-0 opacity-50 md:opacity-100"
      />

      <p className="text-center mb-24 md:mb-[2.2vw] text-[7vw] md:text-[2.8vw] mt-14 md:mt-[4.5vw] text-[#707070] font-[400]">
        4つの特徴と強み
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-24 md:gap-8">
        <div className="flex flex-col">
          <div className="">
            <img src={menu2_1} alt="" className="w-full" />
          </div>
          <div className="relative">
            <img
              src={tail}
              alt=""
              className="md:h-[2.5vw] absolute top-[8vw] md:top-[1.3vw]"
            />
            <p className="text-[4vw] md:text-[0.9vw] text-[#707070] font-[500] mt-[17.5vw] md:mb-0 mb-[8vw] md:mt-[3.2vw]">
              テールアイライン
            </p>
            <p className="text-[4vw] md:text-[0.75vw] leading-8 md:leading-[1.6vw] md:mt-[0.8vw] text-[#707070] font-[500]">
              「きれいなテールライン」をつくります。
              アートメイクで、美しいテールラインを入れることで、横幅のひろがりをつくり、目を大きく見せることができます。
              <br /> また、お化粧に時間をかける必要もなくなります。
              この症例は、ドットの集合体により、メイクで描くよりも美しいアイラインを実現しています。
              技法として難易度が高いことから、「きれいなテールライン」を入れられるアーティストはとても少なく、全国からお客様にご来院いただいております。
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <img src={menu2_2} alt="" className="w-full" />
          </div>
          <div className="relative">
            <img
              src={shadow}
              alt=""
              className="md:h-[2.5vw] absolute top-[8vw] md:top-[1.3vw]"
            />
            <p className="text-[4vw] md:text-[0.9vw] text-[#707070] font-[500] mt-[17.5vw] md:mb-0 mb-[8vw] md:mt-[3.2vw]">
              シャドウアイライン
            </p>
            <p className="text-[4vw] md:text-[0.75vw] leading-8 md:leading-[1.6vw] md:mt-[0.8vw] text-[#707070] font-[500]">
              「シャドウアイラインで、魅力的な目もとにしています。
              <br />
              二重の幅や骨格に合わせてシャドウの入れる幅をかえることで、日本人に間に合うシャドウラインを実現しました。
              <br />
              これは、海外で習得した技法で、アイラインとアイシャドウを組み合わせています。
              <br />
              ブラックからブラウンのグラデーションにより柔らかいけど目元を華やかにしたい方におすすめです。
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <img src={menu2_3} alt="" className="w-full" />
          </div>
          <div className="relative">
            <img
              src={lips}
              alt=""
              className="md:h-[2.5vw] absolute top-[8vw] md:top-[1.3vw]"
            />
            <p className="text-[4vw] md:text-[0.9vw] text-[#707070] font-[500] mt-[17.5vw] md:mb-0 mb-[8vw] md:mt-[3.2vw]">
              リップ
            </p>
            <p className="text-[4vw] md:text-[0.75vw] leading-8 md:leading-[1.6vw] md:mt-[0.8vw] text-[#707070] font-[500]">
              「美しい定着」により、口紅を塗ったような仕上がりとなります。薄くなりやすい内側は濃くしっかりと、外側は淡く優しくグラデーションで重ねます。
              <br />
              技法のバリエーションには自信があり、いくつかの技法を組み合わせることで、綺麗に発色しつつも、透明感のある仕上がりにします。
              <br />
              肌への負担や唇の状態に合わせて、
              <br />
              おひとりお一人に合った技法とカラーをご提案いたします。
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <img src={menu2_4} alt="" className="w-full" />
          </div>
          <div className="relative">
            <img
              src={hairline}
              alt=""
              className="md:h-[2.5vw] absolute top-[8vw] md:top-[1.3vw]"
            />
            <p className="text-[4vw] md:text-[0.9vw] text-[#707070] font-[500] mt-[17.5vw] md:mb-0 mb-[8vw] md:mt-[3.2vw]">
              ヘアライン
            </p>
            <p className="text-[4vw] md:text-[0.75vw] leading-8 md:leading-[1.6vw] md:mt-[0.8vw] text-[#707070] font-[500]">
              自然なヘアラインを仕上げます。男性、女性ともにとても人気のメニューです。
              <br />
              マシンによるドットの集合体により、細くて繊細な毛並みを描くことで、本物のような自然なヘアラインにします。ひたいを丸く見せたり、おもながに見えることを気にしている方には、お顔のたて幅を和らげたり、また、M字の薄い部分を濃くしたり、ご要望に合わせたデザインが可能です。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu2;
