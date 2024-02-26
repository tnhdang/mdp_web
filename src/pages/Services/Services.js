/** @format */

import React from "react";
import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';

const Services = () => {

    const Consulting = [
        {
            key: "1",
            title: "Customer Experience (CX)",
            description: "At MDP, we understand the critical importance of delivering exceptional customer experiences in today's competitive market. Our CX consulting services focus on understanding customer needs, preferences, and pain points to design and deliver personalized experiences that drive engagement, loyalty, and advocacy. From journey mapping to voice of customer analysis, we help businesses optimize every touchpoint along the customer journey to create meaningful and memorable interactions.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },
        {
            key: "2",
            title: "Digital Transformation",
            description: "Digital transformation is essential for businesses looking to thrive in the digital age. Our digital transformation consulting services guide organizations through the process of leveraging digital technologies to streamline operations, enhance agility, and unlock new revenue streams. We work closely with clients to develop tailored strategies, execute digital initiatives, and build capabilities that drive sustainable business transformation and future-proof their operations.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },
        {
            key: "3",
            title: "Digital Bank Use Cases",
            description: "As pioneers in the fintech space, we specialize in helping banks and financial institutions embrace digital banking and harness the power of technology to meet evolving customer expectations. Our digital bank use case consulting services focus on identifying strategic opportunities for innovation, designing customer-centric solutions, and implementing cutting-edge technologies such as mobile banking, digital wallets, and AI-driven chatbots to drive growth and competitiveness in the digital banking landscape.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },
        {
            key: "4",
            title: "Product and Platform Design",
            description: "n today's fast-paced digital economy, successful products and platforms are those that deliver seamless user experiences and tangible value to customers. Our product and platform design services combine human-centered design principles with technical expertise to create intuitive, scalable, and innovative solutions that meet the needs of modern businesses and their customers. From concept ideation to prototyping and testing, we help clients bring their ideas to life and accelerate time to market.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },
        {
            key: "5",
            title: "Enterprise Platform",
            description: "Building robust and scalable enterprise platforms is essential for driving operational efficiency and supporting business growth. Our enterprise platform consulting services encompass architecture design, technology selection, integration, and implementation to help organizations build agile, resilient, and future-ready platforms that enable digital transformation, enhance collaboration, and drive business performance.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },
        {
            key: "6",
            title: "Project Management Office (PMO)",
            description: "Effective project management is the cornerstone of successful digital initiatives. Our PMO consulting services provide organizations with the frameworks, methodologies, and expertise needed to plan, execute, and govern complex projects with precision and agility. From project portfolio management to risk mitigation and stakeholder communication, we help clients deliver projects on time, within budget, and with the desired outcomes.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },
        {
            key: "7",
            title: "Engineering",
            description: "Engineering excellence is at the core of everything we do. Our engineering consulting services encompass a wide range of disciplines including software development, data engineering, cloud architecture, and DevOps. With a focus on innovation, quality, and agility, we help organizations build scalable, secure, and high-performance technology solutions that drive business growth and competitiveness in the digital era.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },

    ];


    const Baas = [
        {
            key: "1",
            title: "Payment and Card Processing",
            description: "Our Payment and Card processing solution enables businesses to securely process payments, manage transactions, and issue cards with ease. Leveraging advanced technology and industry best practices, we provide end-to-end payment processing solutions that support multiple payment methods, currencies, and channels, ensuring fast, reliable, and secure payment processing for businesses of all sizes.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },
        {
            key: "2",
            title: "eKYC and Fraud Prevention",
            description: "With our eKYC (electronic Know Your Customer) and Fraud Prevention solution, businesses can streamline customer onboarding processes, verify identities, and mitigate the risk of fraud. Our advanced identity verification technology leverages biometric authentication, document verification, and machine learning algorithms to ensure compliance with regulatory requirements and enhance security while providing a seamless customer experience.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },
        {
            key: "3",
            title: "Digital Banking",
            description: "MDP's Digital Banking solution empowers banks and financial institutions to offer a full range of digital banking services to their customers, including account management, payments, transfers, and more. Our user-friendly interface, personalized features, and omnichannel capabilities enable customers to manage their finances anytime, anywhere, on any device, delivering convenience and flexibility while driving customer engagement and loyalty.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },
        {
            key: "4",
            title: "Digital Bank",
            description: "Our Digital Bank solution enables businesses to launch fully digital banking services quickly and cost-effectively, without the need for extensive infrastructure or IT investment. With our white-label platform, businesses can customize the branding, features, and functionality of their digital bank, offering a seamless and intuitive banking experience that meets the unique needs of their customers.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },
        {
            key: "5",
            title: "Digital Lending",
            description: "MDP's Digital Lending solution revolutionizes the lending process, enabling banks and financial institutions to offer a wide range of loan products online, from personal loans to mortgages and small business loans. Our end-to-end digital lending platform streamlines the entire loan lifecycle, from application and underwriting to funding and servicing, providing borrowers with fast approvals, competitive rates, and a seamless borrowing experience.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },
        {
            key: "6",
            title: "Open Banking",
            description: "Our Open Banking solution enables banks and financial institutions to unlock the value of their data and APIs, enabling them to securely share customer data and services with third-party providers. By embracing open banking principles, businesses can foster innovation, expand their product offerings, and create new revenue streams while delivering greater value and choice to their customers.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },
        {
            key: "7",
            title: "Business Ecosystem Integration",
            description: "MDP's Business Ecosystem Integration solution enables businesses to seamlessly integrate with third-party providers, partners, and suppliers to create a connected ecosystem of services and offerings. Our flexible integration platform supports API-based connectivity, data exchange, and workflow automation, enabling businesses to streamline processes, drive innovation, and deliver added value to their customers and stakeholders.",
            img: "https://mdp-web.vercel.app/static/media/sustain.5552c4f8bdb2fc39ccd9.png"
        },

    ];

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
                <p className="text-[1.1rem] font-bold text-start w-[90%] py-10 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%] big-description-Services  ">
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

                {Consulting.map((item, index) => {
                    return (<SwiperSlide className="!pb-[5rem]">
                        <div className="w-full flex flex-col align-middle justify-center" key={item.key}>
                            <p className="text-[2.5rem] text-[#170F58] font-bold font ">
                                {item.title}
                            </p>
                            <p className="px-[8rem]  py-[3rem]">
                                {item.description}
                            </p>
                            <img src={item.img} className="w-full px-[30rem]  "></img>

                        </div>
                    </SwiperSlide>)
                })}
            </Swiper>
            <p className="px-[8rem]  py-[3rem]">At MDP, we are committed to helping our clients navigate the complexities of the digital landscape, drive innovation, and achieve sustainable growth. With our expertise in Customer Experience, Digital Transformation, Digital Bank use cases, Product and platform design, Enterprise platform, PMO, and Engineering, we empower businesses to thrive in the digital age and deliver exceptional value to their customers.</p>
            <div className=" h-[15rem] pvmax:max-lg:h-[10rem] w-[100%] bg-gradient-to-r from-[#00C7B0] to-[#7926F0] flex items-center solution">
                <div className="  w-[70%] mx-auto pvmax:max-lg:w-[90%] ">
                    <p className="text-white text-8xl  font-bold text-start  w-[60%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-5xl">
                        BaaS
                    </p>
                </div>
            </div>
            <div className="w-[100%] mx-auto pl-[8rem] pvmax:max-lg:pl-[2rem] py-10 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro">
                <p className="text-[1.1rem] font-bold text-start w-[90%] py-10 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%] big-description-Services  ">
                    MDP's Banking-as-a-Service (BaaS) offering is a comprehensive suite of solutions designed to empower banks, financial institutions, and businesses to innovate, streamline operations, and deliver seamless digital experiences to their customers. Our BaaS platform encompasses a range of capabilities, including:
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

                {Baas.map((item, index) => {
                    return (<SwiperSlide className="!pb-[5rem]">
                        <div className="w-full flex flex-col align-middle justify-center" key={item.key}>
                            <p className="text-[2.5rem] text-[#170F58] font-bold font ">
                                {item.title}
                            </p>
                            <p className="px-[8rem]  py-[3rem]">
                                {item.description}
                            </p>
                            <img src={item.img} className="w-full px-[30rem]  "></img>

                        </div>
                    </SwiperSlide>)
                })}
            </Swiper>
            <p className="px-[8rem]  py-[3rem]">At MDP, we are committed to empowering businesses with cutting-edge banking-as-a-service solutions that drive innovation, enhance customer experiences, and accelerate digital transformation. With our comprehensive suite of offerings, including Payment and Card processing, eKYC and Fraud Prevention, Digital Banking, Digital Bank, Digital Lending, Open Banking, and Business Ecosystem Integration, we enable businesses to thrive in the rapidly evolving digital landscape and deliver exceptional value to their customers.</p>
        </div>
    );
};

export default Services;