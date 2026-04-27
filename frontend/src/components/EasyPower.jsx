import React from "react";
import { assets } from "../assets/assets";

const EasyPower = () => {
  return (
    <div className="flex w-full flex-col justify-center items-center px-4 sm:px-6 md:px-12 py-20 bg-[#FAFAFA]">
      {/* Heading Section */}
      <div className="w-full flex flex-col items-center text-center mb-12">
        <p className="text-center flex text-[#2D2D2D] mb-2 sm:mb-2.5  font-clash-grotesk text-xl sm:text-4xl font-medium leading-6 sm:leading-12">
          Powerful Tool for Modern Brands
        </p>
        <p className="text-center text-[#6B6B6B] font-dm-sans max-w-75 sm:max-w-125  text-xs sm:text-base font-normal leading-4 sm:leading-5">
          We simplify your access to VPNs, streaming services, virtual numbers,
          and more all in one place, all stress free.
        </p>
      </div>

      {/* Main Flex Section */}
      <div className="flex flex-col xl:flex-row justify-start items-start w-full gap-6 xl:gap-12">
        {/* Left Image */}
        <div className="w-full xl:w-100 rounded-4 bg-gray-300 shrink-0">
          <img
            src={assets.easy_cont}
            alt=""
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6 w-full xl:flex-1">
          {/* First Row */}
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            <div className="flex justify-start items-start px-6 py-4 md:py-6  xl:py-5 rounded-2xl border border-[#D6DFF2] bg-white shadow-[0_4px_25px_-4px_rgba(0,0,0,0.05)] w-full sm:flex-1">
              <img
                src="/Easy-stream.svg"
                alt=""
                className="w-11 h-11 sm:w-12 sm:h-12"
              />
              <div className="flex flex-col items-start ml-4">
                <p className="text-[#101828] font-clash-grotesk text-base md:text-xl xl:text-base whitespace-nowrap font-medium leading-6 sm:leading-7">
                  Streaming Subscriptions
                </p>
                <p className="text-[#4A5565] font-dm-sans text-xs md:text-sm xl:text-xs whitespace-nowrap font-normal leading-5 sm:leading-6.5">
                  Access global max entertainment
                </p>
              </div>
            </div>

            <div className="flex justify-start items-start px-6 py-4 md:py-6  xl:py-5 rounded-2xl border border-[#D6DFF2] bg-white shadow-[0_4px_25px_-4px_rgba(0,0,0,0.05)] w-full sm:flex-1">
              <img
                src="/Easy-vpn1.svg"
                alt=""
                className="w-11 h-11 sm:w-12 sm:h-12"
              />
              <div className="flex flex-col items-start ml-4">
                <p className="text-[#101828] font-clash-grotesk text-base md:text-xl xl:text-base font-medium leading-6 sm:leading-7">
                  VPN Services
                </p>
                <p className="text-[#4A5565] font-dm-sans text-xs md:text-sm xl:text-xs whitespace-nowrap font-normal leading-5 sm:leading-6.5">
                  Secure, fast, and private browsing.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            <div className="flex justify-start items-start  px-6 py-4 md:py-6  xl:py-5 rounded-2xl border border-[#D6DFF2] bg-white shadow-[0_4px_25px_-4px_rgba(0,0,0,0.05)] w-full sm:flex-1">
              <img
                src="/Easy-ai.svg"
                alt=""
                className="w-11 h-11 sm:w-12 sm:h-12"
              />
              <div className="flex flex-col items-start ml-4">
                <p className="text-[#101828] font-clash-grotesk text-base md:text-xl xl:text-base font-medium leading-6 sm:leading-7">
                  AI Digital Tools
                </p>
                <p className="text-[#4A5565] font-dm-sans text-xs md:text-sm xl:text-xs whitespace-nowrap font-normal leading-5 sm:leading-6.5">
                  More essential services coming.
                </p>
              </div>
            </div>

            <div className="flex justify-start items-start  px-6 py-4 md:py-6  xl:py-5 rounded-2xl border border-[#D6DFF2] bg-white shadow-[0_4px_25px_-4px_rgba(0,0,0,0.05)] w-full sm:flex-1">
              <img
                src="/Easy-virtual.svg"
                alt=""
                className="w-11 h-11 sm:w-12 sm:h-12"
              />
              <div className="flex flex-col items-start ml-4">
                <p className="text-[#101828] font-clash-grotesk text-base md:text-xl xl:text-base font-medium leading-6 sm:leading-7">
                  Virtual Phone Numbers
                </p>
                <p className="text-[#4A5565] font-dm-sans text-xs md:text-sm xl:text-xs whitespace-nowrap font-normal leading-5 sm:leading-6.5">
                  Stay connected across borders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyPower;
