import React, { useRef } from "react";
import { assets } from "../assets/assets";

const JohnTrusted = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#FAFAFA] px-4 sm:px-6 md:px-8 py-10 sm:py-20">
      {/* Heading */}
      <div className="w-full max-w-300 flex flex-col items-center text-center mb-10">
        <p className="text-center flex text-[#2D2D2D] mb-2 sm:mb-2.5  font-clash-grotesk text-xl sm:text-4xl font-medium leading-6 sm:leading-12">
          Trusted by Customers Worldwide
        </p>
        <p className="text-center text-[#6B6B6B] font-dm-sans max-w-75 sm:max-w-125  text-xs sm:text-base font-normal leading-4 sm:leading-5">
          Real experiences from people like you
        </p>
      </div>

      {/* Scrollable cards */}
      <div className="w-full max-w-300">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-4 snap-x snap-mandatory"
        >
          <div className="shrink-0 w-[90%] sm:w-90.25 lg:w-100 aspect-361/264 bg-[url('/card-shape.svg')] bg-contain bg-no-repeat bg-center p-5 flex flex-col justify-between snap-start">
            <h3 className="mb-2.5 sm:mb-5 text-[#2D2D2D] font-dm-sans-500 pt-8.75 md:pt-5 lg:pt-12.5 text-[10px] sm:text-sm font-medium leading-3.75 sm:leading-5">
              I needed to send a gift to a family member abroad and expected
              delays or complications, but Swift Logistics handled everything
              professionally. From clear communication to proper tracking
              updates, I always knew where my package was. It arrived safely and
              on time, which gave me a lot of confidence in the service. I’ll
              definitely be using them again.
            </h3>

            <img
              className="mb-14 md:mb-8  lg:mb-12 w-13 h-3 md:w-14 md:h-4 lg:w-15 lg:h-4"
              src={assets.star_icon1}
              alt=""
            />
            <div className="w-full flex justify-between items-center pl-5 sm:pl-[42.5px] pr-1.5 sm:pr-[14.5px]">
              <div className="flex items-center gap-2.5">
                <img className="pr-2" src={assets.ellipse} alt="" />

                <div>
                  <p className="text-[#2D2D2D] font-dm-sans text-xs sm:text-sm font-bold leading-4">
                    Micah Davidsons
                  </p>
                  <p className="text-[#6B6B6B] font-dm-sans text-[10px] sm:text-xs font-normal leading-3">
                    United States
                  </p>
                </div>
              </div>

              <img src={assets.us_icon} alt="" />
            </div>
          </div>

          <div className="shrink-0 w-[90%] sm:w-90.25 lg:w-100 aspect-361/264 bg-[url('/card-shape.svg')] bg-contain bg-no-repeat bg-center p-5 flex flex-col justify-between snap-start">
            <h3 className="mb-2.5 sm:mb-5 text-[#2D2D2D] font-dm-sans-500 pt-8.75 md:pt-5 lg:pt-12.5 text-[10px] sm:text-sm font-medium leading-3.75 sm:leading-5">
              John Stores exceeded my expectations. I ordered a gadget and was
              impressed by the product quality and how accurately it matched the
              description online. Delivery was prompt, and everything was
              well-packaged. It’s reassuring to shop from a store that values
              quality and customer satisfaction. I’ll be recommending John
              Stores to friends and family.
            </h3>

            <img
              className="mb-14 md:mb-8  lg:mb-12 w-13 h-3 md:w-14 md:h-4 lg:w-15 lg:h-4"
              src={assets.star_icon1}
              alt=""
            />
            <div className="w-full flex justify-between items-center pl-5 sm:pl-[42.5px] pr-1.5 sm:pr-[14.5px]">
              <div className="flex items-center gap-2.5">
                <img className="pr-2" src={assets.ellipse_1} alt="" />

                <div>
                  <p className="text-[#2D2D2D] font-dm-sans text-xs sm:text-sm font-bold leading-4">
                    Ikenna Ejiofor
                  </p>
                  <p className="text-[#6B6B6B] font-dm-sans text-[10px] sm:text-xs font-normal leading-3">
                    Nigeria
                  </p>
                </div>
              </div>

              <img src={assets.naija_icon} alt="" />
            </div>
          </div>

          <div className="shrink-0 w-[90%] sm:w-90.25 lg:w-100 aspect-361/264 bg-[url('/card-shape.svg')] bg-contain bg-no-repeat bg-center p-5 flex flex-col justify-between snap-start">
            <h3 className="mb-2.5 sm:mb-5 text-[#2D2D2D] font-dm-sans-500 pt-8.75 md:pt-5 lg:pt-12.5 text-[10px] sm:text-sm font-medium leading-3.75 sm:leading-5">
              Swift Logistics made international delivery feel simple. I’ve used
              other services before and they were always stressful, but this
              experience was different. The process was clear, the team was
              responsive, and my package arrived in perfect condition. It’s
              refreshing to find a logistics company that actually delivers on
              its promises.
            </h3>

            <img
              className="mb-14 md:mb-8  lg:mb-12 w-13 h-3 md:w-14 md:h-4 lg:w-15 lg:h-4"
              src={assets.star_icon1}
              alt=""
            />
            <div className="w-full flex justify-between items-center pl-5 sm:pl-[42.5px] pr-1.5 sm:pr-[14.5px]">
              <div className="flex items-center gap-2.5">
                <img className="pr-2" src={assets.ellipse_2} alt="" />

                <div>
                  <p className="text-[#2D2D2D] font-dm-sans text-xs sm:text-sm font-bold leading-4">
                    Fred Johnson
                  </p>
                  <p className="text-[#6B6B6B] font-dm-sans text-[10px] sm:text-xs font-normal leading-3">
                    United Kingdom
                  </p>
                </div>
              </div>

              <img src={assets.uk_icon} alt="" />
            </div>
          </div>

          <div className="shrink-0 w-[90%] sm:w-90.25 lg:w-100 aspect-361/264 bg-[url('/card-shape.svg')] bg-contain bg-no-repeat bg-center p-5 flex flex-col justify-between snap-start">
            <h3 className="mb-2.5 sm:mb-5 text-[#2D2D2D] font-dm-sans-500 pt-8.75 md:pt-5 lg:pt-12.5 text-[10px] sm:text-sm font-medium leading-3.75 sm:leading-5">
              I needed to send a gift to a family member abroad and expected
              delays or complications, but Swift Logistics handled everything
              professionally. From clear communication to proper tracking
              updates, I always knew where my package was. It arrived safely and
              on time, which gave me a lot of confidence in the service. I’ll
              definitely be using them again
            </h3>

            <img
              className="mb-14 md:mb-8  lg:mb-12 w-13 h-3 md:w-14 md:h-4 lg:w-15 lg:h-4"
              src={assets.star_icon1}
              alt=""
            />
            <div className="w-full flex justify-between items-center pl-5 sm:pl-[42.5px] pr-1.5 sm:pr-[14.5px]">
              <div className="flex items-center gap-2.5">
                <img className="pr-2" src={assets.ellipse_3} alt="" />

                <div>
                  <p className="text-[#2D2D2D] font-dm-sans text-xs sm:text-sm font-bold leading-4">
                    Micah Davidsons
                  </p>
                  <p className="text-[#6B6B6B] font-dm-sans text-[10px] sm:text-xs font-normal leading-3">
                    Canada
                  </p>
                </div>
              </div>

              <img src={assets.uk_icon} alt="" />
            </div>
          </div>

          <div className="shrink-0 w-[90%] sm:w-90.25 lg:w-100 aspect-361/264 bg-[url('/card-shape.svg')] bg-contain bg-no-repeat bg-center p-5 flex flex-col justify-between snap-start">
            <h3 className="mb-2.5 sm:mb-5 text-[#2D2D2D] font-dm-sans-500 pt-8.75 md:pt-5 lg:pt-12.5 text-[10px] sm:text-sm font-medium leading-3.75 sm:leading-5">
              I needed to send a gift to a family member abroad and expected
              delays or complications, but Swift Logistics handled everything
              professionally. From clear communication to proper tracking
              updates, I always knew where my package was. It arrived safely and
              on time, which gave me a lot of confidence in the service. I’ll
              definitely be using them again
            </h3>

            <img
              className="mb-14 md:mb-8  lg:mb-12 w-13 h-3 md:w-14 md:h-4 lg:w-15 lg:h-4"
              src={assets.star_icon1}
              alt=""
            />
            <div className="w-full flex justify-between items-center pl-5 sm:pl-[42.5px] pr-1.5 sm:pr-[14.5px]">
              <div className="flex items-center gap-2.5">
                <img className="pr-2" src={assets.ellipse} alt="" />

                <div>
                  <p className="text-[#2D2D2D] font-dm-sans text-xs sm:text-sm font-bold leading-4">
                    Micah Davidsons
                  </p>
                  <p className="text-[#6B6B6B] font-dm-sans text-[10px] sm:text-xs font-normal leading-3">
                    United States
                  </p>
                </div>
              </div>

              <img src={assets.uk_icon} alt="" />
            </div>
          </div>

          <div className="shrink-0 w-[90%] sm:w-90.25 lg:w-100 aspect-361/264 bg-[url('/card-shape.svg')] bg-contain bg-no-repeat bg-center p-5 flex flex-col justify-between snap-start">
            <h3 className="mb-2.5 sm:mb-5 text-[#2D2D2D] font-dm-sans-500 pt-8.75 md:pt-5 lg:pt-12.5 text-[10px] sm:text-sm font-medium leading-3.75 sm:leading-5">
              I needed to send a gift to a family member abroad and expected
              delays or complications, but Swift Logistics handled everything
              professionally. From clear communication to proper tracking
              updates, I always knew where my package was. It arrived safely and
              on time, which gave me a lot of confidence in the service. I’ll
              definitely be using them again
            </h3>

            <img
              className="mb-14 md:mb-8  lg:mb-12 w-13 h-3 md:w-14 md:h-4 lg:w-15 lg:h-4"
              src={assets.star_icon1}
              alt=""
            />
            <div className="w-full flex justify-between items-center pl-5 sm:pl-[42.5px] pr-1.5 sm:pr-[14.5px]">
              <div className="flex items-center gap-2.5">
                <img className="pr-2" src={assets.ellipse} alt="" />

                <div>
                  <p className="text-[#2D2D2D] font-dm-sans text-xs sm:text-sm font-bold leading-4">
                    Micah Davidsons
                  </p>
                  <p className="text-[#6B6B6B] font-dm-sans text-[10px] sm:text-xs font-normal leading-3">
                    United States
                  </p>
                </div>
              </div>

              <img src={assets.uk_icon} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll buttons */}
      <div className="flex justify-center gap-6 mt-8">
        <img
          onClick={scrollLeft}
          className="w-12 h-12 rounded-full border border-[rgba(42,42,42,0.7)] cursor-pointer"
          src={assets.left_arrow_icon}
          alt=""
        />
        <img
          onClick={scrollRight}
          className="w-12 h-12 rounded-full border border-[rgba(42,42,42,0.7)] cursor-pointer"
          src={assets.right_arrow_icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default JohnTrusted;
