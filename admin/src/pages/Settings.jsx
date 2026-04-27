import React from "react";
import { assets } from "../assets/assets";

const Settings = () => {
  return (
    <div className="w-full flex flex-col">
      {/* header */}

      <div className="flex w-full items-center h-17 pt-5.75 pb-6.25 pl-1.25 pr-14.25 rounded-[25px] bg-[#FCFCFC]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[#2D2D2D] font-medium text-[18px] leading-4.5 tracking-[-0.2px] font-clash-grotesk">
            Settings
          </p>
          <img src="/noti.svg" alt="" />
        </div>
      </div>

      {/*body  */}
      <div className="flex flex-col justify-end items-center w-full pt-[25px] pb-[14px] px-[15px] gap-5 rounded-[25px] border border-[rgba(107,107,107,0.15)] bg-white">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <p className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
            Admin Profile
          </p>
          <div className="flex flex-col w-full items-start gap-5">
            <div className="flex w-full justify-between items-center">
              <div className="flex items-center gap-2">
                <img src={assets.john_set} alt="" />

                <div className="flex flex-col gap-0.5">
                  <p className="text-[#2D2D2D] font-semibold text-base leading-[25px] tracking-[-0.5px] font-dm-sans-700">
                    Johnpaul Ajuonwu
                  </p>
                  <p className="text-[#6B6B6B] font-medium text-xs leading-[25px] tracking-[-0.5px] font-dm-sans-500">
                    CEO John Stores, Swift Logistics, Easy Media
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center w-[90px] h-[40px] gap-[15px] rounded-[10px] bg-[rgba(227,73,78,0.10)]">
                <div className="flex gap-2 items-center">
                  <p className="text-[#E3494E] font-semibold text-base leading-[25px] tracking-[-0.5px] font-dm-sans-700">
                    Edit
                  </p>
                  <img src="/tiny-write.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
