import React from "react";
import logo from "../../assets/images/footerLogo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 ">
      <div className="md:p-28 p-5">
        <img src={logo} alt="" />
      </div>
      <div className=" border-t w-full border-gray-400"></div>
      <div className="flex flex-wrap-reverse p-2  md:px-28  md:py-5  gap-6">
        <p className="text-[#7D828A]">Made with ❤️</p>
        <ul className=" flex  flex-wrap whitespace-nowrap text-[#ADB1B8] font-semibold list-disc list-inside">
          <li className=" px-2 ">Terms of usage</li>
          <li className="px-2 ">Privacy policy</li>
          <li className="px-2">Cancellation policy</li>
          <li className="px-2">Sitemap</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
