/** @format */

import React, { useState, useEffect } from "react";
import {
  CardDisrupt,
  CardStatic,
  CardArticle,
  CardWhoTransform,
} from "../../../components";
import {
  dataDisrupt,
  dataArticle,
  dataWhoTransform,
  dataSecurity,
  dataInfrastructure,
  dataSecurityfeatures,
} from "../../../utils/Mockdata";

const SecurityAndCompliance = () => {
  return (
    <div>
      <div className=" h-[400px] w-[100vw] bg-[#212121] flex items-center">
        <div className="  w-[70%] mx-auto pvmax:max-lg:w-[90%] ">
          <p className="text-white text-7xl  font-bold text-start  w-[60%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-4xl">
            Security and compliance
          </p>
        </div>
      </div>

      {/* Start Section Breacrumb */}

      {/* End Section Breacrumb */}

      <div className="mx-auto w-[70%] py-20 pvmax:max-lg:w-[90%] ">
        <p className="text-start font-bold text-lg w-[70%] pvmax:max-lg:w-[100%]">
          The Mambu platform lives up to the highest financial security
          standards. It’s also compliant with the most important industry
          requirements, as verified and assured by an external certification
          body. Here’s how we do it.
        </p>
      </div>
      {/* Start Section technology that delivers more */}

      <div className="grid grid-cols-2 mx-auto w-[70%] gap-10 pvmax:max-md:w-[90%] pvmax:max-md:grid-cols-1">
        {dataSecurity.map((item, index) => {
          return (
            <>
              <CardArticle
                title={item.title}
                description={item.desc}
                key={index}
              />
            </>
          );
        })}
      </div>

      <div className="w-[70%] mx-auto py-20">
        <p className="text-5xl font-bold text-start">
          Infrastructure & regulation
        </p>
      </div>
      <div className=" grid grid-cols-2 gap-10 w-[70%] mx-auto md:max-lg:w-[90%] pvmax:max-md:grid-cols-1 pvmax:max-md:w-[90%] pb-10">
        {dataInfrastructure.map((item, index) => {
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
      </div>

      <div className="w-[70%] mx-auto py-20">
        <p className="text-5xl font-bold text-start">Security features</p>
      </div>
      <div className=" grid grid-cols-3 gap-10 w-[70%] mx-auto md:max-lg:w-[90%] md:max-xl:grid-cols-2 pvmax:max-md:grid-cols-1 pvmax:max-md:w-[90%] pb-10">
        {dataSecurityfeatures.map((item, index) => {
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
      </div>
      <div className="w-[70%] mx-auto pt-20 pb-10">
        <p className="text-5xl font-bold text-start">
          Reporting security issues
        </p>
      </div>

      <div className="mx-auto w-[70%] py-20 pvmax:max-lg:w-[90%] ">
        <p className="text-start  text-lg w-[70%] pvmax:max-lg:w-[100%]">
          To report any security issues, please{" "}
          <a className="font-bold underline hover:text-green-500">
            contact our security team
          </a>{" "}
          with an encrypted email using our{" "}
          <a className="font-bold underline hover:text-green-500">
            Public GPG key
          </a>
          . Our security team will respond as quickly as possible. We kindly ask
          you to not publicly disclose any security issue until it has been
          addressed by Mambu.
        </p>
      </div>

      {/* Start Section Ready Contact */}

      <div className="  w-[100vw] bg-gradient-to-r from-[#7877fe] to-[#6e28aa] py-24 flex flex-col items-center gap-10 ">
        <p className="text-white font-bold text-8xl text-start mx-auto pvmax:max-md:text-5xl pvmax:max-md:text-center ">
          Security at Mambu
        </p>
        <p className="text-white font-bold">
          If you want to know more about how we protect your data or your
          customers’ data, drop us a line.
        </p>
        <button className="bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-black hover:text-white">
          <p className="">Reach out today</p>
        </button>
      </div>
      {/* End Section Ready Contact */}
    </div>
  );
};

export default SecurityAndCompliance;
