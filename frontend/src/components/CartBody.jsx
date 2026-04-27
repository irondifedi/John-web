import React from "react";

const CartBody = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#FAFAFA] px-4 sm:px-6 md:px-8 py-10 sm:py-2">
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

      <div className="flex items-start  py-15 ">
        <div className="flex flex-col items-start gap-2.5">
          <p className="text-[#2D2D2D] font-clash-grotesk text-[48px] font-medium leading-[48px]">
            Your Cart
          </p>

          <p className="text-[#4A5565]  font-dm-sans text-[16px] font-normal leading-6">
            Review your items before confirming your order on WhatsApp
          </p>
        </div>
      </div>
    </>
  );
};

export default CartBody;
