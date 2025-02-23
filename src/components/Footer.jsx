import React from "react";
import logo from "../assets/logo.png";
import instalogo from "../assets/instalogo.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#FCFCFC] px-[13vw] pt-[5vw] mt-30">
      <div className="flex items-center gap-4">
        <img src={logo} alt="" className="sm:h-14 md:h-17 h-12" />
        <img src={instalogo} alt="" className="sm:h-10 h-8" />
      </div>
      <p className="mt-5 font-light sm:text-xs text-[10px]">
        ご予約・お問い合わせは、LINEより受け付けております。ご不明点等ございましたら、お気軽にご連絡くださいませ。
      </p>
      <p className="text-center mt-6 sm:mt-20 mb-5 font-light sm:text-xs text-[10px]">
        Copyright © Nagamori art makeup All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
