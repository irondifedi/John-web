import React, { useState } from "react";
import { assets } from "../assets/assets";
import DeleteProduct from "../components/DeleteProduct";

const Products = () => {
  const [showDelete, setShowDelete] = useState(false);
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
      <div className="flex flex-col justify-end items-center w-full pt-[25px] pb-[14px] px-[15px] gap-5 rounded-[25px] border border-[rgba(107,107,107,0.15)] bg-white">
        <div className="flex w-full justify-between items-center px-1">
          <p className="text-[#717182] font-medium text-base leading-[25px] tracking-[-0.2px] capitalize font-dm-sans-500">
            Manage Products For <br /> Both Brands Here
          </p>

          <div className="flex justify-center items-center w-[178px] h-[45px] gap-[3px] rounded-[10px] bg-[#032817]">
            <img src="/addition.svg" alt="" />
            <p className="text-white text-center font-medium text-sm leading-[20px] font-dm-sans-500">
              Add New Product
            </p>
          </div>
        </div>

        <div className="flex flex-col px-1 items-center justify-end bg-white">
          <div className="flex items-start gap-[24px]">
            <div className="flex items-center w-[97px] h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                Product image
              </p>
            </div>

            <div className="flex items-center w-[137px] h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                Product Name
              </p>
            </div>

            <div className="flex items-center w-[104px] h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                Brand
              </p>
            </div>

            <div className="flex items-center w-[104px] h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                Category
              </p>
            </div>

            <div className="flex items-center w-[74px] h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                Price
              </p>
            </div>

            <div className="flex items-center w-[74px] h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                Stock
              </p>
            </div>

            <div className="flex items-center w-[98px] h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                Status
              </p>
            </div>

            <div className="flex items-center w-[98px] h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                Actions
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="flex items-start gap-[24px] border-b border-[#D1D5DC] pb-3">
              <div className="flex items-center w-[97px] h-[65px] px-[2px]">
                <img src={assets.admin_img1} alt="" />
              </div>

              <div className="flex items-center w-[137px] h-[65px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  Premium Rose Bouquet
                </p>
              </div>

              <div className="flex items-center w-[104px] h-[65px] px-[2px]">
                <div className="flex items-center gap-1">
                  <img src="/swift-log.svg" alt="" />
                  <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                    Swift Logistics
                  </p>
                </div>
              </div>

              <div className="flex items-center w-[104px] h-[65px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  Flowers
                </p>
              </div>

              <div className="flex items-center w-[74px] h-[65px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  ₦4,999
                </p>
              </div>

              <div className="flex items-center w-[74px] h-[65px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  35
                </p>
              </div>

              <div className="flex items-center w-[98px] h-[65px] px-[2px]">
                <div className="flex justify-center items-center px-[8px] h-[24px] shrink-0 rounded-[4px] bg-[#DCFCE7]">
                  <p className="text-[#008236] font-medium text-xs leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                    In Stock
                  </p>
                </div>
              </div>

              <div className="flex items-center w-[98px] h-[65px] px-[2px]">
                <div className="flex items-center w-[72.021px] h-[32px] gap-[8px] shrink-0">
                  <div className="flex flex-col items-start w-[32px] h-[32px] pt-[8px] px-[8px] rounded-[12px] shrink-0">
                    <img src="/write.svg" alt="" />
                  </div>

                  <div className="flex flex-col items-start w-[32px] h-[32px] pt-[8px] px-[8px] rounded-[12px] shrink-0">
                    <img
                      src="/delete.svg"
                      alt=""
                      onClick={() => setShowDelete(true)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-[24px] border-b border-[#D1D5DC] pb-3">
              <div className="flex items-center w-[97px] h-[65px] px-[2px]">
                <img src={assets.admin_img2} alt="" />
              </div>

              <div className="flex items-center w-[137px] h-[65px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  Running Shoes Elite
                </p>
              </div>

              <div className="flex items-center w-[104px] h-[65px] px-[2px]">
                <div className="flex items-center gap-1">
                  <img src="/john-stores.svg" alt="" />
                  <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                    John'Stores
                  </p>
                </div>
              </div>

              <div className="flex items-center w-[104px] h-[65px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  Shoes
                </p>
              </div>

              <div className="flex items-center w-[74px] h-[65px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  ₦4,999
                </p>
              </div>

              <div className="flex items-center w-[74px] h-[65px] px-[2px]">
                <p className="text-[#717182] font-medium text-xs leading-[14px] font-clash-grotesk">
                  35
                </p>
              </div>

              <div className="flex items-center w-[98px] h-[65px] px-[2px]">
                <div className="flex justify-center items-center px-[8px] h-[24px] shrink-0 rounded-[4px] bg-[#FFE2E2]">
                  <p className="text-[#C10007] font-medium text-xs leading-[14px] tracking-[-0.5px] font-dm-sans-500">
                    Out of Stock
                  </p>
                </div>
              </div>

              <div className="flex items-center w-[98px] h-[65px] px-[2px]">
                <div className="flex items-center w-[72.021px] h-[32px] gap-[8px] shrink-0">
                  <div className="flex flex-col items-start w-[32px] h-[32px] pt-[8px] px-[8px] rounded-[12px] shrink-0">
                    <img src="/write.svg" alt="" />
                  </div>

                  <div className="flex flex-col items-start w-[32px] h-[32px] pt-[8px] px-[8px] rounded-[12px] shrink-0">
                    <img src="/delete.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div onClick={(e) => e.stopPropagation()}>
            <DeleteProduct onClose={() => setShowDelete(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
