/** @format */

import React from "react";

const CardTabs = ({ title, description, image, titleButton, className }) => {
  return (
    <div className={className}>
      <div className="w-[70%] mx-auto pvmax:max-xl:w-[90%] ">
        <p className="text-4xl font-bold text-start py-4">{title}</p>
        <p className="text-lg text-start py-4"> {description}</p>
        <button className="py-2 px-4 rounded-3xl bg-[#4fb645] hover:bg-black cursor-pointer flex ">
          <p className="text-xl font-bold text-white">{titleButton}</p>
        </button>
      </div>
      <div className=" mx-auto">
        <img
          className="object-cover w-[512px] h-[512px] pvmax:max-xl:w-[80%] pvmax:max-xl:h-[80%] mx-auto"
          src={image}
        ></img>
      </div>
    </div>
  );
};

export default CardTabs;
