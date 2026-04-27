import React, { useState } from "react";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex flex-col">
      {/* header */}

      <div className="flex w-full items-center h-[68px] pt-[23px] pb-[25px] pl-[5px] pr-[57px] rounded-[25px] bg-[#FCFCFC]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[#2D2D2D] font-medium text-[18px] leading-[18px] tracking-[-0.2px] font-clash-grotesk">
            Dashboard
          </p>
          <img src="/noti.svg" alt="" />
        </div>
      </div>

      {/*body  */}
      <div className="flex flex-col justify-center items-start w-full  p-[12px] gap-[15px] rounded-[25px] border border-[rgba(107,107,107,0.15)] bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[15px]">
          <div className="flex justify-center items-center w-[185px] p-[12px] rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-[#FAFAFA]">
            <div className="flex w-[155px] flex-col items-start shrink-0 gap-[15px]">
              <div className="flex items-center gap-[10px]">
                <img src="/naira.svg" alt="" />

                <p className="text-[#717182] text-center font-medium text-xs leading-[16px] font-clash-grotesk">
                  Total Revenue{" "}
                </p>
              </div>

              <div className="flex  items-center self-stretch pl-[12px]  py-[15px] rounded-[10px] border border-[rgba(107,107,107,0.10)] bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
                <div className="flex flex-col gap-2">
                  <p className="text-[#3B0002] font-medium text-[22px] leading-[28px] font-clash-grotesk">
                    ₦1,997,494
                  </p>
                  <span className="text-[#6B6B6B] font-medium text-[9px] leading-[12px] tracking-[-0.3px] font-dm-sans-500">
                    {" "}
                    <span className="text-[#1FB35B] font-medium text-[9px] leading-[12px] tracking-[-0.3px] font-dm-sans-500">
                      +2.1%
                    </span>{" "}
                    vs last month
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-[185px] p-[12px] rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-[#FAFAFA]">
            <div className="flex w-[155px] flex-col items-start shrink-0 gap-[15px]">
              <div className="flex items-center gap-[10px]">
                <img src="/orders.svg" alt="" />

                <p className="text-[#717182] text-center font-medium text-xs leading-[16px] font-clash-grotesk">
                  Total Orders{" "}
                </p>
              </div>

              <div className="flex  items-center self-stretch pl-[12px]  py-[15px] rounded-[10px] border border-[rgba(107,107,107,0.10)] bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
                <div className="flex flex-col gap-2">
                  <p className="text-[#3B0002] font-medium text-[22px] leading-[28px] font-clash-grotesk">
                    75
                  </p>
                  <span className="text-[#6B6B6B] font-medium text-[9px] leading-[12px] tracking-[-0.3px] font-dm-sans-500">
                    {" "}
                    <span className="text-[#C3383F] font-medium text-[9px] leading-[12px] tracking-[-0.3px] font-dm-sans-500">
                      -2.1%
                    </span>{" "}
                    vs last month
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-[185px] p-[12px] rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-[#FAFAFA]">
            <div className="flex w-[155px] flex-col items-start shrink-0 gap-[15px]">
              <div className="flex items-center gap-[10px]">
                <img src="/pending.svg" alt="" />

                <p className="text-[#717182] text-center font-medium text-xs leading-[16px] font-clash-grotesk">
                  Pending Payments{" "}
                </p>
              </div>

              <div className="flex  items-center self-stretch pl-[12px]  py-[15px] rounded-[10px] border border-[rgba(107,107,107,0.10)] bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
                <div className="flex flex-col gap-2">
                  <p className="text-[#3B0002] font-medium text-[22px] leading-[28px] font-clash-grotesk">
                    7
                  </p>
                  <span className="text-[#C3383F] font-medium text-[9px] leading-[12px] tracking-[-0.3px] font-dm-sans-500">
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-[185px] p-[12px] rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-[#FAFAFA]">
            <div className="flex w-[155px] flex-col items-start shrink-0 gap-[15px]">
              <div className="flex items-center gap-[10px]">
                <img src="/completed.svg" alt="" />

                <p className="text-[#717182] text-center font-medium text-xs leading-[16px] font-clash-grotesk">
                  Completed Orders{" "}
                </p>
              </div>

              <div className="flex  items-center self-stretch pl-[12px]  py-[15px] rounded-[10px] border border-[rgba(107,107,107,0.10)] bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
                <div className="flex flex-col gap-2">
                  <p className="text-[#3B0002] font-medium text-[22px] leading-[28px] font-clash-grotesk">
                    7
                  </p>
                  <span className="text-[#1FB35B] font-medium text-[9px] leading-[12px] tracking-[-0.3px] font-dm-sans-500">
                    Cleared
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-[185px] p-[12px] rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-[#FAFAFA]">
            <div className="flex w-[155px] flex-col items-start shrink-0 gap-[15px]">
              <div className="flex items-center gap-[10px]">
                <img src="/completed.svg" alt="" />

                <p className="text-[#717182] text-center font-medium text-xs leading-[16px] font-clash-grotesk">
                  Low Stock Items{" "}
                </p>
              </div>

              <div className="flex  items-center self-stretch pl-[12px]  py-[15px] rounded-[10px] border border-[rgba(107,107,107,0.10)] bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
                <div className="flex flex-col gap-2">
                  <p className="text-[#3B0002] font-medium text-[22px] leading-[28px] font-clash-grotesk">
                    7
                  </p>
                  <span className="text-[#6B6B6B] font-medium text-[9px] leading-[12px] tracking-[-0.3px] font-dm-sans-500">
                    From{" "}
                    <span className="text-[#C3383F] font-medium text-[9px] leading-[12px] tracking-[-0.3px] font-dm-sans-500">
                      3
                    </span>{" "}
                    Categories
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto pt-[24px] rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-white">
          <div className="flex items-center w-full px-[25px] justify-between">
            <p className="text-[#2D2D2D] font-medium text-[18px] leading-base tracking-[-0.2px] font-clash-grotesk">
              Recent Orders
            </p>

            <div className="relative">
              <div className="flex gap-1 items-center justify-center">
                <img src="/calendar.svg" alt="" />
                <p className="text-[#717182] font-semibold text-sm leading-[18px] tracking-[-0.5px]  font-dm-sans-700">
                  Last 30 Days
                </p>
                <div
                  className="flex flex-col gap-0.5 cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <img src="/up-arrow.svg" alt="" />
                  <img src="/down-arrow.svg" alt="" />
                </div>
              </div>

              {open && (
                <div className="absolute top-full right-1 mt-2 w-[135px] bg-white shadow-md rounded-[10px] ">
                  <div className="flex items-center self-stretch pl-[16px]  py-[10px] border-b border-[#DADADA]">
                    <p className="text-[#717182] font-semibold text-sm leading-[18px] tracking-[-0.5px] font-dm-sans-700">
                      Today
                    </p>
                  </div>

                  <div className="flex items-center self-stretch pl-[16px]  py-[10px] border-b border-[#DADADA]">
                    <p className="text-[#717182] font-semibold text-sm leading-[18px] tracking-[-0.5px] font-dm-sans-700">
                      This Week
                    </p>
                  </div>

                  <div className="flex items-center self-stretch pl-[16px]  py-[10px] border-b border-[#DADADA]">
                    <p className="text-[#717182] font-semibold text-sm leading-[18px] tracking-[-0.5px] font-dm-sans-700">
                      This Month
                    </p>
                  </div>

                  <div className="flex items-center self-stretch pl-[16px]  py-[10px] border-b border-[#DADADA] bg-[#E6D3AC]">
                    <p className="text-[#717182] font-semibold text-sm leading-[18px] tracking-[-0.5px] font-dm-sans-700">
                      Last 30 Days
                    </p>
                  </div>

                  <div className="flex items-center self-stretch pl-[16px]  py-[10px] border-b border-[#DADADA]">
                    <p className="text-[#717182] font-semibold text-sm leading-[18px] tracking-[-0.5px] font-dm-sans-700">
                      Custom Range
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="pl-[25px] mb-[15px] flex justify-end items-center py-[7px] bg-[#FAFAFA]">
            <div className="flex items-start gap-[30px]">
              <div className="flex items-center w-[114px] h-[44px] px-[2px]">
                <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                  Order ID
                </p>
              </div>

              <div className="flex items-center w-[132px] h-[44px] px-[2px]">
                <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                  Brand
                </p>
              </div>

              <div className="flex items-center w-[135px] h-[44px] px-[2px]">
                <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                  Customer's Name
                </p>
              </div>

              <div className="flex items-center w-[90px] h-[44px] px-[2px]">
                <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                  Total
                </p>
              </div>

              <div className="flex items-center w-[110px] h-[44px] px-[2px]">
                <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                  Status
                </p>
              </div>

              <div className="flex items-center w-[121px] h-[44px] px-[2px]">
                <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                  Date
                </p>
              </div>

              <div className="flex items-center w-[60px] h-[44px] px-[2px]">
                <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                  Action
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[25px]">
            <div className="pl-[25px] mb-[15px] inline-flex justify-end items-center py-[7px] ">
              <div className="flex items-start gap-[30px]">
                <div className="flex items-center w-[114px] h-[44px] px-[2px]">
                  <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                    JS-2026-021
                  </p>
                </div>

                <div className="flex gap-1 items-center w-[132px] h-[44px] px-[2px]">
                  <img src="/john-stores.svg" alt="" />
                  <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                    John’s Stores
                  </p>
                </div>

                <div className="flex items-center w-[135px] h-[44px] px-[2px]">
                  <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                    Gloria Johnson
                  </p>
                </div>

                <div className="flex items-center w-[90px] h-[44px] px-[2px]">
                  <p className="text-[#3B0002] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                    ₦100,240
                  </p>
                </div>

                <div className="flex items-center w-[110px] h-[44px] px-[2px]">
                  <div className="flex justify-center items-center w-[82px] h-[24px] shrink-0 rounded-[4px] bg-[rgba(230,211,172,0.45)]">
                    <p className="text-[#2D2D2D] font-medium text-[12px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                      Processing
                    </p>
                  </div>
                </div>

                <div className="flex items-center w-[121px] h-[44px] px-[2px]">
                  <p className="text-[#3B0002] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                    March 14, 2026
                  </p>
                </div>

                <div className="flex items-center w-[60px] h-[44px] px-[2px]">
                  <p className="text-[#E3494E] font-bold text-[13px] leading-[14px] tracking-[-0.5px] underline font-dm-sans-700">
                    View
                  </p>
                </div>
              </div>
            </div>

            <div className="pl-[25px] mb-[15px] inline-flex justify-end items-center py-[7px] ">
              <div className="flex items-start gap-[30px]">
                <div className="flex items-center w-[114px] h-[44px] px-[2px]">
                  <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                    JS-2026-021
                  </p>
                </div>

                <div className="flex gap-1 items-center w-[132px] h-[44px] px-[2px]">
                  <img src="/john-stores.svg" alt="" />
                  <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                    John’s Stores
                  </p>
                </div>

                <div className="flex items-center w-[135px] h-[44px] px-[2px]">
                  <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                    Gloria Johnson
                  </p>
                </div>

                <div className="flex items-center w-[90px] h-[44px] px-[2px]">
                  <p className="text-[#3B0002] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                    ₦100,240
                  </p>
                </div>

                <div className="flex items-center w-[110px] h-[44px] px-[2px]">
                  <div className="flex justify-center items-center w-[82px] h-[24px] shrink-0 rounded-[4px] bg-[#F2EEC1]">
                    <p className="text-[#2D2D2D] font-medium text-[12px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                      Pending
                    </p>
                  </div>
                </div>

                <div className="flex items-center w-[121px] h-[44px] px-[2px]">
                  <p className="text-[#3B0002] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                    March 14, 2026
                  </p>
                </div>

                <div className="flex items-center w-[60px] h-[44px] px-[2px]">
                  <p className="text-[#E3494E] font-bold text-[13px] leading-[14px] tracking-[-0.5px] underline font-dm-sans-700">
                    View
                  </p>
                </div>
              </div>
            </div>

            <div className="pl-[25px] mb-[15px] inline-flex justify-end items-center py-[7px] ">
              <div className="flex items-start gap-[30px]">
                <div className="flex items-center w-[114px] h-[44px] px-[2px]">
                  <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                    JS-2026-021
                  </p>
                </div>

                <div className="flex gap-1 items-center w-[132px] h-[44px] px-[2px]">
                  <img src="/swift-log.svg" alt="" />
                  <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                    Swift Logistics
                  </p>
                </div>

                <div className="flex items-center w-[135px] h-[44px] px-[2px]">
                  <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                    Gloria Johnson
                  </p>
                </div>

                <div className="flex items-center w-[90px] h-[44px] px-[2px]">
                  <p className="text-[#3B0002] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                    ₦100,240
                  </p>
                </div>

                <div className="flex items-center w-[110px] h-[44px] px-[2px]">
                  <div className="flex justify-center items-center w-[82px] h-[24px] shrink-0 rounded-[4px] bg-[#DCFCE7]">
                    <p className="text-[#2D2D2D] font-medium text-[12px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                      Completed
                    </p>
                  </div>
                </div>

                <div className="flex items-center w-[121px] h-[44px] px-[2px]">
                  <p className="text-[#3B0002] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                    March 14, 2026
                  </p>
                </div>

                <div className="flex items-center w-[60px] h-[44px] px-[2px]">
                  <p className="text-[#E3494E] font-bold text-[13px] leading-[14px] tracking-[-0.5px] underline font-dm-sans-700">
                    View
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
