import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import SwiftProductItem from "./SwiftProductItem";

const SwiftCollections = () => {
  const { swiftProducts } = useContext(ShopContext);
  console.log(swiftProducts);

  return (
    <div
      id="collections"
      className="flex w-full min-h-screen flex-col justify-center items-center px-4 sm:px-15 py-20 bg-[#FAFAFA]"
    >
      <div className="w-full flex flex-col items-center text-center mb-15 ">
        <p className="text-center flex text-[#2D2D2D] mb-2 sm:mb-2.5  font-clash-grotesk text-xl sm:text-4xl font-medium leading-6 sm:leading-12">
          Our Collections
        </p>

        <p className=" text-center text-[#6B6B6B] font-dm-sans max-w-75 sm:max-w-125  text-xs sm:text-base font-normal leading-4 sm:leading-5">
          Handpicked packages & gifts for every occasion
        </p>
      </div>

      <div className="flex flex-col sm:flex-row  w-full justify-between items-center sm:items-start self-stretch gap-10">
        {/* left side */}
        <div className="flex flex-col  items-start gap-2.5 p-3.75 rounded-2xl bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)] sm:sticky top-0 ">
          <div className="flex mb-2.5 w-full max-w-74.75  py-2.5 px-2.5 items-center gap-10">
            <div className="flex flex-col ">
              <div className="flex gap-0.5 mb-0.5">
                <img
                  className="w-1.75 h-1.75"
                  src={assets.rectangle_dot_icon}
                  alt=""
                />
                <img
                  className="w-1.75 h-1.75"
                  src={assets.rectangle_dot_icon}
                  alt=""
                />
                <img
                  className="w-1.75 h-1.75"
                  src={assets.rectangle_dot_icon}
                  alt=""
                />
              </div>
              <div className="flex gap-0.5 mb-0.5">
                <img
                  className="w-1.75 h-1.75"
                  src={assets.rectangle_dot_icon}
                  alt=""
                />
                <img
                  className="w-1.75 h-1.75"
                  src={assets.rectangle_dot_icon}
                  alt=""
                />
                <img
                  className="w-1.75 h-1.75"
                  src={assets.rectangle_dot_icon}
                  alt=""
                />
              </div>

              <div className="flex gap-0.5">
                <img
                  className="w-1.75 h-1.75"
                  src={assets.rectangle_dot_icon}
                  alt=""
                />
                <img
                  className="w-1.75 h-1.75"
                  src={assets.rectangle_dot_icon}
                  alt=""
                />
                <img
                  className="w-1.75 h-1.75"
                  src={assets.rectangle_dot_icon}
                  alt=""
                />
              </div>
            </div>

            <p className="text-[#1A1A1A] font-dm-sans-500 text-lg font-medium leading-5 tracking-[-0.5px]">
              Shop by Category
            </p>
          </div>

          <div className="flex  mb-2.5 w-full max-w-74.75  py-2.5 px-2.5 items-center gap-8.25 rounded-[10px] border border-[rgba(3,40,23,0.05)] bg-[rgba(3,40,23,0.02)]">
            <img src={assets.flower_icon} alt="" />
            <p className="text-[#1A1A1A] font-dm-sans-500 text-base font-medium leading-4.5 tracking-[-0.5px]">
              Flowers & Bouquet
            </p>
          </div>

          <div className="flex  mb-2.5 w-full max-w-74.75  py-2.5 px-2.5 items-center gap-7.75 rounded-[10px] border border-[rgba(3,40,23,0.05)] bg-[rgba(3,40,23,0.02)]">
            <img src={assets.electric_icon} alt="" />
            <p className="text-[#1A1A1A] font-dm-sans-500 text-base font-medium leading-4.5 tracking-[-0.5px]">
              Electronics
            </p>
          </div>

          <div className="flex mb-2.5 w-full max-w-74.75  py-2.5 px-2.5 items-center gap-7.75 rounded-[10px] border border-[rgba(3,40,23,0.05)] bg-[rgba(3,40,23,0.02)]">
            <img src={assets.fashion_icon} alt="" />
            <p className="text-[#1A1A1A] font-dm-sans-500 text-base font-medium leading-4.5 tracking-[-0.5px]">
              Fashion & Shoes
            </p>
          </div>

          <div className="flex mb-2.5 w-full max-w-74.75   py-2.5 px-2.5 items-center gap-7.75 rounded-[10px] border border-[rgba(3,40,23,0.05)] bg-[rgba(3,40,23,0.02)]">
            <img src={assets.gift_icon} alt="" />
            <p className="text-[#1A1A1A] font-dm-sans-500 text-base font-medium leading-4.5 tracking-[-0.5px]">
              Customized Gifts
            </p>
          </div>

          <div className="flex mb-2.5 w-full max-w-74.75   py-2.5 px-2.5 items-center gap-7.75 rounded-[10px] border border-[rgba(3,40,23,0.05)] bg-[rgba(3,40,23,0.02)]">
            <img src={assets.jewelry_icon} alt="" />
            <p className="text-[#1A1A1A] font-dm-sans-500 text-base font-medium leading-4.5 tracking-[-0.5px]">
              Jewelry & Accessories
            </p>
          </div>

          <div className="flex mb-2.5 w-full max-w-74.75   py-2.5 px-2.5 items-center gap-7.75 rounded-[10px] border border-[rgba(3,40,23,0.05)] bg-[rgba(3,40,23,0.02)]">
            <img src={assets.games_icon} alt="" />
            <p className="text-[#1A1A1A] font-dm-sans-500 text-base font-medium leading-4.5 tracking-[-0.5px]">
              Games and Toys
            </p>
          </div>

          <div className="flex mb-2.5 w-full max-w-74.75  py-2.5 px-2.5 items-center gap-7.75 rounded-[10px] border border-[rgba(3,40,23,0.05)] bg-[rgba(3,40,23,0.02)]">
            <img src={assets.sports_icon} alt="" />
            <p className="text-[#1A1A1A] font-dm-sans-500 text-base font-medium leading-4.5 tracking-[-0.5px]">
              Sports & Entertainment
            </p>
          </div>

          <div className="flex mb-2.5 w-full max-w-74.75   py-2.5 px-2.5 items-center gap-7.75 rounded-[10px] border border-[rgba(3,40,23,0.05)] bg-[rgba(3,40,23,0.02)]">
            <img src={assets.tools_icon} alt="" />
            <p className="text-[#1A1A1A] font-dm-sans-500 text-base font-medium leading-4.5 tracking-[-0.5px]">
              Tools & Home Appliances
            </p>
          </div>

          <div className="flex mb-10 w-full max-w-74.75   py-2.5 px-2.5 items-center gap-7.75 rounded-[10px] border border-[rgba(3,40,23,0.05)] bg-[rgba(3,40,23,0.02)]">
            <img src={assets.automobiles_icon} alt="" />
            <p className="text-[#1A1A1A] font-dm-sans-500 text-base font-medium leading-4.5 tracking-[-0.5px]">
              Automobiles & Motorcycles
            </p>
          </div>

          <p className="text-[#1A1A1A] mb-5 font-dm-sans-500 text-lg font-medium leading-5 tracking-[-0.5px]">
            Sort By
          </p>

          <div className="flex h-15 justify-between px-5 py-2.5 items-center gap-2.5 self-stretch rounded-[10px] border border-[rgba(3,40,23,0.35)] bg-[rgba(3,40,23,0.03)]">
            <p className="text-[#1A1A1A] font-dm-sans-500 text-lg font-medium leading-5 tracking-[-0.5px]">
              <span className="text-[#6A7282] font-dm-sans-500 text-lg font-medium leading-5 tracking-[-0.5px]">
                Price:
              </span>{" "}
              Low to High
            </p>
            <img src="/arrow-black.svg" alt="" />
          </div>
        </div>

        {/* right side */}
        <div className="flex-1 sm:overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-6 mx-auto ">
            {swiftProducts.map((item, index) => (
              <SwiftProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiftCollections;

// use for resonsivenes for fiull code
// flex w-full min-h-screen flex-col justify-center items-center px-4 sm:px-[60px] py-[80px] bg-[#FAFAFA]
