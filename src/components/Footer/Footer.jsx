import React from "react";
import "./style.css";
import { WhatWeDo, Company, Insights } from "../Header/HeaderData";
import { Col, Row } from "antd";
import logo from "../Header/logo.png";
import logowhite from "../../assets/logowhite.png"

const Footer = () => {
    return (
        <div className="container gradient-bar">
            <div className="footer">
                <Row justify="start" align="middle">
                    <img className="logo-footer" src={logowhite} alt="logo" />
                </Row>

                {/* <Row justify="start" align="top" className="pb-6">
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <p className="text-start pr-2  leading-9 font-bold text-[1.1rem]"> Headquarter:</p>
                        <p className="text-start pr-3 leading-6 text-[1rem]">100 Le Lai street</p>
                        <p className="text-start pr-3 leading-6 text-[1rem]">Pham Ngu Lao ward, District 1</p>
                        <p className="text-start pr-3 leading-6 text-[1rem]"> Ho Chi Minh city, VietNam</p>

                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <p className="text-start pr-2 pl-2 pv:max-md:pl-0 leading-9 font-bold text-[1.1rem]"> Development centre:</p>
                        <p className="text-start px-2 pv:max-md:pl-0 leading-6 text-[1rem]">87-95 Bach Dang street</p>
                        <p className="text-start px-2 pv:max-md:pl-0 leading-6 text-[1rem]">Ward 2, Tan Binh District</p>
                        <p className="text-start px-2 pv:max-md:pl-0 leading-6 text-[1rem]"> Ho Chi Minh city, VietNam</p>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <p className="text-start pr-2 pl-2 pv:max-md:pl-0 leading-9 font-bold text-[1.1rem]"> Hanoi office:</p>
                        <p className="text-start px-2 pv:max-md:pl-0 leading-6 text-[1rem]">24 Ton Duc Thang street</p>
                        <p className="text-start px-2 pv:max-md:pl-0 leading-6 text-[1rem]">Cat Linh ward, Dong Da District</p>
                        <p className="text-start px-2 pv:max-md:pl-0 leading-6 text-[1rem]">Hanoi, VietNam</p>

                    </Col>
                </Row> */}


                <Row justify="start" align="top" className="pb-6">
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <p className="text-start  leading-9 text-[1rem] "><span className="font-bold text-[1.1rem] no-underline">Email contract:  </span><a href="mailto: sales@mdpgroup.digital" className="">sales@mdpgroup.digital</a></p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <div className=" w-fit h-fit">
                        <button className="bg-[#170F58] ml-8  pv:max-md:ml-0 text-white py-2 px-4 text-base font-bold font-sans rounded-[2rem]"> <a  href="mailto: sales@mdpgroup.digital">Contact us</a></button>
                    </div>
                </Col>    
                    
                </Row>

                <p className="text-start  leading-9 text-[1rem] ">© 2024 MDP. All rights reserved.</p>

            </div>


        </div>
    );
}
export default Footer;