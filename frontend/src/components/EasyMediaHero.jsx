import React from "react";
import { assets } from "../assets/assets";

const EasyMediaHero = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Hero Image */}
      <img
        className="w-full h-80 sm:h-130 object-cover"
        src={assets.easy_hero}
        alt=""
      />

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-7.5 sm:gap-10 md:gap-11.25 px-4 sm:px-6">
        <div className="flex flex-col justify-center items-center gap-2.5 w-full max-w-[90%] sm:max-w-175 md:max-w-219.5 text-center">
          {/* Badge */}
          <div className="flex w-auto h-auto justify-center items-center gap-2">
            <img src="/Easy-media.svg" alt="" />
            <p className="text-white font-dm-sans text-[14px] sm:text-[16px] font-light leading-4 tracking-[-0.3px]">
              Coming Soon
            </p>
          </div>

          {/* Heading */}
          <p
            className="text-white font-clash-grotesk 
            text-[24px] sm:text-[40px] md:text-[52px] lg:text-[65px] 
            font-medium 
            leading-7.5 sm:leading-12 md:leading-15 lg:leading-18.75 
            tracking-[-1px] [text-shadow:5px_5px_100px_#000]"
          >
            Sign Up To Our Email List To Get Notified When We Launch
          </p>

          {/* Description */}
          <p
            className="text-[rgba(255,255,255,0.7)] font-dm-sans 
            text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] 
            leading-4.5 sm:leading-5.5 md:leading-6.5 lg:leading-7.5 
            max-w-[95%] sm:max-w-150 md:max-w-175"
          >
            Easy Media is launching soon. Join our list to be the first to know
            when we go live and get exclusive early access to our services.
          </p>

          {/* Subscribe Section */}
          <div className="flex justify-center w-full mt-4">
            <div className="flex gap-2 sm:gap-3 w-full max-w-125 items-center">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 min-w-0 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-[100px] 
      border border-white/25 bg-[rgba(9,10,4,0.05)] 
      shadow-[inset_0_0_10px_0_rgba(0,0,0,0.1)]"
              />

              <button
                className="py-3 sm:py-4 px-4 sm:px-6 rounded-[100px] bg-[#D0D2FD] 
      shadow-[-2px_-2px_4px_0_rgba(0,0,0,0.25)_inset] whitespace-nowrap"
              >
                <p className="text-black font-clash-grotesk text-sm sm:text-base font-medium leading-4.5">
                  Notify Me
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyMediaHero;
