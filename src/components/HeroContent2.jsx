import React from "react";
import vid1 from "../assets/vid1.mov";
import vid2 from "../assets/vid2.mov";
import technique from "../assets/technique.png"

const HeroContent2 = () => {
  return (
    <div className="px-6 md:px-[13vw] md:flex-row flex flex-col-reverse md:mt-32 mt-28 relative">
      <div className="w-full md:w-[30%] mt-8 md:mt-0">
        <div className="flex flex-col gap-5">
          <div className="md:w-[280px] md:h-[280px] w-full h-[90vw]">
            <video
              src={vid1}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          </div>
          <div className="md:w-[280px] md:h-[280px] w-full h-[380px]">
            <video
              src={vid2}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          </div>
        </div>
        <div></div>
      </div>
      <div className="absolute right-20 md:right-28 -top-5">
        <img src={technique} alt="" className="h-40" />
      </div>
      <div className="w-full pl-0 md:w-[70%] md:pl-[100px] flex flex-col justify-center">
        <div className="text-[7vw] md:text-[2.3vw] font-light mb-2">
          フェザーブロー®で
        </div>
        <div className="text-[7vw] md:text-[2.3vw] font-light flex justify-end">
          リアルな毛並みを再現
        </div>
        <p className="text-[3.7vw] md:text-[1vw] mt-7 md:mt-8 font-light mb-20 md:mb-0 leading-9 md:leading-7">
          眉のアートメイクは、「肌質」と「仕上がり感」
          でお客様と丁寧に相談のうえ、手彫りか機械彫りかを決めていきますが、マシンのほうが大胆な毛並みができます。
          <br />
          <br />
          Feather
          Browは、マシンを使用し、ドットの集合体で線を描くことにより、肌への負担が少なくなる、にじみにくく産毛も再現できる、
          お客様の肌質を選ばない、より自由なデザインにできる、
          <br />
          など利点が多いため，世界中で普及している技法です。
          <br />
          日本ではまだ綺麗に描けるアーティストが極めて少ないですが、施術者の技術ですべてが決まります。
          <br />
          <br />
          永森が世界的評価の高い4つの講習を経て、５年の学びと研究を重ねて作り上げた技術で、よりリアルな毛並み感を提供いたします。
        </p>
      </div>
    </div>
  );
};

export default HeroContent2;
