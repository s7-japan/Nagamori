import logo from "../assets/logo.png";
import heroimage from "../assets/hero.png";

export default function HeroSection() {
  return (
    <div className="bg-[#E6E6E6] h-[90vw] md:h-[45vw] w-full flex pt-10 mb-10 md:mb-0">
      <div className="h-full">
        <img
          src={heroimage}
          alt="hero"
          className="object-cover h-[75%] relative top-22 -left-16 md:h-[43vw] md:-top-2 md:-left-10"
        />
      </div>

      <div className="flex flex-col justify-center absolute top-50 right-6 md:top-[45%] xl:top-[40%] 2xl:top-[45%] md:left-[60%]">
        <img src={logo} alt="logo" height={400} width={400} className="w-44"/>
        <p className="text-[2.8vw] md:text-[16px] font-light">永森 友美 / Beauty Angel Master</p>
      </div>
    </div>
  );
}
