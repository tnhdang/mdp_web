/** @format */

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {  Navigation, Pagination } from 'swiper/modules';

const Services = () => {
  return (
    <div className="">
        <div className=" h-[15rem] pvmax:max-lg:h-[10rem] w-[100%] bg-gradient-to-r from-[#00C7B0] to-[#7926F0] flex items-center solution">
            <div className="  w-[70%] mx-auto pvmax:max-lg:w-[90%] ">
                <p className="text-white text-8xl  font-bold text-start  w-[60%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-5xl">
                Consulting
                </p>
            </div>
        </div>
        <div className="w-[100%] mx-auto pl-[8rem] pvmax:max-lg:pl-[2rem] py-10 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
        <p className="text-[1.1rem] font-bold text-start w-[80%] py-10 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%]  ">
        MDP is a premier provider of consulting services, offering expertise in a wide range of areas including Customer Experience (CX), Digital 
        Transformation, Digital Bank use cases, Product and platform design, Enterprise platform, Project Management Office (PMO), and Engineering. 
        Our comprehensive suite of services is designed to help businesses navigate the complexities of the digital landscape, drive innovation, and 
        achieve sustainable growth.
        </p>
        </div>

        <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                    modules={[Navigation]}
                    className=""
                >
                    <SwiperSlide>
                        <div className="w-full flex flex-col">
                            <p>sfsfdes</p>
                            <p>sfsfdes</p>
                            <img src=""></img>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        2 MDP is a premier provider of consulting services, offering expertise in a wide range of areas including Customer Experience (CX), Digital 
        Transformation, Digital Bank use cases, Product and platform design, Enterprise platform, Project Management Office (PMO), and Engineering. 
        Our comprehensive suite of services is designed to help businesses navigate the complexities of the digital landscape, drive innovation, and 
        achieve sustainable growth.
                    </SwiperSlide>
                    <SwiperSlide>
                        3 MDP is a premier provider of consulting services, offering expertise in a wide range of areas including Customer Experience (CX), Digital 
        Transformation, Digital Bank use cases, Product and platform design, Enterprise platform, Project Management Office (PMO), and Engineering. 
        Our comprehensive suite of services is designed to help businesses navigate the complexities of the digital landscape, drive innovation, and 
        achieve sustainable growth.
                    </SwiperSlide>
                    <SwiperSlide>
                        4 MDP is a premier provider of consulting services, offering expertise in a wide range of areas including Customer Experience (CX), Digital 
        Transformation, Digital Bank use cases, Product and platform design, Enterprise platform, Project Management Office (PMO), and Engineering. 
        Our comprehensive suite of services is designed to help businesses navigate the complexities of the digital landscape, drive innovation, and 
        achieve sustainable growth.     
                    </SwiperSlide>
                </Swiper>
        
    </div>
  );
};

export default Services;
