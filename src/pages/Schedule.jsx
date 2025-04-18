import React from "react";
import newhero from "../assets/new_hero.svg";
import CalendarSchedule from "../components/Calender/CalenderSchendule";

const Schedule = () => {
  return (
    <div>
      <div className="pt-28 md:pt-30 px-6 md:px-[16vw]">
        <p className="text-[3vw] md:text-[1.3vw] mb-[1vw] text-[#00000063] md:text-black">
          ホーム 出勤予定表（予約ページ）
        </p>
        <p className="text-[7vw] text-center px-20 md:px-0 md:text-left md:text-[3.3vw] mb-5 font-[400]">
          出勤予定表（予約ページ）
        </p>
      </div>
      <div className="w-full h-[55vw] md:h-[25vw] bg-[#EFEFEF] flex ">
        <img
          src={newhero}
          alt=""
          className="w-full object-cover object-right md:object-center"
        />
      </div>
      <div className="px-6 text-[3vw] md:leading-[2.5vw] md:px-[13vw] mt-8 md:text-[1.4vw] mb-20 text-[#707070] font-[300]">
        当院には様々な最先端医療がございますので、まずは施術(値段)一覧よりご希望のメニューご確認いただき、カウンセリングにお越しください。美容治療のスペシャリスト達が、患者様の「究極の美」を追求するため、お悩みに合わせたプランをご提案させていただきます。
      </div>

      <CalendarSchedule />
    </div>
  );
};

export default Schedule;
