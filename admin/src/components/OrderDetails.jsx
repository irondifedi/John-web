import React, { useState } from "react";

const OrderDetails = ({ onClose }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Pending");

  const handleSelect = (value) => {
    setStatus(value);
    setOpen(false);
  };

  return (
    <div className="flex flex-col  w-[572px] pb-[10px] gap-[10px] rounded-[16px] bg-white">
      <div className="flex items-center h-[40px] px-[25px] border-b border-[rgba(113,113,130,0.35)]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[#2D2D2D] font-medium text-base leading-[14px] font-clash-grotesk">
            Order Details - JS-2026-021
          </p>

          <img
            src="/cancel.svg"
            alt=""
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="px-[25px] flex flex-col items-start gap-[10px]">
        {/* <div className="p-[16px] bg-[#F9F9FB flex items-center self-stretch] ">
          <div className="text-[#2D2D2D] flex flex-col gap-2 font-normal text-[10px] leading-[20px] tracking-[-0.3px] font-dm-sans">
            <p>🎁 Gift Order from Swift Logistics</p>

            <div>
              <p>Sender: Junior Ikenna</p>
              <p>Phone: +234 802 345 6789</p>
            </div>
            <div>
              <p>Recipient: Laurence Peter</p>
              <p>Phone: +234 803 456 7890</p>
            </div>
            <div>
              <p>Items</p>
              <ul>
                <li>Premium Rose Bouquet (Red, Medium) x1 - ₦4,999</li>
                <li>Chocolate Gift Box (Large) x1 - ₦3,999</li>
              </ul>
            </div>

            <div>
              <p>Subtotal: ₦10,000</p>
              <p>Delivery: ₦2,000</p>
              <p>Total: ₦12,000</p>
            </div>
          </div>
        </div> */}

        <div className="flex justify-between w-[276px] items-center">
          <div className="flex flex-col item-start gap-1">
            <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
              Customer
            </p>
            <p className="text-[#2D2D2D] font-semibold text-sm leading-[16px] tracking-[-0.3px] font-dm-sans-700">
              Junior Ikenna
            </p>
            <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
              +234 802 345 6789
            </p>
          </div>

          <div className="flex flex-col item-start gap-1">
            <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
              Recipient
            </p>
            <p className="text-[#2D2D2D] font-semibold text-sm leading-[16px] tracking-[-0.3px] font-dm-sans-700">
              Junior Ikenna
            </p>
            <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
              +234 802 345 6789
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="flex items-center self-stretch p-[16px] ">
              <div className="flex items-center w-full justify-between">
                <div className="flex flex-col items-start self-stretch gap-1">
                  <p className="text-[#2D2D2D] font-semibold text-sm leading-[16px] tracking-[-0.3px] font-dm-sans-700">
                    Premium Rose Bouquet (Red, Medium)
                  </p>
                  <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                    Qty: 1
                  </p>
                </div>
                <p className="text-[#E3494E] font-medium text-[22px] leading-[25px]  font-clash-grotesk">
                  ₦4,999
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="flex items-center self-stretch p-[16px] ">
              <div className="flex items-center w-full justify-between">
                <div className="flex flex-col items-start self-stretch gap-1">
                  <p className="text-[#2D2D2D] font-semibold text-sm leading-[16px] tracking-[-0.3px] font-dm-sans-700">
                    Premium Rose Bouquet (Red, Medium)
                  </p>
                  <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                    Qty: 1
                  </p>
                </div>
                <p className="text-[#E3494E] font-medium text-[22px] leading-[25px]  font-clash-grotesk">
                  ₦4,999
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-start gap-[30px]">
          <div className="flex items-center w-full justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-[rgba(113,113,130,0.70)] font-medium text-xs leading-[14px] font-clash-grotesk ">
                Subtotal
              </p>
              <p className="text-[rgba(113,113,130,0.70)] font-medium text-xs leading-[14px] font-clash-grotesk ">
                Delivery Fee
              </p>
              <p className="text-[#2D2D2D] font-semibold text-base leading-[18px] tracking-[-0.3px] font-dm-sans-700">
                Total
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[#2D2D2D] font-medium text-xs leading-[14px] font-clash-grotesk ">
                ₦10,000
              </p>
              <p className="text-[#2D2D2D] font-medium text-xs leading-[14px] font-clash-grotesk ">
                ₦2,000
              </p>
              <p className="text-[#2D2D2D] font-semibold text-base leading-[18px] tracking-[-0.3px] font-dm-sans-700">
                ₦12,000
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2">
          <p className="text-[#2D2D2D] font-semibold text-[16px] leading-[16px] tracking-[-0.3px] font-dm-sans-700">
            Payment Confirmation
          </p>

          <div className="flex gap-1">
            <button className="flex flex-col justify-center items-center w-[85px] h-[45px] rounded-[14px] bg-[#ECECF0]">
              <p className="text-black font-medium text-base leading-[18px] font-clash-grotesk">
                Paid
              </p>
            </button>

            <button className="flex flex-col justify-center items-center w-[100px] h-[45px]  rounded-[12px] border border-white bg-[#16CB5E]">
              <p className="text-white font-medium text-base leading-[18px] font-clash-grotesk">
                Pending
              </p>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2">
          <p className="text-[#2D2D2D] font-semibold text-[16px] leading-[16px] tracking-[-0.3px] font-dm-sans-700">
            Update Order Status
          </p>

          <div className="relative w-[522px]">
            {/* Select box */}
            <div className="flex justify-between items-center p-[16px] rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white">
              <p className="text-black font-medium text-base leading-[18px] font-dm-sans-500">
                {status}
              </p>

              <img
                src="/keyboard-arrow.svg"
                alt=""
                onClick={() => setOpen(!open)}
                className={`cursor-pointer transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute bottom-full mb-2  w-full rounded-[10px] bg-white shadow-md border">
                <p
                  onClick={() => handleSelect("Pending")}
                  className="p-3 cursor-pointer hover:bg-gray-100 rounded-[14px]"
                >
                  Pending
                </p>
                <p
                  onClick={() => handleSelect("Paid")}
                  className="p-3 cursor-pointer hover:bg-gray-100 rounded-[14px]"
                >
                  Paid
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
