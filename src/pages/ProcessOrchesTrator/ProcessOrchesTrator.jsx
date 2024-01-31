/** @format */

import React, { useState, useEffect } from "react";
import { CardDisrupt, CardArticle } from "../../components";
import { datanstantconnection, dataArticle_2 } from "../../utils/Mockdata";
import { Icon } from "@iconify/react";
import { Dropdown } from "antd";
const ProcessOrchesTrator = () => {
  const [isBreacrumb1, setBreacrumb1] = useState(false);
  const [isBreacrumb2, setBreacrumb2] = useState(false);
  const [isBreacrumb3, setBreacrumb3] = useState(true);
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
      {/* Start Section Banner */}
      <div className=" h-[400px] w-[100vw] bg-gradient-to-r from-[#14acbb] to-[#926db6] flex items-center">
        <div className="  w-[70%] mx-auto pvmax:max-lg:w-[90%] ">
          <p className="text-white text-7xl  font-bold text-start  w-[60%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-4xl">
            Simplified process orchestration
          </p>
        </div>
      </div>
      {/* End Section Banner */}

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
          Build your composable ecosystem your way. Pick and scale service paths
          and ensure seamless interactions. Mambu Process Orchestrator (MPO)
          joins the dots, so you can integrate services and deliver great
          financial experiences at speed.
        </p>
      </div>

      {/* Start  section Instant Connection */}
      <div className="flex w-[70%] mx-auto py-10 pvmax:max-lg:w-[90%]">
        <p className="text-5xl font-bold ">
          Instant connection to the Mambu ecosystem
        </p>
      </div>
      <div className="grid grid-cols-2 w-[70%] mx-auto py-10 pvmax:max-lg:w-[90%] md:max-lg:grid-cols-1 md:max-lg:w-[90%] pvmax:max-md:grid-cols-1">
        <div className="flex flex-col  ">
          <p className="text-start w-[70%]  ">
            MPO provides access to a new world of innovation. Use it to tap into
            a bank of external services that can be tailored and configured to
            your customers’ needs.
          </p>
          <p className="text-start w-[70%]  ">
            Leading tech-providers already interface their products or services
            direct to Mambu’s core banking software as a service (SaaS) engine.
            Enabling “Integration as a Product”, MPO’s prebuilt connectors
            (productised integration layers) can link you direct to this
            ready-made, constantly expanding financial ecosystem.
          </p>
          <p className="text-start w-[70%]  ">
            There’s no need to vet partners, build complex integrations on top
            of APIs, or worry about hosting. This dramatically reduces time to
            market for new services, especially during initial implementation.
          </p>
          <div className="flex py-10">
            <button className="py-2 px-4 rounded-2xl bg-secondary1 text-white font-bold hover:bg-black ">
              <p className="">Explore marketplace</p>
            </button>
          </div>
        </div>
        <div className=" p-4  ">
          <img
            className="object-cover"
            src="https://cdn.sanity.io/images/0k2k2bbv/production/d25c549483b4955c7011ec6156810e11563b1142-1200x1197.png?w=800&q=75&fit=max&auto=format"
          ></img>
        </div>
      </div>
      <div className="mx-auto w-[70%]  md:max-xl:w-[90%] pvmax:max-md:w-[90%]">
        <div className="grid grid-cols-2 gap-10 pt-10 pb-32  md:max-xl:grid-cols-2 pvmax:max-md:grid-cols-1">
          {datanstantconnection.map((item, index) => {
            return (
              <>
                <CardDisrupt
                  title={item.title}
                  img={item.img}
                  description={item.description}
                  key={index}
                />
              </>
            );
          })}
        </div>
      </div>
      {/* End section Instant connection */}

      {/* Start Section Take back control */}
      <div className="flex w-[70%] mx-auto py-20 pvmax:max-md:w-[90%]">
        <p className="text-5xl font-bold text-start w-[70%] pvmax:max-md:w-[100%]">
          Take back control
        </p>
      </div>
      <div className="grid grid-cols-2 w-[70%] mx-auto py-10 pvmax:max-md:w-[90%] pvmax:max-md:grid-cols-1">
        <div className="flex flex-col  ">
          <p className="text-start w-[70%] ">
            Our composable approach fastracks financial services using the rapid
            and flexible assembly of independent, best-for-purpose systems. It
            provides the API connections and business process management that
            bring it all together to power competitive advantage. MPO, as an
            Integration Platform as a Service (iPaaS) offers ecosystem
            connectors and pre-built integrations.
          </p>

          <div className="flex py-20">
            <button className="py-2 px-4 rounded-2xl bg-secondary1 text-white font-bold hover:bg-black ">
              <p className="">Explore composable</p>
            </button>
          </div>
        </div>
        <div className="p-4 ">
          <img
            className="object-cover"
            src="https://cdn.sanity.io/images/0k2k2bbv/production/2d7d27be15fc66f3d9194d4481b3b4aae0d0b388-1000x600.png?w=800&q=75&fit=max&auto=format"
          ></img>
        </div>
      </div>
      {/* End Section Take back control */}

      {/* Start Section How MPO's */}
      <div className="flex w-[70%] mx-auto py-10 pvmax:max-lg:w-[90%]">
        <p className="text-5xl font-bold text-start">
          How MPO's composable architecture facilitates getting things done
          faster
        </p>
      </div>
      <div className="mx-auto w-[70%] py-20 pvmax:max-lg:w-[90%] ">
        <p className="text-start  text-lg w-[70%] pvmax:max-lg:w-[100%]">
          Mambu Process Orchestrator acts as the middle layer between different
          business systems, processes and parties, it pulls, pushes and
          processes data via our cutting-edge, world-proven APIs. Complexity is
          made easy with a graphical interface that lets you instantly model,
          create and execute business process management and workflows in the
          cloud.
        </p>
      </div>

      <div className="grid grid-cols-2 mx-auto w-[70%] gap-10 pvmax:max-md:w-[90%] pvmax:max-md:grid-cols-1 pb-20">
        {dataArticle_2.map((item, index) => {
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
            Build your ecosystem your way.
          </p>
        </div>
      </div>
      {/* End Section Competitors */}

      {/* Start Section Ready Contact */}

      <div className="  w-[100vw] bg-gradient-to-r from-[#37a95b] to-[#0a565b] py-24 flex flex-col items-center gap-10 ">
        <p className="text-white">
          Discover the future of developing true SaaS banking services
        </p>
        <p className="text-white font-bold text-8xl text-start mx-auto pvmax:max-md:text-5xl pvmax:max-md:text-center ">
          Eager to build?
        </p>
        <button className="bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-black hover:text-white">
          <p className="">Get in touch</p>
        </button>
      </div>
      {/* End Section Ready Contact */}
    </div>
  );
};

export default ProcessOrchesTrator;
