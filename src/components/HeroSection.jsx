import logo from "../assets/newLogo.svg";
import heroimage from "../assets/hero.png";

export default function HeroSection() {
  return (
    <div className="bg-[#E6E6E6] h-[75vw] md:h-[38vw] w-full flex pt-24 md:pt-10 md:mb-0">
      <div className="w-1/2 h-full">
        <img src={heroimage} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt="" className="md:h-[9vw] h-[11vw]" />
          <p className="md:text-[1.2vw] text-[3vw] pl-[1vw] text-[#707070]">
            永森 友美 / Beauty Angel Master
          </p>
        </div>
      </div>
    </div>
  );
}
