import React from "react";

const InputComponent = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-4 border-2 border-gray-300 rounded-2xl w-full outline-none"
    />
  );
};

export default InputComponent;
