import React from "react";
import faqSvg from "../../../assets/images/faqSvg.svg";
import Dropdowns from "./Dropdowns/Dropdowns";

const FAQ = () => {
  return (
    <div className="flex gap-3 flex-col sm:flex-row">
      <div className=" sm:w-1/2   ">
        <h3 className="font-semibold text-2xl mb-3">
          Frequently asked questions
        </h3>
        <p className="text-[#60646C] mb-3 ">
          Here are some of our most asked questions.
        </p>

        <div className="flex  justify-between p-4 bg-[#F9F9FB] rounded-2xl">
          <div className="flex flex-col gap-4">
            <p className="font-medium">
              Still need help?
              <br />
              We&apos;re here for you.
            </p>
            <button className="bg-black p-4 rounded-2xl text-white">
              Chat with us
            </button>
          </div>
          <img src={faqSvg} alt="decoration" className="" />
        </div>
      </div>
      <div className="sm:w-1/2">
        <Dropdowns />
      </div>
    </div>
  );
};

export default FAQ;
