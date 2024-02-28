/** @format */

import React from "react";
import { Carousel } from "antd";
import LogoBanner_1 from "../../assets/images/logo_banner_1.svg";
import LogoBanner_2 from "../../assets/images/logo_banner_2.svg";
import LogoBanner_3 from "../../assets/images/logo_banner_3.svg";
import LogoBanner_4 from "../../assets/images/logo_banner_4.svg";
import {
  CardText,
  Banner,
  CardTabsNoPics,
  CardFeatured,
  CardStatic,
  FormSubcribe,
} from "../../components";
import  { useState } from "react";
const SliderBanner = () => {

  const [isTab1, setIsTab1] = useState(true);
  const [isTab2, setIsTab2] = useState(false);
  const [isTab3, setIsTab3] = useState(false);


  
  return (
    <div className="h-[70vh] slider-banner-container pvmax:max-lg:h-fit">
    
        {/* Section Card Tab */}
      <div className="flex w-[66.67%] mx-auto gap-10  pvmax:max-xl:hidden">
      <button
          className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-black  ${
            isTab1 ? "text-black border-b-[3px] border-black " : ""
          }`}
          onClick={() => {
            setIsTab1(true);
            setIsTab2(false);
            setIsTab3(false);
          }}
        >
          <p className="">Business Consulting</p>
        </button>
        
        <button
          className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-black  ${
            isTab2 ? "text-black border-b-[3px] border-black " : ""
          }`}
          onClick={() => {
            setIsTab1(false);
            setIsTab2(true);
            setIsTab3(false);
          }}
        >
          <p className="">System Integration</p>
        </button>

        <button
          className="text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-black "
          onClick={() => {
            setIsTab1(false);
            setIsTab2(false);
            setIsTab3(true);
          }}
        >
          <p className="">BaaS</p>
        </button>

        
      </div>
      <CardTabsNoPics
        className={` ${
          isTab1 ? "grid" : "hidden"
        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[66.67%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
        title={"Business Transformation Consulting:"}
        description={
          "We partner with organizations to navigate digital disruption, optimize operations, and unlock new opportunities for growth. Our seasoned consultants work closely with clients to develop strategic roadmaps, streamline processes, and implement tailored solutions that drive tangible results."
        }
      ></CardTabsNoPics>
      <CardTabsNoPics
        className={` ${
          isTab2 ? "grid" : "hidden"
        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[66.67%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
        title={"System Integration:"}
        description={
          "Leveraging cutting-edge technology and industry best practices, we specialize in seamlessly integrating disparate systems and processes to enhance efficiency, collaboration, and agility. From legacy system modernization to cloud migration, our expert team ensures a smooth and successful transition, empowering businesses to harness the full potential of their IT infrastructure."
        }
      ></CardTabsNoPics>
      <CardTabsNoPics
        className={`  ${
          isTab3 ? "grid" : "hidden"
        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[66.67%] py-10 mx-auto my-10 rounded-lg   pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
        title={"Banking as a Service (BaaS):"}
        description={
          "As pioneers in the fintech space, we offer innovative BaaS solutions that empower financial institutions and businesses to deliver seamless banking experiences to their customers. From API-driven banking platforms to white-label solutions, we enable our clients to accelerate innovation, reduce time to market, and stay ahead in an increasingly competitive landscape."
        }
      ></CardTabsNoPics>
      
    </div>
  );
};

export default SliderBanner;
