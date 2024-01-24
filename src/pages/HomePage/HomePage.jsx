/** @format */

import React, { useState } from "react";
import {
  SliderBanner,
  CardText,
  Banner,
  CardTabs,
  CardFeatured,
  CardStatic,
  FormSubcribe,
} from "../../components";
import ImgCampain from "../../assets/images/campain.svg";
import ImgTab1 from "../../assets/images/imageTab1.png";
import ImgTab2 from "../../assets/images/imageTab2.webp";
import ImgTab3 from "../../assets/images/imageTab3.webp";
import { dataFeatured, dataFriends } from "../../utils/Mockdata";
const HomePage = () => {
  const [isTab1, setIsTab1] = useState(true);
  const [isTab2, setIsTab2] = useState(false);
  const [isTab3, setIsTab3] = useState(false);

  return (
    <>
      <Banner />
      <SliderBanner></SliderBanner>
      <div className="pt-20">
        <CardText></CardText>
      </div>

      <div className="w-[75%] mx-auto cursor-pointer pt-10 pb-20 md:max-xl:w-[90%] pvmax:max-md:w-[95%]">
        <img
          className="object-cover rounded-lg  translate-y-0  hover:-translate-y-2 duration-500"
          style={{}}
          src={ImgCampain}
        ></img>
      </div>

      {/* Section Card Tab */}
      <div className="flex w-[75%] mx-auto gap-10  pvmax:max-xl:hidden">
        <button
          className={`text-3xl text-[#4fb645] font-bold focus:outline-none  focus:text-black focus:border-b-[3px] focus:border-black  ${
            isTab1 ? "text-black border-b-[3px] border-black " : ""
          }`}
          onClick={() => {
            setIsTab1(true);
            setIsTab2(false);
            setIsTab3(false);
          }}
        >
          <p className="">Composable</p>
        </button>

        <button
          className="text-3xl text-[#4fb645] font-bold focus:outline-none  focus:text-black focus:border-b-[3px] focus:border-black "
          onClick={() => {
            setIsTab1(false);
            setIsTab2(true);
            setIsTab3(false);
          }}
        >
          <p className="">Lending</p>
        </button>

        <button
          className="text-3xl text-[#4fb645] font-bold focus:outline-none  focus:text-black focus:border-b-[3px] focus:border-black "
          onClick={() => {
            setIsTab1(false);
            setIsTab2(false);
            setIsTab3(true);
          }}
        >
          <p className="">Deposits</p>
        </button>
      </div>
      <CardTabs
        className={` ${
          isTab1 ? "grid" : "hidden"
        } grid-cols-2 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[75%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
        title={"A composable approach"}
        description={
          "Composable banking started here at Mambu. We founded the company when we realised that legacy and inflexible core banking systems were a barrier to true financial innovation. With Mambu’s composable approach you can combine independent components and services to build exactly what you need, when you need it."
        }
        image={ImgTab1}
        titleButton={"Learn More"}
      ></CardTabs>
      <CardTabs
        className={`  ${
          isTab2 ? "grid" : "hidden"
        } grid-cols-2 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[75%] py-10 mx-auto my-10 rounded-lg   pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
        title={"Lending engine"}
        description={
          "Mambu’s cloud-native lending engine enables banks, fintechs, retailers, corporates and others to build a variety of loan offerings tailored to customer needs. From embedded finance, buy now pay later and mortgages to SME lending and purchase financing."
        }
        image={ImgTab2}
        titleButton={"Explore lending"}
      ></CardTabs>
      <CardTabs
        className={` ${
          isTab3 ? "grid" : "hidden"
        } grid-cols-2 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[75%] py-10 mx-auto my-10 rounded-lg   pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
        title={"Deposits engine"}
        description={
          "With Mambu, you get a dynamic deposits engine that can power a wide variety of deposit-based offerings. Build a bank from scratch or take existing offerings digital-first, From banks of all sizes, building societies and credit unions, to digital wallets, prepaid cards and more."
        }
        image={ImgTab3}
        titleButton={"Discover deposits"}
      ></CardTabs>
      {/* End Section Card Tab */}

      {/* Start Section Featured */}
      <div className="py-10">
        <p className="text-5xl font-bold">Featured insights</p>
      </div>
      <div className="w-[70%] mx-auto  grid grid-cols-3 gap-16 mb-10 sm:max-xl:grid-cols-2 sm:max-xl:w-[95%] pvmax:max-sm:grid-cols-1 pvmax:max-sm:w-[80%] ">
        {dataFeatured.map((item, index) => {
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
      </div>
      {/* End Section  Featured */}

      {/* Start Section Mambu number */}
      <div className="py-10">
        <p className="text-5xl font-bold text-center">Mambu by the numbers</p>
      </div>
      <div className="grid grid-cols-3 gap-x-16 gap-y-28 pl-20 w-[90%] mx-auto sm:max-lg:grid-cols-2 sm:max-lg:w-[100%] pvmax:max-sm:grid-cols-1 pvmax:max-sm:w-[100%] pvmax:max-sm:pl-10">
        <CardStatic title={"Global customers"} Prefix={"+"} number={260} />
        <CardStatic title={"End users"} Prefix={"m"} number={101} />
        <CardStatic title={"API calls per day"} Prefix={"m"} number={200} />
        <CardStatic
          title={"Reduction in carbon footprint vs on-prem"}
          Prefix={"%"}
          number={40}
        />
        <CardStatic title={"Countries"} Prefix={""} number={65} />
        <CardStatic
          title={"Higher NPS score than other providers"}
          Prefix={"X"}
          number={4}
        />
      </div>
      {/* End Section Mambu number */}

      {/* Start Section Friends */}
      <div className="py-36">
        <p className="text-5xl font-bold">Friends with everyone you know</p>
      </div>
      <div className="w-[75%] mx-auto grid grid-cols-4 pl-20 gap-20 pvmax:max-md:grid-cols-2 pvmax:max-md:w-[90%] pvmax:max-md:pl-0 md:max-xl:grid-cols-3 md:max-xl:w-[100%] md:max-xl:pl-0">
        {dataFriends.map((item, index) => {
          return (
            <div className="">
              <img className="" src={item.img}></img>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center py-20">
        <button className="flex justify-center items-center px-8 py-4 bg-secondary1 rounded-3xl hover:bg-black">
          <p className="text-white ">Find out more</p>
        </button>
      </div>

      {/* End Section Friends */}

      {/* Start Subcribe */}
      <div className="bg-[#f5ebe1] py-32">
        <div className="grid grid-cols-2  mx-auto w-[75%] pvmax:max-md:grid-cols-1 pvmax:max-md:w-[90%]">
          <div className="flex flex-col justify-center py-2">
            <p className="text-6xl font-bold">Stay in the know</p>
            <br></br>
            <p className="text-xl">Sign up for our Mambu+ newsletter</p>
          </div>
          <FormSubcribe></FormSubcribe>
        </div>
      </div>
      {/* End Subcribe */}
    </>
  );
};

export default HomePage;
