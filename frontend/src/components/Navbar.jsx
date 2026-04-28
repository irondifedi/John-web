import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { getCartCount } = useContext(ShopContext);

  return (
    <div className="w-full relative z-50 font-medium">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img
            className="w-8 h-8 sm:w-10 sm:h-10"
            src={assets.john_enterprise_icon}
            alt=""
            NavLink
            to="/"
          />
          <p className="text-[#121212] font-clash-grotesk font-medium leading-5 tracking-[0.48px] [-webkit-text-stroke-width:0.3px] [-webkit-text-stroke-color:#121212]">
            John's <br /> Enterprise
          </p>
        </div>

        {/* Desktop Navbar: visible lg+ */}
        <ul className="hidden lg:flex flex-wrap gap-4 xl:gap-11 text-sm">
          <NavLink to="/" className="flex flex-col items-center">
            <p className="text-[rgba(18,18,18,0.6)] font-dm-sans font-normal leading-4 tracking-[-0.32px]">
              Home
            </p>
          </NavLink>

          <NavLink to="/swift-logistics" className="flex flex-col items-center">
            <p className="text-[rgba(18,18,18,0.6)] font-dm-sans font-normal leading-4 tracking-[-0.32px]">
              Swift Logistics
            </p>
          </NavLink>

          <NavLink to="/easy-media" className="flex flex-col items-center">
            <p className="text-[rgba(18,18,18,0.6)] font-dm-sans font-normal leading-4 tracking-[-0.32px]">
              Easy Media
            </p>
          </NavLink>

          <NavLink to="/john-stores" className="flex flex-col items-center">
            <p className="text-[rgba(18,18,18,0.6)] font-dm-sans font-normal leading-4 tracking-[-0.32px]">
              John Stores
            </p>
          </NavLink>

          <NavLink to="/testimonials" className="flex flex-col items-center">
            <p className="text-[rgba(18,18,18,0.6)] font-dm-sans font-normal leading-4 tracking-[-0.32px]">
              Testimonials
            </p>
          </NavLink>

          <NavLink to="/faqs" className="flex flex-col items-center">
            <p className="text-[rgba(18,18,18,0.6)] font-dm-sans font-normal leading-4 tracking-[-0.32px]">
              FAQ
            </p>
          </NavLink>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          {/* Search box: visible md+ */}
          <div className="hidden md:flex items-center w-60 h-9 py-2.25 gap-2.5 bg-[#F1F1F1] rounded-[10px] border-[0.667px] border-[rgba(18,18,18,0)]">
            <img
              src={assets.search_icon}
              alt="Search"
              className="w-8 h-9 mr-2"
            />
            <input
              type="text"
              placeholder="Search products & services"
              className="w-full bg-transparent outline-none text-[#6B7280] font-dm-sans text-[14px] font-normal leading-3.75 tracking-[-0.3px]"
            />
          </div>

          {/* Cart */}

          <Link to="/cart" className="w-5 h-5 sm:w-6 sm:h-6" id="cart-icon">
            <img
              src="/cart.svg"
              alt="Cart"
              className="w-full h-full object-contain"
            />
            {getCartCount() > 0 && (
              <span className="absolute top-7 right-12 sm:top-7 sm:right-19 lg:top-7 lg:right-8 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-600 rounded-full border border-white"></span>
            )}
          </Link>

          {/* Hamburger: visible below lg */}
          <img
            onClick={() => setVisible(!visible)}
            src={assets.menu_icon}
            alt="Menu"
            className="w-5 cursor-pointer lg:hidden"
          />
        </div>
      </div>

      {/* Mobile dropdown: pushes content down */}
      {/* Mobile dropdown: pushes content down */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          visible ? "h-auto" : "h-0"
        }`}
      >
        <NavLink
          onClick={() => setVisible(false)}
          className="block py-3 px-6 border-b text-[rgba(18,18,18,0.6)] font-dm-sans text-[16px] font-normal leading-4 tracking-[-0.32px]"
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          onClick={() => setVisible(false)}
          className="block py-3 px-6 border-b text-[rgba(18,18,18,0.6)] font-dm-sans text-[16px] font-normal leading-4 tracking-[-0.32px]"
          to="/swift-logistics"
        >
          Swift Logistics
        </NavLink>

        <NavLink
          onClick={() => setVisible(false)}
          className="block py-3 px-6 border-b text-[rgba(18,18,18,0.6)] font-dm-sans text-[16px] font-normal leading-4 tracking-[-0.32px]"
          to="/easy-media"
        >
          Easy Media
        </NavLink>

        <NavLink
          onClick={() => setVisible(false)}
          className="block py-3 px-6 border-b text-[rgba(18,18,18,0.6)] font-dm-sans text-[16px] font-normal leading-4 tracking-[-0.32px]"
          to="/john-stores"
        >
          John Stores
        </NavLink>

        <NavLink
          onClick={() => setVisible(false)}
          className="block py-3 px-6 border-b text-[rgba(18,18,18,0.6)] font-dm-sans text-[16px] font-normal leading-4 tracking-[-0.32px]"
          to="/testimonials"
        >
          Testimonials
        </NavLink>

        <NavLink
          onClick={() => setVisible(false)}
          className="block py-3 px-6 text-[rgba(18,18,18,0.6)] font-dm-sans text-[16px] font-normal leading-4 tracking-[-0.32px]"
          to="/faq"
        >
          FAQ
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
