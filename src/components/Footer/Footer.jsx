import React from "react";
import "./style.css";
import { WhatWeDo, Company, Insights } from "../Header/HeaderData";
import { Col, Row } from "antd";
import logo from "../Header/logo.png";
import logowhite from "../../assets/logowhite.png" 

const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <Row justify="start" align="middle">
                <img className="logo-footer" src={logowhite} alt="logo" />
            </Row>

            <Row justify="start" align="top" className="py-6">
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <p className="text-start pr-2  leading-9 font-bold text-[1.1rem]"> Headquarter:</p>
                    <p className="text-start pr-3 leading-9 text-[1rem]"> <span className="hidden pvmax:max-lg:inline">* </span> 100 Đ. Le Lai street</p>
                    <p className="text-start pr-3 leading-9 text-[1rem]">Pham Ngu Lao ward, district 1, Ho Chi Minh city</p>
                    <p className="text-start pr-3 leading-9 text-[1rem]">VietNam</p>

                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <p className="text-start pr-2 pl-2 leading-9 font-bold text-[1.1rem]"> Development centre:</p>
                    <p className="text-start px-2 leading-9 text-[1rem]"><span className="hidden pvmax:max-lg:inline">* </span> 39 Bach Dang streetViệt Nam</p>
                    <p className="text-start pr-3 leading-9 text-[1rem]">Ward 2, Tan Binh district, Ho Chi Minh city</p>
                    <p className="text-start pr-3 leading-9 text-[1rem]">VietNam</p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <p className="text-start pr-2 pl-2 leading-9 font-bold text-[1.1rem]"> Hanoi branch:</p>
                    <p className="text-start px-2 leading-9 text-[1rem]"><span className="hidden pvmax:max-lg:inline">* </span> 24 P. Ton Duc Thang street Việt Nam</p>
                    <p className="text-start pr-3 leading-9 text-[1rem]">Cat Linh ward, Dong Da district, Hanoi,</p>
                    <p className="text-start pr-3 leading-9 text-[1rem]">VietNam</p>

                </Col>
            </Row>

            
            <p className="text-start  leading-9 text-[1rem] "><span className="font-bold text-[1.1rem] no-underline">Email contract:  </span><a href="mailto: sales@mdpgroup.digital" className="">sales@mdpgroup.digital</a></p>

            </div>
            
        </div>
    );
}
export default Footer;