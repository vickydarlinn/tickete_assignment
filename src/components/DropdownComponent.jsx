import React, { useState } from "react";
import { RxCross2, RxPlus } from "react-icons/rx";

const DropdownComponent = ({ ques, ans }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" p-2  border border-gray-300 rounded-2xl ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center cursor-pointer gap-2"
      >
        <span>{isOpen ? <RxCross2 /> : <RxPlus />}</span>
        <p
          onClick={() => setIsOpen(!isOpen)}
          className="font-medium cursor-pointer"
        >
          {ques}
        </p>
      </div>
      <p
        className={`text-xs leading-5 font-sans text-[#60646C]  ml-5 ease-in   transition-all ${
          isOpen ? "max-h-80" : "max-h-0 overflow-hidden "
        }`}
      >
        {ans}
      </p>
    </div>
  );
};

export default DropdownComponent;
