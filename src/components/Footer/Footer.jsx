import React from "react";
import "./style.css";
import { WhatWeDo, Company, Insights } from "../Header/HeaderData";
import { Col, Row } from "antd";
import logo from "../Header/logo.png";

const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <Row justify="start" align="middle">
                <img className="logo-footer" src={logo} alt="logo" />
            </Row>
            <Row justify="start" align="middle">
                <p className="font-bold text-[1.1rem]">Location: </p>
            </Row>

            <Row justify="start" align="top" className="pl-10">
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <p className="text-start pl-8 leading-9"> <span className="hidden pvmax:max-lg:inline">* </span> <span className="font-bold">Headquarter:</span> 100 Đ. Lê Lai, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh, Việt Nam</p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <p className="text-start pl-8 leading-9"><span className="hidden pvmax:max-lg:inline">* </span><span className="font-bold">Development centre:</span>  39 Bạch Đằng, Phường 2, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam</p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <p className="text-start pl-8 leading-9"><span className="hidden pvmax:max-lg:inline">* </span><span className="font-bold">Ha Noi branch:</span> 24 P. Tôn Đức Thắng, Cát Linh, Đống Đa, Hà Nội, Việt Nam</p>
                </Col>
            </Row>

            <Row justify="start" align="middle">
                <p className="font-bold text-[1.1rem] pt-5">Email contact: </p>
            </Row>
            <p className="text-start pl-20 leading-9 underline"><a href="mailto: sales@mdpgroup.digital" className="underline">sales@mdpgroup.digital</a></p>

            </div>
            
        </div>
    );
}
export default Footer;