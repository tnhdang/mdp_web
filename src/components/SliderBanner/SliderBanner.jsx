/** @format */

import React from "react";
import { Carousel } from "antd";
import LogoBanner_1 from "../../assets/images/logo_banner_1.svg";
import LogoBanner_2 from "../../assets/images/logo_banner_2.svg";
import LogoBanner_3 from "../../assets/images/logo_banner_3.svg";
import LogoBanner_4 from "../../assets/images/logo_banner_4.svg";
const SliderBanner = () => {
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
    <div>
      <div className="bg-[#251e59]  w-[70%] mx-auto rounded-lg my-10 py-10 pvmax:max-xl:w-[90%]">
        <Carousel effect="fade" autoplay>
          {dataSlider.map((item, index) => {
            return (
              <div className="bg-[#251e59]  w-full rounded-lg " key={item.key}>
                {/* <div className="flex justify-center items-center py-10">
                  <div
                    className={`${item.bgImage} p-2 rounded-xl w-20 h-20 flex justify-center items-center`}
                  >
                    <img className="" src={item.picture}></img>
                  </div>
                </div> */}

                <div className="w-[80%] mx-auto pt-10 pb-20">
                  <p className="text-3xl font-bold text-white">
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
      </div>
    </div>
  );
};

export default SliderBanner;
