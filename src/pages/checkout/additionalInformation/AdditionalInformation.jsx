import React from "react";
import InputComponent from "../../../components/InputComponent";

const AdditionalInformation = () => {
  return (
    <form className="w-full border-b border-gray-300 pb-6 mt-16">
      <h3 className="font-semibold text-2xl">Additional Information</h3>

      <p className="text-[#60646C] mt-4 mb-10">
        We need a few more details to complete your reservation.
      </p>

      <div className="flex flex-col gap-6">
        <div className="flex max-sm:flex-col justify-between gap-6">
          <div className="w-1/2 max-sm:w-full">
            <InputComponent type="text" placeholder="Input label *" />
          </div>
          <select className="outline-none p-4 text-gray-400 w-1/2 max-sm:w-full border-[2px] border-gray-300 rounded-xl">
            <option value="">Select *</option>
            <option value="+92">+92</option>
            <option value="+91">+91</option>
          </select>
        </div>

        <select className="outline-none p-4 text-gray-400 w-full border-[2px] border-gray-300 rounded-xl">
          <option value="">Multiselect *</option>
          <option value="+92">+92</option>
          <option value="+91">+91</option>
        </select>
      </div>
    </form>
  );
};

export default AdditionalInformation;
