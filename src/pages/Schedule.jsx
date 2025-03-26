import React from "react";
import hero from "../assets/hero_removed.png";
import logo from "../assets/logo.png";
import CalendarSchedule from "../components/Calender/CalenderSchendule";

const Schedule = () => {
  return (
    <div>
      <div className="pt-28 md:pt-30 px-6 md:px-[13vw]">
        <p className="text-[3vw] md:text-[1.3vw] mb-2 text-[#00000063] md:text-black">
          ホーム 出勤予定表（予約ページ）
        </p>
        <p className="text-[7vw] text-center md:text-left md:text-[3.3vw] mb-5 px-20 md:px-0">
          出勤予定表（予約ページ）
        </p>
      </div>
      <div className="w-full h-[75vw] md:h-[25vw] bg-[#EFEFEF] md:flex md:px-[13vw]">
        <div className="w-full md:w-1/2 h-full">
          <img src={hero} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="w-1/2 h-full items-center hidden md:flex">
          <img src={logo} alt="" className="h-25" />
        </div>
      </div>
      <div className="px-6 text-[3vw] leading-8 md:px-[13vw] mt-8 md:text-[1.4vw] mb-20">
        当院には様々な最先端医療がございますので、まずは施術(値段)一覧よりご希望のメニューご確認いただき、カウンセリングにお越しください。美容治療のスペシャリスト達が、患者様の「究極の美」を追求するため、お悩みに合わせたプランをご提案させていただきます。
      </div>

      <CalendarSchedule />
    </div>
  );
};

export default Schedule;
