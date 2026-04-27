import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center self-stretch bg-[#FAFAFA] px-4 sm:px-6 md:px-8 py-10 sm:py-20">
      {/* Top badge */}
      <div className="flex justify-center items-center rounded-xl bg-[rgba(230,211,172,0.45)] px-2 sm:px-3 py-1.5 sm:py-2">
        <p className="font-dm-sans text-[rgba(51,51,51,0.7)] text-xs sm:text-base font-normal leading-5 tracking-[-0.5px]">
          Our Services
        </p>
      </div>

      {/* Heading */}
      <div className="mb-8 sm:mb-17.5">
        <p className="text-[#2D2D2D] text-center font-clash-grotesk text-xl sm:text-4xl font-medium leading-12">
          Your No. 1 Business Solution
        </p>
      </div>

      {/* GRID START */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {/* CARD 1 */}
        <div className="rounded-2xl bg-white">
          <div className="px-2.5 sm:px-5 py-2.5 sm:py-5 mb-2.5 sm:mb-6.25">
            <img
              className="mb-2 sm:mb-5 w-8 sm:w-auto  h-auto "
              src={assets.swift_icon}
              alt=""
            />

            <p className="font-clash-grotesk text-[#2D2D2D] text-base sm:text-xl font-semibold mb-3">
              Swift Logistics
            </p>

            <p className="font-dm-sans text-[#6B6B6B] text-xs sm:text-sm leading-5">
              Send gifts and packages to family, friends, and partners worldwide
              with confidence. We handle your deliveries with speed, care, and
              transparency.
            </p>
          </div>

          <div className="relative mt-auto">
            <img className="w-full" src={assets.container} alt="" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,25,14,0)_0%,#00190E_100%)]"></div>

            <NavLink
              to="/swift-logistics"
              className="absolute bottom-4 left-4 px-5 py-2 rounded-[14px] border-2 border-white text-white text-xs sm:text-sm"
            >
              Explore Swift Logistic
            </NavLink>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="rounded-2xl bg-white">
          <div className=" px-2.5 sm:px-5 py-2.5 sm:py-5 mb-2.5 sm:mb-6.25">
            <img
              className="mb-2 sm:mb-5 w-8 sm:w-auto  h-auto"
              src={assets.john_stores_icon}
              alt=""
            />

            <p className="font-clash-grotesk text-[#2D2D2D] text-base sm:text-xl font-semibold mb-3">
              John's Stores
            </p>

            <p className="font-dm-sans text-[#6B6B6B] text-xs sm:text-sm leading-5">
              Your trusted online store for gadgets and accessories. From
              smartphones to speakers, every product is selected for quality and
              value.
            </p>
          </div>

          <div className="relative mt-auto">
            <img className="w-full" src={assets.container_1} alt="" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,25,14,0)_0%,#00190E_100%)]"></div>

            <Link
              to="/john-stores"
              className="absolute bottom-4 left-4 px-5 py-2 rounded-[14px] border-2 border-white text-white text-xs sm:text-sm"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="rounded-2xl bg-white">
          <div className="px-2.5 sm:px-5 py-2.5 sm:py-5 mb-2.5 sm:mb-6.25">
            <img
              className="mb-2 sm:mb-5 w-8 sm:w-auto  h-auto"
              src={assets.easy_media_icon}
              alt=""
            />

            <p className="font-clash-grotesk text-[#2D2D2D] text-base sm:text-xl font-semibold mb-3">
              Easy Media
            </p>

            <p className="font-dm-sans text-[#6B6B6B] text-xs sm:text-sm leading-5">
              Your gateway to the digital world. We simplify your access to
              VPNs, streaming services, virtual phone numbers, and more.
            </p>
          </div>

          <div className="relative mt-auto">
            <img className="w-full" src={assets.container_2} alt="" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,25,14,0)_0%,#00190E_100%)]"></div>

            <Link
              to="/easy-media"
              className="absolute bottom-4 left-4 px-5 py-2 rounded-[14px] bg-[#E6D3AC] text-black text-xs sm:text-sm"
            >
              Coming Soon
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
