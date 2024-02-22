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
  const [isTab4, setIsTab4] = useState(false);


  const dataSlider = [
    {
      key: "1",
      picture: LogoBanner_1,
      title:
        "Business Transformation Consulting: We partner with organizations to navigate digital disruption, optimize operations, and unlock new opportunities for growth. Our seasoned consultants work closely with clients to develop strategic roadmaps, streamline processes, and implement tailored solutions that drive tangible results.",
      bgImage: "bg-[#64aa99]",
    },
    {
      key: "2",
      picture: LogoBanner_2,
      title:
        "System Integration: Leveraging cutting-edge technology and industry best practices, we specialize in seamlessly integrating disparate systems and processes to enhance efficiency, collaboration, and agility. From legacy system modernization to cloud migration, our expert team ensures a smooth and successful transition, empowering businesses to harness the full potential of their IT infrastructure.",
      bgImage: "bg-white",
    },
    {
      key: "3",
      picture: LogoBanner_3,
      title:
        "Banking as a Service (BaaS): As pioneers in the fintech space, we offer innovative BaaS solutions that empower financial institutions and businesses to deliver seamless banking experiences to their customers. From API-driven banking platforms to white-label solutions, we enable our clients to accelerate innovation, reduce time to market, and stay ahead in an increasingly competitive landscape.",
      bgImage: "bg-white",
    },
    
  ];
  return (
    <div className="h-[70vh] slider-banner-container pvmax:max-lg:h-fit">
      {/* <div className="bg-[#170F58]  w-[70%] mx-auto rounded-lg my-10 py-10 pvmax:max-xl:w-[90%]">
        <Carousel effect="fade" autoplay>
          {dataSlider.map((item, index) => {
            return (
              <div className="bg-[#170F58]  w-full rounded-lg " key={item.key}>
                <div className="flex justify-center items-center py-10">
                  <div
                    className={`${item.bgImage} p-2 rounded-xl w-20 h-20 flex justify-center items-center`}
                  >
                    <img className="" src={item.picture}></img>
                  </div>
                </div>

                <div className="w-[80%] mx-auto pt-10 pb-20">
                  <p className="text-3xl  text-white">
                    "{item.title}"
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="w-[50%] mx-auto pt-10 lg:max-xl:w-[60%]   pvmax:max-lg:w-[90%]">
        <p className="text-3xl">
        At MDP, we are committed to delivering exceptional value and driving sustainable business outcomes for our clients. With a customer-centric approach, a passion for innovation, and a relentless pursuit of excellence, we partner with organizations to transform challenges into opportunities and pave the way for a brighter future.
        </p>
      </div> */}





        {/* Section Card Tab */}
      <div className="flex w-[75%] mx-auto gap-10  pvmax:max-xl:hidden">
      <button
          className={`text-3xl text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-black  ${
            isTab1 ? "text-black border-b-[3px] border-black " : ""
          }`}
          onClick={() => {
            setIsTab1(true);
            setIsTab2(false);
            setIsTab3(false);
            setIsTab4(false);
          }}
        >
          <p className="">Business Consulting</p>
        </button>
        
        <button
          className={`text-3xl text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-black  ${
            isTab2 ? "text-black border-b-[3px] border-black " : ""
          }`}
          onClick={() => {
            setIsTab1(false);
            setIsTab2(true);
            setIsTab3(false);
            setIsTab4(false);
          }}
        >
          <p className="">System Integration</p>
        </button>

        <button
          className="text-3xl text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-black "
          onClick={() => {
            setIsTab1(false);
            setIsTab2(false);
            setIsTab3(true);
            setIsTab4(false);
          }}
        >
          <p className="">BaaS</p>
        </button>

        
      </div>
      <CardTabsNoPics
        className={` ${
          isTab1 ? "grid" : "hidden"
        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[75%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
        title={"Business Transformation Consulting:"}
        description={
          "We partner with organizations to navigate digital disruption, optimize operations, and unlock new opportunities for growth. Our seasoned consultants work closely with clients to develop strategic roadmaps, streamline processes, and implement tailored solutions that drive tangible results."
        }
      ></CardTabsNoPics>
      <CardTabsNoPics
        className={` ${
          isTab2 ? "grid" : "hidden"
        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[75%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
        title={"System Integration:"}
        description={
          "Leveraging cutting-edge technology and industry best practices, we specialize in seamlessly integrating disparate systems and processes to enhance efficiency, collaboration, and agility. From legacy system modernization to cloud migration, our expert team ensures a smooth and successful transition, empowering businesses to harness the full potential of their IT infrastructure."
        }
      ></CardTabsNoPics>
      <CardTabsNoPics
        className={`  ${
          isTab3 ? "grid" : "hidden"
        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[75%] py-10 mx-auto my-10 rounded-lg   pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
        title={"Banking as a Service (BaaS):"}
        description={
          "As pioneers in the fintech space, we offer innovative BaaS solutions that empower financial institutions and businesses to deliver seamless banking experiences to their customers. From API-driven banking platforms to white-label solutions, we enable our clients to accelerate innovation, reduce time to market, and stay ahead in an increasingly competitive landscape."
        }
      ></CardTabsNoPics>
      






    </div>
  );
};

export default SliderBanner;
