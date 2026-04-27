import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import JohnProductItem from "./JohnProductItem";

const JohnCategory = () => {
  const { johnStoresProducts } = useContext(ShopContext);
  console.log(johnStoresProducts);

  return (
    <div className="flex w-full min-h-screen flex-col justify-center items-center  px-4 sm:px-6 md:px-8 py-10 sm:py-20 bg-[#FFF]">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-20 mb-16 w-full justify-items-center">
        {/* Customers */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center">
            <img
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white"
              src={assets.stores_hero_icon1}
              alt=""
            />
            <img
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white -ml-4"
              src={assets.stores_hero_icon2}
              alt=""
            />
            <img
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white -ml-4"
              src={assets.stores_hero_icon3}
              alt=""
            />
            <img
              className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border-2 border-white -ml-4"
              src={assets.stores_hero_icon4}
              alt=""
            />
          </div>

          <div className="flex flex-col gap-1  items-start">
            <p className="text-[#2D2D2D] font-clash-grotesk text-base sm:text-lg font-medium leading-5 sm:leading-6 [text-shadow:5px_5px_65px_rgba(0,0,0,0.25)]">
              2k
            </p>
            <p className="text-[rgba(45,45,45,0.7)] font-dm-sans-500 text-[10px] sm:text-xs font-medium leading-4 sm:leading-5 [text-shadow:5px_5px_65px_rgba(0,0,0,0.25)]">
              Customers
            </p>
          </div>
        </div>

        {/* Secured Shipping */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="shrink-0">
            <img className="w-9 sm:w-11 h-9 sm:h-11" src="/secure.svg" alt="" />
          </div>
          <div className="flex flex-col gap-1  items-start">
            <p className="text-[#2D2D2D] font-clash-grotesk text-base sm:text-lg font-medium whitespace-nowrap leading-5 [text-shadow:5px_5px_65px_rgba(0,0,0,0.25)]">
              Secured Shipping
            </p>
            <p className="text-[rgba(45,45,45,0.7)] font-dm-sans-500 text-[10px] sm:text-xs font-medium leading-4 [text-shadow:5px_5px_65px_rgba(0,0,0,0.25)]">
              Trusted and Guaranteed
            </p>
          </div>
        </div>

        {/* Fast Delivery */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="shrink-0">
            <img
              className="w-9 sm:w-11 h-9 sm:h-11"
              src="/flexible.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1  items-start">
            <p className="text-[#2D2D2D] font-clash-grotesk text-base sm:text-lg font-medium whitespace-nowrap leading-5 [text-shadow:5px_5px_65px_rgba(0,0,0,0.25)]">
              Flexible Payment
            </p>
            <p className="text-[rgba(45,45,45,0.7)] font-dm-sans-500 text-[10px] sm:text-xs font-medium leading-4 [text-shadow:5px_5px_65px_rgba(0,0,0,0.25)]">
              Multiple secure payment
            </p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="shrink-0">
            <img
              className="w-9 sm:w-11 h-9 sm:h-11"
              src="/trusted.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1  items-start">
            <p className="text-[#2D2D2D] font-clash-grotesk text-base sm:text-lg font-medium whitespace-nowrap leading-5 [text-shadow:5px_5px_65px_rgba(0,0,0,0.25)]">
              Trusted
            </p>
            <p className="text-[rgba(45,45,45,0.7)] font-dm-sans-500 text-[10px] sm:text-xs font-medium leading-4 [text-shadow:5px_5px_65px_rgba(0,0,0,0.25)]">
              100% Authentic Products
            </p>
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="w-full flex flex-col items-center text-center mb-10 sm:mb-15 px-4 sm:px-0">
        <p className="text-[#2D2D2D] mb-1 sm:mb-2.5 font-clash-grotesk text-2xl sm:text-4xl font-medium leading-7 sm:leading-12">
          Shop by Category
        </p>

        <p className="text-[#6B6B6B] mb-10 font-dm-sans max-w-62.5 sm:max-w-125 text-xs sm:text-base font-normal leading-4 sm:leading-5">
          Browse our extensive collection of premium products
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-6.25">
          <button className=" inline-flex px-4 sm:px-6 py-2    justify-center items-center rounded-[10px]  bg-[#FAFAFA]">
            <p className="font-dm-sans-500 text-black text-xs font-medium leading-6 text-center">
              All
            </p>
          </button>

          <button className=" inline-flex px-4 sm:px-6 py-2    justify-center items-center rounded-[10px]  bg-[#FAFAFA]">
            <p className="font-dm-sans-500 text-black text-xs font-medium leading-6 text-center">
              Smartphones
            </p>
          </button>

          <button className=" inline-flex px-4 sm:px-6 py-2    justify-center items-center rounded-[10px]  bg-[#FAFAFA]">
            <p className="font-dm-sans-500 text-black text-xs font-medium leading-6 text-center">
              Audio
            </p>
          </button>

          <button className=" inline-flex px-4 sm:px-6 py-2    justify-center items-center rounded-[10px]  bg-[#FAFAFA]">
            <p className="font-dm-sans-500 text-black text-xs font-medium leading-6 text-center">
              Laptops
            </p>
          </button>

          <button className=" inline-flex px-4 sm:px-6 py-2    justify-center items-center rounded-[10px]  bg-[#FAFAFA]">
            <p className="font-dm-sans-500 text-black text-xs font-medium leading-6 text-center">
              Accessories
            </p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mx-auto mb-9 sm:mb-17.5 ">
        {johnStoresProducts.map((item, index) => (
          <JohnProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            reviews={item.reviews}
          />
        ))}
      </div>

      <div>
        <button className=" inline-flex px-6.5 sm:px-7.75 py-4    justify-center items-center rounded-[14px] border border-[rgba(227,73,78,0.25)] bg-[#E3494E] shadow-md">
          <p className="font-clash-grotesk text-[#FFF] text-xs font-medium leading-6 text-center">
            Load More Products
          </p>
        </button>
      </div>
    </div>
  );
};

export default JohnCategory;
