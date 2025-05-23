import bg from "../assets/bg.svg";
import bgmobile from "../assets/mobilebg.svg";
import whitelogo from "../assets/whitelogo.png";

export default function HeroSection() {
  return (
    <div className="">
      <img src={bg} alt="background" className="hidden w-full md:block" />
      <div className="relative md:hidden">
        <div className="absolute top-7 w-full text-center">
          <img src={whitelogo} alt="logo" className="mx-auto w-[300px]" />
          <p className="sikita mt-8 w-full text-center text-sm text-white italic">
            Makeup Artist / Nagamori Tomomi
          </p>
        </div>
        <img src={bgmobile} alt="background" className="w-full" />
      </div>
    </div>
  );
}
