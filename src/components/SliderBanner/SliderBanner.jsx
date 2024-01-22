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
        "Mambu’s ease of integration, flexibility and time to market has helped us give our customers an unrivalled, technology-driven mobile banking experience.",
      bgImage: "bg-[#64aa99]",
    },
    {
      key: "2",
      picture: LogoBanner_2,
      title:
        "We are very excited to collaborate with Mambu on this project because it aligns with our strategic vision of improving our customer experience and offering our products and services to more Chileans.",
      bgImage: "bg-white",
    },
    {
      key: "3",
      picture: LogoBanner_3,
      title:
        "Running on Mambu not only enables us to focus on scaling and innovation, but it also is a great cultural fit.",
      bgImage: "bg-white",
    },
    {
      key: "4",
      picture: LogoBanner_4,
      title:
        "We have a very pragmatic approach to lending and savings and saw a great match of culture and ethos in Mambu.",
      bgImage: "bg-[#eeeeee]",
    },
  ];
  return (
    <div>
      <div className="bg-[#251e59]  w-[70%] mx-auto rounded-lg my-10 py-10">
        <Carousel effect="fade" autoplay>
          {dataSlider.map((item, index) => {
            return (
              <div className="bg-[#251e59]  w-full rounded-lg " key={item.key}>
                <div className="flex justify-center items-center py-10">
                  <div
                    className={`${item.bgImage} p-2 rounded-xl w-20 h-20 flex justify-center items-center`}
                  >
                    <img className="" src={item.picture}></img>
                  </div>
                </div>

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
    </div>
  );
};

export default SliderBanner;
