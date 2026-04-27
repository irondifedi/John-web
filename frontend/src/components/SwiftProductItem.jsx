import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const SwiftProductItem = ({ id, image, name, price, description }) => {
  const { currency } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); // ← add this

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleViewDetails = () => {
    navigate(`/swift-product/${id}`); // ← this now works
  };

  return (
    <div className="flex w-full pb-4 flex-col rounded-2xl bg-white shadow-lg overflow-hidden">
      <img src={image} alt="" />

      <div className="flex p-5 justify-start items-start self-stretch bg-white">
        <div className="flex w-64.75 flex-col items-start gap-6.25">
          <div className="flex w-56.75 flex-col items-start gap-5">
            <div>
              <p className="self-stretch text-[#2D2D2D] font-dm-sans-700 text-lg font-bold leading-6.25 tracking-[-0.5px]">
                {name}
              </p>
              <p className="self-stretch text-[#6A7282] font-dm-sans text-xs font-normal leading-4 sm:leading-5">
                {description}
              </p>
            </div>
            <p className="text-[#006E3D] font-clash-grotesk text-xl font-medium leading-6">
              {currency}
              {price}
            </p>
            <div className="flex gap-7.5 items-center">
              <img
                src="/subtract.svg"
                alt=""
                className="w-4 h-4 cursor-pointer"
                onClick={handleDecrease}
              />
              <p>{quantity}</p>
              <img
                src="/addition.svg"
                alt=""
                className="w-4 h-4 cursor-pointer"
                onClick={handleIncrease}
              />
            </div>
          </div>

          {/* buttons */}
          <div className="flex gap-3.75 items-center self-stretch">
            <button
              onClick={handleViewDetails}
              className="flex px-5 py-3 justify-center items-center 
                    rounded-[10px] border border-[rgba(3,40,23,0.25)] 
                    bg-[rgba(3,40,23,0.03)] 
                    shadow-[inset_0_0_36px_0_#EEEFF1]"
            >
              <p className="text-[#2A2A2A] text-center font-dm-sans-500 text-[11px] font-medium leading-6">
                View Details
              </p>
            </button>

            <button className="flex px-5 py-3 justify-center items-center rounded-[10px] bg-[#032817] shadow-md">
              <p className="text-[#FFF] text-center font-dm-sans-500 text-[11px] font-medium leading-6">
                Add to Cart
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiftProductItem;
