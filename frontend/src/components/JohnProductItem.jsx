import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const JohnProductItem = ({ id, name, price, image, reviews }) => {
  const { currency } = useContext(ShopContext);
  return (
    <div className="flex w-full pb-4 flex-col  rounded-2xl bg-white shadow-lg overflow-hidden">
      <img src={image} alt="" />

      <div className="px-4 py-4">
        <p className="text-[#2D2D2D] font-dm-sans-700 text-xl  mb-2.5 font-extrabold leading-6.25">
          {name}
        </p>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-end gap-1.25">
            <p className="text-[#E3494E] font-clash-grotesk text-base sm:text-lg   font-medium leading-6">
              {currency}
              {price.current.toLocaleString()}
            </p>
            <p className="text-[#2A2A2A]  font-clash-grotesk text-[8px] font-medium leading-4.75 line-through opacity-50">
              {currency}
              {price.old.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-1 ">
            <img src={assets.star_icon} alt="" />
            <p className="text-[#2A2A2A] font-clash-grotesk text-[8px]    font-medium  opacity-50">
              {reviews.rating} {reviews.count}k Reviews
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap px-2">
        <button className=" inline-flex px-4 sm:px-6 py-2    justify-center items-center rounded-[10px] border border-[rgba(227,73,78,0.25)] bg-[rgba(227,73,78,0.03)] shadow-[inset_0_0_36px_0_#EEEFF1]">
          <p className="font-dm-sans-500 text-black text-xs font-medium leading-6 text-center">
            Add To Cart
          </p>
        </button>

        <button className=" inline-flex px-7 sm:px-9 py-2    justify-center items-center rounded-[10px] border border-[rgba(227,73,78,0.25)] bg-[#E3494E] shadow-md">
          <p className="font-dm-sans-500 text-black text-xs font-medium leading-6 text-center">
            Buy Now
          </p>
        </button>
      </div>
    </div>
  );
};

export default JohnProductItem;
