/** @format */

import React from "react";

const CardTabsNoPics = ({ title, description, className }) => {
  return (
    <div className={className}>
      <div className="w-[100%] mx-auto pvmax:max-xl:w-[90%] ">
        <p className="text-4xl font-bold text-start py-4">{title}</p>
        <p className="text-lg text-start py-4"> {description}</p>
      </div>
      
    </div>
  );
};

export default CardTabsNoPics;
