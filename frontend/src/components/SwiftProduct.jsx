import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const SwiftProduct = () => {
  const { productId } = useParams();
  const { swiftProducts, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const fetchProductData = async () => {
    swiftProducts.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, swiftProducts]);
  return productData ? (
    <div className="flex flex-col pl-15 pr-27.5 py-10 sm:py-20 items-start gap-15">
      {/* Back Button */}
      <div className="flex items-center justify-center gap-3.75">
        <img src="/back.svg" alt="" />
        <p className="text-[#4A5565] text-center font-clash-grotesk text-xl font-medium leading-6">
          Back to Shop
        </p>
      </div>

      {/* Product Section */}
      <div className="flex flex-col lg:flex-row items-start gap-12 self-stretch">
        {/* Product Image */}
        <img src={productData.image} alt="" className="w-full object-cover" />

        {/* Product Details */}
        <div className="flex flex-col items-start gap-6 sm:gap-11.25">
          <div className="flex flex-col items-start gap-4 sm:gap-7.5 self-stretch">
            {/* Stock Badge */}
            <div
              className={`rounded-full px-2 py-1 sm:px-3 sm:py-2 border-2 shadow-[inset_0_0_10px_0_rgba(0,0,0,0.1)] ${
                productData?.inStock
                  ? "bg-[#032817] border-[#032817]"
                  : "bg-[#FB2C36] border-[#FB2C36]"
              }`}
            >
              <p
                className={`text-white font-dm-sans-700 text-xs sm:text-sm font-semibold leading-4 tracking-[-0.5px]`}
              >
                {productData?.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>

            {/* Product Title & Description */}
            <div className="flex flex-col items-start self-stretch gap-2 sm:gap-3.75">
              <p className="text-[#2D2D2D] font-dm-sans-700 font-extrabold whitespace-nowrap text-2xl sm:text-4xl leading-11.25 tracking-[-0.5px]">
                {productData.name}
              </p>
              <p className="text-[#6A7282] font-dm-sans font-normal text-base sm:text-lg leading-6 sm:leading-8">
                {productData.description}.
              </p>
            </div>

            {/* Price */}
            <p className="text-[#006E3D] font-clash-grotesk font-medium text-xl sm:text-2xl leading-8.75">
              {currency} {productData.price}
            </p>

            {/* size Selector */}
            {productData.sizes?.length > 0 && (
              <div className="flex flex-col items-start gap-3.75">
                <p className="text-[#364153] font-dm-sans font-medium text-sm sm:text-base leading-5">
                  Sizes
                </p>

                <div className="flex gap-2.5">
                  {productData.sizes.map((item, index) => (
                    <button
                      onClick={() => setSize(item)}
                      key={index}
                      className={`flex px-3 sm:px-4.25 py-1 sm:py-2 justify-center items-center rounded-[10px]  ${
                        item === size
                          ? "border-2 border-[#00E27C] bg-[rgba(0,226,124,0.10)]"
                          : "border-2 border-[#E5E7EB] "
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* color Selector */}
            {productData.color?.length > 0 && (
              <div className="flex flex-col items-start gap-3.75">
                <p className="text-[#364153] font-dm-sans font-medium text-sm sm:text-base leading-5">
                  Color
                </p>

                <div className="flex gap-2.5">
                  {productData.color.map((item, index) => (
                    <button
                      onClick={() => setColor(item)}
                      key={index}
                      className={`flex px-3 sm:px-4.25 py-1 sm:py-2 justify-center items-center rounded-[10px]  ${
                        item === color
                          ? "border-2 border-[#00E27C] bg-[rgba(0,226,124,0.10)]"
                          : "border-2 border-[#E5E7EB] "
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex flex-col items-start gap-3.75">
              <p className="text-[#6A7282] font-dm-sans font-medium text-sm sm:text-base leading-5">
                Quantity
              </p>

              <div className="flex items-center gap-7.5 px-5 py-2 justify-center rounded-[10px] border-2 border-[#E5E7EB]">
                <img
                  onClick={handleDecrease}
                  src="/subtract.svg"
                  alt=""
                  className=" w-3 h-3 sm:w-4  sm:h-4"
                />
                <p>{quantity}</p>
                <img
                  src="/addition.svg"
                  alt=""
                  className=" w-3 h-3 sm:w-4  sm:h-4"
                  onClick={handleIncrease}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3.75 items-center self-stretch">
            <button
              onClick={() => {
                addToCart(productData._id, size, color, quantity);
                setQuantity(1);
              }}
              className="flex px-5 py-3 sm:px-15 sm:py-4 justify-center items-center 
                    rounded-[10px] border border-[rgba(3,40,23,0.25)] 
                    bg-[rgba(3,40,23,0.03)] 
                    shadow-[inset_0_0_36px_0_#EEEFF1]"
            >
              <p className="text-[#2A2A2A] text-center whitespace-nowrap font-dm-sans-500 text-[11px] sm:text-base font-medium leading-6">
                Add to Cart
              </p>
            </button>

            <button
              disabled={!productData?.inStock}
              className={`flex px-5 py-3 sm:px-15 sm:py-4 justify-center items-center rounded-[10px] ${
                productData?.inStock
                  ? "bg-[#032817] shadow-md text-white"
                  : "bg-gray-400 cursor-not-allowed text-gray-200"
              }`}
            >
              <p className="text-center font-dm-sans-500 text-[11px] whitespace-nowrap sm:text-base font-medium leading-6">
                Buy Now
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default SwiftProduct;
