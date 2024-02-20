/** @format */

import React from "react";
// import imageBanner from "../../assets/images/banner.png";
// import baasimg from "../../assets/HomePage/baas.mp4";
import "./style.css";
const Banner = () => {
  return (
    <div className="pt-2 banner">
      <div className="relative flex gap-2 w-[100%] mx-auto pvmax:max-xl:flex-col ">
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
          {/* <video src={baasimg} autoPlay loop /> */}
        </div>
      </div>

      <div className="w-[50%] mx-auto pt-10 lg:max-xl:w-[60%]   pvmax:max-lg:w-[90%]">
        <p className="text-3xl">
        At MDP, we are dedicated to driving transformative change and enabling sustainable growth for businesses across industries. With a deep understanding of the complexities of today's business landscape, we offer expert guidance and innovative solutions in three key areas:
        </p>
      </div>
    </div>
  );
};

export default Banner;
