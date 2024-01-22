/** @format */

import React from "react";
import imageBanner from "../../assets/images/banner.png";
const Banner = () => {
  return (
    <div className="pt-2">
      <div className="relative flex gap-2 w-[100%] mx-auto ">
        <svg
          data-testid="double-forward-slash"
          className="absolute h-[300px] w-[700px ] overflow-hidden -left-60 -z-10"
          version="1.1"
          viewBox="0 0 700 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd" stroke-width="1">
            <path
              d="m448 0-332.19 307h-115l332.19-307h115zm260 0-332.19 307h-115l332.19-307h115z"
              fill="#F6EBE0"
            ></path>
          </g>
        </svg>
        <div className="w-[50%] flex flex-col gap-6 pl-40 justify-center">
          <p className="text-6xl font-bold text-start">
            Join the trailblazers changing banking.
          </p>
          <p className="text-2xl text-start">
            The best financial brands in the world are powered by Mambu's cloud
            banking platform.
          </p>
          <button className="bg-[#4FB645] hover:bg-black rounded-3xl px-4 py-2 text-white font-bold w-[60%] ">
            Explore our platform
          </button>
        </div>
        <div className="w-[70%]">
          <img className="" src={imageBanner}></img>
        </div>
      </div>

      <div className="w-[40%] mx-auto pt-10">
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
