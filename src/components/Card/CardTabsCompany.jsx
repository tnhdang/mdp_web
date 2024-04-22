/** @format */

import React from "react";

const CardTabsCompany = ({ title1, description1,title2, description2,title3, description3, className }) => {
  return (
    <div className={className}>
      <div className="w-[100%] mx-auto pvmax:max-xl:w-[90%] ">
        <p className="text-[1.5rem] font-bold text-start py-4">{title1}</p>
        <p className="text-[1.1rem] text-justify py-4"> {description1}</p>
      </div>
      <div className="w-[100%] mx-auto pvmax:max-xl:w-[90%] ">
        <p className="text-[1.5rem] font-bold text-start py-4">{title2}</p>
        <p className="text-[1.1rem] text-justify py-4"> {description2}</p>
      </div>
      <div className="w-[100%] mx-auto pvmax:max-xl:w-[90%] ">
        <p className="text-[1.5rem] font-bold text-start py-4">{title3}</p>
        <p className="text-[1.1rem] text-justify py-4"> {description3}</p>
      </div>
      
    </div>
  );
};

export default CardTabsCompany  ;
