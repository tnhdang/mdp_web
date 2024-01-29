/** @format */

import React from "react";
import ReactPlayer from "react-player/youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import {
  CardCusStories,
  CardDisrupt,
  CardRAG,
  CardFeatured,
} from "../../components";
import {
  dataCornerStone,
  dataCustomerstories,
  dataRAG,
  dataInsights,
} from "../../utils/Mockdata";
const Composable = () => {
  return (
    <div>
      {/* Start Section Banner */}
      <div className=" h-[400px] w-[100vw] bg-gradient-to-r from-[#e2eaee] to-[#b6d4e5] flex items-center">
        <div className="  w-[70%] mx-auto pvmax:max-lg:w-[90%] ">
          <p className="text-black text-8xl  font-bold text-start  w-[60%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-5xl">
            Composable approach
          </p>
        </div>
      </div>
      {/* End Section Banner */}
      <div className="w-[70%] mx-auto py-10 md:max-xl:w-[90%] ">
        <p className="text-2xl font-bold text-start w-[60%] py-10 md:max-xl:w-[90%]  ">
          Heard of composable banking? The concept originated here at Mambu.
          We’ve been champions of composable for over a decade.
        </p>
        <div className=" grid grid-cols-2 md:max-xl:grid-cols-1 ">
          <div className="text-start ">
            <p className="w-[70%] leading-10 text-lg pb-10">
              With Mambu’s{" "}
              <a className="text-secondary1 cursor-pointer underline">
                cloud banking platform{" "}
              </a>
              , you gain a composable technology foundation that powers your
              ability to create modern financial experiences. Forget
              one-size-fits-all vendor lock-ins, siloed and monolithic core
              banking systems, expensive professional service engagements or
              option-limited modularisation. Now you are free to compose your
              own destiny, aligned to your business and customer needs.
            </p>
            <button className="px-4 py-2 rounded-xl bg-secondary1 hover:bg-black">
              <p className="text-white font-bold">Get in touch</p>
            </button>
          </div>
          <div className="md:max-xl:w-[90%] mx-auto">
            <img
              className="hover:grayscale-50 cursor-zoom-in filter visible"
              src="https://cdn.sanity.io/images/0k2k2bbv/production/d25c549483b4955c7011ec6156810e11563b1142-1200x1197.png?w=800&q=75&fit=max&auto=format"
            ></img>
          </div>
        </div>
      </div>
      <div className="w-[70%] mx-auto py-20  md:max-xl:w-[90%] ">
        <p className="text-5xl font-bold text-start py-10">
          What’s composability?
        </p>
        <p className="text-start w-[60%] leading-9 md:max-xl:w-[100%] ">
          Composability is a system design principle that deals with the
          inter-relationships of components. A highly composable system provides
          components that can be selected and assembled in various combinations
          to satisfy specific user requirements.
          <br />
          <br />
          At Mambu, composable is our approach to the design and delivery of
          financial services based on the rapid and flexible assembly of
          independent, best-for-purpose systems. Put our powerful{" "}
          <a className="text-secondary1 underline cursor-pointer">
            deposits
          </a>{" "}
          and/or{" "}
          <a className="text-secondary1 underline cursor-pointer">lending</a>{" "}
          engines at the core of your financial architecture, configured with
          your chosen features and then add any number of connected services on
          top. All running on your choice of major cloud providers and with a
          clear and transparent SaaS pricing model.
        </p>
      </div>
      <div className=" h-[700px] rounded-2xl  w-[70%] mx-auto py-10  md:max-xl:w-[90%]">
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=g_c6Wm4XYjo"}
          controls
          width="100%"
          height="100%"
        />
      </div>
      <div className=" grid grid-cols-2  mx-auto w-[70%] py-20  md:max-xl:w-[90%]  md:max-xl:grid-cols-1">
        <div className="text-start ">
          <p className="w-[70%] leading-10 text-lg pb-10">
            With Mambu’s{" "}
            <a className="text-secondary1 cursor-pointer underline">
              cloud banking platform{" "}
            </a>
            , you gain a composable technology foundation that powers your
            ability to create modern financial experiences. Forget
            one-size-fits-all vendor lock-ins, siloed and monolithic core
            banking systems, expensive professional service engagements or
            option-limited modularisation. Now you are free to compose your own
            destiny, aligned to your business and customer needs.
          </p>
          <button className="px-4 py-2 rounded-xl bg-secondary1 hover:bg-black ">
            <p className="text-white font-bold">Contact us</p>
          </button>
        </div>
        <div className="py-4">
          <img
            className=""
            src="https://cdn.sanity.io/images/0k2k2bbv/production/51d9c38987d93697db4d4fc8e3c8436458e96c7f-1200x800.jpg?w=800&h=533&q=75&fit=max&auto=format"
          ></img>
        </div>
      </div>

      <div className="mx-auto w-[70%]  md:max-xl:w-[90%]">
        <p className="text-5xl font-bold text-start py-10">
          The cornerstones of composability
        </p>
        <div className="grid grid-cols-2 gap-10 pt-10 pb-32  md:max-xl:grid-cols-2">
          {dataCornerStone.map((item, index) => {
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
      <div className=" h-[700px] rounded-2xl  w-[70%] mx-auto py-10  md:max-xl:w-[90%]">
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=g_c6Wm4XYjo"}
          controls
          width="100%"
          height="100%"
        />
      </div>
      {/* Start Section Read our guides */}

      <div className="py-20 mx-auto w-[70%] md:max-xl:w-[90%]">
        <p className="text-5xl font-bold text-start py-10">Read our guides</p>
        <div className="grid grid-cols-2 gap-20 md:max-xl:grid-cols-2">
          {dataRAG.map((item, index) => {
            return (
              <CardRAG
                desc={item.desc}
                img={item.img}
                title={item.title}
                linkdowload={item.likdownload}
                key={index}
              />
            );
          })}
        </div>
      </div>
      {/* End Section Read our guides */}

      {/* Start Section  Quotations */}
      <div className="  w-[100vw] bg-gradient-to-r from-[#37a95b] to-[#0a565b] py-20 ">
        <div className="mx-auto w-[70%] md:max-xl:w-[90%]">
          <div className=" w-[100%] mx-auto flex flex-col">
            <p className="text-white font-bold text-4xl text-start leading-loose">
              "We’ve selected Mambu’s composable platform to build Vietnam’s
              first digital only bank as it is fully scalable, allowing us to
              grow quickly and respond with agility to customer needs as they
              arise. The Mambu platform is also completely configurable, meaning
              we can design it to meet our specific requirements."
            </p>
          </div>
          <div className="flex justify-end py-20">
            <img
              className="w-[100px] "
              src="https://mambu.com/_ipx/w_1920,q_75/https%3A%2F%2Fcdn.sanity.io%2Fimages%2F0k2k2bbv%2Fproduction%2F9e673b1fc643ccf6b0718b927d21caa61ef323a0-201x67.png?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F0k2k2bbv%2Fproduction%2F9e673b1fc643ccf6b0718b927d21caa61ef323a0-201x67.png&w=1920&q=75"
            ></img>
          </div>
        </div>
      </div>
      {/* End Section  Quotations */}

      <div className=" grid grid-cols-2  mx-auto w-[70%] py-20 md:max-xl:grid-cols-1">
        <div className="w-[80%] mx-auto">
          <p className="text-start">
            Mambu gives you a composable technology foundation to enable a new
            agile-first operating model for your business:
          </p>

          <ul className="list-disc text-start  py-10 pvmax:max-md:mx-auto ">
            <li className="py-2">
              Win customer hearts with financial experiences tailored to their
              needs
            </li>
            <li className="py-2">
              Innovate faster and go further than your competitors
            </li>
            <li className="py-2">
              Tap into opportunities to grow and monetise services with low
              capital investment
            </li>
          </ul>
        </div>
        <div className=" ">
          <img
            className=" "
            src="https://cdn.sanity.io/images/0k2k2bbv/production/c542ee8716170794b107141390790f32ca4dfa9b-1200x1600.jpg?rect=0,338,1113,896&w=800&h=644&q=75&fit=max&auto=format"
          ></img>
        </div>
      </div>

      {/* Start Section Customer stories */}

      <div className="py-20 mx-auto w-[70%] md:max-xl:w-[90%]">
        <p className="text-5xl font-bold text-start">Customer stories</p>
        <div className="grid grid-cols-2 gap-20 py-20 md:max-xl:grid-cols-1">
          {dataCustomerstories.map((item, index) => {
            return (
              <CardCusStories
                description={item.description}
                img={item.img}
                title={item.title}
                key={index}
              />
            );
          })}
        </div>
      </div>
      {/* End Section Customer stories */}
      {/* <div className="w-[70%] mx-auto  grid grid-cols-3 gap-16 mb-10 sm:max-xl:grid-cols-2 sm:max-xl:w-[95%] pvmax:max-sm:grid-cols-1 pvmax:max-sm:w-[80%] ">
        {dataInsights.map((item, index) => {
          return (
            <CardFeatured
              key={item.key}
              img={item.img}
              tags={item.tags}
              desTime={item.desTime}
              title={item.title}
              descrption={item.descrption}
            />
          );
        })}
      </div> */}
      <div className="w-[70%] mx-auto py-20 md:max-xl:w-[90%] ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {dataInsights.map((item, index) => {
            return (
              <SwiperSlide className="p-2">
                <CardFeatured
                  key={item.key}
                  img={item.img}
                  tags={item.tags}
                  desTime={item.desTime}
                  title={item.title}
                  descrption={item.descrption}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="  w-[100vw] bg-gradient-to-r from-[#6a2daa] to-[#01c5af] py-24 flex flex-col items-center gap-10 ">
        <p className="text-white font-bold text-8xl text-start mx-auto pvmax:max-md:text-5xl pvmax:max-md:text-center ">
          Learn more
        </p>
        <p className="text-white font-bold text-xl text-start mx-auto pvmax:max-md:text-5xl pvmax:max-md:text-center ">
          Curious about our platform?
        </p>

        <button className="bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-black hover:text-white">
          <p className="">Contact us</p>
        </button>
      </div>
    </div>
  );
};

export default Composable;
