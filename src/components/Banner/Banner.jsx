/** @format */

import React from "react";
import imageBanner from "../../assets/images/banner.png";
import "./style.css";
const Banner = () => {
  return (
    <div className="pt-2">
      <div className="relative flex gap-2 w-[100%] mx-auto pvmax:max-xl:flex-col ">
        <div className="w-[40%] flex flex-col gap-6 pl-40 justify-center pvmax:max-xl:w-[100%] pvmax:max-xl:items-center pvmax:max-xl:mx-auto pvmax:max-xl:pl-0  ">
          <p className="text-6xl font-bold text-start lg:max-xl:w-[50%] lg:max-xl:mx-auto lg:max-xl:text-center pvmax:max-lg:w-[90%] pvmax:max-lg:mx-auto pvmax:max-lg:text-center ">
            Join the trailblazers changing banking.
          </p>
          <p className="text-2xl text-start lg:max-xl:w-[50%] pvmax:max-lg:w-[90%] pvmax:max-xl:mx-auto pvmax:max-xl:text-center  ">
            The best financial brands in the world are powered by Mambu's cloud
            banking platform.
          </p>
          <div className="flex">
            <button className="bg-[#4FB645] hover:bg-black rounded-3xl px-4 py-2 text-white font-bold  ">
              Explore our platform
            </button>
          </div>
        </div>
        <div className="w-[70%] lg:max-xl:mx-auto pvmax:max-lg:w-[90%]  ">
          <img className="" src={imageBanner}></img>
        </div>
      </div>

      <div className="w-[40%] mx-auto pt-10 lg:max-xl:w-[60%]   pvmax:max-lg:w-[90%]">
        <p className="text-3xl">
          We enable our customers to build great banking experiences that their
          customers love; in a <strong>faster</strong> and more{" "}
          <strong>flexible</strong> way than ever before.
        </p>
      </div>
    </div>
  );
};

export default Banner;
