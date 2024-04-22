/** @format */

import React, { useState } from "react";
import "./style.css";
import { Col, Row, Carousel, Card } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

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
import SolutionsImg from "../../assets/HomePage/solutionscontent.svg"
import SolutionCardImg from "../../assets/mdpcanva2.jpg"

const { Meta } = Card;
const HomePage = () => {
  const [isTab1, setIsTab1] = useState(true);
  const [isTab2, setIsTab2] = useState(false);
  const [isTab3, setIsTab3] = useState(false);
  const [isTab4, setIsTab4] = useState(false);

  const dataSlider = [
    {
      key: "1",
      picture: "https://media.licdn.com/dms/image/D5612AQGfL4GZuo02cA/article-cover_image-shrink_423_752/0/1698225352035?e=1715817600&v=beta&t=dV-VNNBYORvYiqEb0pp-Uh8J9UWqgCQ2RSvWsVtMNI4",
      title: "Sustainable banking – A new model that banks must focus on.",
      link: "https://www.linkedin.com/pulse/sustainable-banking-new-model-banks-must-focus-pham-quang-minh-5chec?trackingId=Y0p2AW9aTdqzaHwJ4GizGw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BUV65NL6GT%2FC9lKycUeazxg%3D%3D",
    },
    {
      key: "2",
      picture: "https://media.licdn.com/dms/image/D5612AQHMFnq6AmhKrg/article-cover_image-shrink_423_752/0/1688290148382?e=1715817600&v=beta&t=Pe76BCCMHnYTzO-cNI5uM3YE7V9FsZETODsgWEBrkE0",
      title: "Effective business model for banks in the digital landscape.",
      link: "https://www.linkedin.com/pulse/effective-business-model-banks-digital-landscape-pham-quang-minh?trackingId=Y0p2AW9aTdqzaHwJ4GizGw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BUV65NL6GT%2FC9lKycUeazxg%3D%3D",
    },
    {
      key: "3",
      picture: "https://media.licdn.com/dms/image/D5612AQE97Jhi13gr6w/article-cover_image-shrink_423_752/0/1688305249245?e=1715817600&v=beta&t=fttMt_SBQV7wRb9FiTgR3AlgaKCrJtp_FNDdqYOjACE",
      title: "Filling the SME lending gap – An opportunity for Vietnam banks",
      link: "https://www.linkedin.com/pulse/filling-sme-lending-gap-opportunity-vietnam-banks-pham-quang-minh?trackingId=Y0p2AW9aTdqzaHwJ4GizGw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BUV65NL6GT%2FC9lKycUeazxg%3D%3D",
    },
    {
      key: "4",
      picture: "https://media.licdn.com/dms/image/C4D12AQHlwYD5fhnvdQ/article-cover_image-shrink_423_752/0/1639025318700?e=1715817600&v=beta&t=pKcCLx03gcv3NAHVKwMbIdSqyDrFDW72YMP1R3xEgPQ",
      title: "Vietnam Banks in digital race – Gear up for success",
      link: "https://www.linkedin.com/pulse/vietnam-banks-digital-race-gear-up-success-pham-quang-minh?trackingId=Y0p2AW9aTdqzaHwJ4GizGw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BUV65NL6GT%2FC9lKycUeazxg%3D%3D",
    },
    {
      key: "5",
      picture: "https://media.licdn.com/dms/image/D5612AQFDHh01sYEgRw/article-cover_image-shrink_423_752/0/1686622466731?e=1715817600&v=beta&t=0-6Y8RkY5AT7VwZYk3LiqlYGKxbT7jsb6ybk_bukR5Q",
      title: "Simplify core banking transformation",
      link: "https://www.linkedin.com/pulse/simplify-core-banking-transformation-pham-quang-minh?trackingId=Y0p2AW9aTdqzaHwJ4GizGw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BUV65NL6GT%2FC9lKycUeazxg%3D%3D",
    },

  ];



  return (
    <>
      <div className="w-full h-fit flex justify-center items-center content-center mt-[2.5rem] mb-6 part1-home">
        <div className=" h-[60vh]  w-[67.37%]  pv:max-md:w-[90%]  px-[5rem] pvmax:max-lg:px-8 top-home flex items-center pvmax:max-lg:flex-col pvmax:max-lg:h-fit pvmax:max-lg:justify-center">
          <div className="  w-[70%] pvmax:max-lg:w-full mx-auto  flex justify-end pvmax:max-lg:justify-center ">
            <p className="text-white text-[1.8rem] pr-4 pvmax:max-lg:text-[1.1rem]  text-start pvmax:max-lg:text-center pvmax:max-lg:py-10  w-full pvmax-lg:text-5xl pvmax:max-lg:w-full pvmax:max-md:text-[1.1rem] pvmax:max-md:font-bold pvmax:max-md:w-full pvmax:max-md:pr-0 font-sans bankname">
              Our vision "universalise banking for community well-being and a greener world"
            </p>
          </div>
          <div className="  w-[50%]  h-[100vh] mx-auto pvmax:max-md:mx-0 pvmax:max-lg:w-[90%] pvmax:max-lg:h-[30vh] pvmax:max-lg:mb-[5rem] pvmax:max-lg:pl-0  flex flex-col  justify-center align-middle items-center ">
            <div className="w-[100%] h-[35%] top-home-img pvmax:max-lg:w-[80%]  pvmax:max-lg:h-[100%]">
            </div>
            <div className="w-[100%]">
              <p className="text-white text-[1.1rem]  text-start  w-[100%]  md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-[1rem] font-sans bankdescription">
                A digital meet-up for agility, flexibility and Innovation
              </p>
            </div>
          </div>

        </div>
      </div>





      <Banner />


      <SliderBanner></SliderBanner>

      {/* Solutions */}
      <div className=" h-[15rem] pvmax:max-lg:h-[10rem] w-[100%] bg-gradient-to-tr from-[#170F58] to-[#4fb645] flex items-center solution gradient-bar">
        <div className="  w-[67.37%] mx-auto pvmax:max-lg:w-[90%] ">
          <p className="text-white text-8xl  font-bold text-justify  w-[60%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-5xl">
            Solutions
          </p>
        </div>
      </div>
      <div className="w-full h-full solution-intro-container">
        <div className="w-full mx-auto md:max-xl:w-[90%] pv:max-md:w-[90%] flex content-center items-center justify-center ">
          <div className="w-[67.37%]   pvmax:max-lg:pl-0 py-9 md:max-xl:w-[80%] pv:max-md:w-[80%] solution-intro">
            <p className="text-[1.1rem] font-bold text-justify w-full py-10 pvmax:max-lg:py-5 md:max-xl:w-[100%] pv:max-md:w-[100%]  ">
              MDP is proud to announce our strategic partnership with Mambu, a leading digital core banking platform,
              to revolutionize the banking landscape and empower financial institutions (FIs) to thrive in the digital
              age. Through this collaboration, we are harnessing the power of Mambu's cutting-edge technology to build
              a comprehensive tech stack and Banking-as-a-Service (BaaS) platform that enables banks and FIs to innovate
              their banking products and offerings with unprecedented speed, ease, and cost-effectiveness.
            </p>
          </div>
        </div>


        <div className="w-full mx-auto pb-10 md:max-xl:w-[90%] pv:max-md:w-[90%] flex content-center items-center justify-center">
          <div className=" grid grid-cols-1 md:max-xl:grid-cols-1 pv:max-md:grid-cols-1 w-[67.37%] pv:max-md:w-[90%] ">
            <div className="text-justify pv:max-md:w-[100%] flex flex-col justify-center MetatronsCube">
              <p className="w-[100%] leading-7 text-[1.1rem] pb-5 pv:max-md:w-[100%] pvmax:max-lg:px-[1rem] pvmax:max-lg:leading-8">
                Our solution integrates <span className="underline">Best-for-Purpose</span> solution partners, carefully selected for their expertise and
                innovation, to create a robust ecosystem that caters to the diverse needs of banks and FIs. By leveraging
                the strengths of these partners, we provide a holistic suite of solutions that cover every aspect of banking
                operations, from customer experience to back-office processes.
              </p>


              {/* <p className="w-[70%] font-bold leading-5 text-[1.5rem] pb-10 pt-10 pv:max-md:w-[100%]">
            Key features of our Mambu-powered BaaS platform include:
            </p> */}
            </div>
            <div className="w-full md:max-xl:w-[100%] mx-auto pv:max-md:w-[100%] pvmax:max-lg:w-[90%] pvmax:max-lg:pl-0 pt-10">
              <img
                className="w-full"
                src={SolutionsImg}
              ></img>
            </div>
          </div>
        </div>
      </div>






      {/* Section Card Tab */}
      <div className="w-[100%] flex justify-center  mx-auto  pvmax:max-lg:px-0 pb-0 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
        <p className="w-[67.37%] leading-10 font-bold pvmax:max-lg:leading-10 pvmax:max-lg:pt-0 pvmax:max-lg:pl-0  pt-10 pv:max-md:w-[80%] pv:max-md:text-[2rem] pv:max-md:text-start text-start text-[2.2rem] text-[#4fb645]  Keyfeatures">
          Key features of our Mambu-powered BaaS platform include:
        </p>
      </div>
      <div className="w-full mx-auto pt-10 md:max-xl:w-[90%] pv:max-md:w-[90%] flex flex-col content-center items-center justify-center">
        <div className="flex w-[67.37%] items-start mx-auto gap-10  pvmax:max-xl:hidden">
          <button
            className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab1 ? "text-[#4fb645] border-b-[3px] border-[#4fb645] " : ""
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
            className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab2 ? "text-[#170F58] border-b-[3px] border-black " : ""
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
            className="text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645] "
            onClick={() => {
              setIsTab1(false);
              setIsTab2(false);
              setIsTab3(true);
              setIsTab4(false);
            }}
          >
            <p className="">Lower Total Cost of Ownership</p>
          </button>

          <button
            className="text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645] "
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
          className={` ${isTab1 ? "CardTabsSolutions pvmax:max-xl:w-[95%] grid" : "hidden"
            } grid-cols-2 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex  pvmax:max-xl:flex-col`}
          title={"Accelerated Time to Market:"}
          description={
            "With pre-built integrations and modular architecture, our platform enables banks and FIs to launch new products and services in record time. By eliminating the need for lengthy development cycles and customizations, we empower our clients to stay ahead of the competition and capitalize on market opportunities swiftly."
          }
          image={SolutionCardImg}
          titleButton={"Learn More"}
        ></CardTabs>
        <CardTabs
          className={` ${isTab2 ? "CardTabsSolutions pvmax:max-xl:w-[95%] grid" : "hidden"
            } grid-cols-2 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg pvmax:max-xl:w-[95%] pvmax:max-xl:flex pvmax:max-xl:flex-col `}
          title={"Easy-to-Use:"}
          description={
            "Our user-friendly interface and intuitive design make it easy for banks and FIs to onboard and manage customers, process transactions, and access valuable insights. Whether it's configuring products, managing workflows, or analyzing data, our platform streamlines every aspect of banking operations for maximum efficiency and convenience."
          }
          image={SolutionCardImg}
          titleButton={"Learn More"}
        ></CardTabs>
        <CardTabs
          className={`  ${isTab3 ? "CardTabsSolutions pvmax:max-xl:w-[95%] grid" : "hidden"
            } grid-cols-2 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:w-[95%] pvmax:max-xl:flex pvmax:max-xl:flex-col `}
          title={"Lower Total Cost of Ownership (TCO):"}
          description={
            "By adopting a cloud-native approach and leveraging Mambu's scalable infrastructure, our platform offers unparalleled cost savings and flexibility. Banks and FIs can scale their operations seamlessly to accommodate growth and fluctuations in demand, without incurring significant upfront investments or ongoing maintenance costs."
          }
          image={SolutionCardImg}
          titleButton={"Explore lending"}
        ></CardTabs>
        <CardTabs
          className={` ${isTab4 ? "CardTabsSolutions pvmax:max-xl:w-[95%] grid" : "hidden"
            } grid-cols-2 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg pvmax:max-xl:w-[95%]  pvmax:max-xl:flex pvmax:max-xl:flex-col`}
          title={"Innovative Product Offerings: "}
          description={
            "Through our partnership with Best-for-Purpose solution partners, we empower banks and FIs to innovate their product offerings and deliver differentiated experiences to their customers. Whether it's launching digital lending solutions, personalized wealth management tools, or AI-powered analytics, our platform provides the flexibility and agility to adapt to changing market trends and customer preferences."
          }
          image={SolutionCardImg}
          titleButton={"Discover deposits"}
        ></CardTabs>
      </div>

      {/* End Section Card Tab */}

      <EndSolutions />







      {/* <div className="w-full h-fit flex items-center justify-center">
        <div className="w-full mx-auto pb-10 md:max-xl:w-[90%] pv:max-md:w-[90%] flex content-center items-center justify-center">
          <div className=" grid grid-cols-2 md:max-xl:grid-cols-1 pv:max-md:grid-cols-1 w-[67.37%] pv:max-md:w-[90%] ">

            <div className="md:max-xl:w-[70%] flex justify-start pvmax:max-lg:justify-center items-center mx-auto pv:max-md:w-[70%] pvmax:max-lg:w-[90%]  pvmax:max-lg:pl-0 ">
              <img
                className="w-[90%]"
                src="https://trigger.red/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftnbe-main-image.ef8f8f52.png&w=1920&q=75"
              ></img>
            </div>
            <div className="text-start pv:max-md:w-[100%] flex flex-col justify-center align-middle MetatronsCube">
              <p className="w-[100%] text-[#4fb645] leading-7 pvmax:max-lg:leading-10 pvmax:max-md:mt-6 pvmax:max-lg:text-center text-[2.2rem] font-bold pb-5 pv:max-md:w-[100%] pvmax:max-lg:px-[1rem] ">
                Trigger partner
              </p>
              <p className="w-[100%] leading-7 text-[1.1rem] pb-3 pv:max-md:w-[100%] pvmax:max-lg:px-[1rem] pvmax:max-lg:leading-8">
                MDP is in a strategic partnership with Trigger Software which is a young, fast-growing software development and product company focusing on fintech and retail domains. Trigger provides a wide range of enterprise-grade solutions: neo banks, payment and integration gateways, communication engines, automated CRMs, and automated billings,… Using low-code development tools, MDP and Trigger are confident to deliver superior services on time and budget focused on achieving company’ business and technology goals
              </p>

            </div>

          </div>
        </div>
      </div> */}




      <div className="w-full h-fit endpage">
        {/* <div className="w-full h-fit pvmax:max-lg:h-fit flex flex-col justify-center slider-endsolutions">
          <div className="  w-[67.37%] bg-[#4fb645] shadow-lg shadow-gray-300 mx-auto rounded-lg my-10 py-10 ">
            <h1 className="font-bold font-sans text-[2rem]  text-[#170F58]">Sharing from our leaders</h1>
            <Carousel effect="fade" autoplay>
              {dataSlider.map((item, index) => {
                return (
                  <div className="  w-full rounded-lg " key={item.key}>

                    <div className="w-[80%] mx-auto pt-10 text-white pvmax:max-lg:pt-14 pb-20">
                      <p className="text-[1.5rem] pb-4 ">
                        "{item.title}"
                      </p>
                      <a className="text-[1.1rem] italic underline" href={item.link}>link blog </a>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div> */}

<div className="w-[100%] flex justify-center  mx-auto  pvmax:max-lg:px-0 pb-0 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
        <p className="w-[67.37%] leading-10 font-bold  pvmax:max-lg:leading-10 pvmax:max-lg:pt-0 pvmax:max-lg:pl-0  pt-10 pv:max-md:w-[80%] pv:max-md:text-[2rem]  text-center text-[2.2rem] text-[#4fb645]  Keyfeatures">
          Sharing from our leaders:
        </p>
      </div>

        <div className="w-full h-fit pvmax:max-lg:h-fit pv:max-md:hidden flex flex-col justify-center items-center slider-endsolutions homeswiper-pc">

          <div className="  w-[67.37%]  my-10 pb-10 ">
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              navigation
                pagination={{ clickable: true }}
                
                modules={[Navigation]}
              className="!px-8"
            >

              {dataSlider.map((item, index) => {
                return (<SwiperSlide className="!pb-[2rem] pvmax:max-lg:!pb-0 pvmax:max-lg:!w-full !flex content-center justify-center ">
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="docIMG" src={item.picture} />}
                    className="!w-[80%]"
                  >
                    <a className="font-sans font-bold text-[1.1rem] text-[#170f58] hover:text-[#4fb645]" href={item.link}>{item.title}</a>
                  </Card>
                </SwiperSlide>)
              })}
            </Swiper>
          </div>
        </div>


        <div className="w-full h-fit pvmax:max-lg:h-fit pv:max-md:flex pv:max-md:flex-col hidden justify-center items-center slider-endsolutions homeswiper-mobile">

          <div className="  w-[67.37%]  my-10 py-10 ">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation
                pagination={{ clickable: true }}
                loop
                modules={[Navigation]}
              className="!px-8"
            >

              {dataSlider.map((item, index) => {
                return (<SwiperSlide className="!pb-[2rem] pvmax:max-lg:!pb-0 pvmax:max-lg:!w-full !flex content-center justify-center ">
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="docIMG" src={item.picture} />}
                    className="!w-[80%]"
                  >
                    <a className="font-sans font-bold text-[1.1rem] text-[#170f58] hover:text-[#4fb645]" href={item.link}>{item.title}</a>
                  </Card>
                </SwiperSlide>)
              })}
            </Swiper>
          </div>
        </div>




        <div className="w-full mt-10 pb-20 h-fit flex items-center justify-center">

          <div className="w-[67.67%] h-fit">
            <p className="w-[100%] text-[#170F58] leading-7 text-[2.2rem] pvmax:max-lg:text-[1.2rem] font-bold pb-5 pvmax:max-lg:pb-3 pv:max-md:w-[100%] pvmax:max-lg:px-[1rem] pvmax:max-lg:leading-8">Want to work with  <span className="text-[#4fb645]">MDP</span> ?</p>
            <p className="w-[100%] text-[#170F58] leading-7 pvmax:max-lg:leading-5 text-[2.2rem] pvmax:max-lg:text-[1.2rem] font-bold pb-5 pv:max-md:w-[100%] pvmax:max-lg:px-[1rem]">Let us be part of your <span className="text-[#4fb645]">transformative innovation</span> .</p>
            <button className="bg-[#4fb645] text-white mt-8 pvmax:max-lg:mt-0 py-4 px-8 text-xl font-bold font-sans rounded-[2rem]">Contact us</button>
          </div>

        </div>
      </div>

    </>
  );
};

export default HomePage;
