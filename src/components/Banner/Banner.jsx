/** @format */

import React from "react";
// import imageBanner from "../../assets/images/banner.png";
// import baasimg from "../../assets/HomePage/baas.mp4";
import BannerImg from "../../assets/HomePage/banner.png"
import "./style.css";
const Banner = () => {
  return (
    <div className="w-full h-fit flex items-center content-center justify-center">
      <div className="banner items-center w-[66.67%] h-fit pt-20 pb-16 pvmax:max-lg:h-fit flex pvmax:max-lg:flex-col pvmax:max-lg:align-middle justify-center  ">
      

      <div className="flex flex-col w-[50%] h-[100%] justify-center  pvmax:max-lg:w-[100%] pvmax:max-lg:pr-[1rem] pvmax:max-lg:h-[50%] ">
        <img src={BannerImg} className="h-[60%] rounded-[1rem] "/>
      </div>

      

      <div className="flex flex-col w-[60%] pvmax:max-lg:w-[100%] h-[100%] pvmax:max-lg:h-[50%] gap-12 pvmax:max-lg:gap-10 text-start text-[1.1rem] justify-center items-center justify-items-center ml-[10rem] pvmax:max-lg:ml-0 pvmax:max-lg:px-0 banner-content">
        <p className="font-bold text-justify">
          MDP specializes in providing comprehensive business transformation consulting, 
          system integration, and Banking as a Service (BaaS) solutions tailored to meet the 
          evolving needs of modern businesses.
          </p>
        <p className="text-justify">
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
