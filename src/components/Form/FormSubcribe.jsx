/** @format */

import React, { useEffect, useState } from "react";
const FormSubcribe = ({}) => {
  useEffect(() => {});
  return (
    <div>
      <div className="bg-white shadow-md shadow-gray-400 rounded-lg">
        <div className="grid grid-cols-2 gap-4 mx-auto w-[90%] py-5">
          <div className="flex flex-col gap-2  items-start">
            <p className="font-bold text-[16px]">First Name *</p>
            <input className="bg-gray-200 p-3 rounded-md w-full"></input>
          </div>
          <div className="flex flex-col gap-2  items-start">
            <p className="font-bold text-[16px]">Last Name *</p>
            <input className="bg-gray-200 p-3 rounded-md w-full"></input>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mx-auto w-[90%] py-5">
          <div className="flex flex-col gap-2  items-start">
            <p className="font-bold text-[16px]">Email *</p>
            <input className="bg-gray-200 p-3 rounded-md w-full"></input>
          </div>
          <div className="flex flex-col gap-2  items-start">
            <p className="font-bold text-[16px]">Country *</p>
            <select className="bg-gray-200 p-3 rounded-md w-full">
              <option disabled>Please select</option>
              <option className="">Afghanistan</option>
              <option className="">Aland Islands</option>
              <option className="">Aland Islands</option>
              <option className="">Albania</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2 items-start w-[90%] mx-auto">
          <input
            type="checkbox"
            style={{ height: "30px", width: "30px" }}
          ></input>
          <p className="font-bold text-lg text-start">
            Yes, I would like to receive emails about Mambu products, services,
            and events. I can unsubscribe at any time.*
          </p>
        </div>

        <div className="mx-auto w-[90%] py-8">
          <p className="text-start">
            By submitting this form, you confirm that you agree to the
            processing of your personal data by Mambu as described in the{" "}
            <a className="hover:text-secondary1 cursor-pointer">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="mx-auto w-[90%] flex py-10">
          <button className="px-7 py-3 bg-secondary1 hover:bg-black rounded-3xl ">
            <p className="text-white font-bold">Subscribe</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSubcribe;
