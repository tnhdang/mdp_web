/** @format */

import React from "react";
import {
  dataCore,
  dataCustomerstories_2,
  dataKeepReading,
} from "../../utils/Mockdata";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { CardCusStories, CardFeatured, CardDisrupt } from "../../components";
import CardStatic from "./../../components/Card/CardStatic";
const MultiCloud = () => {
  return (
    <div>
      <div className=" h-[400px] w-[100vw] bg-gradient-to-r from-[#14acbb] to-[#926db6] flex items-center">
        <div className="  w-[70%] mx-auto pvmax:max-lg:w-[90%] ">
          <p className="text-white text-7xl  font-bold text-start  w-[60%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-4xl">
            Our cloud banking platform
          </p>
        </div>
      </div>
      <div className="mx-auto w-[70%] py-20 pvmax:max-lg:w-[90%] ">
        <p className="text-start font-bold text-lg w-[70%] pvmax:max-lg:w-[100%]">
          Financial services providers have to be more flexible and evolve
          quickly. How do they do this? By embracing cloud transformation to
          quickly adapt to market changes and consumer shifts. Mambu is cloud
          native. And our multi-cloud approach lets you choose how to build or
          enhance your financial cloud journey.
        </p>
      </div>
      <div className="flex w-[70%] mx-auto py-10 pvmax:max-lg:w-[90%]">
        <p className="text-5xl font-bold ">Cloud banking is now.</p>
      </div>
      <div className="grid grid-cols-2 w-[70%] mx-auto py-10 pvmax:max-lg:w-[90%] md:max-lg:grid-cols-1 md:max-lg:w-[90%] pvmax:max-md:grid-cols-1">
        <div className="flex flex-col  ">
          <ul className="list-disc text-start  py-10 pvmax:max-md:mx-auto ">
            <li className="py-2">
              The global finance cloud market is expected to grow more than{" "}
              <strong>22%</strong> {""}
              annually through 2025.
            </li>
            <li className="py-2">
              <strong>70%</strong> of incumbent banks are increasingly concerned
              about the limitation of their relatively slow pace of change. As a
              result, they are reviewing their banking platforms.
            </li>
            <li className="py-2">
              <strong>91%</strong> of financial services institutions find cloud
              migrations help them better adapt to changing customer behaviours
              and expectations.
            </li>
          </ul>
          <div className="flex py-10">
            <button className="py-2 px-4 rounded-2xl bg-secondary1 text-white font-bold hover:bg-black ">
              <p className="">Get in Touch</p>
            </button>
          </div>
        </div>
        <div className="">
          <img
            className="object-cover"
            src="https://cdn.sanity.io/images/0k2k2bbv/production/a572bb919585d7f9af7a23fff990c9f398b0e0ac-1200x800.png?w=800&h=533&q=75&fit=max&auto=format"
          ></img>
        </div>
      </div>
      <div className="flex w-[70%] mx-auto py-10 pvmax:max-lg:w-[90%]">
        <p className="text-5xl font-bold ">
          Core on the cloud propels innovation
        </p>
      </div>
      <div className="grid grid-cols-3 mx-auto w-[70%] gap-10 py-20 sm:max-lg:grid-cols-2 sm:max-xl:w-[95%] pvmax:max-sm:grid-cols-1 pvmax:max-sm:w-[80%] ">
        {dataCore.map((item, index) => {
          return (
            <>
              <div className="">
                <div className="bg-white p-4  shadow-md shadow-gray-200">
                  <img className="w-32 h-32 object-cover" src={item.img}></img>
                  <div className="py-20">
                    <p className="text-start line-clamp-3">{item.desc}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="  w-[100vw] bg-gradient-to-r from-[#37a95b] to-[#0a565b] py-24 ">
        <div className="mx-auto w-[70%]">
          <div className=" w-[100%] mx-auto flex flex-col">
            <p className="text-white font-bold text-4xl text-start leading-loose">
              "With Mambu we have selected the best-performing and most reliable
              cloud-native banking platform on the market, and we feel very
              confident that we have made the right decision."
            </p>
          </div>
          <div className="flex justify-end py-20 flex-col items-end text-white text-lg font-bold">
            <p className="">Daniel Budirahayu</p>
            <p className="">President Director, Bank Ina</p>
          </div>
        </div>
      </div>
      <div className="flex w-[70%] mx-auto py-10 pvmax:max-lg:w-[90%]">
        <p className="text-4xl font-bold ">Mambu, born in the cloud</p>
      </div>
      <div className="flex w-[70%] mx-auto py-10 pvmax:max-lg:w-[90%]">
        <p className="text-2xl font-bold ">
          Run with confidence on three leading cloud providers
        </p>
      </div>
      <div className="mx-auto w-[70%] pvmax:max-lg:w-[90%] pb-20">
        <p className="text-start  text-lg w-[70%] pvmax:max-lg:w-[100%]">
          Mambu’s customers can choose their cloud provider:{" "}
          <a className="text-green-400 cursor-pointer underline">
            Google Cloud Platform
          </a>
          ,{" "}
          <a className="text-green-400 cursor-pointer underline">
            Microsoft Azure
          </a>
          , or <a className="text-green-400 cursor-pointer underline">AWS</a>{" "}
          based on their specific business, technical and regulatory
          requirements, whether located in the same or a different geographical
          region, and without impacting availability or service levels.
        </p>
      </div>
      <div className="mx-auto w-[70%]">
        <img
          className=""
          src="https://cdn.sanity.io/images/0k2k2bbv/production/b65f50fb89b8da94cc70070eadef2be4f94b1205-631x50.svg"
        ></img>
      </div>
      <div className="flex w-[70%] mx-auto py-10 pvmax:max-lg:w-[90%]">
        <p className="text-4xl font-bold ">
          Key benefits of Mambu’s multi-cloud approach
        </p>
      </div>

      <div className="flex w-[70%] mx-auto pt-10 pvmax:max-lg:w-[90%]">
        <p className="text-4xl font-bold ">Customer stories</p>
      </div>

      <div className="grid grid-cols-2 mx-auto w-[70%] gap-10 py-10">
        {dataCustomerstories_2.map((item, index) => {
          return (
            <>
              <CardCusStories {...item}></CardCusStories>
            </>
          );
        })}
      </div>

      <div className="flex w-[70%] mx-auto py-10 pvmax:max-lg:w-[90%]">
        <p className="text-4xl font-bold ">Keep reading</p>
      </div>
      <div className="w-[70%] mx-auto pb-32 md:max-xl:w-[90%] pvmax:max-md:w-[100%] ">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            280: {
              slidesPerView: 1,
            },
            360: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 3,
            },
            1536: {
              slidesPerView: 3,
            },
            1700: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className=" mx-auto"
        >
          {dataKeepReading.map((item, index) => {
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
      <div className="  w-[100vw] bg-gradient-to-r from-[#6b2baa] to-[#02c6b0] py-24 flex flex-col items-center gap-10 ">
        <p className="text-white font-bold text-8xl text-start mx-auto pvmax:max-md:text-5xl pvmax:max-md:text-center ">
          Learn more?
        </p>
        <div className="">
          <p className="text-white pb-2">Curious about our platform?</p>
          <button className="bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-black hover:text-white">
            <p className="">Contact us</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiCloud;
