import React from "react";
import logo from "../assets/logo.png";
import instalogo from "../assets/instalogo.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#FCFCFC] px-12  md:px-[14vw] pt-[5vw] mt-30 md:mt-10">
      <div className="flex items-center md:gap-4 justify-between md:justify-start">
        <img src={logo} alt="" className="sm:h-14 md:h-23 h-15" />
        <img src={instalogo} alt="" className="sm:h-15 h-12" />
      </div>
      <p className="mt-5 font-light sm:text-sm text-[13px]">
        ご予約・お問い合わせは、LINEより受け付けております。ご不明点等ございましたら、お気軽にご連絡くださいませ。
      </p>
      <p className="text-center mt-6 sm:mt-20 mb-5 font-light sm:text-sm text-[13px]">
        Copyright © Nagamori art makeup All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
