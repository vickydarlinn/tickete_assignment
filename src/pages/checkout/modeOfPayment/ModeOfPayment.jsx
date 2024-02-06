import React, { useState } from "react";
import debitCard from "../../../assets/images/debit-card.svg";
import radioSvg from "../../../assets/images/Radio.svg";
import visa from "../../../assets/images/visa.svg";
import masterCard from "../../../assets/images/mastercard.svg";
import dinersClub from "../../../assets/images/dinersClub.svg";
import InputComponent from "../../../components/InputComponent";
import piggy from "../../../assets/images/piggy.svg";
import { CiCircleInfo } from "react-icons/ci";
import { PiLockFill } from "react-icons/pi";
import applePay from "../../../assets/images/apple-pay.svg";
import googlePay from "../../../assets/images/google-pay.svg";
import bigRadio from "../../../assets/images/bigRadio.svg";
import { BsInfoCircleFill } from "react-icons/bs";

const ModeOfPayment = () => {
  const [selectedOption, setSelectedOption] = useState();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form className="w-full pb-6 mt-16">
      <h3 className="font-semibold text-2xl">Select your mode of payment</h3>
      <p className="text-[#60646C] mt-4 mb-10">
        Payments with Tickete are secure and encrypted.
      </p>

      <label htmlFor="card-payment">
        <div className="border border-black p-5 rounded-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src={debitCard}
                alt="debit-card"
                className="border py-1 px-2 rounded"
              />
              <span className="font-medium">Credit & debit card</span>
            </div>
            {/* <img src={radioSvg} alt="radio" /> */}
            <input
              type="radio"
              name="payment"
              id="card-payment"
              value="card-payment"
              checked={selectedOption === "card-payment"}
              onChange={handleOptionChange}
              className="accent-black w-6 h-6"
            />
          </div>

          <div className="flex gap-4 my-8">
            <div className="w-9 border rounded py-1 text-center flex justify-center">
              <img src={visa} alt="visa logo" />
            </div>
            <div className="w-9 border rounded py-1 text-center flex justify-center">
              <img src={masterCard} alt="masterCard logo" />
            </div>
            <div className="w-9 border rounded py-1 text-center flex justify-center">
              <img src={dinersClub} alt="dinersclub logo" />
            </div>
          </div>

          <div className="flex flex-col gap-6 border-b-2 pb-8">
            <div className="flex max-sm:flex-col justify-center gap-6">
              <div className="w-1/2 max-sm:w-full">
                <InputComponent type="text" placeholder="Name on card *" />
              </div>
              <div className="flex items-center gap-2 border-2 border-gray-300 rounded-2xl p-4 w-1/2 max-sm:w-full">
                <img
                  src={debitCard}
                  alt="debit-card"
                  className="border py-1 px-2 rounded"
                />
                <input
                  type="number"
                  placeholder="Card number *"
                  className="outline-none w-full"
                />
              </div>
            </div>
            <div className="flex max-sm:flex-col justify-center gap-6">
              <InputComponent type="text" placeholder="Expiry date *" />
              <InputComponent type="number" placeholder="<CVV/CVC> *" />
            </div>
          </div>

          <div className="flex max-sm:flex-col-reverse max-sm:items-start max-sm:gap-2 justify-between items-center my-4">
            <h3 className="font-semibold text-xl">Total payable: $XXX</h3>
            <div className="bg-[#299764] text-white text-xs flex gap-2 items-center rounded-2xl px-2 py-1">
              <img src={piggy} alt="piggy bank logo" />
              <span>You save 'price'</span>
            </div>
          </div>

          <p className="pb-6 flex items-center gap-2 text-xs">
            <span className="font-medium underline text-[#60646C]">
              You will be charged in AED
            </span>
            <span className="cursor-pointer">
              <CiCircleInfo />
            </span>
          </p>

          <p className="leading-5 text-[12px] text-[#60646C]">
            By clicking &quot;confirm & pay&quot;, you agree to{" "}
            <a className="underline text-[#3A5CCC]" href="#">
              Tickete&apos;s general terms and condition
            </a>{" "}
            and{" "}
            <a className="underline text-[#3A5CCC]" href="#">
              cancellation policy.
            </a>{" "}
          </p>

          <button className=" bg-black text-white font-semibold px-6 py-3 mt-4 rounded-2xl flex gap-2 items-center justify-center">
            <span>
              <PiLockFill className="text-xl" />
            </span>
            <span>Confirm & pay</span>
          </button>
        </div>
      </label>

      <div className="flex flex-col gap-4 my-4 border-b border-gray-300 pb-6">
        <div className="bg-[#F9F9FB] flex justify-between p-6 rounded-2xl border border-gray-300 cursor-not-allowed">
          <div className="flex items-center gap-4 text-gray-400 font-medium">
            <img src={applePay} alt="apple pay" />
            <span>Coming soon</span>
          </div>

          <label htmlFor="apple-pay">
            <img src={bigRadio} alt="" />
          </label>
          <input
            type="radio"
            name="payment"
            value="apple-pay"
            id="apple-pay"
            checked={selectedOption === "apple-pay"}
            onChange={handleOptionChange}
            disabled
            className="w-6 h-6 hidden"
          />
        </div>

        <div className="bg-[#F9F9FB] flex justify-between p-6 rounded-2xl border border-gray-300 cursor-not-allowed">
          <div className="flex items-center gap-4 text-gray-400 font-medium">
            <img src={googlePay} alt="google pay" />
            <span>Coming soon</span>
          </div>

          <label htmlFor="google-pay">
            <img src={bigRadio} alt="" />
          </label>
          <input
            type="radio"
            name="payment"
            id="google-pay"
            checked={selectedOption === "google-pay"}
            onChange={handleOptionChange}
            disabled
            className="w-6 h-6 hidden"
          />
        </div>
      </div>

      <h3 className="font-semibold text-2xl mb-4 mt-16">Total Payable: $XXX</h3>
      <div className="p-4 rounded-2xl border border-gray-300 flex gap-4">
        <BsInfoCircleFill className="text-sm mt-1" />
        <div>
          <h4 className="font-medium">You will be charged in AED</h4>
          <p className="text-[#60646C] text-sm">
            The price shown here is in US Dollar (USD) as per the current
            conversion rate. You will be charged in United Arab Emirates Dirham
            (AED).
          </p>
        </div>
      </div>
    </form>
  );
};

export default ModeOfPayment;
