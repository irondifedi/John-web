import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Cart = () => {
  const { swiftProducts, currency, cartItems } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const variantKey in cartItems[items]) {
        const quantity = cartItems[items][variantKey];

        if (quantity > 0) {
          let size = null;
          let color = null;

          // 🔥 Case 1: product has both size & color
          if (variantKey.includes("-")) {
            const [s, c] = variantKey.split("-");
            size = s || null;
            color = c || null;
          }

          // 🔥 Case 2: product has ONLY size OR ONLY color OR default
          else if (variantKey !== "default") {
            // We don't assume — we just store it
            size = variantKey;
          }

          // 🔥 Case 3: "default" → no size, no color
          // (size and color remain null)

          tempData.push({
            _id: items,
            size,
            color,
            quantity,
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col justify-center items-center  px-4 sm:px-6 md:px-8 py-10 sm:py-15">
        <div className="relative w-full">
          {/* image */}
          <img
            src={assets.easy_footer}
            alt=""
            className="w-137.75 sm:w-full  h-50 sm:h-auto"
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(84deg,#000_13.37%,rgba(16,204,117,0.35)_95.04%)]"></div>

          {/* text */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 max-w-125 text-left">
            <p className="text-white font-clash-grotesk text-[30px] sm:text-5xl font-medium leading-10 sm:leading-15 drop-shadow-[5px_5px_65px_rgba(0,0,0,0.25)]">
              Send Packages & Gifts Anywhere in the World
            </p>

            <p className="text-white/70 font-dm-sans text-sm sm:text-xl font-normal leading-3 sm:leading-6.25 mt-4">
              Share a few details and we'll handle the rest
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 py-8 sm:py-15 flex flex-col items-start gap-6">
        {/* Text section */}
        <div className="flex flex-col items-start gap-2.5">
          <p className="text-[#2D2D2D] font-clash-grotesk text-2xl sm:text-4xl font-medium leading-7 sm:leading-12">
            Your Cart
          </p>
          <p className="text-[#4A5565] font-dm-sans text-xs sm:text-sm font-normal leading-4 sm:leading-6">
            Review your items before confirming your order on WhatsApp
          </p>
        </div>

        {/* Product card + summary */}
        <div className="flex flex-col xl:flex-row justify-between items-start self-stretch gap-6 xl:gap-0">
          {/* Product info */}
          <div className="flex flex-row flex-nowrap items-start gap-2.5 p-[17px_16px] rounded-[14px] border border-[#F3F4F6] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] w-full xl:w-auto">
            {/* Product image */}
            <img
              src={assets.stores_product3}
              alt=""
              className="w-25 sm:w-36.5 h-22.5 sm:h-32.5 shrink-0 mb-0 mr-3.75 sm:mr-6.25"
            />

            {/* Middle section */}
            <div className="flex-1 mr-3.75 sm:mr-25">
              <p className="text-[#2D2D2D] mb-1 sm:mb-2 font-dm-sans-500 text-base sm:text-xl font-semibold leading-5.5 sm:leading-6.25 tracking-[-0.5px]">
                Rainbow Flower Bouqet
              </p>
              <p className="text-[#6A7282] font-dm-sans mb-2 sm:mb-13 text-xs font-normal leading-4">
                Rose Flower
              </p>

              <div className="flex w-22.5 sm:w-27.75 h-6.25 sm:h-7.25 gap-5 sm:gap-7.5 justify-center items-center rounded-[10px] border border-[#E5E7EB]">
                <img
                  src="/addition.svg"
                  alt=""
                  className="w-2 h-2 sm:w-auto sm:h-auto"
                />
                <p className="text-xs sm:text-base">1</p>
                <img
                  src="/subtract.svg"
                  alt=""
                  className="w-2 h-2 sm:w-auto sm:h-auto"
                />
              </div>
            </div>

            {/* End section */}
            <div className="flex flex-col items-end gap-10 sm:gap-17.75 w-20 sm:w-29.25">
              <img
                src="/cancel.svg"
                alt=""
                className="w-3 h-3 sm:w-auto sm:h-auto"
              />
              <div className="flex flex-col items-end self-stretch gap-1 sm:gap-2">
                <p className="text-[#2A2A2A] text-right font-clash-grotesk text-[10px] sm:text-[14px] font-medium leading-3 sm:leading-3.5 tracking-[-0.5px]">
                  15,000 each
                </p>
                <p className="text-[#006E3D] text-right font-clash-grotesk text-base sm:text-lg sm:text-[25px] font-medium leading-5 sm:leading-6.25">
                  ₦30,000
                </p>
              </div>
            </div>
          </div>

          {/* Right-side payment summary */}
          <div className="flex w-full xl:w-115 flex-col items-start gap-6.25">
            <div className="flex flex-col items-start gap-2.5 p-6 self-stretch rounded-[14px] border-2 border-[#F3F4F6] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
              <p className="text-[#2D2D2D] font-clash-grotesk text-lg sm:text-xl font-medium leading-6.25">
                Order Summary
              </p>

              <div className="flex justify-between items-center w-full">
                <p className="text-[#4A5565] font-dm-sans text-sm sm:text-base font-normal leading-5 tracking-[-0.5px] opacity-50">
                  Subtotal
                </p>
                <p className="text-[#006E3D] text-right font-clash-grotesk text-base sm:text-lg font-medium leading-6.25">
                  ₦235,800
                </p>
              </div>

              <div className="flex justify-between items-center w-full">
                <p className="text-[#4A5565] font-dm-sans text-sm sm:text-base font-normal leading-5 tracking-[-0.5px] opacity-50">
                  Delivery Fee
                </p>
                <p className="text-[#6A7282] text-right font-clash-grotesk text-sm sm:text-base font-normal leading-6.25">
                  To be confirmed
                </p>
              </div>

              <div className="flex justify-between items-center w-full">
                <p className="text-[#4A5565] font-dm-sans text-sm sm:text-base font-medium leading-5 tracking-[-0.5px]">
                  Estimated Total
                </p>
                <p className="text-[#006E3D] text-right font-clash-grotesk text-base sm:text-lg font-medium leading-6.25">
                  ₦235,800
                </p>
              </div>

              <div className="w-full px-6 py-3.75 flex flex-col justify-center items-center rounded-[10px] border border-[#DCFCE7] bg-[#F0FDF4]">
                <p className="text-[#016630] font-dm-sans text-[8px] sm:text-[10px] font-normal leading-2 sm:leading-3 text-center w-full">
                  Final confirmation and delivery fee will be provided on
                  WhatsApp.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center self-stretch py-5 px-6 rounded-[14px] border border-[#DBEAFE] bg-[#EFF6FF]">
              <div className="flex justify-center items-center gap-2.5">
                <img src="/info.svg" alt="" />
                <p className="text-[#1C398E] font-dm-sans text-[10px] sm:text-[13px] font-normal leading-5.5 text-center">
                  When you continue, your order details will be automatically
                  sent to WhatsApp for confirmation and payment instructions.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-3.25 self-stretch">
              <button className="flex flex-col justify-center items-center self-stretch py-7.5 px-4 sm:px-38 rounded-[14px] bg-[#00A63E]">
                <p className="text-white font-clash-grotesk text-sm sm:text-base font-medium leading-4.5">
                  Proceed to Checkout
                </p>
              </button>

              <button className="flex flex-col justify-center items-center self-stretch py-7.5 px-4 sm:px-38 rounded-[14px] border-2 border-[rgba(88,87,87,0.15)] bg-white">
                <p className="text-[#585757] font-clash-grotesk text-sm sm:text-base font-medium leading-4.5">
                  Continue Shopping
                </p>
              </button>

              <p className="text-[#6A7282] text-center font-dm-sans text-[12px] font-normal leading-3.5">
                No payment required at this stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
