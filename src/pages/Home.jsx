import React from "react";
import HeroSection from "../components/HeroSection";
import HeroContent from "../components/HeroContent";
import Menu from "../components/Menu";
import Info from "../components/Info";
import Portfolio from "../components/Portfolio";
import Recommendation from "../components/Recommendation";
import ImageSlider from "../components/Imageslider/ImageSlider";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <ImageSlider />
      <HeroContent />
      <Menu />
      <Info />
      <Portfolio />
      <Recommendation />
    </div>
  );
};

export default Home;
