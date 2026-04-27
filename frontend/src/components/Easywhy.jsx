import React from "react";
import { assets } from "../assets/assets";

const Easywhy = () => {
  return (
    <div className="flex w-full flex-col justify-center items-center px-4 sm:px-6 md:px-12 py-20 bg-[#FAFAFA]">
      {/* Heading Section */}
      <div className="w-full flex flex-col items-center text-center mb-12">
        <p className="text-center flex text-[#2D2D2D] mb-2 sm:mb-2.5  font-clash-grotesk text-xl sm:text-4xl font-medium leading-6 sm:leading-12">
          Why Choose Easy Media
        </p>
        <p className="text-center text-[#6B6B6B] font-dm-sans max-w-75 sm:max-w-125  text-xs sm:text-base font-normal leading-4 sm:leading-5">
          Simple. Fast. Centralized.
        </p>
      </div>

      <div className="flex flex-col items-start gap-7.5 w-full">
        {/* up part */}
        <div className="flex flex-col lg:flex-row items-stretch gap-5 lg:gap-7.5 w-full">
          <div className="flex items-center w-full lg:flex-1 px-5 lg:pl-10 lg:pr-15.25 py-5 lg:pt-10 lg:pb-16.25 rounded-[20px] border border-[#D6DFF2] bg-[#FAFAFA]">
            <div className="flex items-center gap-5 lg:gap-10.25">
              <img src={assets.easywhy_icon1} alt="" />

              <div className="flex flex-col items-start gap-2.5">
                <p className="text-[#2D2D2D] font-clash-grotesk text-lg lg:text-2xl font-medium leading-7 lg:leading-10">
                  One Platform
                </p>
                <p className="text-[#6B6B6B] font-dm-sans text-sm lg:text-base font-normal leading-5.5 lg:leading-6.25 tracking-[-0.5px]">
                  Access everything you need in a single, unified platform.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full lg:flex-1 px-5 lg:px-10 py-5 lg:py-10 rounded-[20px] border border-[#D6DFF2] bg-[#FAFAFA]">
            <div className="flex items-center gap-5 lg:gap-10.25">
              <img src={assets.easywhy_icon1} alt="" />

              <div className="flex flex-col items-start gap-2.5">
                <p className="text-[#2D2D2D] font-clash-grotesk text-lg lg:text-2xl font-medium leading-7 lg:leading-10">
                  One Platform
                </p>
                <p className="text-[#6B6B6B] font-dm-sans text-sm lg:text-base font-normal leading-5.5 lg:leading-6.25 tracking-[-0.5px]">
                  Your payments and data are protected with enterprise top grade
                  security.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* down part */}
        <div className="flex flex-col xl:flex-row flex-wrap items-stretch gap-5 xl:gap-7.5 w-full">
          <div className="flex items-center w-full xl:flex-1 py-5 xl:py-10 px-5 xl:pl-10 xl:pr-13.75 rounded-[20px] border border-[#D6DFF2] bg-[#FAFAFA]">
            <div className="flex items-center gap-3.75 xl:gap-5.25">
              <img src={assets.easywhy_icon3} alt="" />
              <div className="flex flex-col items-start gap-2.5">
                <p className="text-[#2D2D2D] font-clash-grotesk text-lg xl:text-2xl font-medium leading-7 xl:leading-10">
                  Fair Pricing
                </p>
                <p className="text-[#6B6B6B] font-dm-sans text-sm xl:text-base font-normal leading-5.5 xl:leading-6.25 tracking-[-0.5px]">
                  No hidden fees. What you see is what you pay.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full xl:flex-1 py-5 xl:py-10 px-5 xl:pl-10 xl:pr-13.75 rounded-[20px] border border-[#D6DFF2] bg-[linear-gradient(133deg,#1118FC_28.3%,#00B8DB_126.38%)]">
            <div className="flex items-center gap-3.75 xl:gap-5.25">
              <img src={assets.easywhy_icon4} alt="" />
              <div className="flex flex-col items-start gap-2.5">
                <p className="text-[#FFF] font-clash-grotesk text-lg xl:text-2xl font-medium leading-7 xl:leading-10">
                  Fast Activation
                </p>
                <p className="text-[#EFF6FF] font-dm-sans text-sm xl:text-base font-normal leading-5.5 xl:leading-6.25 tracking-[-0.5px]">
                  Get instant access to your services without delays.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full xl:flex-1 py-5 xl:py-10 px-5 xl:pl-10 xl:pr-13.75 rounded-[20px] border border-[#D6DFF2] bg-[#FAFAFA]">
            <div className="flex items-center gap-3.75 xl:gap-5.25">
              <img src={assets.easywhy_icon5} alt="" />
              <div className="flex flex-col items-start gap-2.5">
                <p className="text-[#2D2D2D] font-clash-grotesk text-lg xl:text-2xl font-medium leading-7 xl:leading-10">
                  24/7 Support
                </p>
                <p className="text-[#6B6B6B] font-dm-sans text-sm xl:text-base font-normal leading-5.5 xl:leading-6.25 tracking-[-0.5px]">
                  Our team is always ready to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Easywhy;
