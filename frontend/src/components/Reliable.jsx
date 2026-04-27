import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Reliable = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Hero Image */}
      <img
        className="w-full h-100 sm:h-192.5 object-cover"
        src={assets.footer_img}
        alt=""
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(24deg,#090A04_17.19%,rgba(9,10,4,0)_66.6%)]"></div>

      {/* Overlay content */}
      <div className="absolute inset-0 px-4 sm:px-15 py-8 sm:py-32.5 flex flex-col lg:flex-row items-start lg:items-end gap-6 md:gap-10 lg:gap-51.25">
        {/* Left side text */}
        <div className="max-w-full sm:max-w-150">
          <p className="text-white font-clash-grotesk text-3xl sm:text-5xl lg:text-[45px] xl:text-[78px]  font-medium leading-snug md:leading-normal lg:leading-15 xl:leading-22.5">
            <span className="block">Reliable</span>
            <span className="block text-[#E6D3AC]">Services</span>
            <span className="block">Without Borders</span>
          </p>
          <p className="text-white/70 mb-3 sm:mb-15 font-dm-sans text-xs md:text-lg lg:text-xl xl:text-[27px] font-normal leading-5 md:leading-7 lg:leading-10">
            From international delivery to quality gadgets, we're building
            services you can trust.
          </p>

          <div className="flex  gap-1 sm:gap-3.75 w-full">
            <button className=" gap-1 sm:gap-2 inline-flex px-2 sm:px-6 py-2 justify-center items-center rounded-[10px] bg-[#E3494E] shadow-[inset_0_-2px_4px_0_rgba(0,0,0,0.25),0_4px_6px_-1px_rgba(0,0,0,0.10),0_2px_4px_-2px_rgba(0,0,0,0.10)] min-w-0">
              <p className="font-clash-grotesk text-white text-[10px] sm:text-sm font-medium leading-6 text-center">
                Send a Package
              </p>
              <img src={assets.tiny_arrow} alt="" />
            </button>

            <Link
              to="/john-stores"
              className=" px-4 sm:px-7 py-2 justify-center items-center rounded-[10px] border border-white/15 bg-[rgba(227,73,78,0.03)] shadow-[inset_0_0_10px_0_rgba(227,73,78,0.25)] min-w-0"
            >
              <p className="font-clash-grotesk text-white text-[10px] sm:text-xs font-medium leading-6 text-center">
                Shop Gadgets
              </p>
            </Link>
          </div>
        </div>

        {/* Right side form */}
        <div className="max-w-full sm:max-w-100 mt-3 sm:mt-0">
          <p className="text-white mb-2 sm:mb-3.75 font-dm-sans-500 text-xs sm:text-[16px] font-medium leading-3 lg:leading-4">
            Stay up to date
          </p>

          <div className="flex gap-2 mb-2 sm:mb-3.75 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 text-white py-3 px-6 rounded-[100px] border border-white/25 bg-[rgba(9,10,4,0.05)] shadow-[inset_0_0_10px_0_rgba(0,0,0,0.1)] min-w-0"
            />
            <button className="py-3 px-6 rounded-[100px] bg-[#E6D3AC] shadow-[inset_-2px_-2px_4px_0_rgba(0,0,0,0.25)]">
              Subscribe
            </button>
          </div>

          <p className="text-white font-dm-sans-500 text-[10px] sm:text-sm  font-medium leading-3 lg:leading-4">
            Or contact us via WhatsApp:{" "}
            <span className="underline decoration-solid underline-offset-1">
              +234 903 963 2833
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reliable;
