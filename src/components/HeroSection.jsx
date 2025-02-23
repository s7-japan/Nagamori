import logo from "../assets/logo.png";
import heroimage from "../assets/hero.png";

export default function HeroSection() {
  return (
    <div className="bg-[#E6E6E6] h-[110vw] md:h-[45vw] w-full flex pt-10 mb-5">
      <div className="h-full">
        <img
          src={heroimage}
          alt="hero"
          className="object-cover h-[80%] relative top-22 md:h-[43vw] md:top-0 md:-left-10"
        />
      </div>

      <div className="flex flex-col justify-center absolute top-50 left-6 md:top-[45%] md:left-[60%]">
        <img src={logo} alt="logo" height={400} width={400} className="hidden md:block"/>
        <p className="text-[3.5vw] md:text-[16px] font-light">永森 友美 / Beauty Angel Master</p>
      </div>
    </div>
  );
}
