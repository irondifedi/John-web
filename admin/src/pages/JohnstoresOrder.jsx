import React from "react";

const JohnstoresOrder = () => {
  return (
    <div className="w-full flex flex-col">
      {/* header */}

      <div className="flex w-full items-center h-[68px] pt-[23px] pb-[25px] pl-[5px] pr-[57px] rounded-[25px] bg-[#FCFCFC]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[#2D2D2D] font-medium text-[18px] leading-[18px] tracking-[-0.2px] font-clash-grotesk">
            Orders Management
          </p>
          <img src="/noti.svg" alt="" />
        </div>
      </div>

      {/*body  */}
      <div className="flex flex-col justify-center items-start w-full  p-[12px] gap-[20px] rounded-[25px] border border-[rgba(107,107,107,0.15)] bg-white">
        <div className="flex justify-center items-center pl-[25px] pr-[24px] pt-[7px] pb-[8px] border-b border-[rgba(113,113,130,0.45)] bg-[#FAFAFA]">
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

        <div className="w-full h-auto pt-[24px] rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-white">
          <div className="flex items-center px-[25px] py-[8px] bg-[#FAFAFA]">
            <div className="flex items-start gap-[10px]">
              <div className="flex items-center w-[96px] h-[44px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  Order ID
                </p>
              </div>

              <div className="flex items-center w-[59px] h-[44px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  Item Sum
                </p>
              </div>

              <div className="flex items-center w-[104px] h-[44px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  Sender's Name
                </p>
              </div>

              <div className="flex items-center w-[104px] h-[44px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  Recepient's Name
                </p>
              </div>

              <div className="flex items-center w-[74px] h-[44px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  Total
                </p>
              </div>

              <div className="flex items-center w-[98px] h-[44px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  Payment Status
                </p>
              </div>

              <div className="flex items-center w-[98px] h-[44px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  Order Status
                </p>
              </div>

              <div className="flex items-center w-[105px] h-[44px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  Action
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center px-[25px] py-[8px] bg-[#FAFAFA]">
            <div className="flex items-start gap-[10px]">
              <div className="flex items-center w-[96px] h-[44px] px-[2px]">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  JS-2026-021
                </p>
              </div>

              <div className="flex items-center w-[59px] h-[44px] px-[2px]">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  2 Items
                </p>
              </div>

              <div className="flex items-center w-[104px] h-[44px] px-[2px]">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  Gloria Johnson
                </p>
              </div>

              <div className="flex items-center w-[104px] h-[44px] px-[2px]">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  -
                </p>
              </div>

              <div className="flex items-center w-[74px] h-[44px] px-[2px]">
                <p className="text-[#3B0002] font-medium text-[12px] leading-[14px] font-clash-grotesk">
                  ₦100,240
                </p>
              </div>

              <div className="flex items-center w-[98px] h-[44px] px-[2px]">
                <div className="flex justify-center items-center w-[45px] h-[24px] shrink-0 rounded-[4px] bg-[#DCFCE7]">
                  <p className="text-[#2D2D2D] font-medium text-[12px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                    Paid
                  </p>
                </div>
              </div>

              <div className="flex items-center w-[98px] h-[44px] px-[2px]">
                <div className="flex justify-center items-center w-[82px] h-[24px] shrink-0 rounded-[4px] bg-[#DCFCE7]">
                  <p className="text-[#2D2D2D] font-medium text-[12px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                    Completed
                  </p>
                </div>
              </div>

              <div className="flex items-center w-[44px] h-[44px] px-[2px]">
                <p className="text-[#E3494E] font-bold text-[14px] leading-[14px] tracking-[-0.5px] underline font-dm-sans-700">
                  View
                </p>
              </div>

              <div className="flex items-center w-[76px] h-[44px] px-[2px]">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  -
                </p>
              </div>

              <div className="flex items-center w-[76px] h-[44px] px-[2px]">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  -
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center px-[25px] py-[8px] bg-[#FAFAFA]">
            <div className="flex items-start gap-[10px]">
              <div className="flex items-center w-[96px] h-[44px] px-[2px]">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  JS-2026-021
                </p>
              </div>

              <div className="flex items-center w-[59px] h-[44px] px-[2px]">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  2 Items
                </p>
              </div>

              <div className="flex items-center w-[104px] h-[44px] px-[2px]">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  Gloria Johnson
                </p>
              </div>

              <div className="flex items-center w-[104px] h-[44px] px-[2px]">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  Laurence Peter
                </p>
              </div>

              <div className="flex items-center w-[74px] h-[44px] px-[2px]">
                <p className="text-[#3B0002] font-medium text-[12px] leading-[14px] font-clash-grotesk">
                  ₦100,240
                </p>
              </div>

              <div className="flex items-center w-[98px] h-[44px] px-[2px]">
                <div className="flex justify-center items-center w-[82px] h-[24px] shrink-0 rounded-[4px] bg-[#F2EEC1]">
                  <p className="text-[#2D2D2D] font-medium text-[12px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                    Pending
                  </p>
                </div>
              </div>

              <div className="flex items-center w-[98px] h-[44px] px-[2px]">
                <div className="flex justify-center items-center w-[82px] h-[24px] shrink-0 rounded-[4px] bg-[#F2EEC1]">
                  <p className="text-[#2D2D2D] font-medium text-[12px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                    Pending
                  </p>
                </div>
              </div>

              <div className="flex items-center w-[44px] h-[44px] px-[2px]">
                <p className="text-[#E3494E] font-bold text-[13px] leading-[14px] tracking-[-0.5px] underline font-dm-sans-700">
                  View
                </p>
              </div>

              <div className="flex items-center w-[76px] h-[44px] px-[2px]">
                <p className="text-[#032817] font-bold text-[13px] leading-[14px] tracking-[-0.5px] underline font-dm-sans-700">
                  Mark Paid
                </p>
              </div>

              <div className="flex items-center w-[76px] h-[44px] px-[2px]">
                <p className="text-[#008236] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  Complete
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center px-[25px] py-[8px] bg-[#FAFAFA]">
            <div className="flex items-start gap-[10px]">
              <div className="flex items-center w-[96px] h-[44px] px-[2px]">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  JS-2026-021
                </p>
              </div>

              <div className="flex items-center w-[59px] h-[44px] px-[2px]">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  2 Items
                </p>
              </div>

              <div className="flex items-center w-[104px] h-[44px] px-[2px]">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  Gloria Johnson
                </p>
              </div>

              <div className="flex items-center w-[104px] h-[44px] px-[2px]">
                <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  Laurence Peter
                </p>
              </div>

              <div className="flex items-center w-[74px] h-[44px] px-[2px]">
                <p className="text-[#3B0002] font-medium text-[12px] leading-[14px] font-clash-grotesk">
                  ₦100,240
                </p>
              </div>

              <div className="flex items-center w-[98px] h-[44px] px-[2px]">
                <div className="flex justify-center items-center w-[82px] h-[24px] shrink-0 rounded-[4px] bg-[#F2EEC1]">
                  <p className="text-[#2D2D2D] font-medium text-[12px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                    Pending
                  </p>
                </div>
              </div>

              <div className="flex items-center w-[98px] h-[44px] px-[2px]">
                <div className="flex justify-center items-center w-[82px] h-[24px] shrink-0 rounded-[4px] bg-[rgba(230,211,172,0.45)]">
                  <p className="text-[#2D2D2D] font-medium text-[12px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                    Processing
                  </p>
                </div>
              </div>

              <div className="flex items-center w-[44px] h-[44px] px-[2px]">
                <p className="text-[#E3494E] font-bold text-[13px] leading-[14px] tracking-[-0.5px] underline font-dm-sans-700">
                  View
                </p>
              </div>

              <div className="flex items-center w-[76px] h-[44px] px-[2px]">
                <p className="text-[#032817] font-bold text-[13px] leading-[14px] tracking-[-0.5px] underline font-dm-sans-700">
                  Mark Paid
                </p>
              </div>

              <div className="flex items-center w-[76px] h-[44px] px-[2px]">
                <p className="text-[#008236] font-medium text-[13px] leading-[14px] font-clash-grotesk">
                  Complete
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JohnstoresOrder;
