/** @format */

import React, { useState } from "react";
import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { RightOutlined } from '@ant-design/icons';

import { Navigation, Pagination } from 'swiper/modules';
import { CardTabsNoPics } from "../../components";

const Baas = () => {

    const [isTab1, setIsTab1] = useState(true);
    const [isTab2, setIsTab2] = useState(false);
    const [isTab3, setIsTab3] = useState(false);
    const [isTab4, setIsTab4] = useState(false);
    const [isTab5, setIsTab5] = useState(true);
    const [isTab6, setIsTab6] = useState(false);
    const [isTab7, setIsTab7] = useState(false);

    const Baas = [
        {
            key: "1",
            title: "Payment and Card Processing",
            description: "Our Payment and Card processing solution enables businesses to securely process payments, manage transactions, and issue cards with ease. Leveraging advanced technology and industry best practices, we provide end-to-end payment processing solutions that support multiple payment methods, currencies, and channels, ensuring fast, reliable, and secure payment processing for businesses of all sizes.",
            img: "https://img.freepik.com/free-vector/online-banking-isometric-round-composition_1284-29555.jpg?t=st=1709192254~exp=1709195854~hmac=7f308b3d8919c84d0eeb54d4aead4c639b9b4043c91fab34be3d47060560f6f9&w=826"
        },
        {
            key: "2",
            title: "eKYC and Fraud Prevention",
            description: "With our eKYC (electronic Know Your Customer) and Fraud Prevention solution, businesses can streamline customer onboarding processes, verify identities, and mitigate the risk of fraud. Our advanced identity verification technology leverages biometric authentication, document verification, and machine learning algorithms to ensure compliance with regulatory requirements and enhance security while providing a seamless customer experience.",
            img: "https://img.freepik.com/free-vector/accounting-isometric-round-composition-with-online-banking-income-payment_1284-33329.jpg?t=st=1709192548~exp=1709196148~hmac=fee3eeab7ded8b95e74fb9023372f4bd05cc40c174f76eef16f9a4151f98f94d&w=826"
        },
        {
            key: "3",
            title: "Digital Banking",
            description: "MDP's Digital Banking solution empowers banks and financial institutions to offer a full range of digital banking services to their customers, including account management, payments, transfers, and more. Our user-friendly interface, personalized features, and omnichannel capabilities enable customers to manage their finances anytime, anywhere, on any device, delivering convenience and flexibility while driving customer engagement and loyalty.",
            img: "https://img.freepik.com/free-vector/online-banking-isometric-round-composition_1284-29555.jpg?t=st=1709192254~exp=1709195854~hmac=7f308b3d8919c84d0eeb54d4aead4c639b9b4043c91fab34be3d47060560f6f9&w=826"
        },
        {
            key: "4",
            title: "Digital Bank",
            description: "Our Digital Bank solution enables businesses to launch fully digital banking services quickly and cost-effectively, without the need for extensive infrastructure or IT investment. With our white-label platform, businesses can customize the branding, features, and functionality of their digital bank, offering a seamless and intuitive banking experience that meets the unique needs of their customers.",
            img: "https://img.freepik.com/free-vector/accounting-isometric-round-composition-with-online-banking-income-payment_1284-33329.jpg?t=st=1709192548~exp=1709196148~hmac=fee3eeab7ded8b95e74fb9023372f4bd05cc40c174f76eef16f9a4151f98f94d&w=826"
        },
        {
            key: "5",
            title: "Digital Lending",
            description: "MDP's Digital Lending solution revolutionizes the lending process, enabling banks and financial institutions to offer a wide range of loan products online, from personal loans to mortgages and small business loans. Our end-to-end digital lending platform streamlines the entire loan lifecycle, from application and underwriting to funding and servicing, providing borrowers with fast approvals, competitive rates, and a seamless borrowing experience.",
            img: "https://img.freepik.com/free-vector/online-banking-isometric-round-composition_1284-29555.jpg?t=st=1709192254~exp=1709195854~hmac=7f308b3d8919c84d0eeb54d4aead4c639b9b4043c91fab34be3d47060560f6f9&w=826"
        },
        {
            key: "6",
            title: "Open Banking",
            description: "Our Open Banking solution enables banks and financial institutions to unlock the value of their data and APIs, enabling them to securely share customer data and services with third-party providers. By embracing open banking principles, businesses can foster innovation, expand their product offerings, and create new revenue streams while delivering greater value and choice to their customers.",
            img: "https://img.freepik.com/free-vector/accounting-isometric-round-composition-with-online-banking-income-payment_1284-33329.jpg?t=st=1709192548~exp=1709196148~hmac=fee3eeab7ded8b95e74fb9023372f4bd05cc40c174f76eef16f9a4151f98f94d&w=826"
        },
        {
            key: "7",
            title: "Business Ecosystem Integration",
            description: "MDP's Business Ecosystem Integration solution enables businesses to seamlessly integrate with third-party providers, partners, and suppliers to create a connected ecosystem of services and offerings. Our flexible integration platform supports API-based connectivity, data exchange, and workflow automation, enabling businesses to streamline processes, drive innovation, and deliver added value to their customers and stakeholders.",
            img: "https://img.freepik.com/free-vector/online-banking-isometric-round-composition_1284-29555.jpg?t=st=1709192254~exp=1709195854~hmac=7f308b3d8919c84d0eeb54d4aead4c639b9b4043c91fab34be3d47060560f6f9&w=826"
        },

    ];

    return (
        <>
            <div className=" h-[15rem] pvmax:max-lg:h-[10rem] w-[100%] bg-gradient-to-r from-[#00C7B0] to-[#7926F0] flex items-center solution gradient-bar">
                <div className="  w-[66.67%] mx-auto pvmax:max-lg:px-[3rem] pvmax:max-lg:w-full ">
                    <p className="text-white text-8xl  font-bold text-start  w-[60%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-5xl">
                        BaaS
                    </p>
                </div>
            </div>

            <div className="w-full h-fit Baas-bg">
                <div className="w-[100%] flex justify-center  mx-auto  pvmax:max-lg:pl-[2rem]  md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
                <p className="text-[1.1rem] font-bold text-start w-[66.67%] py-10 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%] big-description-Services  ">
                    <a href="/services">Service</a> 
                    <RightOutlined className="px-4 pvmax:max-lg:inline" />
                    <a href="/baas" className="pvmax:max-lg:inline">Baas</a>
                </p>
            </div>
            <div className="w-[100%] flex justify-center  mx-auto  pvmax:max-lg:px-[1rem] pb-10 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
                <p className="text-[1.1rem] font-bold text-justify w-[66.67%] py-10 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%] big-description-Services  ">
                    MDP's Banking-as-a-Service (BaaS) offering is a comprehensive suite of solutions designed to empower banks, financial institutions, and businesses to innovate, streamline operations, and deliver seamless digital experiences to their customers. Our BaaS platform encompasses a range of capabilities, including:
                </p>
            </div>

            {/* <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                loop
                modules={[Navigation]}
                className=" w"
            >

                {Baas.map((item, index) => {
                    return (<SwiperSlide className=" pvmax:max-lg:!pb-0 pvmax:max-lg:!w-full !flex content-center justify-center ">
                        <div className=" flex flex-col align-middle justify-center w-[66.67%] pvmax:max-lg:!w-[80%]" key={item.key}>
                            <p className="text-[2.5rem] text-[#4fb645] font-bold font ">
                                {item.title}
                            </p>
                            <p className="text-justify text-[1.1rem]    py-[3rem]">
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
                    className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab1 ? "text-[#4fb645] border-b-[3px] border-[#4fb645] " : ""
                        }`}
                    onClick={() => {
                        setIsTab1(true);
                        setIsTab2(false);
                        setIsTab3(false);
                        setIsTab4(false);



                    }}
                >
                    <p className="">Payment and Card Processing</p>
                </button>

                <button
                    className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab2 ? "text-black border-b-[3px] border-black " : ""
                        }`}
                    onClick={() => {
                        setIsTab1(false);
                        setIsTab2(true);
                        setIsTab3(false);
                        setIsTab4(false);

                    }}
                >
                    <p className="">eKYC and Fraud Prevention</p>
                </button>

                <button
                    className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab3 ? "text-black border-b-[3px] border-black " : ""
                        }`}
                    onClick={() => {
                        setIsTab1(false);
                        setIsTab2(false);
                        setIsTab3(true);
                        setIsTab4(false);

                    }}
                >
                    <p className="">Digital Banking</p>
                </button>
                <button
                    className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab4 ? "text-black border-b-[3px] border-black " : ""
                        }`}
                    onClick={() => {
                        setIsTab1(false);
                        setIsTab2(false);
                        setIsTab3(false);
                        setIsTab4(true);

                    }}
                >
                    <p className="">Digital Bank</p>
                </button>



            </div>
            {Baas.map((item, index) => {
                if (index === 0) {
                    return (
                        <CardTabsNoPics
                            className={` ${isTab1 ? "grid" : "hidden"
                                } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                            title=""
                            description={item.description}
                        ></CardTabsNoPics>
                    )
                }
                else if (index === 1) {
                    return (
                        <CardTabsNoPics
                            className={` ${isTab2 ? "grid" : "hidden"
                                } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                            title=""
                            description={item.description}
                        ></CardTabsNoPics>
                    )
                }
                else if (index === 2) {
                    return (
                        <CardTabsNoPics
                            className={` ${isTab3 ? "grid" : "hidden"
                                } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                            title=""
                            description={item.description}
                        ></CardTabsNoPics>
                    )
                }
                else if (index === 3) {
                    return (
                        <CardTabsNoPics
                            className={` ${isTab4 ? "grid" : "hidden"
                                } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                            title=""
                            description={item.description}
                        ></CardTabsNoPics>
                    )

                }

            })}



            {/* Section Card Tab */}
            <div className="flex w-[67.37%] mx-auto gap-10  pvmax:max-xl:hidden">


                <button
                    className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab5 ? "text-[#4fb645] border-b-[3px] border-[#4fb645] " : ""
                        }`}
                    onClick={() => {

                        setIsTab5(true);
                        setIsTab6(false);
                        setIsTab7(false);
                    }}
                >
                    <p className="">Digital Lending</p>
                </button>
                <button
                    className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab6 ? "text-black border-b-[3px] border-black " : ""
                        }`}
                    onClick={() => {

                        setIsTab5(false);
                        setIsTab6(true);
                        setIsTab7(false);
                    }}
                >
                    <p className="">Open Banking</p>
                </button>
                <button
                    className={`text-[1.5rem] text-[#170F58] font-bold focus:outline-none  focus:text-[#4fb645] focus:border-b-[3px] focus:border-[#4fb645]  ${isTab7 ? "text-black border-b-[3px] border-black " : ""
                        }`}
                    onClick={() => {

                        setIsTab5(false);
                        setIsTab6(false);
                        setIsTab7(true);
                    }}
                >
                    <p className="">Business Ecosystem Integration</p>
                </button>


            </div>
            {Baas.map((item, index) => {
                if (index === 4) {
                    return (
                        <CardTabsNoPics
                            className={` ${isTab5 ? "grid" : "hidden"
                                } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                            title=""
                            description={item.description}
                        ></CardTabsNoPics>
                    )
                }
                else if (index === 5) {
                    return (
                        <CardTabsNoPics
                            className={` ${isTab6 ? "grid" : "hidden"
                                } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                            title=""
                            description={item.description}
                        ></CardTabsNoPics>
                    )

                }
                else if (index === 6) {
                    return (
                        <CardTabsNoPics
                            className={` ${isTab7 ? "grid" : "hidden"
                                } px-10 bg-[#eeeeee] shadow-lg shadow-gray-300 w-[67.37%] py-10 mx-auto my-10 rounded-lg  pvmax:max-xl:flex pvmax:max-xl:flex-col pvmax:max-xl:w-[95%]`}
                            title=""
                            description={item.description}
                        ></CardTabsNoPics>
                    )

                }
            })}

            <div className="w-[100%] flex justify-center  mx-auto  pvmax:max-lg:pl-[2rem] pb-10 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
            <p className="text-start text-[1.1rem] w-[66.67%] pvmax:max-lg:w-full  pvmax:max-lg:p-0 py-10">At MDP, we are committed to empowering businesses with cutting-edge 
            banking-as-a-service solutions that drive innovation, enhance customer experiences, and accelerate digital transformation. With our 
            comprehensive suite of offerings, including Payment and Card processing, eKYC and Fraud Prevention, Digital Banking, Digital Bank, Digital 
            Lending, Open Banking, and Business Ecosystem Integration, we enable businesses to thrive in the rapidly evolving digital landscape and deliver 
            exceptional value to their customers.
            </p>
            </div>
            </div>
            
            
        
        </>

    );
};

export default Baas;
