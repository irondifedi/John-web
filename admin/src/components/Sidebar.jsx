import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center w-64.5 px-3.75 pt-6 pb-27 bg-[#FCFCFC]">
      <div className="flex flex-col items-start w-57 gap-5">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2.5  items-center">
            <img src="/john-ent.svg" alt="" />

            <p className="text-[#121212] font-semibold text-[12px] leading-3 tracking-[0.36px] font-clash-grotesk ">
              John’s <br /> Enterprise
            </p>
          </div>

          <div>
            <img src="/top.svg" alt="" />
          </div>
        </div>

        <div className="flex flex-col items-start self-stretch gap-[15px]">
          <div className="flex items-center self-stretch pl-[12px] pr-[32px] py-[11px] rounded-[8px] border border-[rgba(0,0,0,0.10)] bg-[#FAFAFA] shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
            <div className="flex justify-center items-center gap-[12px]">
              <img src="/search.svg" alt="" />

              <input
                type="text"
                placeholder="Search orders, products,..."
                className="text-[#6B6B6B] text-center font-medium text-[14px] leading-[14px] tracking-[-0.5px] font-dm-sans-500"
              />
            </div>
          </div>

          <div className="flex flex-col items-start self-stretch gap-[35px]">
            <div className="flex flex-col w-full gap-[6px]">
              <div className="flex items-center self-stretch pl-[12px]  py-[11px] rounded-[8px] bg-[#E3494E] shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-center gap-[8px]">
                  <img src="/dashboard.svg" alt="" />

                  <p className="text-white text-center font-semibold text-[14px] leading-[14px] tracking-[-0.5px] font-dm-sans-700 ">
                    Dashboard
                  </p>
                </div>
              </div>

              <div className="flex items-center self-stretch pl-[12px]  py-[11px] rounded-[8px] bg-[#FAFAFA] shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-center gap-[8px]">
                  <img src="/orders.svg" alt="" />

                  <p className="text-[#6B6B6B] text-center font-semibold text-[14px] leading-[14px] tracking-[-0.5px] font-dm-sans-700 ">
                    Orders
                  </p>
                </div>
              </div>

              <div className="flex items-center self-stretch pl-[12px] py-[11px] rounded-[8px] bg-[#FAFAFA] shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-center gap-[8px]">
                  <img src="/products.svg" alt="" />

                  <p className="text-[#6B6B6B] text-center font-semibold text-[14px] leading-[14px] tracking-[-0.5px] font-dm-sans-700 ">
                    Products
                  </p>
                </div>
              </div>

              <div className="flex items-center self-stretch pl-[12px]  py-[11px] rounded-[8px] bg-[#FAFAFA] shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-center gap-[8px]">
                  <img src="/category.svg" alt="" />

                  <p className="text-[#6B6B6B] text-center font-semibold text-[14px] leading-[14px] tracking-[-0.5px] font-dm-sans-700 ">
                    Categories
                  </p>
                </div>
              </div>

              <div className="flex items-center self-stretch pl-[12px] py-[11px] rounded-[8px] bg-[#FAFAFA] shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-center gap-[8px]">
                  <img src="/analytics.svg" alt="" />

                  <p className="text-[#6B6B6B] text-center font-semibold text-[14px] leading-[14px] tracking-[-0.5px] font-dm-sans-700 ">
                    Analytics
                  </p>
                </div>
              </div>

              <div className="flex items-center self-stretch pl-[12px]  py-[11px] rounded-[8px] bg-[#FAFAFA] shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-center gap-[8px]">
                  <img src="/easy-media.svg" alt="" />

                  <p className="text-[#6B6B6B] text-center font-semibold text-[14px] leading-[14px] tracking-[-0.5px] font-dm-sans-700 ">
                    Easy Media
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start self-start gap-[10px]">
              <div className="text-[#6B6B6B] font-semibold text-[14px] leading-[14px] tracking-[-0.5px] font-dm-sans-700">
                Others
              </div>

              <div className="flex items-center self-stretch pl-[12px]  py-[11px] rounded-[8px] bg-[#FAFAFA] shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-center gap-[8px]">
                  <img src="/settings.svg" alt="" />

                  <p className="text-[#6B6B6B] text-center font-semibold text-[14px] leading-[14px] tracking-[-0.5px] font-dm-sans-700 ">
                    Settings
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pl-[12px] pr-[39px] py-[12px] rounded-[8px] border border-[rgba(0,0,0,0.10)] bg-[#FAFAFA] shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
              <img src={assets.john_admin_icon} alt="" />
              <p className="text-[#2D2D2D] font-semibold text-[13px] leading-[17px] tracking-[-0.5px] font-dm-sans-700">
                Johnpaul Ajuonwu{" "}
                <span className="text-[#6B6B6B] font-normal text-[10px] leading-[17px] tracking-[-0.5px] font-dm-sans-700">
                  AJUONWUCHIEMERIE@.
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      Sidebar
    </div>
  );
};

export default Sidebar;
