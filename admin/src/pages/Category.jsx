import React, { useState } from "react";
import AddCategory from "../components/AddCategory";
import DeleteCategory from "../components/DeleteCategory";
import UpdateCategory from "../components/UpdateCategory";

const Category = () => {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showDeleteCategory, setShowDeleteCategory] = useState(false);
  const [showUpdateCategory, setShowUpdateCategory] = useState(false);
  return (
    <div className="w-full flex flex-col">
      {/* header */}

      <div className="flex w-full items-center h-17 pt-5.75 pb-6.25 pl-1.25 pr-14.25 rounded-[25px] bg-[#FCFCFC]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[#2D2D2D] font-medium text-[18px] leading-4.5 tracking-[-0.2px] font-clash-grotesk">
            Categories Management
          </p>
          <img src="/noti.svg" alt="" />
        </div>
      </div>

      {/*body  */}
      <div className="flex flex-col justify-end items-center w-full pt-[25px] pb-[14px] px-[15px] gap-5 rounded-[25px] border border-[rgba(107,107,107,0.15)] bg-white">
        <div className="flex w-full justify-between items-center px-1">
          <p className="text-[#717182] font-medium text-base leading-[25px] tracking-[-0.2px] capitalize font-dm-sans-500">
            Manage Products Categories <br /> Both Brands Here
          </p>

          <button
            onClick={() => setShowAddCategory(true)}
            className="cursor-pointer"
            className="flex justify-center items-center px-6 h-[45px] gap-2 rounded-[10px] bg-[#032817]"
          >
            <img src="/addition.svg" alt="" />
            <p className="text-white text-center font-medium text-sm leading-[20px] font-dm-sans-500">
              Add Category
            </p>
          </button>
        </div>

        <div className="flex px-[15px] w-full justify-between items-center bg-white">
          <div className="flex w-full justify-between items-start">
            <div className="flex items-center w-[137px]  h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                Category Image
              </p>
            </div>

            <div className="flex items-center w-[134px] h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                Brand
              </p>
            </div>

            <div className="flex items-center w-[98px]  h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                Actions
              </p>
            </div>
          </div>
        </div>

        <div className="flex px-[15px] w-full justify-between items-center bg-white">
          <div className="flex w-full justify-between items-start">
            <div className="flex items-center w-[137px]  h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                Gadgets
              </p>
            </div>

            <div className="flex items-center w-[134px] h-[65px] px-[2px]">
              <div className="flex gap-1 items-center">
                <img src="/john-stores.svg" alt="" />

                <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                  John's Stores
                </p>
              </div>
            </div>

            <div className="flex items-center w-[98px] gap-1  h-[65px] px-[2px]">
              <div className="flex flex-col items-start w-[32px] h-[32px] pt-[8px] px-[8px] rounded-[12px] shrink-0">
                <img
                  src="/write.svg"
                  alt=""
                  onClick={() => setShowUpdateCategory(true)}
                  className="cursor-pointer"
                />
              </div>

              <div className="flex flex-col items-start w-[32px] h-[32px] pt-[8px] px-[8px] rounded-[12px] shrink-0">
                <img
                  src="/delete.svg"
                  alt=""
                  onClick={() => setShowDeleteCategory(true)}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex px-[15px] w-full justify-between items-center bg-white">
          <div className="flex w-full justify-between items-start">
            <div className="flex items-center w-[137px]  h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                Gadgets
              </p>
            </div>

            <div className="flex items-center w-[134px] h-[65px] px-[2px]">
              <div className="flex gap-1 items-center">
                <img src="/swift-log.svg" alt="" />

                <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                  Swift Logistics
                </p>
              </div>
            </div>

            <div className="flex items-center w-[98px] gap-1  h-[65px] px-[2px]">
              <div className="flex flex-col items-start w-[32px] h-[32px] pt-[8px] px-[8px] rounded-[12px] shrink-0">
                <img src="/write.svg" alt="" />
              </div>

              <div className="flex flex-col items-start w-[32px] h-[32px] pt-[8px] px-[8px] rounded-[12px] shrink-0">
                <img src="/delete.svg" alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAddCategory && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setShowAddCategory(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <AddCategory onClose={() => setShowAddCategory(false)} />
          </div>
        </div>
      )}

      {/* DELETE CATEGORY MODAL */}
      {showDeleteCategory && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setShowDeleteCategory(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <DeleteCategory onClose={() => setShowDeleteCategory(false)} />
          </div>
        </div>
      )}

      {/* UPDATE CATEGORY MODAL */}
      {showUpdateCategory && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setShowUpdateCategory(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <UpdateCategory onClose={() => setShowUpdateCategory(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
