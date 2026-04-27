import React from "react";
import { assets } from "../assets/assets";

const JohnCantFind = () => {
  return (
    <div className="relative flex h-80 sm:h-130.5 justify-center items-center overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
        src={assets.stores_footer}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(82deg,rgba(47,3,4,0.9)_4.38%,rgba(223,0,4,0.65)_98.55%)]" />

      {/* Centered Content */}
      <div className="relative flex flex-col items-center justify-center text-center gap-8.75 px-4">
        <div className="flex flex-col items-center gap-3.75">
          <div>
            <p className="text-white font-clash-grotesk text-4xl sm:text-6xl font-medium leading-10 sm:leading-15">
              Can't Find What
            </p>
            <p className="text-white font-clash-grotesk text-4xl sm:text-6xl font-medium leading-10 sm:leading-15">
              You're Looking For?
            </p>
          </div>
          <div>
            <p className="text-[#D1D5DC] font-dm-sans text-xs sm:text-base font-normal leading-5 sm:leading-7 max-w-125">
              Contact our team and we'll help you find the perfect product
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="flex gap-4">
          <button className="inline-flex gap-1 sm:gap-2 px-4 sm:px-6 py-2 justify-center items-center rounded-[10px] bg-white">
            <img src={assets.black_what} alt="" />
            <p className="font-clash-grotesk text-black text-xs sm:text-sm font-medium leading-6 text-center">
              Talk to Support
            </p>
          </button>

          <button className="inline-flex gap-1 sm:gap-2 px-4 sm:px-6 py-2 justify-center items-center rounded-[10px] border border-white bg-[#00E27C]">
            <p className="font-clash-grotesk text-black text-xs sm:text-sm font-medium leading-6 text-center">
              Back Home
            </p>
            <img src={assets.black_arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JohnCantFind;
