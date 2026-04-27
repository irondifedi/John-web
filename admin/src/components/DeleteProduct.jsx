import React from "react";

const DeleteProduct = ({ onClose }) => {
  return (
    <div className="flex flex-col items-start w-[390px] p-[25px] gap-2 rounded-[16px] bg-white">
      <div className="flex flex-col items-end self-stretch gap-4">
        <div className="flex flex-col items-start gap-1">
          <p className="text-[#2D2D2D] font-medium text-base leading-[18px] font-clash-grotesk">
            Delete Product
          </p>
          <p className="text-[#717182] font-normal text-sm leading-[24px] font-dm-sans">
            Are you sure you want to delete this product? This action cannot be
            undone.
          </p>
        </div>

        <div className="flex gap-1">
          <button
            onClick={onClose}
            className="flex justify-center items-center px-5 h-[45px] rounded-[12px] bg-[#ECECF0]"
          >
            <p className="text-[#0A0A0A] text-center font-medium text-sm leading-[16px] font-clash-grotesk">
              Cancel
            </p>
          </button>

          <button className="flex justify-center items-center px-5 h-[45px] rounded-[12px] bg-[#D4183D]">
            <p className="text-white text-center font-medium text-sm leading-[16px] font-clash-grotesk">
              Delete
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
