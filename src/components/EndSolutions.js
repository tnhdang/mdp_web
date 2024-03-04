import React from "react";
import { Col, Row, Carousel } from "antd";


const EndSolutions = () => {
  const dataSlider = [
    {
      key: "1",
      picture: "",
      title: "MDP builds composable banking architecture ",
      description:
        "to design and delivery of banking services that prioritizes the ",
      highlight: "agility, flexibility and Innovation.",
      bgImage: "bg-[#64aa99]",
    },
    {
      key: "2",
      picture: "",
      title: "MDP API first, cloud native ",
      description:
        "architecture makes integration to ecosystem partners simple and helps our customers achieve ",
      highlight: "Business Strategy ",
      description2: "goals.",
      bgImage: "bg-white",
    },
    {
      key: "3",
      picture: "",
      title: "Integrations to Best-for-Purpose solution partners ",
      description:
        "and let MDP ",
      highlight: "build, operate, innovate and maintain ",
      description2: "the connectors between the APIs.",
      bgImage: "bg-white",
    },

  ];

  return (
    <div className="w-full h-fit flex items-center justify-center content-center endsolutions">
      <div className="EndSolutionContainer mb-12 w-[67.37%] pv:max-md:w-[70%]  h-fit pvmax:max-lg:h-[100vh] content-center grid grid-cols-2 md:max-xl:grid-cols-1 pv:max-md:grid-cols-1">
        <div className="w-full h-full pvmax:max-lg:h-fit flex flex-col justify-center">
          <p className="text-[1.1rem] leading-7 text-justify pr-[4rem] pv:max-md:pr-0 ">
            At MDP, we are committed to driving digital transformation in the banking industry and empowering our clients
            to succeed in the digital economy. With our Mambu-powered BaaS platform, banks and FIs can unlock new possibilities,
            accelerate innovation, and deliver unparalleled value to their customers, all while reducing time to market, enhancing
            usability, and lowering total cost of ownership.
          </p>
        </div>
        <div className="w-full h-fit pvmax:max-lg:h-fit flex flex-col justify-center slider-endsolutions">
          <div className="  w-[100%] bg-[#4fb645] mx-auto rounded-lg my-10 py-10 ">
            <Carousel effect="fade" autoplay>
              {dataSlider.map((item, index) => {
                return (
                  <div className="  w-full rounded-lg " key={item.key}>

                    <div className="w-[80%] mx-auto pt-10 pvmax:max-lg:pt-14 pb-20">
                      <p className="text-[1.1rem]  text-white">
                        <span className="text-[1.1rem]  text-white font-bold">{item.title}</span>
                        "{item.description}"
                        <span className="text-[1.1rem]  text-[#170F58] font-bold">{item.highlight}</span>
                        <span className="text-[1.1rem]  text-white ">{item.description2}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EndSolutions;