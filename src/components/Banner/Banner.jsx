/** @format */

import React from "react";
// import imageBanner from "../../assets/images/banner.png";
// import baasimg from "../../assets/HomePage/baas.mp4";
import "./style.css";
const Banner = () => {
  return (
    <div className="pt-2 banner w-[100%] h-[90vh] pvmax:max-lg:h-[90vh] flex pvmax:max-lg:flex-col pvmax:max-lg:align-middle justify-center  ">
      {/* <div className="relative flex gap-2 w-[100%] mx-auto pvmax:max-xl:flex-col ">
        <div className="w-[60%] flex flex-col gap-6 pl-40 justify-center pvmax:max-xl:w-[100%] pvmax:max-xl:items-center pvmax:max-xl:mx-auto pvmax:max-xl:pl-0  ">
          <p className="text-6xl font-bold text-start lg:max-xl:w-[50%] lg:max-xl:mx-auto lg:max-xl:text-center pvmax:max-lg:w-[90%] pvmax:max-lg:mx-auto pvmax:max-lg:text-center ">
          MDP specializes in providing:
          </p>
          <p className="text-2xl text-start lg:max-xl:w-[50%] pvmax:max-lg:w-[90%] pvmax:max-xl:mx-auto pvmax:max-xl:text-center  ">
          comprehensive business transformation consulting, system integration, and Banking as a Service (BaaS) solutions tailored to meet the evolving needs of modern businesses.
          </p>
          <div className="flex">
            <button className="bg-[#4FB645] hover:bg-black rounded-3xl px-4 py-2 text-white font-bold  ">
              Explore our platform
            </button>
          </div>
        </div>
        <div className="w-[65%] lg:max-xl:mx-auto pvmax:max-lg:w-[90%] flex justify-center  ">
          <img className="" src="https://media-public.canva.com/mis_Q/MAEoflmis_Q/1/tl.png"></img>
        
        </div>
      </div>

      <div className="w-[50%] mx-auto pt-10 lg:max-xl:w-[60%]   pvmax:max-lg:w-[90%]">
        <p className="text-3xl">
        At MDP, we are dedicated to driving transformative change and enabling sustainable growth for businesses across industries. With a deep understanding of the complexities of today's business landscape, we offer expert guidance and innovative solutions in three key areas:
        </p>
      </div> */}

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
  );
};

export default Banner;
