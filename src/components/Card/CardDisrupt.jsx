/** @format */

import React from "react";

const CardDisrupt = ({ title, img, description, linkprefix }) => {
  return (
    <div className="bg-white shadow-2xl shadow-gray-400 p-6 rounded-xl">
      <div className="">
        <img className="object-cover" src={img}></img>
      </div>
      <div className="py-8">
        <p className="text-3xl font-bold text-start">{title}</p>
      </div>
      <div className="">
        <p className="text-start leading-8 line-clamp-4">{description}</p>
      </div>
      <div className="flex py-10">
        <a className=" text-[#057472] font-bold border-b-2  border-transparent  hover:border-[#057472] ">
          {linkprefix}
        </a>
      </div>
    </div>
  );
};

export default CardDisrupt;
