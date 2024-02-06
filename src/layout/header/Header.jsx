import React from "react";
import logo from "../../assets/images/headerLogo.svg";
import { MdLock } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import HeaderTimer from "./HeaderTimer";

const Header = () => {
  return (
    <>
      <header className="flex  items-center justify-between  lg:px-28  md:p-5 p-2 ">
        <div>
          <img className="md:block hidden" src={logo} alt="" />
          <span className="md:hidden block">
            <FaArrowLeft />
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span>
            <MdLock />
          </span>
          <span className="font-medium">Checkout</span>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <FiHelpCircle />
          </span>
          <span className="hidden md:block">Help</span>
        </div>
      </header>
      <HeaderTimer />
    </>
  );
};

export default Header;
