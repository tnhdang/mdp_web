/** @format */

import React, { useState } from "react";
import "./style.css";
import {
  SliderBanner,
  CardText,
  Banner,
  CardTabs,
  CardFeatured,
  CardStatic,
  FormSubcribe,
  EndSolutions,
  Sustainability,
} from "../../components";
import ImgCampain from "../../assets/HomePage/banner.png";
import ImgTab1 from "../../assets/images/imageTab1.png";
import ImgTab2 from "../../assets/images/imageTab2.webp";
import ImgTab3 from "../../assets/images/imageTab3.webp";
import Img4 from "../../assets/HomePage/808.jpg"
import draftsolutioncontent from "../../assets/HomePage/solution.jpg"
import SolutionsImg from "../../assets/HomePage/Solution.png"
import { dataFeatured, dataFriends } from "../../utils/Mockdata";
const HomePage = () => {
  const [isTab1, setIsTab1] = useState(true);
  const [isTab2, setIsTab2] = useState(false);
  const [isTab3, setIsTab3] = useState(false);
  const [isTab4, setIsTab4] = useState(false);

  

  return (
    <>
    <div className=" h-[100vh] w-[100%]  top-home flex items-center pvmax:max-lg:flex-col pvmax:max-lg:h-fit pvmax:max-lg:justify-center">
        <div className="  w-[70%] mx-auto pvmax:max-lg:w-[100%] flex justify-end pvmax:max-lg:justify-center ">
          <p className="text-white text-[3rem]  text-start pvmax:max-lg:text-center pvmax:max-lg:pb-10  w-[90%] md:max-lg:text-5xl pvmax:max-lg:w-[70%] pvmax:max-md:text-[3rem] font-mono bankname">
          Mdp vision is to universalise banking for community well-being and a greener world
          </p>
        </div>
        <div className="  w-[50%] pl-[6rem] h-[100vh] mx-auto pvmax:max-lg:w-[60%] pvmax:max-lg:h-[30vh] pvmax:max-lg:mb-[5rem] pvmax:max-lg:pl-0  flex flex-col  justify-center align-middle ">
          <div className="w-[70%] h-[50%] top-home-img pvmax:max-lg:w-[100%] pvmax:max-lg:h-[100%]">
          </div>
          <div className="w-[100%]">
          <p className="text-white text-[1rem]  text-start  w-[60%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-[1rem] font-mono uppercase bankdescription">
          A digital meet-up for agility, flexibility and Innovation
          </p>
          </div>
          {/* <p className="text-white text-3xl  text-start  w-[60%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-5xl font-mono">
          A digital meet-up for agility, flexibility and Innovation
          </p> */}
        </div>
        
      </div>




      <Banner />
      <SliderBanner></SliderBanner>
      {/* <div className="pt-20 after-slider">
        <CardText></CardText>
      </div> */}

      {/* <div className="w-[75%] mx-auto cursor-pointer pt-10 pb-20 md:max-xl:w-[90%] pvmax:max-md:w-[95%]">
        <img
          className="object-cover rounded-lg  translate-y-0  hover:-translate-y-2 duration-500"
          style={{}}
          src={ImgCampain}
        ></img>
      </div> */}

{/* Solutions */}
<div className=" h-[15rem] pvmax:max-lg:h-[10rem] w-[100%] bg-gradient-to-r from-[#00C7B0] to-[#7926F0] flex items-center solution">
        <div className="  w-[70%] mx-auto pvmax:max-lg:w-[90%] ">
          <p className="text-white text-8xl  font-bold text-start  w-[60%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-5xl">
          Solutions
          </p>
        </div>
      </div>

      <div className="w-[100%] mx-auto pl-[8rem] pvmax:max-lg:pl-[2rem] py-10 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
        <p className="text-[1.1rem] font-bold text-start w-[80%] py-10 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%]  ">
        MDP is proud to announce our strategic partnership with Mambu, a leading digital core banking platform, 
        to revolutionize the banking landscape and empower financial institutions (FIs) to thrive in the digital 
        age. Through this collaboration, we are harnessing the power of Mambu's cutting-edge technology to build 
        a comprehensive tech stack and Banking-as-a-Service (BaaS) platform that enables banks and FIs to innovate 
        their banking products and offerings with unprecedented speed, ease, and cost-effectiveness.
        </p>
        </div>

        <div className="w-[80%] mx-auto py-10 md:max-xl:w-[90%] pv:max-md:w-[90%]">
        <div className=" grid grid-cols-2 md:max-xl:grid-cols-1 pv:max-md:grid-cols-1">
          <div className="text-start pv:max-md:w-[100%] flex flex-col justify-center MetatronsCube">
            <p className="w-[100%] leading-10 text-[1.1rem] pb-5 pv:max-md:w-[100%] pvmax:max-lg:px-[1rem] pvmax:max-lg:leading-8">
            Our solution integrates <span className="underline">Best-for-Purpose</span> solution partners, carefully selected for their expertise and 
            innovation, to create a robust ecosystem that caters to the diverse needs of banks and FIs. By leveraging 
            the strengths of these partners, we provide a holistic suite of solutions that cover every aspect of banking 
            operations, from customer experience to back-office processes.
            </p>
            
            <button className="px-4 py-2 pvmax:max-lg:my-[3rem] rounded-xl bg-secondary1 hover:bg-black w-fit">
              <p className="text-white font-bold">Get in touch</p>
            </button>
            {/* <p className="w-[70%] font-bold leading-5 text-[1.5rem] pb-10 pt-10 pv:max-md:w-[100%]">
            Key features of our Mambu-powered BaaS platform include:
            </p> */}
          </div>
          <div className="md:max-xl:w-[90%] mx-auto pv:max-md:w-[90%] pvmax:max-lg:w-full pvmax:max-lg:pl-0 pl-[3rem]">
            <img
              className=""
              src={SolutionsImg}
            ></img>
          </div>
        </div>
      </div>





      {/* Section Card Tab */}
      <p className="w-[100%] font-bold leading-5 pvmax:max-lg:leading-10 pvmax:max-lg:py-0 pvmax:max-lg:pl-[2rem] text-[1.5rem] py-16 pv:max-md:w-[100%] text-start text-[2.2rem] text-[#4fb645] pl-[10rem] Keyfeatures">
            Key features of our Mambu-powered BaaS platform include:
            </p>
      <div className="flex w-[75%] mx-auto gap-10  pvmax:max-xl:hidden">
      <button
          className={`text-[1.5rem] text-[#4fb645] font-bold focus:outline-none  focus:text-black focus:border-b-[3px] focus:border-black  ${
            isTab1 ? "text-black border-b-[3px] border-black " : ""
          }`}
          onClick={() => {
            setIsTab1(true);
            setIsTab2(false);
            setIsTab3(false);
            setIsTab4(false);
          }}
        >
          <p className="">Accelerated Time</p>
        </button>
        
        <button
          className={`text-[1.5rem] text-[#4fb645] font-bold focus:outline-none  focus:text-black focus:border-b-[3px] focus:border-black  ${
            isTab2 ? "text-black border-b-[3px] border-black " : ""
          }`}
          onClick={() => {
            setIsTab1(false);
            setIsTab2(true);
            setIsTab3(false);
            setIsTab4(false);
          }}
        >
          <p className="">Interface</p>
        </button>

        <button
          className="text-[1.5rem] text-[#4fb645] font-bold focus:outline-none  focus:text-black focus:border-b-[3px] focus:border-black "
          onClick={() => {
            setIsTab1(false);
            setIsTab2(false);
            setIsTab3(true);
            setIsTab4(false);
          }}
        >
          <p className="">TCO</p>
        </button>

        <button
          className="text-[1.5rem] text-[#4fb645] font-bold focus:outline-none  focus:text-black focus:border-b-[3px] focus:border-black "
          onClick={() => {
            setIsTab1(false);
            setIsTab2(false);
            setIsTab3(false);
            setIsTab4(true);
          }}
        >
          <p className="">Innovative Product</p>
        </button>
      </div>
      <CardTabs
        className={` ${
          isTab1 ? "CardTabsSolutions grid" : "hidden"
        } grid-cols-2 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[85%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
        title={"Accelerated Time to Market:"}
        description={
          "With pre-built integrations and modular architecture, our platform enables banks and FIs to launch new products and services in record time. By eliminating the need for lengthy development cycles and customizations, we empower our clients to stay ahead of the competition and capitalize on market opportunities swiftly."
        }
        image="https://img.freepik.com/free-vector/digital-money-transfer-technology-background_1017-17454.jpg?t=st=1708920076~exp=1708923676~hmac=da9da51f78a162a95287f8c18d67418a50d4cb4195ed8f57b709b072aa19d8b5&w=826"
        titleButton={"Learn More"}
      ></CardTabs>
      <CardTabs
        className={` ${
          isTab2 ? "CardTabsSolutions grid" : "hidden"
        } grid-cols-2 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[85%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
        title={"Easy-to-Use Interface:"}
        description={
          "Our user-friendly interface and intuitive design make it easy for banks and FIs to onboard and manage customers, process transactions, and access valuable insights. Whether it's configuring products, managing workflows, or analyzing data, our platform streamlines every aspect of banking operations for maximum efficiency and convenience."
        }
        image="https://img.freepik.com/free-vector/digital-money-transfer-technology-background_1017-17454.jpg?t=st=1708920076~exp=1708923676~hmac=da9da51f78a162a95287f8c18d67418a50d4cb4195ed8f57b709b072aa19d8b5&w=826"
        titleButton={"Learn More"}
      ></CardTabs>
      <CardTabs
        className={`  ${
          isTab3 ? "CardTabsSolutions grid" : "hidden"
        } grid-cols-2 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[85%] py-10 mx-auto my-10 rounded-lg   pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
        title={"Lower Total Cost of Ownership (TCO):"}
        description={
          "By adopting a cloud-native approach and leveraging Mambu's scalable infrastructure, our platform offers unparalleled cost savings and flexibility. Banks and FIs can scale their operations seamlessly to accommodate growth and fluctuations in demand, without incurring significant upfront investments or ongoing maintenance costs."
        }
        image= "https://img.freepik.com/free-vector/digital-money-transfer-technology-background_1017-17454.jpg?t=st=1708920076~exp=1708923676~hmac=da9da51f78a162a95287f8c18d67418a50d4cb4195ed8f57b709b072aa19d8b5&w=826"
        titleButton={"Explore lending"}
      ></CardTabs>
      <CardTabs
        className={` ${
          isTab4 ? "CardTabsSolutions grid" : "hidden"
        } grid-cols-2 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[85%] py-10 mx-auto my-10 rounded-lg   pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
        title={"Innovative Product Offerings: "}
        description={
          "Through our partnership with Best-for-Purpose solution partners, we empower banks and FIs to innovate their product offerings and deliver differentiated experiences to their customers. Whether it's launching digital lending solutions, personalized wealth management tools, or AI-powered analytics, our platform provides the flexibility and agility to adapt to changing market trends and customer preferences."
        }
        image="https://img.freepik.com/free-vector/digital-money-transfer-technology-background_1017-17454.jpg?t=st=1708920076~exp=1708923676~hmac=da9da51f78a162a95287f8c18d67418a50d4cb4195ed8f57b709b072aa19d8b5&w=826"
        titleButton={"Discover deposits"}
      ></CardTabs>
      {/* End Section Card Tab */}

        <EndSolutions/>

      <Sustainability/>

      
      {/* <div className="py-10">
        <p className="text-5xl font-bold">Featured insights</p>
      </div>

      <div className="w-[70%] mx-auto  grid grid-cols-3 gap-16 mb-10 sm:max-xl:grid-cols-2 sm:max-xl:w-[95%] pvmax:max-sm:grid-cols-1 pvmax:max-sm:w-[80%]">
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
      


      <div className="py-10">
        <p className="text-5xl font-bold text-center">Mambu by the numbers</p>
      </div>
      <div className="Mambubythenumbers grid grid-cols-3 gap-x-16 gap-y-28 pl-20 w-[90%] mx-auto sm:max-lg:grid-cols-2 sm:max-lg:w-[100%] pvmax:max-sm:grid-cols-1 pvmax:max-sm:w-[100%] pvmax:max-sm:pl-10">
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
       */}
    </>
  );
};

export default HomePage;
