import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col   lg:flex-row gap-8 px-4 sm:px-6 md:px-8 py-10 sm:py-20"
    >
      {/* left side  */}
      <div className="w-full lg:w-1/2">
        <img
          className="w-full lg:w-137.75 h-auto lg:h-117.75"
          src={assets.about_image}
          alt=""
        />
      </div>

      {/* right side */}
      <div className="w-full lg:w-1/2">
        <p className="flex w-fit font-dm-sans text-xs sm:text-base mb-1.5 sm:mb-3.5 px-3 sm:px-4 py-1.5 sm:py-2 justify-center items-center rounded-xl bg-[rgba(230,211,172,0.45)]">
          About us
        </p>

        <p className="flex w-fit text-[#2D2D2D]  mb-1 sm:mb-4 font-clash-grotesk text-2xl sm:text-4xl font-medium leading-12 ">
          One Brand. Multiple Solutions.
        </p>

        <p className="text-[#6B6B6B] font-dm-sans text-sm sm:text-base mb-1.75 sm:mb-3.75 font-normal leading-6 sm:leading-7.5">
          John Enterprise is a multi service company built to solve everyday
          needs through reliable logistics, quality products, and creative
          solutions. Our goal is simple: make global services accessible,
          trustworthy, and easy to use no matter where you are.
        </p>

        <p className="text-[#6B6B6B] font-dm-sans text-sm sm:text-base mb-5 font-normal leading-6 sm:leading-7.5">
          We focus on efficiency, customer satisfaction, and long-term value
          across every service we provide.
        </p>

        <div className="flex gap-2 sm:gap-5">
          <div className="flex w-55.75 h-15 sm:h-31.5 flex-col justify-center items-center rounded-2xl border border-[rgba(230,211,172,0.30)] bg-[#FAFAFA]">
            <div className="flex flex-col items-start   sm:gap-3.75">
              <p className="text-[#E3494E]   text-center font-clash-grotesk text-xl sm:text-3xl font-semibold leading-8.75">
                100%
              </p>
              <p className="text-[#6B6B6B] text-center font-dm-sans text-[9px] sm:text-sm font-normal leading-4">
                Worldwide Delivery
              </p>
            </div>
          </div>
          <div className="flex w-55.75 h-15 sm:h-31.5 flex-col justify-center items-center rounded-2xl border border-[rgba(230,211,172,0.30)] bg-[#FAFAFA]">
            <div className="flex flex-col items-start   sm:gap-3.75">
              <p className="text-[#E3494E]   text-center font-clash-grotesk text-xl sm:text-3xl font-semibold leading-8.75">
                500k+
              </p>
              <p className="text-[#6B6B6B] text-center font-dm-sans text-[9px] sm:text-sm font-normal leading-4">
                Successful Delivery
              </p>
            </div>
          </div>
          <div className="flex w-55.75 h-15 sm:h-31.5 flex-col justify-center items-center rounded-2xl border border-[rgba(230,211,172,0.30)] bg-[#FAFAFA]">
            <div className="flex flex-col items-start   sm:gap-3.75">
              <p className="text-[#E3494E]   text-center font-clash-grotesk text-xl sm:text-3xl font-semibold leading-8.75">
                100k+
              </p>
              <p className="text-[#6B6B6B] text-center font-dm-sans text-[9px] sm:text-sm font-normal leading-4">
                Trusted Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
