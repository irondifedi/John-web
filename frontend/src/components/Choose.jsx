import React from "react";
import { assets } from "../assets/assets";

const Choose = () => {
  return (
    <div className="flex flex-col justify-center items-center self-stretch bg-[#FAFAFA] px-4 sm:px-6 md:px-8 py-10 sm:py-20">
      <div className="flex justify-center items-center rounded-xl bg-[rgba(230,211,172,0.45)] px-2 sm:px-3 py-1.5 sm:py-2   ">
        <p className="font-dm-sans text-[rgba(51,51,51,0.7)] text-xs sm:text-base font-normal leading-5 tracking-[-0.5px]">
          Why Choose Us
        </p>
      </div>

      <div className="mb-10 sm:mb-20">
        <p className="flex text-[#2D2D2D] text-center font-clash-grotesk text-xl sm:text-4xl font-medium leading-12">
          Why Choose John Enterprise
        </p>
      </div>

      <div className="flex flex-col items-center lg:flex-row gap-8 lg:gap-16.5">
        <div className="flex  items-center  gap-2.5">
          <div>
            <img
              className="w-full max-w-101.25 h-75 sm:h-106 "
              src={assets.choose_image_1}
              alt=""
            />
          </div>
          <div className="gap-2.5">
            <img
              className="mb-2.5 h-36.25 sm:h-51.75  w-full  max-w-50"
              src={assets.choose_image_2}
              alt=""
            />
            <img
              className="h-36.25 sm:h-51.75  w-full  max-w-50"
              src={assets.choose_image_3}
              alt=""
            />
          </div>
        </div>

        <div className="  px-1.5 sm:px-3.75 py-1.5 sm:py-3.75 w-full max-w-143.5 justify-center rounded-[15px] bg-[#E3494E] grid grid-cols-2">
          <div className="pt-2 sm:pt-3.75 pr-0 sm:pr-3.75 pl-0 sm:pl-3.75 pb-0 sm:pb-4  bg-[linear-gradient(0deg,rgba(255,255,255,0.06),rgba(255,255,255,0.06))]">
            <img className="mb-3 sm:mb-4.75" src={assets.world_icon} alt="" />

            <p className="mb-1.5 sm:mb-2.25 text-[#FBF2F2] font-dm-sans-700 text-[11px] sm:text-lg font-bold leading-4 sm:leading-5.75 capitalize">
              Reliable international delivery
            </p>

            <p className="text-white/70 font-dm-sans text-[10px] sm:text-xs font-normal leading-4 sm:leading-5">
              Ship packages to over 120+ countries with reliable international
              delivery. Full tracking and insurance.
            </p>
          </div>

          <div className="pt-2 sm:pt-3.75 pr-0 sm:pr-3.75 pl-0 sm:pl-3.75 pb-0 sm:pb-4 ">
            <img className="mb-3 sm:mb-4.75" src={assets.secure_icon} alt="" />

            <p className="mb-1.5 sm:mb-2.25 text-[#FBF2F2] font-dm-sans-700 text-[11px] sm:text-lg font-bold leading-4 sm:leading-5.75 capitalize">
              Secure and transparent processes
            </p>

            <p className="text-white/70 font-dm-sans text-[10px] sm:text-xs font-normal leading-4 sm:leading-5">
              Every transaction and delivery is protected and secured with
              industry leading security.
            </p>
          </div>

          <div className=" pt-2 sm:pt-3.75 pr-1 sm:pr-3.12 pl-0 sm:pl-4.5 pb-0 sm:pb-4 ">
            <img className="mb-3 sm:mb-4.75" src={assets.quality_icon} alt="" />

            <p className="mb-1.5 sm:mb-2.25 text-[#FBF2F2] font-dm-sans-700 text-[11px] sm:text-lg font-bold leading-4 sm:leading-5.75 capitalize">
              Quality checked products ONLY
            </p>

            <p className="text-white/70 font-dm-sans-700 text-[10px] sm:text-xs font-normal leading-4 sm:leading-5">
              All our products are verified for authenticity and quality before
              shipping.
            </p>
          </div>

          <div className="pt-2 sm:pt-3.75 pr-0 sm:pr-3.75 pl-0 sm:pl-3.75 pb-0 sm:pb-4  bg-[linear-gradient(0deg,rgba(255,255,255,0.06),rgba(255,255,255,0.06))]">
            <img className="mb-3 sm:mb-4.75" src={assets.contact_icon} alt="" />

            <p className="mb-1.5 sm:mb-2.25 text-[#FBF2F2] font-dm-sans-700 text-[11px] sm:text-lg font-bold leading-4 sm:leading-5.75 capitalize">
              24/7 Customer first support
            </p>

            <p className="text-white/70 font-dm-sans text-[10px] sm:text-xs font-normal leading-4 sm:leading-5">
              At John Enterprise we care. We have 24/7 support team ready to
              help any questions or concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
