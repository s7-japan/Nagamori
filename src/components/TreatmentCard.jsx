import React from "react";
import t1 from "../assets/t1.png";
import t3 from "../assets/t3.png";
import t2 from "../assets/t2.png";
import t4 from "../assets/t4.png";

const TreatmentCard = () => {
  return (
    <div>
      <div className="px-6 md:px-[16vw] mb-30 relative">
        <div className="absolute top-0 bg-[#B6BFBC] left-0 h-[50%] w-[28%] opacity-[12%] hidden md:block -z-10"></div>
        <h1 className="text-center text-[7vw] md:text-[3.2vw] mb-1 sikita">
          Eyebrow cosmetic tattoo
        </h1>
        <div className="w-[7vw] h-[1.5px] bg-[#707070] relative left-1/2 -translate-x-1/2 mb-3"></div>
        <p className="text-center mb-10 text-[4vw] md:text-[1vw] text-[#707070]">
          眉アートメイク
        </p>

        <div className="border-b w-full md:w-[80%] mx-auto py-1 text-[4vw] md:text-[1.5vw]">
          料金表
        </div>
        <div className="w-full md:w-[80%] mx-auto mt-2">
          <img src={t1} alt="" />
        </div>

        <div>
          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                1回目
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）110,000 円
              </div>
            </div>
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                2回目
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）88,000 円
              </div>
            </div>
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                3回目　*3か月以内
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）27,500 円
              </div>
            </div>
          </div>

          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                リタッチ1年以内
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）44,000 円
              </div>
            </div>
          </div>

          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center border-b md:border-b-0 md:border-r border-[#7070703a]  pl-5 md:w-[55%] bg-[#ffd2d239]">
                2年以降
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] md:text-left text-center  pl-5 md:w-[45%]">
                （税込み）55,000 円
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-[16vw] mb-30 relative">
        <div className="absolute top-0 bg-[#B6BFBC] right-0 h-[50%] w-[28%] opacity-[12%] hidden md:block -z-10"></div>
        <h1 className="text-center text-[8vw] md:text-[3.3vw] mb-1 sikita">
          lip cosmetic tattoo
        </h1>
        <div className="w-15 h-[1.5px] bg-[#707070] relative left-1/2 -translate-x-1/2 mb-3"></div>
        <p className="text-center mb-10 text-[4vw] md:text-[1.3vw] font-light">
          リップアートメイク
        </p>

        <div className="border-b w-full md:w-[80%] mx-auto py-1 text-[4vw] md:text-[1.5vw]">
          料金表
        </div>
        <div className="w-full md:w-[80%] mx-auto mt-2">
          <img src={t3} alt="" />
        </div>

        <div>
          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                1回目
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left  pl-5 md:w-[45%]">
                （税込み）110,000 円
              </div>
            </div>
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                2回目
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left  pl-5 md:w-[45%]">
                （税込み）88,000 円
              </div>
            </div>
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                3回目　*3か月以内
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left  pl-5 md:w-[45%]">
                （税込み）27,500 円
              </div>
            </div>
          </div>

          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                リタッチ1年以内
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left  pl-5 md:w-[45%]">
                （税込み）44,000 円
              </div>
            </div>
          </div>

          <div className="w-full md:w-[80%] mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a]  pl-5 md:w-[55%] bg-[#ffd2d239]">
                2年以降
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left  pl-5 md:w-[45%]">
                （税込み）55,000 円
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-[16vw] mb-30 relative">
        <div className="absolute top-0 bg-[#B6BFBC] right-0 h-[43%] w-[28%] opacity-[12%] hidden md:block -z-10"></div>
        <h1 className="text-center text-[8vw] md:text-[3.3vw] mb-1 sikita">
          Eyeline cosmetic tattoo
        </h1>
        <div className="w-15 h-[1.5px] bg-[#707070] relative left-1/2 -translate-x-1/2 mb-3"></div>
        <p className="text-center mb-10 text-[4vw] md:text-[1.3vw] font-light">
          アイラインアートメイク
        </p>

        <div className="border-b w-full md:w-[80%] mx-auto py-1 text-[4vw] md:text-[1.5vw]">
          料金表
        </div>
        <div className="w-full md:w-[80%] mx-auto mt-2">
          <img src={t2} alt="" />
        </div>

        <div className="w-full md:w-[80%] mx-auto">
          <div className="md:flex gap-1">
            <div className="md:w-1/2">
              <p className="text-center py-5 text-[4.2vw] md:text-[1.3vw]">
                テールなし
              </p>
              <div className="border border-[#7070703a]">
                <div className="md:flex w-full border-b border-[#7070703a]">
                  <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                    1回目
                  </div>
                  <div className="md:py-[2vw] py-6 md:text-[1.2vw]  pl-5 md:w-[45%] text-center">
                    （税込み） <br /> 6,000 円
                  </div>
                </div>
                <div className="md:flex w-full border-b border-[#7070703a]">
                  <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                    2回目
                  </div>
                  <div className="md:py-[2vw] py-6 md:text-[1.2vw]  pl-5 md:w-[45%] text-center">
                    （税込み）
                    <br /> 35,000 円
                  </div>
                </div>
                <div className="md:flex w-full border-b md:border-b-0 border-[#7070703a]">
                  <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                    3回目 *3か月以内
                  </div>
                  <div className="md:py-[2vw] py-6 md:text-[1.2vw]  pl-5 md:w-[45%] text-center">
                    （税込み）
                    <br /> 27,500 円
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-center py-5 text-[4.2vw] md:text-[1.3vw]">
                テールあり
              </p>
              <div className="border border-[#7070703a]">
                <div className="md:flex w-full border-b border-[#7070703a]">
                  <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                    1回目
                  </div>
                  <div className="md:py-[2vw] py-6 md:text-[1.2vw]  pl-5 md:w-[45%] text-center">
                    （税込み）
                    <br /> 88,000 円
                  </div>
                </div>
                <div className="md:flex w-full border-b border-[#7070703a]">
                  <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                    2回目
                  </div>
                  <div className="md:py-[2vw] py-6 md:text-[1.2vw] pl-5 md:w-[45%] text-center">
                    （税込み）
                    <br /> 35,000 円
                  </div>
                </div>
                <div className="md:flex w-full border-b md:border-b-0 border-[#7070703a]">
                  <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                    3回目 *3か月以内
                  </div>
                  <div className="md:py-[2vw] py-6 md:text-[1.2vw]  pl-5 md:w-[45%] text-center">
                    （税込み）
                    <br /> 27,500 円
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full border-b md:border-b-0 border-[#7070703a]">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                リタッチ1年以内
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center  pl-5 md:w-[45%]">
                （税込み）44,000 円
              </div>
            </div>
          </div>

          <div className="mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                2年以降
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center  pl-5 md:w-[45%]">
                （税込み）55,000 円
              </div>
            </div>
          </div>

          <div className="mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center border-b md:border-b-0 md:border-r border-[#7070703a]  pl-5 md:w-[55%] bg-[#ffd2d239]">
                アイライン
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center pl-5 md:w-[45%]">
                （税込み）33,000 円
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-[16vw] mb-30 relative">
        <div className="absolute top-0 bg-[#B6BFBC] left-0 h-[25%] w-[28%] opacity-[12%] hidden md:block -z-10"></div>
        <h1 className="text-center text-[8vw] md:text-[3.3vw] mb-1 sikita">
          Hairline, Tear trough cosmetic tattoo
        </h1>
        <div className="w-15 h-[1.5px] bg-[#707070] relative left-1/2 -translate-x-1/2 mb-3"></div>
        <p className="text-center mb-10 text-[4vw] md:text-[1.3vw] font-light">
          ヘアライン・涙袋 etc
        </p>

        <div className="border-b w-full md:w-[80%] mx-auto py-1 text-[4vw] md:text-[1.5vw]">
          料金表
        </div>
        <div className="w-full md:w-[80%] mx-auto mt-2">
          <img src={t4} alt="" />
        </div>

        <div className="w-full md:w-[80%] mx-auto">
          <p className="text-[4.3vw] md:text-[1.3vw] mt-6 md:text-left text-center">
            ヘアライン
          </p>
          <div className="mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                SMP (手のひらサイズ)
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left  pl-5 md:w-[45%]">
                （税込み）55,000 円
              </div>
            </div>
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                ヘアライントップ
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left  pl-5 md:w-[45%]">
                （税込み）11,000 円
              </div>
            </div>
          </div>
          <p className="text-[4.3vw] md:text-[1.3vw] mt-6 md:text-left text-center">
            OR サイド
          </p>
          <div className="mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                ヘアライン 1回
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left  pl-5 md:w-[45%]">
                （税込み）88,000 円
              </div>
            </div>
            <div className="md:flex w-full border-b border-[#7070703a] ">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                ヘアライン 2回
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left  pl-5 md:w-[45%]">
                （税込み）66,000 円
              </div>
            </div>
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                ヘアライン 3回以内
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left  pl-5 md:w-[45%]">
                （税込み）27,500 円
              </div>
            </div>
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                リタッチ 1年以内
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left  pl-5 md:w-[45%]">
                （税込み）44,500 円
              </div>
            </div>
            <div className="md:flex w-full ">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a] pl-5 md:w-[55%] bg-[#ffd2d239]">
                リタッチ 1年以内
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left  pl-5 md:w-[45%]">
                （税込み）55,000 円
              </div>
            </div>
          </div>
          <p className="text-[4.3vw] md:text-[1.3vw] mt-6 md:text-left text-center">
            領域アートメイク
          </p>
          <div className="mx-auto mt-5 border border-[#7070703a]">
            <div className="md:flex w-full border-b border-[#7070703a]">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a]  pl-5 md:w-[55%] bg-[#ffd2d239]">
                領域 1回
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left  pl-5 md:w-[45%]">
                （税込み）33,000 円
              </div>
            </div>
            <div className="md:flex w-full">
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left border-b md:border-b-0 md:border-r border-[#7070703a]  pl-5 md:w-[55%] bg-[#ffd2d239]">
                領域リップ・チップリップ
              </div>
              <div className="md:py-[2vw] py-6 md:text-[1.2vw] text-center md:text-left  pl-5 md:w-[45%]">
                （税込み）33,000 円/ 回
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
