import React from "react";
import one from "../assets/menu1.png";
import two from "../assets/menu2.png";
import three from "../assets/menu3.png";
import four from "../assets/menu4.png";
import technic from "../assets/technic.png";
import menu2_1 from "../assets/menu2_1.png";
import menu2_2 from "../assets/menu2_2.png";
import menu2_3 from "../assets/menu2_3.png";
import menu2_4 from "../assets/menu2_4.png";
import tail from "../assets/tail.png";
import shadow from "../assets/Shadow.png";
import hairline from "../assets/Hairline.png";
import lips from "../assets/Lips.png";

const Menu2 = () => {
  return (
    <div className="px-12 md:px-[13vw] flex flex-col items-center mt-12 md:mt-20 relative">
      <img src={technic} alt="" className="h-[20vw] md:h-[5vw] absolute top-10 -rotate-[20deg] md:top-0 md:rotate-0" />

      <p className="text-center mb-24 md:mb-12 text-[7vw] md:text-[2.4vw] font-light mt-14 md:mt-12">
        4つの特徴と強み
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-24 md:gap-8">
        <div>
          <div className="mb-1">
            <img src={menu2_1} alt="" className="w-full"/>
          </div>
          <img src={tail} alt="" />
          <p className="text-[4vw] md:text-[1vw]">テールアイライン</p>
          <p className="text-[4vw] md:text-[0.8vw] leading-8 font-light mt-5">
            「きれいなテールライン」をつくります。
            アートメイクで、美しいテールラインを入れることで、横幅のひろがりをつくり、目を大きく見せることができます。また、お化粧に時間をかける必要もなくなります。
            この症例は、ドットの集合体により、メイクで描くよりも美しいアイラインを実現しています。
            技法として難易度が高いことから、「きれいなテールライン」を入れられるアーティストはとても少なく、全国からお客様にご来院いただいております。
          </p>
        </div>
        <div>
          <div className="mb-1">
            <img src={menu2_2} alt="" className="w-full"/>
          </div>
          <img src={shadow} alt="" className="mt-2" />
          <p className="text-[4vw] md:text-[1vw] mt-1">シャドウアイライン</p>
          <p className="text-[4vw] md:text-[0.8vw] leading-8 font-light mt-5">
            シャドウアイラインで、魅力的な目もとにしています。
            二重の幅や骨格に合わせてシャドウの入れる幅をかえることで、日本人に間に合うシャドウラインを実現しました。
            これは、海外で習得した技法で、アイラインとアイシャドウを組み合わせています。
            ブラックからブラウンのグラデーションにより柔らかいけど目元を華やかにしたい方におすすめです。
          </p>
        </div>
        <div>
          <div className="mb-1">
            <img src={menu2_3} alt="" className="w-full"/>
          </div>
          <img src={lips} alt="" />
          <p className="text-[4vw] md:text-[1vw]">リップ</p>
          <p className="text-[4vw] md:text-[0.8vw] leading-8 font-light mt-5">
            「美しい定着」により、口紅を塗ったような仕上がりとなります。薄くなりやすい内側は濃くしっかりと、外側は淡く優しくグラデーションで重ねます。
            技法のバリエーションには自信があり、いくつかの技法を組み合わせることで、綺麗に発色しつつも、透明感のある仕上がりにします。
            肌への負担や唇の状態に合わせて、
            おひとりお一人に合った技法とカラーをご提案いたします。
          </p>
        </div>
        <div>
          <div className="mb-1">
            <img src={menu2_4} alt="" className="w-full"/>
          </div>
          <img src={tail} alt="" />
          <p className="text-[4vw] md:text-[1vw]">ヘアライン</p>
          <p className="text-[4vw] md:text-[0.8vw] leading-8 font-light mt-5">
            自然なヘアラインを仕上げます。男性、女性ともにとても人気のメニューです。
            マシンによるドットの集合体により、細くて繊細な毛並みを描くことで、本物のような自然なヘアラインにします。ひたいを丸く見せたり、おもながに見えることを気にしている方には、お顔のたて幅を和らげたり、また、M字の薄い部分を濃くしたり、ご要望に合わせたデザインが可能です。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu2;
