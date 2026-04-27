import React from "react";

const CompletedOrder = () => {
  return (
    <div className="w-full flex flex-col">
      {/* header */}

      <div className="flex w-full items-center h-17 pt-5.75 pb-6.25 pl-1.25 pr-14.25 rounded-[25px] bg-[#FCFCFC]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[#2D2D2D] font-medium text-[18px] leading-4.5 tracking-[-0.2px] font-clash-grotesk">
            Orders Management
          </p>
          <img src="/noti.svg" alt="" />
        </div>
      </div>

      {/*body  */}
      <div className="flex flex-col justify-center items-start w-full  p-3 gap-5 rounded-[25px] border border-[rgba(107,107,107,0.15)] bg-white">
        <div className="flex justify-center items-center pl-6.25 pr-6 pt-1.75 pb-2 border-b border-[rgba(113,113,130,0.45)] bg-[#FAFAFA]">
          <div className="flex items-start gap-[61px]">
            <div className="flex items-center w-[113px] h-[44px] px-[2px]">
              <p className="text-[#717182] font-medium text-sm leading-[16px] font-clash-grotesk">
                All Orders (5)
              </p>
            </div>

            <div className="flex items-center w-[135px] h-[44px] px-[2px]">
              <p className="text-[#717182] font-medium text-sm leading-[16px] font-clash-grotesk">
                Johns Stores (3)
              </p>
            </div>

            <div className="flex items-center w-[142px] h-[44px] px-[2px]">
              <p className="text-[#717182] font-medium text-sm leading-[16px] font-clash-grotesk">
                Swift Logistics (2)
              </p>
            </div>

            <div className="flex items-center w-[165px] h-[44px] px-[2px]">
              <p className="text-[#717182] font-medium text-sm leading-[16px] font-clash-grotesk">
                Pending Payment (2)
              </p>
            </div>

            <div className="flex items-center w-[119px] h-[44px] px-[2px]">
              <p className="text-[#717182] font-medium text-sm leading-[16px] font-clash-grotesk">
                Completed (4)
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-auto pt-6 rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-white">
          <div className="flex items-center px-6.25 py-2 bg-[#FAFAFA]">
            <div className="flex items-start gap-2.5">
              <div className="flex items-center w-24 h-11 px-0.5">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  Order ID
                </p>
              </div>

              <div className="flex items-center w-14.75 h-11 px-0.5">
                <p className="text-[#717182] font-medium text-xs leading-3.5 font-clash-grotesk">
                  Item Sum
                </p>
              </div>

              <div className="flex items-center w-26 h-11 px-0.5">
                <p className="text-[#717182] font-medium text-xs leading-3.5 font-clash-grotesk">
                  Sender's Name
                </p>
              </div>

              <div className="flex items-center w-26 h-11 px-0.5">
                <p className="text-[#717182] font-medium text-xs leading-3.5 font-clash-grotesk">
                  Recepient's Name
                </p>
              </div>

              <div className="flex items-center w-18.5 h-11 px-0.5">
                <p className="text-[#717182] font-medium text-xs leading-3.5 font-clash-grotesk">
                  Total
                </p>
              </div>

              <div className="flex items-center w-24.5 h-11 px-0.5">
                <p className="text-[#717182] font-medium text-xs leading-3.5 font-clash-grotesk">
                  Payment Status
                </p>
              </div>

              <div className="flex items-center w-24.5 h-11 px-0.5">
                <p className="text-[#717182] font-medium text-xs leading-3.5 font-clash-grotesk">
                  Order Status
                </p>
              </div>

              <div className="flex items-center w-26.25 h-11 px-0.5">
                <p className="text-[#717182] font-medium text-xs leading-3.5 font-clash-grotesk">
                  Action
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center px-6.25 py-2 bg-[#FAFAFA]">
            <div className="flex items-start gap-2.5">
              <div className="flex items-center w-24 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  JS-2026-021
                </p>
              </div>

              <div className="flex items-center w-14.75 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  2 Items
                </p>
              </div>

              <div className="flex items-center w-26 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  Gloria Johnson
                </p>
              </div>

              <div className="flex items-center w-26 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  -
                </p>
              </div>

              <div className="flex items-center w-18.5 h-11 px-0.5">
                <p className="text-[#3B0002] font-medium text-[12px] leading-3.5 font-clash-grotesk">
                  ₦100,240
                </p>
              </div>

              <div className="flex items-center w-24.5 h-11 px-0.5">
                <div className="flex justify-center items-center w-11.25 h-6 shrink-0 rounded-sm bg-[#DCFCE7]">
                  <p className="text-[#2D2D2D] font-medium text-[12px] leading-3.5 tracking-[-0.5px] font-dm-sans-500">
                    Paid
                  </p>
                </div>
              </div>

              <div className="flex items-center w-24.5 h-11 px-0.5">
                <div className="flex justify-center items-center w-20.5 h-6 shrink-0 rounded-sm bg-[#DCFCE7]">
                  <p className="text-[#2D2D2D] font-medium text-[12px] leading-3.5 tracking-[-0.5px] font-dm-sans-500">
                    Completed
                  </p>
                </div>
              </div>

              <div className="flex items-center w-11 h-11 px-0.5">
                <p className="text-[#E3494E] font-bold text-[14px] leading-3.5 tracking-[-0.5px] underline font-dm-sans-700">
                  View
                </p>
              </div>

              <div className="flex items-center w-19 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  -
                </p>
              </div>

              <div className="flex items-center w-19 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  -
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center px-6.25 py-2 bg-[#FAFAFA]">
            <div className="flex items-start gap-2.5">
              <div className="flex items-center w-24 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  JS-2026-021
                </p>
              </div>

              <div className="flex items-center w-14.75 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  2 Items
                </p>
              </div>

              <div className="flex items-center w-26 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  Gloria Johnson
                </p>
              </div>

              <div className="flex items-center w-26 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  -
                </p>
              </div>

              <div className="flex items-center w-18.5 h-11 px-0.5">
                <p className="text-[#3B0002] font-medium text-[12px] leading-3.5 font-clash-grotesk">
                  ₦100,240
                </p>
              </div>

              <div className="flex items-center w-24.5 h-11 px-0.5">
                <div className="flex justify-center items-center w-11.25 h-6 shrink-0 rounded-sm bg-[#DCFCE7]">
                  <p className="text-[#2D2D2D] font-medium text-[12px] leading-3.5 tracking-[-0.5px] font-dm-sans-500">
                    Paid
                  </p>
                </div>
              </div>

              <div className="flex items-center w-24.5 h-11 px-0.5">
                <div className="flex justify-center items-center w-20.5 h-6 shrink-0 rounded-sm bg-[#DCFCE7]">
                  <p className="text-[#2D2D2D] font-medium text-[12px] leading-3.5 tracking-[-0.5px] font-dm-sans-500">
                    Completed
                  </p>
                </div>
              </div>

              <div className="flex items-center w-11 h-11 px-0.5">
                <p className="text-[#E3494E] font-bold text-[14px] leading-3.5 tracking-[-0.5px] underline font-dm-sans-700">
                  View
                </p>
              </div>

              <div className="flex items-center w-19 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  -
                </p>
              </div>

              <div className="flex items-center w-19 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  -
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center px-6.25 py-2 bg-[#FAFAFA]">
            <div className="flex items-start gap-2.5">
              <div className="flex items-center w-24 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  JS-2026-021
                </p>
              </div>

              <div className="flex items-center w-14.75 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  2 Items
                </p>
              </div>

              <div className="flex items-center w-26 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  Gloria Johnson
                </p>
              </div>

              <div className="flex items-center w-26 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  -
                </p>
              </div>

              <div className="flex items-center w-18.5 h-11 px-0.5">
                <p className="text-[#3B0002] font-medium text-[12px] leading-3.5 font-clash-grotesk">
                  ₦100,240
                </p>
              </div>

              <div className="flex items-center w-24.5 h-11 px-0.5">
                <div className="flex justify-center items-center w-11.25 h-6 shrink-0 rounded-sm bg-[#DCFCE7]">
                  <p className="text-[#2D2D2D] font-medium text-[12px] leading-3.5 tracking-[-0.5px] font-dm-sans-500">
                    Paid
                  </p>
                </div>
              </div>

              <div className="flex items-center w-24.5 h-11 px-0.5">
                <div className="flex justify-center items-center w-20.5 h-6 shrink-0 rounded-sm bg-[#DCFCE7]">
                  <p className="text-[#2D2D2D] font-medium text-[12px] leading-3.5 tracking-[-0.5px] font-dm-sans-500">
                    Completed
                  </p>
                </div>
              </div>

              <div className="flex items-center w-11 h-11 px-0.5">
                <p className="text-[#E3494E] font-bold text-[14px] leading-3.5 tracking-[-0.5px] underline font-dm-sans-700">
                  View
                </p>
              </div>

              <div className="flex items-center w-19 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  -
                </p>
              </div>

              <div className="flex items-center w-19 h-11 px-0.5">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-3.5 font-clash-grotesk">
                  -
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedOrder;
