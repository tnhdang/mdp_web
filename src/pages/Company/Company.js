/** @format */

import React, { useState } from "react";
import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {

    CardTabsCompany,
    CardTabsNoPics,
    Sustainability,

} from "../../components";

import { Navigation, Pagination } from 'swiper/modules';
import tenelement from "../../assets/tenelements.svg"

const Company = () => {
    const [isTab1, setIsTab1] = useState(true);
    const [isTab2, setIsTab2] = useState(false);
    const [isTab3, setIsTab3] = useState(false);

    const [isTab11, setIsTab11] = useState(true);
    const [isTab21, setIsTab21] = useState(false);
    const [isTab31, setIsTab31] = useState(false);
    const [isTab41, setIsTab41] = useState(false);

    const [isTab1Mission, setIsTab1Mission] = useState(true);
    const [isTab2Mission, setIsTab2Mission] = useState(false);
    const [isTab3Mission, setIsTab3Mission] = useState(false);

    const [isTab1CoreValue, setIsTab1CoreValue] = useState(true);
    const [isTab2CoreValue, setIsTab2CoreValue] = useState(false);
    const [isTab3CoreValue, setIsTab3CoreValue] = useState(false);
    const [isTab4CoreValue, setIsTab4CoreValue] = useState(true);
    const [isTab5CoreValue, setIsTab5CoreValue] = useState(false);
    const [isTab6CoreValue, setIsTab6CoreValue] = useState(false);




    const List = [
        {
            key: "1",
            title: "Transparency",
            description: "Open Communication: Employees at all levels are encouraged to communicate openly and transparently, sharing information, ideas, and feedback freely. Accessible Leadership: Leadership fosters a culture of approachability, making themselves accessible to employees and actively soliciting input and feedback. Visibility of Decision-Making: Decision-making processes are transparent, with clear explanations provided for the rationale behind decisions and their implications. ",
            img: "https://img.freepik.com/free-vector/internet-online-banking-service-isometric-symbolic-composition-with-clerks-credit-deposit-counters-mobile-application_1284-29197.jpg?t=st=1709192657~exp=1709196257~hmac=f92d7d71f1fbacbf45d06db41ed8657d061bb34c8f4e6aceb7862c4d1f575c4b&w=826"
        },
        {
            key: "2",
            title: "Integrity",
            description: "Ethical Conduct: Integrity is non-negotiable at MDP, with employees expected to uphold the highest ethical standards in all interactions and decisions. Trustworthiness: Employees demonstrate honesty, fairness, and reliability in their actions, building trust with colleagues, clients, and stakeholders.",
            img: "https://img.freepik.com/free-vector/e-wallet-concept-illustration_114360-7711.jpg?t=st=1709193001~exp=1709196601~hmac=9afa666e7ee06952078a5f0ba6e4ea35fcb91013dcee8674199a383ebdf76d83&w=826"
        },
        {
            key: "3",
            title: "Accountability",
            description: "Individuals take ownership of their actions and responsibilities, holding themselves and others accountable for delivering results with integrity.",
            img: "https://img.freepik.com/free-vector/internet-online-banking-service-isometric-symbolic-composition-with-clerks-credit-deposit-counters-mobile-application_1284-29197.jpg?t=st=1709192657~exp=1709196257~hmac=f92d7d71f1fbacbf45d06db41ed8657d061bb34c8f4e6aceb7862c4d1f575c4b&w=826"
        },
        {
            key: "4",
            title: "Ownership Mentality",
            description: "Employees take pride in their work and take ownership of their responsibilities, proactively seeking solutions and delivering results. Performance Metrics: Clear performance metrics are established, and employees are held accountable for achieving their goals, with regular feedback provided to support their growth. Learning from Setbacks: Mistakes are viewed as opportunities for learning and growth, and employees are encouraged to take responsibility for addressing and learning from failures.",
            img: "https://img.freepik.com/free-vector/e-wallet-concept-illustration_114360-7711.jpg?t=st=1709193001~exp=1709196601~hmac=9afa666e7ee06952078a5f0ba6e4ea35fcb91013dcee8674199a383ebdf76d83&w=826"
        },

    ];

    const Mission = [
        {
            key: "1",
            title: "Empowering Financial Inclusion",
            description: "We are committed to breaking down barriers to financial access and inclusion. Our mission is to provide inclusive financial services that cater to the diverse needs of all individuals, regardless of their background or circumstances. By offering accessible banking solutions, promoting financial literacy, and reaching underserved communities, we aim to empower people to achieve financial independence and prosperity. ",
        },
        {
            key: "2",
            title: "Driving Innovation",
            description: "Innovation is at the heart of everything we do. We strive to push the boundaries of financial technology, developing cutting-edge solutions that meet the evolving needs of our customers. Through continuous research, experimentation, and collaboration, we aim to drive transformative innovation that enhances the efficiency, accessibility, and security of financial services for everyone.",
        },
        {
            key: "3",
            title: "Enabling Sustainable Growth",
            description: "We recognize the interconnectedness of economic prosperity, environmental sustainability, and social well-being. Our mission is to foster sustainable growth that creates value for all stakeholders while minimizing negative impacts on the planet. We integrate sustainability into our business practices, investing in environmentally friendly initiatives, and supporting responsible business conduct. By prioritizing long-term sustainability, we aim to build a resilient and thriving economy that benefits present and future generations.",
        },
        
    ];

    return (
        <div className="">
            <div className=" h-[15rem] pvmax:max-lg:h-[10rem] w-[100%] bg-gradient-to-r from-[#00C7B0] to-[#7926F0] flex items-center solution gradient-bar">
                <div className="  w-full mx-auto pvmax:max-lg:w-[90%] flex content-center justify-center ">
                    <p className="text-white text-8xl  font-bold text-start  w-[67.37%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-5xl">
                        Mission
                    </p>
                </div>
            </div>
            <div className="w-[100%] flex content-center justify-center  mx-auto  pvmax:max-lg:px-[2rem] md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
                <p className="text-[1.1rem] font-bold text-justify w-[67.37%] py-20 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%] big-description-Services  ">
                Our mission is to empower individuals, businesses, and communities through accessible and innovative financial solutions. We are dedicated to fostering financial inclusion, 
                driving technological advancement for innovation, and promoting sustainable growth in the global economy.
                </p>
            </div>

            {/* Section Card Tab */}
            <div className="flex w-[67.37%] mx-auto gap-10  pvmax:max-xl:hidden">
            <button
                    className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab1Mission ? "text-[#4fb645] border-b-[3px] border-[#4fb645] " : ""
                        }`}
                    onClick={() => {
                        setIsTab1Mission(true);
                        setIsTab2Mission(false);
                        setIsTab3Mission(false);

                    }}
                >
                    <p className="">Empowering Financial Inclusion</p>
                </button>

                <button
                    className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab2Mission ? "text-black border-b-[3px] border-black " : ""
                        }`}
                    onClick={() => {
                        setIsTab1Mission(false);
                        setIsTab2Mission(true);
                        setIsTab3Mission(false);

                    }}
                >
                    <p className="">Driving Innovation</p>
                </button>

                <button
                    className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab3Mission ? "text-black border-b-[3px] border-black " : ""
                }`}
                    onClick={() => {
                        setIsTab1Mission(false);
                        setIsTab2Mission(false);
                        setIsTab3Mission(true);
                    }}
                >
                    <p className="">Enabling Sustainable Growth</p>
                </button>
                
            </div>
            {Mission.map((item, index) => {
                if (index === 0) {
                    return (
                        <CardTabsNoPics
                        className={` ${isTab1Mission ? "grid" : "hidden"
                            } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                        title=""
                        description={item.description}
                    ></CardTabsNoPics>
                    )
                }
                else if (index === 1) {
                    return (
                        <CardTabsNoPics
                        className={` ${isTab2Mission ? "grid" : "hidden"
                            } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                        title=""
                        description={item.description}
                    ></CardTabsNoPics>
                    )
                }
                else if (index === 2) {
                    return (
                        <CardTabsNoPics
                        className={` ${isTab3Mission ? "grid" : "hidden"
                            } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                        title=""
                        description={item.description}
                    ></CardTabsNoPics>
                    )
                }
                
            })}

<div className="w-[100%] flex justify-center  mx-auto  pvmax:max-lg:py-[2rem] pb-12 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
                <p className="text-justify text-[1.1rem] w-[67.37%] pvmax:max-lg:w-full  pvmax:max-lg:p-0 pb-10">
                At MDP, we are driven by our mission to empower, innovate, and enable sustainable growth. Through our unwavering commitment to these principles, we strive to make 
                a positive impact on the lives of individuals, businesses, and society as a whole. Together, we can build a brighter and more inclusive financial future for everyone.
                </p>
            </div>


            <div className=" h-[15rem] pvmax:max-lg:h-[10rem] w-[100%] bg-gradient-to-r from-[#00C7B0] to-[#7926F0] flex items-center solution gradient-bar">
                <div className="  w-full mx-auto pvmax:max-lg:w-[90%] flex content-center justify-center ">
                    <p className="text-white text-8xl  font-bold text-start  w-[67.37%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-5xl">
                        Core value
                    </p>
                </div>
            </div>
            <div className="w-[100%] flex content-center justify-center  mx-auto  pvmax:max-lg:px-[2rem] md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
                <p className="text-[1.1rem] font-bold text-justify w-[67.37%] py-20 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%] big-description-Services  ">
                We create six core values and leverage these effectively to shape the company culture and drive success at MDP. Here's how we integrate each core value into 
                the company culture:
                </p>
            </div>

            {/* Section Card Tab */}
            <div className="flex w-[67.37%] mx-auto gap-10  pvmax:max-xl:hidden">
                    <button
                        className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab1CoreValue ? "text-[#4fb645] border-b-[3px] border-[#4fb645] " : ""
                            }`}
                        onClick={() => {
                            setIsTab1CoreValue(true);
                            setIsTab2CoreValue(false);
                            setIsTab3CoreValue(false);
                        }}
                    >
                        <p className="">Transparency</p>
                    </button>

                    <button
                        className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab2CoreValue ? "text-black border-b-[3px] border-black " : ""
                            }`}
                        onClick={() => {
                            setIsTab1CoreValue(false);
                            setIsTab2CoreValue(true);
                            setIsTab3CoreValue(false);
                        }}
                    >
                        <p className="">Integrity</p>
                    </button>

                    <button
                        className="text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645] "
                        onClick={() => {
                            setIsTab1CoreValue(false);
                            setIsTab2CoreValue(false);
                            setIsTab3CoreValue(true);
                        }}
                    >
                        <p className="">Accountability</p>
                    </button>


                </div>
                <CardTabsCompany
                    className={` ${isTab1CoreValue ? "grid" : "hidden"
                        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                    title1={"Internal Communication: "}
                    description1={
                        "Foster open and transparent communication channels within the organization. Encourage regular updates, town hall meetings, and Q&A sessions where employees can freely express their thoughts and concerns."
                    }
                    title2={"Decision-Making: "}
                    description2={
                        "Strive for transparency in decision-making processes, ensuring that decisions are well-informed and communicated clearly to all stakeholders."
                    }
                    title3={"Feedback Culture: "}
                    description3={
                        "Promote a culture of giving and receiving feedback openly and constructively. Encourage employees to share feedback transparently, both upwards and across teams."
                    }
                ></CardTabsCompany>
                <CardTabsCompany
                    className={` ${isTab2CoreValue ? "grid" : "hidden"
                        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                    title1={"Ethical Standards: "}
                    description1={
                        "Uphold the highest ethical standards in all business practices. Lead by example and emphasize the importance of honesty, fairness, and integrity in every aspect of the business."
                    }
                    title2={"Compliance: "}
                    description2={
                        "Ensure compliance with laws, regulations, and industry standards. Encourage employees to speak up if they encounter any ethical dilemmas or misconduct."
                    }
                    title3={"Trust Building: "}
                    description3={
                        "Build trust with customers, partners, and employees by consistently demonstrating integrity in actions and decisions."
                    }
                ></CardTabsCompany>
                <CardTabsCompany
                    className={`  ${isTab3CoreValue ? "grid" : "hidden"
                        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg   pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                    title1={"Ownership Mentality: "}
                    description1={
                        "Encourage employees to take ownership of their work and responsibilities. Empower them to set clear goals, make decisions, and be accountable for outcomes."
                    }
                    title2={"Performance Measurement: "}
                    description2={
                        "Establish clear performance metrics and hold individuals and teams accountable for achieving them. Provide regular feedback and recognition for accomplishments."
                    }
                    title3={"Learning from Mistakes: "}
                    description3={
                        "Foster a culture where mistakes are viewed as opportunities for learning and growth rather than reasons for blame. Encourage accountability for addressing and learning from errors."
                    }
                ></CardTabsCompany>

<div className="w-[100%] flex justify-center  mx-auto  pvmax:max-lg:py-[2rem] py-12 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
                <p className="text-justify text-[1.1rem] w-[67.37%] pvmax:max-lg:w-full  pvmax:max-lg:p-0 pb-10">
                By embedding these core values into everyday practices, policies, and behaviors, MDP can cultivate a strong and resilient 
                company culture that drives success and fosters long-term growth. Regular reinforcement and recognition of these values 
                will help sustain a positive culture and keep them at the forefront of decision-making and actions across the organization.
                </p>
            </div>

            {/* Section Card Tab */}
            <div className="flex w-[67.37%] mx-auto gap-10  pvmax:max-xl:hidden">
                    <button
                        className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab4CoreValue ? "text-[#4fb645] border-b-[3px] border-[#4fb645] " : ""
                            }`}
                        onClick={() => {
                            setIsTab4CoreValue(true);
                            setIsTab5CoreValue(false);
                            setIsTab6CoreValue(false);
                        }}
                    >
                        <p className="">Collaboration</p>
                    </button>

                    <button
                        className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab5CoreValue ? "text-black border-b-[3px] border-black " : ""
                            }`}
                        onClick={() => {
                            setIsTab4CoreValue(false);
                            setIsTab5CoreValue(true);
                            setIsTab6CoreValue(false);
                        }}
                    >
                        <p className="">Innovation</p>
                    </button>

                    <button
                        className="text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645] "
                        onClick={() => {
                            setIsTab4CoreValue(false);
                            setIsTab5CoreValue(false);
                            setIsTab6CoreValue(true);
                        }}
                    >
                        <p className="">Quality</p>
                    </button>


                </div>
                <CardTabsCompany
                    className={` ${isTab4CoreValue ? "grid" : "hidden"
                        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                    title1={"Teamwork: "}
                    description1={
                        "Promote cross-functional collaboration and teamwork. Encourage employees to share knowledge, skills, and resources to achieve common goals."
                    }
                    title2={"Diversity and Inclusion: "}
                    description2={
                        "Embrace diversity of perspectives, backgrounds, and ideas. Create an inclusive environment where all voices are valued and respected."
                    }
                    title3={"Partnerships: "}
                    description3={
                        "Foster collaborative partnerships with customers, suppliers, and other stakeholders to drive mutual success and innovation."
                    }
                ></CardTabsCompany>
                <CardTabsCompany
                    className={` ${isTab5CoreValue ? "grid" : "hidden"
                        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                    title1={"Creativity: "}
                    description1={
                        "Encourage creative thinking and problem-solving among employees. Create opportunities for brainstorming, experimentation, and exploration of new ideas."
                    }
                    title2={"Continuous Improvement: "}
                    description2={
                        "Foster a culture of continuous improvement, where employees are encouraged to challenge the status quo and seek innovative solutions to improve processes and products."
                    }
                    title3={"Risk-Taking: "}
                    description3={
                        "Support calculated risk-taking and experimentation. Encourage employees to embrace failure as a natural part of the innovation process and to learn from setbacks."
                    }
                ></CardTabsCompany>
                <CardTabsCompany
                    className={`  ${isTab6CoreValue ? "grid" : "hidden"
                        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg   pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                    title1={"Customer Focus: "}
                    description1={
                        "Prioritize quality and excellence in products and services to meet and exceed customer expectations. Encourage a customer-centric mindset throughout the organization."
                    }
                    title2={"Attention to Detail: "}
                    description2={
                        "Emphasize the importance of attention to detail and craftsmanship in delivering high-quality work. Set standards for excellence and hold employees accountable for maintaining them."
                    }
                    title3={"Continuous Learning: "}
                    description3={
                        "Invest in employee development and training to ensure that skills and knowledge are up-to-date and aligned with quality standards."
                    }
                ></CardTabsCompany>






            <div className=" h-[15rem] pvmax:max-lg:h-[10rem] w-[100%] bg-gradient-to-r from-[#00C7B0] to-[#7926F0] flex items-center solution gradient-bar">
                <div className="  w-full mx-auto pvmax:max-lg:w-[90%] flex content-center justify-center ">
                    <p className="text-white text-8xl  font-bold text-start  w-[67.37%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-5xl">
                        Company Culture
                    </p>
                </div>
            </div>
            <div className="w-[100%] flex content-center justify-center  mx-auto  pvmax:max-lg:px-[2rem] md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
                <p className="text-[1.1rem] font-bold text-justify w-[67.37%] py-20 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%] big-description-Services  ">
                    The culture at MDP is characterized by a strong emphasis on transparency, integrity, accountability, collaboration, innovation, and quality. It is a culture
                    where employees feel empowered, valued, and inspired to contribute their best work towards achieving the company's mission and vision. Here's a closer look
                    at what the MDP culture entails:
                </p>
            </div>

            

            {/* <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                loop
                modules={[Navigation]}
                className=" "
            >

                {List.map((item, index) => {
                    return (<SwiperSlide className="!pb-[2rem] pvmax:max-lg:!pb-0 pvmax:max-lg:!w-full !flex content-center justify-center ">
                        <div className=" flex flex-col align-middle justify-center w-[67.37%] pvmax:max-lg:!w-[80%]" key={item.key}>
                            <p className="text-[2.5rem] text-[#4fb645] font-bold font ">
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
            </Swiper> */}


            {/* Section Card Tab */}
            <div className="flex w-[67.37%] mx-auto gap-10  pvmax:max-xl:hidden">
            <button
                    className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab11 ? "text-[#4fb645] border-b-[3px] border-[#4fb645] " : ""
                        }`}
                    onClick={() => {
                        setIsTab11(true);
                        setIsTab21(false);
                        setIsTab31(false);
                        setIsTab41(false);

                    }}
                >
                    <p className="">Transparency</p>
                </button>

                <button
                    className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab21 ? "text-black border-b-[3px] border-black " : ""
                        }`}
                    onClick={() => {
                        setIsTab11(false);
                        setIsTab21(true);
                        setIsTab31(false);
                        setIsTab41(false);

                    }}
                >
                    <p className="">Integrity</p>
                </button>

                <button
                    className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab31 ? "text-black border-b-[3px] border-black " : ""
                }`}
                    onClick={() => {
                        setIsTab11(false);
                        setIsTab21(false);
                        setIsTab31(true);
                        setIsTab41(false);

                    }}
                >
                    <p className="">Accountability</p>
                </button>
                <button
                    className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab41 ? "text-black border-b-[3px] border-black " : ""
                }`}
                    onClick={() => {
                        setIsTab11(false);
                        setIsTab21(false);
                        setIsTab31(false);
                        setIsTab41(true);

                    }}
                >
                    <p className="">Ownership Mentality</p>
                </button>


            </div>
            {List.map((item, index) => {
                if (index === 0) {
                    return (
                        <CardTabsNoPics
                        className={` ${isTab11 ? "grid" : "hidden"
                            } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                        title=""
                        description={item.description}
                    ></CardTabsNoPics>
                    )
                }
                else if (index === 1) {
                    return (
                        <CardTabsNoPics
                        className={` ${isTab21 ? "grid" : "hidden"
                            } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                        title=""
                        description={item.description}
                    ></CardTabsNoPics>
                    )
                }
                else if (index === 2) {
                    return (
                        <CardTabsNoPics
                        className={` ${isTab31 ? "grid" : "hidden"
                            } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                        title=""
                        description={item.description}
                    ></CardTabsNoPics>
                    )
                }
                else if (index === 3) {
                    return (
                        <CardTabsNoPics
                        className={` ${isTab41 ? "grid" : "hidden"
                            } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                        title=""
                        description={item.description}
                    ></CardTabsNoPics>
                    )

                }
            })}

<div className="w-[100%] flex justify-center  mx-auto  pvmax:max-lg:py-[2rem] py-12 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
                <p className="text-justify text-[1.1rem] w-[67.37%] pvmax:max-lg:w-full  pvmax:max-lg:p-0 pb-10">
                    At MDP, we are committed to empowering businesses with cutting-edge banking-as-a-service solutions that drive innovation, enhance
                    customer experiences, and accelerate digital transformation. With our comprehensive suite of offerings, including Payment and Card
                    processing, eKYC and Fraud Prevention, Digital Banking, Digital Bank, Digital Lending, Open Banking, and Business Ecosystem Integration,
                    we enable businesses to thrive in the rapidly evolving digital landscape and deliver exceptional value to their customers.
                </p>
            </div>


            



            <div className="h-fit slider-company-container pvmax:max-lg:h-fit">

                {/* Section Card Tab */}
                <div className="flex w-[67.37%] mx-auto gap-10  pvmax:max-xl:hidden">
                    <button
                        className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab1 ? "text-[#4fb645] border-b-[3px] border-[#4fb645] " : ""
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
                        className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab2 ? "text-black border-b-[3px] border-black " : ""
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
                        className="text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645] "
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
                        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
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
                        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
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
                        } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg   pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
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
                <p className="text-[1.1rem] font-bold text-justify w-[67.37%] pt-10 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%] big-description-Services  ">
                    Overall, the culture at MDP is one of collaboration, innovation, and excellence, where employees are empowered to make a positive impact, uphold the
                    company's values, and drive success. It is a culture that fosters continuous learning, growth, and a shared commitment to building a better future for
                    all stakeholders.
                </p>
            </div>

            <div className="w-[100%] flex justify-center  mx-auto  pvmax:max-lg:px-0 pb-0 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
                <p className="w-[67.37%] leading-10 font-bold pvmax:max-lg:leading-10 pvmax:max-lg:pt-0 pvmax:max-lg:pl-0  pt-10 pv:max-md:w-[80%] pv:max-md:text-[2rem] pv:max-md:text-start text-justify text-[2.2rem] text-[#4fb645]  Keyfeatures">
                    10 elements that defind MDP's culture
                </p>
            </div>
            <div className="w-full h-fit flex content-center justify-center align-middle pb-20 mb-10">
                <img className="w-[67.37%]" src={tenelement}></img>
            </div>

            <Sustainability />



        </div>
    );
};

export default Company;
