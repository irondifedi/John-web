import React from "react";
import { assets } from "../assets/assets";

const EasyMedia = () => {
  return (
    <div className="w-full flex flex-col">
      {/* header */}

      <div className="flex w-full items-center h-17 pt-5.75 pb-6.25 pl-1.25 pr-14.25 rounded-[25px] bg-[#FCFCFC]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[#2D2D2D] font-medium text-[18px] leading-4.5 tracking-[-0.2px] font-clash-grotesk">
            Early Access Email List
          </p>
          <img src="/noti.svg" alt="" />
        </div>
      </div>

      {/*body  */}
      <div className="flex flex-col justify-end items-center w-full pt-[25px] pb-[14px] px-[15px] gap-5 rounded-[25px] border border-[rgba(107,107,107,0.15)] bg-white">
        <div className="flex w-full  items-center px-1">
          <p className="text-[#717182] font-medium text-base leading-[25px] tracking-[-0.2px] capitalize font-dm-sans-500">
            6 emails collected
          </p>
        </div>
        <div className="flex flex-col w-full gap-5 px-3 rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-white">
          <div className="flex px-[15px] w-full justify-between items-center bg-white">
            <div className="flex w-full justify-between items-start">
              <div className="flex items-center w-[137px]   h-[65px] px-[2px]">
                <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                  Name
                </p>
              </div>

              <div className="flex items-center w-[104px]  h-[65px] px-[2px]">
                <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                  Email
                </p>
              </div>

              <div className="flex items-center w-[98px]  h-[65px] px-[2px]">
                <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                  Location
                </p>
              </div>

              <div className="flex items-center w-[98px] h-[65px] px-[2px]">
                <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                  Actions
                </p>
              </div>
            </div>
          </div>

          <div className="flex px-[15px] w-full justify-between items-center bg-white">
            <div className="flex w-full justify-between items-start">
              <div className="flex items-center w-[168px]   h-[65px] px-[2px]">
                <div className="flex items-center gap-2">
                  <img src={assets.admin_icon_1} alt="" />

                  <p className="text-[#2D2D2D] font-medium text-xs leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                    Peace Stonner
                  </p>
                </div>
              </div>

              <div className="flex items-center w-[201px]  h-[65px] px-[2px]">
                <p className="text-[#2D2D2D] font-medium text-xs leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                  peacestonner@gmail.com
                </p>
              </div>

              <div className="flex items-center w-[143px]  h-[65px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                  Lagos State
                </p>
              </div>

              <div className="flex items-center w-[98px]  h-[65px] px-[2px]">
                <img src="/delete.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyMedia;
