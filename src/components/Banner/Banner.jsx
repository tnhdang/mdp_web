/** @format */

import React from "react";
// import imageBanner from "../../assets/images/banner.png";
// import baasimg from "../../assets/HomePage/baas.mp4";
import "./style.css";
const Banner = () => {
  return (
    <div className="">
      <div className="pt-2 banner w-[100%] h-[90vh] pvmax:max-lg:h-[90vh] flex pvmax:max-lg:flex-col pvmax:max-lg:align-middle justify-center  ">
      

      <div className="flex flex-col w-[35%] h-[100%] justify-center pl-[1rem] pvmax:max-lg:w-[100%] pvmax:max-lg:pr-[1rem] pvmax:max-lg:h-[50%] ">
        <img src="https://img.freepik.com/premium-photo/finance-banking-concept-financial-services-atm-money-turnover-investment-storage-funds-cash-vaults-bank-successful-investment-productivity-busines_771426-9240.jpg?size=626&ext=jpg&ga=GA1.1.1847015774.1708397240&semt=sph" className="h-[60%] rounded-[3rem] "/>
      </div>

      

      <div className="flex flex-col w-[40%] pvmax:max-lg:w-[100%] h-[100%] pvmax:max-lg:h-[50%] gap-20 pvmax:max-lg:gap-10 text-start text-[1.1rem] justify-center ml-[10rem] pvmax:max-lg:ml-0 pvmax:max-lg:px-8 banner-content">
        <p className="font-bold">
          MDP specializes in providing comprehensive business transformation consulting, 
          system integration, and Banking as a Service (BaaS) solutions tailored to meet the 
          evolving needs of modern businesses.
          </p>
        <p>
          At MDP, we are dedicated to driving transformative change and enabling sustainable 
          growth for businesses across industries. With a deep understanding of the complexities 
          of today's business landscape, we offer expert guidance and innovative solutions in three key areas:
          </p>

      </div>
    </div>
    </div>
    
  );
};

export default Banner;
