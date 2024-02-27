/** @format */

import React from "react";
import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';

const UseCases = () => {



    return (
        <>
            <div className="w-full h-[100vh] p-12">
                <div className="w-full h-[60%] flex">
                    <div className="w-[50%] h-[60vh] text-start text-5xl">
                        <p className="w-[60%]">Digital Banking</p>
                    </div>
                    <div className="w-[50%] h-[60vh] text-start">
                        MDP's Digital Banking solution revolutionizes traditional banking by offering customers a seamless and intuitive digital banking experience. Key features include:
                        Account Management: Customers can view account balances, transaction history, and manage account preferences online or through mobile apps.
                        Payments and Transfers: Secure and convenient fund transfers, bill payments, and peer-to-peer payments are facilitated, enhancing convenience for customers.
                        Customer Support: Access to customer support services such as chatbots, FAQs, and in-app messaging ensures timely assistance for customer inquiries and issues.
                        Personal Finance Management: Tools for budgeting, expense tracking, and financial goal setting empower customers to take control of their finances.

                    </div>
                </div>
                <div className="w-full h-[40%] flex px-8">
                    <div className="w-[50%] h-[40vh] pr-8">
                        <img className="w-full h-full  rounded-[2rem]" src="https://img.freepik.com/free-photo/representation-user-experience-interface-design-smartphone_23-2150165972.jpg?t=st=1709001632~exp=1709005232~hmac=5c60fa1b47f3f619b6beec10c164497406654dc9b01330fae28760c0d566316f&w=1380"></img>
                    </div>
                    <div className="w-[50%] h-[40vh] pl-8">
                        <img className="w-full h-full rounded-[2rem]" src="https://img.freepik.com/free-photo/representation-user-experience-interface-design-smartphone_23-2150165972.jpg?t=st=1709001632~exp=1709005232~hmac=5c60fa1b47f3f619b6beec10c164497406654dc9b01330fae28760c0d566316f&w=1380"></img>
                    </div>
                </div>
            </div>

            <div className="w-full h-[100vh] flex flex-row">

                <div className="w-[50%] h-[100vh]">
                    
                </div>
                <div className="w-[50%] h-[100vh]">
                <img className="w-full h-full rounded-[2rem]" src="https://img.freepik.com/free-photo/representation-user-experience-interface-design-smartphone_23-2150165972.jpg?t=st=1709001632~exp=1709005232~hmac=5c60fa1b47f3f619b6beec10c164497406654dc9b01330fae28760c0d566316f&w=1380"></img>
                </div>

            </div>
        </>

    );
};

export default UseCases;
