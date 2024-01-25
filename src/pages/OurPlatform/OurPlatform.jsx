/** @format */

import React, { useState, useEffect } from "react";
import {
  CardDisrupt,
  CardStatic,
  CardArticle,
  CardWhoTransform,
} from "../../components";
import {
  dataDisrupt,
  dataArticle,
  dataWhoTransform,
} from "../../utils/Mockdata";
import { Icon } from "@iconify/react";
import { Dropdown } from "antd";
const OurPlatform = () => {
  const [isBreacrumb1, setBreacrumb1] = useState(true);
  const [isBreacrumb2, setBreacrumb2] = useState(false);
  const [isBreacrumb3, setBreacrumb3] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  // get size screen
  const getSize = () => {
    setWidth(window.innerWidth);
  };

  // break point resize sidebar
  useEffect(() => {
    window.addEventListener("resize", getSize);
    if (width <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, [window.innerWidth]);
  const items = [
    {
      label: (
        <a
          className={`font-bold focus:outline-none  focus:text-[#4fb645]  hover:text-[#4fb645]  ${
            isBreacrumb2 ? "text-[#4fb645]  " : "text-black"
          }`}
          onClick={() => {
            setBreacrumb1(false);
            setBreacrumb2(true);
            setBreacrumb3(false);
          }}
        >
          Deposits
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          className={`font-bold focus:outline-none  focus:text-[#4fb645]  hover:text-[#4fb645]  ${
            isBreacrumb3 ? "text-[#4fb645]  " : "text-black"
          }`}
          onClick={() => {
            setBreacrumb1(false);
            setBreacrumb2(false);
            setBreacrumb3(true);
          }}
        >
          Simplified process orchestration
        </a>
      ),
      key: "1",
    },
  ];
  return (
    <div>
      <div className=" h-[500px] w-[100vw] bg-gradient-to-r from-[#14acbb] to-[#926db6] flex items-center">
        <div className="  w-[70%] mx-auto pvmax:max-lg:w-[90%] ">
          <p className="text-white text-7xl  font-bold text-start  w-[80%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-4xl">
            Our cloud banking platform
          </p>
        </div>
      </div>
      {/* Start Section Breacrumb */}
      <div
        className={`${
          isMobile ? "hidden" : "flex"
        } font-medium  gap-3 w-[70%] mx-auto py-10`}
      >
        <a
          className={`font-bold focus:outline-none  focus:text-[#4fb645]  hover:text-[#4fb645]  ${
            isBreacrumb1 ? "text-[#4fb645]  " : "text-black"
          }`}
          onClick={() => {
            setBreacrumb1(true);
            setBreacrumb2(false);
            setBreacrumb3(false);
          }}
        >
          Our cloud banking platform
        </a>
        <Icon icon={"iconamoon:arrow-right-2-light"} className="w-8 h-8" />
        <a
          className={`font-bold focus:outline-none  focus:text-[#4fb645]  hover:text-[#4fb645]  ${
            isBreacrumb2 ? "text-[#4fb645]  " : "text-black"
          }`}
          onClick={() => {
            setBreacrumb1(false);
            setBreacrumb2(true);
            setBreacrumb3(false);
          }}
        >
          Deposits
        </a>
        <Icon icon={"iconamoon:arrow-right-2-light"} className="w-8 h-8" />

        <a
          className={`font-bold focus:outline-none  focus:text-[#4fb645]  hover:text-[#4fb645]  ${
            isBreacrumb3 ? "text-[#4fb645]  " : "text-black"
          }`}
          onClick={() => {
            setBreacrumb1(false);
            setBreacrumb2(false);
            setBreacrumb3(true);
          }}
        >
          Simplified process orchestration
        </a>
      </div>

      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <div
          className={`${
            isMobile ? "flex" : "hidden"
          } font-medium   w-[70%] mx-auto py-10 items-center`}
        >
          <a
            className={`font-bold focus:outline-none  focus:text-[#4fb645]  hover:text-[#4fb645]  ${
              isBreacrumb1 ? "text-[#4fb645]  " : "text-black"
            }`}
            onClick={() => {
              setBreacrumb1(true);
              setBreacrumb2(false);
              setBreacrumb3(false);
            }}
          >
            Our cloud banking platform
          </a>
          <button>
            <Icon icon={"iconamoon:arrow-down-2-light"} className="w-6 h-6" />
          </button>
        </div>
      </Dropdown>

      {/* End Section Breacrumb */}

      <div className="mx-auto w-[70%] py-20 pvmax:max-lg:w-[90%] ">
        <p className="text-start font-bold text-lg w-[70%] pvmax:max-lg:w-[100%]">
          Customers want better ways to manage their money. They are looking for
          choice and convenience, and all this means change. Our cloud banking
          platform helps make financial change happen. Differentiate,
          collaborate and breathe new life into services.
        </p>
      </div>
      {/* Start Section technology that delivers more */}
      <div className="flex w-[70%] mx-auto py-10 pvmax:max-lg:w-[90%]">
        <p className="text-5xl font-bold ">Technology that delivers more.</p>
      </div>
      <div className="grid grid-cols-2 w-[70%] mx-auto py-10 pvmax:max-lg:w-[90%] md:max-lg:grid-cols-1 md:max-lg:w-[90%] pvmax:max-md:grid-cols-1">
        <div className="flex flex-col  ">
          <p className="text-start w-[70%]  ">
            Mambu is a SaaS, cloud-native, API-driven banking and financial
            services platform. It is designed to power financial innovation, to
            bring solutions to market faster, drive down cost barriers and allow
            ecosystems to expand.
          </p>
          <div className="flex py-10">
            <button className="py-2 px-4 rounded-2xl bg-secondary1 text-white font-bold hover:bg-black ">
              <p className="">Join our live demo</p>
            </button>
          </div>
        </div>
        <div className="bg-white p-4 shadow-lg shadow-gray-400 ">
          <img
            className="object-cover"
            src="https://cdn.sanity.io/images/0k2k2bbv/production/36323a451df58e4a9722f2b993951dcd55b20670-519x411.png?w=800&h=634&q=75&fit=max&auto=format"
          ></img>
        </div>
      </div>
      {/* End Section technology that delivers more */}

      {/* Start Section Disrupt  */}

      <div className="w-[70%] mx-auto py-10">
        <p className="text-5xl font-bold text-start">
          Disrupt without disruption
        </p>
      </div>
      <div className=" grid grid-cols-2 gap-10 w-[70%] mx-auto md:max-lg:w-[90%] pvmax:max-md:grid-cols-1 pvmax:max-md:w-[90%] pb-10">
        {dataDisrupt.map((item, index) => {
          return (
            <>
              <CardDisrupt
                key={item.key}
                title={item.title}
                description={item.description}
                img={item.img}
                linkprefix={item.linkprefix}
              />
            </>
          );
        })}
        <CardStatic
          title={"Of customers go live within 2 months"}
          Prefix={"+%"}
          number={95}
        />
        <CardStatic
          title={"Reduction in operating cost"}
          Prefix={"+%"}
          number={70}
        />
      </div>

      {/* End Section Disrupt  */}

      {/* Start Section Quotations*/}
      <div className="  w-[100vw] bg-gradient-to-r from-[#37a95b] to-[#0a565b] py-24 ">
        <div className="mx-auto w-[70%]">
          <div className=" w-[100%] mx-auto flex flex-col">
            <p className="text-white font-bold text-4xl text-start">
              "Everything that we need is available online, all APIs are already
              there and it is easy to do integrations."
            </p>
          </div>
          <div className="flex justify-end py-20">
            <img
              className="w-[100px] "
              src="https://mambu.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F0k2k2bbv%2Fproduction%2F12619becaf6e6a7588f412c6fb89ff8e1a7d0194-273x102.png&w=1920&q=75"
            ></img>
          </div>
        </div>
      </div>

      {/* End Section Quotations*/}

      {/* Start Section Competitors */}

      <div className="flex w-[70%] mx-auto py-20 pvmax:max-md:w-[90%]">
        <p className="text-5xl font-bold text-start w-[70%] pvmax:max-md:w-[100%]">
          Competitors, markets and behaviours change fast. You must be faster…
          and better..
        </p>
      </div>
      <div className="grid grid-cols-2 w-[70%] mx-auto py-10 pvmax:max-md:w-[90%] pvmax:max-md:grid-cols-1">
        <div className="flex flex-col  ">
          <p className="text-start w-[70%] font-bold">
            Mambu is a fast, fluid and flexible platform that doesn’t tie you
            down.
          </p>
          <ul className="list-disc w-[90%] text-start  py-10 pvmax:max-md:mx-auto ">
            <li className="py-2">
              Plug-in integrations for simple, streamlined and automated
              customer journeys
            </li>
            <li className="py-2">
              Configure and integrate instead of coding and customising
            </li>
            <li className="py-2">
              Harness the power of cloud instead of on-prem deployments
            </li>
            <li className="py-2">
              Constantly improve and be nimble, ready for change as it happens
            </li>
          </ul>
          <div className="flex py-20">
            <button className="py-2 px-4 rounded-2xl bg-secondary1 text-white font-bold hover:bg-black ">
              <p className="">Read more</p>
            </button>
          </div>
        </div>
        <div className="bg-white p-4 shadow-lg shadow-gray-400 ">
          <img
            className="object-cover"
            src="https://cdn.sanity.io/images/0k2k2bbv/production/190bf316deb162652c08592c326ce99fbfcbc40f-515x410.png?w=800&h=637&q=75&fit=max&auto=format"
          ></img>
        </div>
      </div>

      <div className="grid grid-cols-2 mx-auto w-[70%] gap-10 pvmax:max-md:w-[90%] pvmax:max-md:grid-cols-1">
        {dataArticle.map((item, index) => {
          return (
            <>
              <CardArticle
                title={item.title}
                description={item.description}
                key={index}
              />
            </>
          );
        })}
        <div className="">
          <p class=" text-start font-bold text-8xl  pvmax:max-md:text-5xl bg-gradient-to-r  from-[#7878ff]  to-[#6e2aac] text-transparent bg-clip-text h-[200px]">
            Say yes to Mambu.
          </p>
        </div>
      </div>
      {/* End Section Competitors */}

      {/* Start Section Who we transform  */}
      <div className=" mx-auto w-[70%] pt-36 pvmax:max-md:w-[90%] ">
        <p className="text-start text-5xl font-bold">Who we transform</p>
      </div>

      <div className=" grid grid-cols-2 gap-10 w-[70%] mx-auto py-20 pvmax:max-md:w-[90%] pvmax:max-md:grid-cols-1">
        {dataWhoTransform.map((item, index) => {
          return (
            <>
              <CardWhoTransform
                key={item.key}
                title={item.title}
                description={item.description}
              />
            </>
          );
        })}
      </div>
      {/* End Section Who we transform  */}

      {/* Start Section Ready Contact */}

      <div className="  w-[100vw] bg-gradient-to-r from-[#37a95b] to-[#0a565b] py-24 flex flex-col items-center gap-10 ">
        <p className="text-white font-bold text-8xl text-start mx-auto pvmax:max-md:text-5xl pvmax:max-md:text-center ">
          Ready to get started?
        </p>
        <button className="bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-black hover:text-white">
          <p className="">Contact us</p>
        </button>
      </div>
      {/* End Section Ready Contact */}
    </div>
  );
};

export default OurPlatform;
