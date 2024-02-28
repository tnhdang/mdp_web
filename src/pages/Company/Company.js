/** @format */

import React, { useState } from "react";
import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {

    CardTabsCompany,

} from "../../components";

import { Navigation, Pagination } from 'swiper/modules';
import tenelement from "../../assets/tenelements.png"

const Company = () => {
    const [isTab1, setIsTab1] = useState(true);
    const [isTab2, setIsTab2] = useState(false);
    const [isTab3, setIsTab3] = useState(false);


    const List = [
        {
            key: "1",
            title: "Transparency",
            description: "Open Communication: Employees at all levels are encouraged to communicate openly and transparently, sharing information, ideas, and feedback freely. Accessible Leadership: Leadership fosters a culture of approachability, making themselves accessible to employees and actively soliciting input and feedback. Visibility of Decision-Making: Decision-making processes are transparent, with clear explanations provided for the rationale behind decisions and their implications. ",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },
        {
            key: "2",
            title: "Integrity",
            description: "Ethical Conduct: Integrity is non-negotiable at MDP, with employees expected to uphold the highest ethical standards in all interactions and decisions. Trustworthiness: Employees demonstrate honesty, fairness, and reliability in their actions, building trust with colleagues, clients, and stakeholders.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },
        {
            key: "3",
            title: "Accountability",
            description: "Individuals take ownership of their actions and responsibilities, holding themselves and others accountable for delivering results with integrity.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },
        {
            key: "4",
            title: "Ownership Mentality",
            description: "Employees take pride in their work and take ownership of their responsibilities, proactively seeking solutions and delivering results. Performance Metrics: Clear performance metrics are established, and employees are held accountable for achieving their goals, with regular feedback provided to support their growth. Learning from Setbacks: Mistakes are viewed as opportunities for learning and growth, and employees are encouraged to take responsibility for addressing and learning from failures.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },

    ];


    return (
        <div className="">
            <div className=" h-[15rem] pvmax:max-lg:h-[10rem] w-[100%] bg-gradient-to-r from-[#00C7B0] to-[#7926F0] flex items-center solution">
                <div className="  w-full mx-auto pvmax:max-lg:w-[90%] flex content-center justify-center ">
                    <p className="text-white text-8xl  font-bold text-start  w-[66.67%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-5xl">
                    Company Culture
                    </p>
                </div>
            </div>
            <div className="w-[100%] flex content-center justify-center  mx-auto  pvmax:max-lg:px-[2rem] py-10 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
                <p className="text-[1.1rem] font-bold text-justify w-[66.67%] py-10 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%] big-description-Services  ">
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
                className=" "
            >

                {List.map((item, index) => {
                    return (<SwiperSlide className="!pb-[5rem] pvmax:max-lg:!pb-0 pvmax:max-lg:!w-full !flex content-center justify-center ">
                    <div className=" flex flex-col align-middle justify-center w-[66.67%] pvmax:max-lg:!w-[80%]" key={item.key}>
                        <p className="text-[2.5rem] text-[#170F58] font-bold font ">
                            {item.title}
                        </p>
                        <p className="text-justify text-[1.1rem]   pvmax:max-lg:px-[1rem]  py-[3rem]">
                            {item.description}
                        </p>
                        <div className="w-full h-fit flex content-center justify-center">
                        <img src={item.img} className="w-[50%]  pvmax:max-lg:px-0 pvmax:max-lg:w-full "></img>
                        </div>
                        

                    </div>
                    </SwiperSlide>)
                })}
            </Swiper>

            <div className="w-[100%] flex justify-center  mx-auto  pvmax:max-lg:py-[2rem] pb-10 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
                <p className="text-start text-[1.1rem] w-[66.67%] pvmax:max-lg:w-full  pvmax:max-lg:p-0 py-[3rem]">
                    At MDP, we are committed to empowering businesses with cutting-edge banking-as-a-service solutions that drive innovation, enhance 
                    customer experiences, and accelerate digital transformation. With our comprehensive suite of offerings, including Payment and Card 
                    processing, eKYC and Fraud Prevention, Digital Banking, Digital Bank, Digital Lending, Open Banking, and Business Ecosystem Integration, 
                    we enable businesses to thrive in the rapidly evolving digital landscape and deliver exceptional value to their customers.
                    </p>
                </div>  




            <div className="h-fit slider-banner-container pvmax:max-lg:h-fit">

                {/* Section Card Tab */}
                <div className="flex w-[66.67%] mx-auto gap-10  pvmax:max-xl:hidden">
                    <button
                        className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-black  ${isTab1 ? "text-black border-b-[3px] border-black " : ""
                            }`}
                        onClick={() => {
                            setIsTab1(true);
                            setIsTab2(false);
                            setIsTab3(false);
                        }}
                    >
                        <p className="">Collaboration</p>
                    </button>

                    <button
                        className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-black  ${isTab2 ? "text-black border-b-[3px] border-black " : ""
                            }`}
                        onClick={() => {
                            setIsTab1(false);
                            setIsTab2(true);
                            setIsTab3(false);
                        }}
                    >
                        <p className="">Innovation</p>
                    </button>

                    <button
                        className="text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-black "
                        onClick={() => {
                            setIsTab1(false);
                            setIsTab2(false);
                            setIsTab3(true);
                        }}
                    >
                        <p className="">Quality</p>
                    </button>


                </div>
                <CardTabsCompany
                    className={` ${isTab1 ? "grid" : "hidden"
                        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[66.67%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                    title1={"Teamwork: "}
                    description1={
                        "Collaboration is valued and encouraged, with teams working together seamlessly to achieve shared objectives and solve complex challenges. Inclusive Environment: Diversity of perspectives, backgrounds, and ideas is celebrated, creating an inclusive environment where everyone feels valued and respected. Cross-Functional Partnerships: Collaboration extends beyond team boundaries, with employees collaborating across departments and disciplines to drive innovation and success."
                    }
                    title2={"Inclusive Environment: "}
                    description2={
                        "Diversity of perspectives, backgrounds, and ideas is celebrated, creating an inclusive environment where everyone feels valued and respected."
                    }
                    title3={"Cross-Functional Partnerships: "}
                    description3={
                        "Collaboration extends beyond team boundaries, with employees collaborating across departments and disciplines to drive innovation and success."
                    }
                ></CardTabsCompany>
                <CardTabsCompany
                    className={` ${isTab2 ? "grid" : "hidden"
                        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[66.67%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                    title1={"Creativity and Experimentation: "}
                    description1={
                        "Employees are encouraged to think creatively, challenge the status quo, and explore innovative solutions to problems."
                    }
                    title2={"Risk-Taking: "}
                    description2={
                        "Calculated risk-taking is supported, with employees empowered to experiment and try new approaches, knowing that failure is a natural part of the innovation process."
                    }
                    title3={"Continuous Improvement: "}
                    description3={
                        "A culture of continuous improvement prevails, with employees constantly seeking ways to enhance processes, products, and services through innovation and iteration."
                    }
                ></CardTabsCompany>
                <CardTabsCompany
                    className={`  ${isTab3 ? "grid" : "hidden"
                        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[66.67%] py-10 mx-auto my-10 rounded-lg   pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                    title1={"Customer-Centric Focus: "}
                    description1={
                        "Quality is prioritized to meet and exceed customer expectations, with a relentless focus on delivering exceptional products and services."
                    }
                    title2={"Attention to Detail: "}
                    description2={
                        "Every aspect of work is executed with precision and attention to detail, ensuring that quality standards are consistently met."
                    }
                    title3={"Commitment to Excellence: "}
                    description3={
                        "Employees take pride in delivering work of the highest quality, striving for excellence in everything they do."
                    }
                ></CardTabsCompany>

            </div>

            <div className="w-[100%] flex justify-center  mx-auto  pvmax:max-lg:px-[2rem] pb-10 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
                <p className="text-[1.1rem] font-bold text-justify w-[66.67%] py-10 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%] big-description-Services  ">
                Overall, the culture at MDP is one of collaboration, innovation, and excellence, where employees are empowered to make a positive impact, uphold the 
                company's values, and drive success. It is a culture that fosters continuous learning, growth, and a shared commitment to building a better future for 
                all stakeholders.
                </p>
            </div>

            <div className="w-full h-fit flex content-center justify-center align-middle">
            <p className="text-[#4fb645] text-5xl py-12  font-bold text-start  w-[66.67%] md:max-lg:text-5xl pvmax:max-lg:w-full pvmax:max-lg:px-[3.25rem]   pvmax:max-md:text-2xl">
                        10 elements that define MDP's culture
            </p>
            </div>

            

            <div className="w-full h-fit flex content-center justify-center align-middle pb-20">
                <img className="w-[66.67%]" src={tenelement}></img>
            </div>





        </div>
    );
};

export default Company;
