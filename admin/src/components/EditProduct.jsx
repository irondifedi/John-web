import React from "react";
import { assets } from "../assets/assets";

const EditProduct = () => {
  return (
    <div className="w-full flex flex-col">
      {/* header */}

      <div className="flex w-full items-center h-17 pt-5.75 pb-6.25 pl-1.25 pr-14.25 rounded-[25px] bg-[#FCFCFC]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[#2D2D2D] font-medium text-[18px] leading-4.5 tracking-[-0.2px] font-clash-grotesk">
            Products Management
          </p>
          <img src="/noti.svg" alt="" />
        </div>
      </div>

      {/*body  */}
      <div className="flex flex-col justify-center items-start w-full  p-3  rounded-[25px] border border-[rgba(107,107,107,0.15)] bg-white">
        <div className="flex items-center py-[20px] gap-2">
          <div className="flex flex-col justify-center items-center w-[36px] h-[36px] rounded-[12px]">
            <img src="/left-arrow.svg" alt="" />
          </div>

          <div className="flex flex-col items-start gap-2">
            <p className="text-[#2D2D2D] font-medium text-xl leading-[18px] tracking-[-0.2px] font-clash-grotesk">
              Edit Product
            </p>
            <p className="text-[#717182] font-medium text-sm leading-[16px] tracking-[-0.2px] capitalize font-dm-sans-500">
              Edit a Product
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center w-full py-[30px] px-[30px] rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-white">
          <div className="flex flex-col w-full items-end shrink-0 gap-5">
            <div className="flex flex-col w-full items-start gap-1.5">
              <label className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                Product Name
              </label>

              <input
                type="text"
                placeholder="Enter product name"
                className="flex items-center w-full h-[60px] pt-[21px] pb-[21px] pl-[21px]  rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white placeholder:text-[rgba(45,45,45,0.50)] placeholder:font-normal placeholder:text-base placeholder:leading-[18px] font-dm-sans"
              />
            </div>

            <div className="flex flex-col w-full items-start gap-1.5">
              <p className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                Brand
              </p>

              <div className="flex justify-between w-full items-center px-[21px]  py-[19px]  rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white">
                <div className="flex gap-0.5 items-center ">
                  <img src="/john-stores.svg" alt="" />
                  <p className="text-[#2D2D2D] font-medium text-base leading-[18px] tracking-[-0.5px] font-dm-sans">
                    John’s Stores
                  </p>
                </div>

                <img src="/keyboard-arrow.svg" alt="" />
              </div>
            </div>

            <div className="flex flex-col w-full items-start gap-1.5">
              <p className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                Category
              </p>

              <div className="flex justify-between w-full items-center px-[21px]  py-[19px]  rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white">
                <p className="text-[#2D2D2D] font-medium text-base leading-[18px] tracking-[-0.5px] font-dm-sans">
                  Select Category
                </p>

                <img src="/keyboard-arrow.svg" alt="" />
              </div>
            </div>

            <div className="flex flex-col w-full items-start gap-1.5">
              <label className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                Product Description
              </label>

              <input
                type="text"
                placeholder="Enter product description..."
                className="flex items-center w-full h-[100px] pt-[21px] pb-[61px] pl-[21px]  rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white placeholder:text-[rgba(45,45,45,0.50)] placeholder:font-normal placeholder:text-base placeholder:leading-[18px] font-dm-sans"
              />
            </div>

            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex flex-col w-full items-start gap-1.5">
                <label className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                  Product Images
                </label>

                <div className="flex w-full gap-1 ">
                  <input
                    type="text"
                    placeholder="Enter image URL"
                    className="flex items-center w-full h-[60px] pt-[21px] pb-[21px] pl-[21px]  rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white placeholder:text-[rgba(45,45,45,0.50)] placeholder:font-normal placeholder:text-base placeholder:leading-[18px] font-dm-sans"
                  />

                  <img src="/add.svg" alt="" />
                </div>
              </div>

              <img src={assets.admin_img1} alt="" />
            </div>

            <div className="flex w-full items-start gap-5">
              <div className="flex flex-col w-full items-start gap-1.5">
                <label className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                  Price (₦)
                </label>

                <input
                  type="text"
                  placeholder="0"
                  className="flex items-center w-full h-[60px] pt-[21px] pb-[21px] pl-[21px]  rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white placeholder:text-[rgba(45,45,45,0.50)] placeholder:font-normal placeholder:text-base placeholder:leading-[18px] font-dm-sans"
                />
              </div>

              {/* second part */}

              <div className="flex flex-col w-full items-start gap-1.5">
                <label className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                  Stock Quantity
                </label>

                <input
                  type="text"
                  placeholder="0"
                  className="flex items-center w-full h-[60px] pt-[21px] pb-[21px] pl-[21px]  rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white placeholder:text-[rgba(45,45,45,0.50)] placeholder:font-normal placeholder:text-base placeholder:leading-[18px] font-dm-sans"
                />
              </div>
            </div>

            <div className="flex flex-col w-full gap-2">
              <div className="flex flex-col w-full items-start gap-1.5">
                <label className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                  Size Options
                </label>

                <div className="flex w-full gap-1 ">
                  <input
                    type="text"
                    placeholder="e.g., M, L, XL"
                    className="flex items-center w-full h-[60px] pt-[21px] pb-[21px] pl-[21px]  rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white placeholder:text-[rgba(45,45,45,0.50)] placeholder:font-normal placeholder:text-base placeholder:leading-[18px] font-dm-sans"
                  />

                  <img src="/add.svg" alt="" />
                </div>
              </div>

              <div className="flex w-full gap-1">
                <div className="flex justify-center items-center  h-[25px] px-[14px] py-[2px] gap-[10px] rounded-full border-[0.67px] border-[#0A0A0A] bg-white">
                  <p className="text-[#2D2D2D] font-normal text-xs leading-[14px] font-dm-sans">
                    Silver
                  </p>
                  <img src="/tiny-x.svg" alt="" />
                </div>

                <div className="flex justify-center items-center  h-[25px] px-[14px] py-[2px] gap-[10px] rounded-full border-[0.67px] border-[#0A0A0A] bg-white">
                  <p className="text-[#2D2D2D] font-normal text-xs leading-[14px] font-dm-sans">
                    Gray
                  </p>
                  <img src="/tiny-x.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="flex w-full items-center gap-2">
              <div className="flex justify-center items-center w-[20px] h-[20px] aspect-square rounded-[4px] border border-[rgba(3,40,23,0.35)] bg-[rgba(3,40,23,0.15)]"></div>

              <p className="text-[#2D2D2D] font-semibold text-base leading-[18px] font-dm-sans-700">
                Mark as Featured Product
              </p>
            </div>

            <div className="w-full h-[1px] bg-[#D1D5DC] mt-4"></div>

            <div className="flex gap-1 ">
              <button className="flex flex-col justify-center items-center px-[20px] h-[60px] rounded-[14px] bg-[#ECECF0]">
                <p className="text-black font-medium text-base leading-[18px] font-clash-grotesk">
                  Cancel
                </p>
              </button>

              <button className="flex flex-col justify-center items-center px-[20px] h-[60px] gap-[10px] rounded-[12px] border border-white bg-[#16CB5E]">
                <p className="text-white font-medium text-base leading-[18px] font-clash-grotesk">
                  Update Product
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
