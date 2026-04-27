import React, { useState } from "react";
import { assets } from "../assets/assets";

const CartForm1 = () => {
  const [countryOpen, setCountryOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const countries = [
    "Nigeria",
    "Ghana",
    "Kenya",
    "Ghana",
    "Kenya",
    "Ghana",
    "Kenya",
    "Ghana",
    "Kenya",
  ];

  const cities = [
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "Ibadan",
    "Benin City",
    "Kano",
    "Kaduna",
    "Jos",
    "Enugu",
    "Aba",
    "Warri",
    "Owerri",
    "Calabar",
    "Onitsha",
    "Sokoto",
    "Ilorin",
    "Abeokuta",
    "Uyo",
    "Makurdi",
    "Akure",
  ];
  return (
    <div className="bg-[#FAFAFA]">
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-12 flex justify-center">
        <div className="flex flex-col xl:flex-row w-full max-w-300 gap-6 xl:gap-10">
          {/* LEFT SIDE */}
          <div className="flex flex-col flex-1 gap-7.5">
            {/* SENDER */}
            <div className="flex p-5 sm:p-7.5 flex-col gap-5 rounded-2xl bg-white shadow">
              <p className="text-[#1A1A1A] font-clash-grotesk text-lg sm:text-[22px] font-medium">
                Sender Details
              </p>

              <div className="flex flex-col gap-2">
                <label className="text-[#333] text-sm sm:text-base font-medium">
                  Full Name <span className="text-[#FB2C36]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full h-15 px-5.25 rounded-[14px] border border-[#D1D5DC]"
                  placeholder="your full name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#333] text-sm sm:text-base font-medium">
                  Phone Number <span className="text-[#FB2C36]">*</span>
                </label>
                <input
                  type="number"
                  className="w-full h-15 px-5.25 rounded-[14px] border border-[#D1D5DC]"
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#333] text-sm sm:text-base font-medium">
                  Email (Optional) <span className="text-[#FB2C36]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full h-15 px-5.25 rounded-[14px] border border-[#D1D5DC]"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* RECIPIENT */}
            <div className="flex p-5 sm:p-7.5 flex-col gap-5 rounded-2xl bg-white shadow">
              <p className="text-[#1A1A1A] font-clash-grotesk text-lg sm:text-[22px] font-medium">
                Recipient Details
              </p>

              <div className="flex flex-col gap-2">
                <label className="text-[#333] text-sm sm:text-base font-medium">
                  Recipient Full Name <span className="text-[#FB2C36]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full h-15 px-5.25 rounded-[14px] border border-[#D1D5DC]"
                  placeholder="your full name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#333] text-sm sm:text-base font-medium">
                  Recipient Phone Number{" "}
                  <span className="text-[#FB2C36]">*</span>
                </label>
                <input
                  type="number"
                  className="w-full h-15 px-5.25 rounded-[14px] border border-[#D1D5DC]"
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>

              {/* COUNTRY */}
              <div className="flex flex-col gap-2 relative w-full">
                <label className="text-[#333] text-sm sm:text-base font-medium">
                  Delivery Country <span className="text-[#FB2C36]">*</span>
                </label>

                <div
                  onClick={() => setCountryOpen(!countryOpen)}
                  className="flex w-full h-15 px-5.25 items-center justify-between rounded-[14px] border border-[#D1D5DC] bg-white cursor-pointer"
                >
                  <p className={country ? "text-black" : "text-gray-400"}>
                    {country || "Select Country"}
                  </p>
                  <img
                    src="/dropdown.svg"
                    className={`w-4 h-4 transition-transform duration-200 ${countryOpen ? "rotate-180" : ""}`}
                  />
                </div>

                {countryOpen && (
                  <div className="absolute top-full mt-2 w-full bg-white border border-[#D1D5DC] rounded-[14px] shadow-md z-50 max-h-60 overflow-y-auto">
                    {countries.map((c) => (
                      <div
                        key={c}
                        onClick={() => {
                          setCountry(c);
                          setCountryOpen(false);
                        }}
                        className="px-5.25 py-3 hover:bg-gray-100 cursor-pointer"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* CITY */}
              <div className="flex flex-col gap-2 relative w-full">
                <label className="text-[#333] text-sm sm:text-base font-medium">
                  Delivery City <span className="text-[#FB2C36]">*</span>
                </label>

                <div
                  onClick={() => setCityOpen(!cityOpen)}
                  className="flex w-full h-15 px-5.25 items-center justify-between rounded-[14px] border border-[#D1D5DC] bg-white cursor-pointer"
                >
                  <p className={city ? "text-black" : "text-gray-400"}>
                    {city || "Select City"}
                  </p>
                  <img
                    src="/dropdown.svg"
                    className={`w-4 h-4 transition-transform duration-200 ${cityOpen ? "rotate-180" : ""}`}
                  />
                </div>

                {cityOpen && (
                  <div className="absolute top-full mt-2 w-full bg-white border border-[#D1D5DC] rounded-[14px] shadow-md z-50 max-h-60 overflow-y-auto">
                    {cities.map((c) => (
                      <div
                        key={c}
                        onClick={() => {
                          setCity(c);
                          setCityOpen(false);
                        }}
                        className="px-5.25 py-3 hover:bg-gray-100 cursor-pointer"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#333] text-sm sm:text-base font-medium">
                  Full Delivery Address{" "}
                  <span className="text-[#FB2C36]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full h-22.5 px-5.25 pt-5.25 pb-12.75 rounded-[14px] border border-[#D1D5DC]"
                  placeholder="Full street address including landmarks"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#333] text-sm sm:text-base font-medium">
                  Preferred Delivery Date{" "}
                  <span className="text-[#FB2C36]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full h-15 px-5.25 rounded-[14px] border border-[#D1D5DC]"
                />
              </div>
            </div>

            {/* GIFT */}
            <div className="flex p-5 sm:p-7.5 flex-col gap-5 rounded-2xl bg-white shadow">
              <p className="text-[#1A1A1A] font-clash-grotesk text-lg sm:text-[22px] font-medium">
                Gift Personalization
              </p>

              <div className="flex flex-col gap-2">
                <label className="text-[#333] text-sm sm:text-base font-medium">
                  Gift Message
                </label>
                <input
                  type="text"
                  className="w-full h-28.75 px-5.25 pt-5.25 pb-19 rounded-[14px] border border-[#D1D5DC]"
                  placeholder="Add a personal message"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#333] text-sm sm:text-base font-medium">
                  Special Instructions (Optional)
                </label>
                <input
                  type="text"
                  className="w-full h-28.75 px-5.25 pt-5.25 pb-19 rounded-[14px] border border-[#D1D5DC]"
                  placeholder="Any instructions..."
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full xl:w-100 flex flex-col gap-6">
            <div className="p-5 sm:p-6.25 flex flex-col gap-5 rounded-[14px] border-2 border-[#F3F4F6] bg-white shadow">
              <p className="text-[#2D2D2D] font-clash-grotesk text-lg sm:text-[22px] font-medium">
                Order Summary
              </p>

              {/* ITEMS */}
              <div className="flex items-start gap-3">
                <img
                  className="w-22.5 h-16.25"
                  src={assets.stores_product1}
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[#101828] font-dm-sans-700 text-base sm:text-lg font-extrabold">
                    Rainbow Flower Bouquet
                  </p>
                  <p className="text-[#4A5565] text-sm">Qty: 2</p>
                </div>
              </div>

              {/* repeat same blocks (unchanged) */}
              <div className="flex items-start gap-3">
                <img
                  className="w-22.5 h-16.25"
                  src={assets.stores_product1}
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[#101828] font-dm-sans-700 text-base sm:text-lg font-extrabold">
                    Rainbow Flower Bouquet
                  </p>
                  <p className="text-[#4A5565] text-sm">Qty: 2</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img
                  className="w-22.5 h-16.25"
                  src={assets.stores_product1}
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[#101828] font-dm-sans-700 text-base sm:text-lg font-extrabold">
                    Rainbow Flower Bouquet
                  </p>
                  <p className="text-[#4A5565] text-sm">Qty: 2</p>
                </div>
              </div>

              <div className="flex justify-between items-center w-full">
                <p className="text-[#4A5565] opacity-50 text-sm sm:text-base">
                  Subtotal
                </p>
                <p className="text-[#006E3D] font-medium">₦235,800</p>
              </div>

              <div className="flex justify-between items-center w-full">
                <p className="text-[#4A5565] opacity-50 text-sm sm:text-base">
                  Delivery Fee
                </p>
                <p className="text-[#6A7282] text-sm sm:text-base">
                  To be confirmed
                </p>
              </div>

              <div className="flex justify-between items-center w-full">
                <p className="text-[#4A5565] text-sm sm:text-base font-medium">
                  Estimated Total
                </p>
                <p className="text-[#006E3D] font-medium">₦235,800</p>
              </div>

              <div className="flex justify-center items-center w-full h-9.75 rounded-[10px] border border-[#DCFCE7] bg-[#F0FDF4]">
                <p className="text-[#016630] text-[10px]">
                  Final confirmation and delivery fee will be provided on
                  WhatsApp.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center px-4 h-20.25 rounded-[14px] border border-[#DBEAFE] bg-[#EFF6FF]">
              <div className="flex gap-2.5 items-center">
                <img src="/info.svg" alt="" />
                <p className="text-[#1C398E] text-xs">
                  When you continue, your order details will be automatically
                  sent to WhatsApp for confirmation and payment instructions.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="flex gap-1.25 justify-center items-center w-full h-15 rounded-[14px] bg-[#00A63E] text-white">
                <img src="/whatsapp.svg" alt="" />
                Proceed to Checkout
              </button>

              <button className="w-full h-15 rounded-[14px] border bg-white">
                Continue Shopping
              </button>

              <p className="text-[#6A7282] text-center text-xs">
                No payment required at this stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartForm1;
