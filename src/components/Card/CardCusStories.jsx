/** @format */

import React from "react";

const CardCusStories = ({ img, title, description }) => {
  return (
    <>
      <div className="bg-white shadow-2xl shadow-gray-400 p-6 rounded-xl cursor-pointer">
        <div className="w-[150px] ">
          <img className="object-cover" src={img}></img>
        </div>
        <div className="py-8">
          <p className="text-3xl font-bold text-start">{title}</p>
        </div>
        <div className="">
          <p className="text-start leading-8 line-clamp-4">{description}</p>
        </div>
        <div className="flex py-10">
          <p className=" text-[#057472] font-bold border-b-2  border-transparent   ">
            Success story
          </p>
        </div>
      </div>
    </>
  );
};

export default CardCusStories;
