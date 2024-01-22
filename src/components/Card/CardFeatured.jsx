/** @format */

import React from "react";

const CardFeatured = ({ img, tags, desTime, title, descrption }) => {
  return (
    <div className="bg-[#fafafa] shadow-md shadow-gray-600 rounded-xl cursor-pointer hover:-translate-y-2 duration-300">
      <div className="relative rounded-t-xl">
        <img className="w-[full] rounded-t-xl" src={img}></img>
      </div>

      <div className="w-[80%] mx-auto pb-10">
        <div className="pt-6 ">
          <p className="text-lg text-gray-500 text-start">{desTime}</p>
        </div>
        <div className="py-2">
          <p className="text-start text-xl font-bold">{title}</p>
        </div>
        <div className="pb-6">
          <p className="text-start line-clamp-4 text-lg">{descrption}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFeatured;
