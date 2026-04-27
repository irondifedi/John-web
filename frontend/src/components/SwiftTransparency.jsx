import React from "react";
import { assets } from "../assets/assets";

const SwiftTransparency = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#FAFAFA] px-4 sm:px-6 md:px-8 py-10 sm:py-20">
      {/* Heading */}
      <div className="w-full max-w-187.5 flex flex-col items-center text-center mb-8 sm:mb-12">
        <p className="text-[#2D2D2D] mb-2 sm:mb-2.5 font-clash-grotesk text-xl sm:text-4xl font-medium leading-6 sm:leading-12">
          Complete Transparency
        </p>
        <p className="text-[#6B6B6B] font-dm-sans max-w-75 sm:max-w-125 text-xs sm:text-base font-normal leading-4 sm:leading-5">
          Stay informed at every step of the journey
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-300">
        <div className="h-[202.833px] justify-self-stretch pl-3 pt-6 rounded-2xl border border-[#E5E7EB] bg-white w-full">
          <img className="pb-4" src={assets.whatsapp_icon} alt="" />
          <p className="text-[#1A1A1A] pb-2 font-dm-sans-500 text-base font-medium leading-7">
            WhatsApp Updates
          </p>
          <p className="text-[#4A5565] font-dm-sans text-xs pr-0 font-normal leading-5.5">
            Get real-time notifications on your preferred platform
          </p>
        </div>

        <div className="h-[202.833px] justify-self-stretch pl-3 pt-6 rounded-2xl border border-[#E5E7EB] bg-white w-full">
          <img className="pb-4" src={assets.loca_icon} alt="" />
          <p className="text-[#1A1A1A] pb-2 font-dm-sans-500 text-base font-medium leading-7">
            Manual Tracking
          </p>
          <p className="text-[#4A5565] font-dm-sans text-xs pr-0 font-normal leading-5.5">
            Always know where your package is in the journey
          </p>
        </div>

        <div className="h-[202.833px] justify-self-stretch pl-3 pt-6 rounded-2xl border border-[#E5E7EB] bg-white w-full">
          <img className="pb-4" src={assets.human_sup_icon} alt="" />
          <p className="text-[#1A1A1A] pb-2 font-dm-sans-500 text-base font-medium leading-7">
            Real Human Support
          </p>
          <p className="text-[#4A5565] font-dm-sans text-xs pr-0 font-normal leading-5.5">
            Talk to actual people who care about your delivery
          </p>
        </div>

        <div className="h-[202.833px] justify-self-stretch pl-3 pt-6 rounded-2xl border border-[#E5E7EB] bg-white w-full">
          <img className="pb-4" src={assets.shield_icon} alt="" />
          <p className="text-[#1A1A1A] pb-2 font-dm-sans-500 text-base font-medium leading-7">
            No Hidden Steps
          </p>
          <p className="text-[#4A5565] font-dm-sans text-xs pr-0 font-normal leading-5.5">
            Complete transparency from pickup to delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwiftTransparency;
