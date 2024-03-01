/** @format */

import React from "react";
import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import { Sustainability } from "../../components";

const Partners = () => {
    const List1 = [
        {
            key: "1",
            title: "Core Banking Systems:",
            description: "Our core banking system partners provide robust and scalable solutions that form the foundation of our end-to-end banking technology stacks. These partners offer comprehensive core banking platforms with features such as account management, transaction processing, and compliance management, enabling banks to manage their operations efficiently and securely."
        },
        {
            key: "2",
            title: "Digital Banking Platforms:",
            description: "We collaborate with leading digital banking platform providers to offer best-in-class solutions for online and mobile banking. These partners specialize in creating intuitive and user-friendly interfaces that enable customers to access banking services anytime, anywhere, on any device. Features include account management, payments, transfers, and personalized financial insights, enhancing the overall customer experience."
        },
        {
            key: "3",
            title: "Credit Decision:",
            description: "Our credit decision partners specialize in providing advanced credit scoring, risk assessment, and decisioning solutions to help banks and financial institutions make informed lending decisions. These partners offer predictive analytics, machine learning algorithms, and alternative data sources to evaluate creditworthiness, assess risk, and automate loan origination processes. By leveraging these solutions, banks can streamline credit approvals, reduce loan processing times, and minimize credit losses while ensuring compliance with regulatory requirements."
        },
        {
            key: "4",
            title: "Payment and Card Processing Solutions:",
            description: "Our payment and card processing partners offer secure and reliable solutions for processing payments, managing transactions, and issuing cards. These partners provide a wide range of payment options, including credit/debit card processing, mobile payments, and contactless payments, enabling businesses to offer convenient and flexible payment methods to their customers."
        },
        {
            key: "5",
            title: "Fraud Prevention and Security:",
            description: "We partner with leading fraud prevention and security solution providers to protect our clients' businesses and customers from fraudulent activities and security threats. These partners offer advanced fraud detection and prevention solutions, including machine learning algorithms, biometric authentication, and real-time monitoring, to identify and mitigate risks proactively."
        },
        {
            key: "6",
            title: "Data Analytics and Insights:",
            description: "Our data analytics and insights partners specialize in turning raw data into actionable insights that drive informed decision-making and business growth. These partners provide advanced analytics tools and platforms that enable banks to analyze customer behavior, identify trends, and personalize offerings, helping them deliver targeted and relevant experiences to their customers."
        },
        {
            key: "7",
            title: "Compliance and Regulatory Technology:",
            description: "We collaborate with compliance and regulatory technology partners to help banks and financial institutions stay compliant with evolving regulations and industry standards. These partners offer solutions for AML (anti-money laundering), KYC (know your customer), GDPR (General Data Protection Regulation) compliance, and more, enabling banks to navigate regulatory complexities and mitigate compliance risks effectively."
        },
        {
            key: "8",
            title: "API and Integration Platforms:",
            description: "Our API and integration platform partners provide tools and platforms that enable seamless integration with third-party systems, applications, and services. These partners offer API management solutions, developer portals, and integration platforms as a service (iPaaS), empowering banks to build connected ecosystems, leverage external capabilities, and drive innovation through collaboration."
        },
        {
            key: "9",
            title: "Enterprise Resource Planning (ERP):",
            description: "MDP partners with leading ERP solution providers to offer integrated financial management, accounting, and resource planning solutions to banks and financial institutions. These partners provide comprehensive ERP platforms that streamline back-office operations, automate financial processes, and improve visibility into key business metrics. With features such as general ledger, accounts payable/receivable, budgeting, and reporting, these solutions enable banks to optimize resource allocation, improve financial control, and drive operational efficiency across the organization."
        },
        {
            key: "10",
            title: "Customer Relationship Management (CRM):",
            description: "Our CRM partners specialize in providing CRM solutions tailored to the needs of banks and financial institutions. These partners offer platforms that enable banks to manage customer relationships, track interactions, and deliver personalized experiences across multiple channels. Features include customer segmentation, campaign management, lead tracking, and sales automation, empowering banks to deepen customer relationships, drive cross-selling opportunities, and enhance customer satisfaction. By integrating CRM with other banking systems, banks can gain a holistic view of customer interactions and deliver seamless omnichannel experiences."
        },
        {
            key: "11",
            title: "Cloud Infrastructure and Hosting:",
            description: "We partner with leading cloud infrastructure and hosting providers to offer scalable, reliable, and secure cloud solutions for hosting banking applications and services. These partners provide cloud computing, storage, and networking services, as well as security and compliance features, enabling banks to leverage the benefits of cloud technology while maintaining high levels of security and compliance."
        },

    ]

    const List2 = [
        {
            key: "1",
            title: "Platform Integration:",
            description: "MDP works closely with business ecosystem partners to integrate banking services seamlessly into their platforms, allowing users to access banking functionalities directly from within the partner platform. This integration enhances the user experience by providing convenient access to banking services without the need to switch between multiple applications or platforms."
        },
        {
            key: "2",
            title: "Targeted Marketing and Promotions:",
            description: "Collaborating with business ecosystem partners enables banks and FIs to leverage their platforms' user data and insights for targeted marketing and promotional campaigns. By analyzing user behavior and preferences, banks can identify and reach out to specific customer segments with personalized offers and incentives to encourage deposit growth, credit card applications, loan originations, and other banking activities."
        },
        {
            key: "3",
            title: "Co-Branded Products and Services:",
            description: "MDP facilitates the development of co-branded products and services in partnership with business ecosystem partners, offering unique value propositions tailored to the needs of their shared customer base. For example, banks and FIs can offer exclusive discounts, rewards, or financial incentives to users of the partner platform, driving engagement and loyalty while attracting new customers to their banking products and services."
        },
        {
            key: "4",
            title: "Data Sharing and Analytics:",
            description: "Through data sharing agreements with business ecosystem partners, banks and FIs gain access to valuable insights into customer behavior, transaction patterns, and market trends. By analyzing this data, banks can identify cross-selling opportunities, optimize product offerings, and develop targeted marketing strategies to drive deposit and credit growth among specific customer segments."
        },
        {
            key: "5",
            title: "Seamless Transaction Processing:",
            description: "Integration with business ecosystem partners' platforms enables seamless transaction processing, allowing users to initiate transactions, transfers, and payments directly within the partner platform. This frictionless experience encourages users to engage more frequently with banking services, leading to increased transaction volume and revenue generation for banks and FIs."
        },
        {
            key: "6",
            title: "Customer Acquisition and Onboarding:",
            description: "By leveraging the user base and reach of business ecosystem partners, banks and FIs can accelerate customer acquisition and onboarding processes. Partnering with platforms that have a large and engaged user base allows banks to reach potential customers who may not have previously considered traditional banking services, thereby expanding their market reach and driving deposit and credit growth."
        },
        {
            key: "7",
            title: "Regulatory Compliance and Security:",
            description: "MDP ensures that partnerships with business ecosystem partners comply with regulatory requirements and adhere to industry best practices for data security and privacy. By implementing robust security measures and data protection protocols, banks and FIs can instill trust and confidence in their customers, encouraging them to engage more actively with banking services offered through partner platforms."
        },
        

    ]



    return (
        <>
            <div className=" h-[20rem] pvmax:max-lg:h-[10rem] w-[100%] bg-gradient-to-r from-[#00C7B0] to-[#7926F0] flex items-center solution">
                <div className="  w-[66.67%] mx-auto pvmax:max-lg:w-[90%] ">
                    <p className="text-white text-[6rem] leading-[7rem] font-bold text-start  w-[100%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-2xl">
                        Technology Ecosystem partners
                    </p>
                </div>
            </div>

            <div className="w-[100%] mx-auto  pvmax:max-lg:px-[2rem] py-10 md:max-xl:w-[90%] pv:max-md:w-[90%] flex align-middle content-center justify-center">
                <p className="text-[1.1rem] font-bold text-justify w-[66.67%] py-10 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%]  ">
                    MDP collaborates with a curated selection of best-for-purpose technology solution partners to build end-to-end banking technology
                    stacks that empower banks and financial institutions to innovate, streamline operations, and deliver exceptional customer experiences.
                    Our partners are carefully chosen for their expertise, innovation, and commitment to excellence, ensuring that our clients have access
                    to the most advanced and tailored solutions to meet their unique needs. Here's more about our best-for-purpose tech solution partners
                </p>
            </div>

            <div className="w-full h-fit flex items-center justify-center align-middle">
                <div className="w-[66.67%] h-fit text-start ">

                    {List1.map((item, index) => {
                        return (
                            <div key={item.key}>
                                <h2 className="font-semibold text-3xl text-[#4fb645]">{item.title}</h2>
                                <p className="text-[1.1rem] text-justify pt-6 pb-16">{item.description}
                                </p>
                            </div>
                        )
                    })}
                    <p className="text-[1.1rem] text-justify  pb-16">
                        By partnering with best-for-purpose technology solution providers across these key areas, 
                        MDP ensures that our clients have access to the most advanced and tailored solutions to build 
                        end-to-end banking technology stacks that drive innovation, enhance efficiency, and deliver superior customer experiences.
                    </p>
                </div>
            </div>


            <div className=" h-[20rem] pvmax:max-lg:h-[10rem] w-[100%] bg-gradient-to-r from-[#00C7B0] to-[#7926F0] flex items-center solution">
                <div className="  w-[66.67%] mx-auto pvmax:max-lg:w-[90%] ">
                    <p className="text-white text-[6rem] leading-[7rem] font-bold text-start  w-[100%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-2xl">
                    Business Ecosystem partners 
                    </p>
                </div>
            </div>

            <div className="w-[100%] mx-auto  pvmax:max-lg:px-[2rem] py-10 md:max-xl:w-[90%] pv:max-md:w-[90%] flex align-middle content-center justify-center">
                <p className="text-[1.1rem] font-bold text-justify w-[66.67%] py-10 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%]  ">
                MDP's business ecosystem partners play a crucial role in helping banks and financial institutions (FIs) access their target customer segments 
                and stimulate deposit and credit growth by leveraging the existing user base and transaction volume of these partners' platforms. Through strategic 
                partnerships with a diverse range of business ecosystem partners, MDP facilitates seamless integration and collaboration, enabling banks and FIs to 
                tap into new market opportunities, expand their customer base, and drive revenue growth. Here's more about how our business ecosystem partners contribute 
                to these objectives:
                </p>
            </div>

            <div className="w-full h-fit flex items-center justify-center align-middle">
                <div className="w-[66.67%] h-fit text-start ">

                    {List1.map((item, index) => {
                        return (
                            <div key={item.key}>
                                <h2 className="font-semibold text-3xl text-[#4fb645]">{item.title}</h2>
                                <p className="text-[1.1rem] text-justify pt-6 pb-16">{item.description}
                                </p>
                            </div>
                        )
                    })}
                    <p className="text-[1.1rem] text-justify  pb-16">
                    Through strategic collaboration with business ecosystem partners, MDP empowers banks and FIs to access new customer segments, drive transaction 
                    volume, and stimulate deposit and credit growth. By leveraging the reach, data insights, and user engagement of these partners' platforms, banks 
                    can unlock new opportunities for revenue generation and business expansion, while delivering value-added services to their customers.
                    </p>
                </div>
            </div>

            <Sustainability/>

        </>

    );
};

export default Partners;
