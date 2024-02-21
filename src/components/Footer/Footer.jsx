import React from "react";
import "./style.css";
import {WhatWeDo, Company, Insights} from "../Header/HeaderData";
import { Col, Row } from "antd";
import logo from "../Header/logo.png";

const Footer = () => {
    return (
        <div className="container">
            <Row justify="start" align="middle">
            <img className="logo" src={logo} alt="logo" />
            </Row>
            <Row justify="start" align="middle">
            <p className="font-bold text-[1.1rem]">Location: </p>
            </Row>
            <p className="text-start pl-20 leading-9"> 100 Đ. Lê Lai, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh, Việt Nam</p>
            <p className="text-start pl-20 leading-9"> 39 Bạch Đằng, Phường 2, Tân Bình, Thành phố Hồ Chí Minh 736464, Việt Nam</p>
            <Row justify="start" align="middle">
            <p className="font-bold text-[1.1rem] pt-5">Email contact: </p>
            </Row>
            <p className="text-start pl-20 leading-9"> sales@mdpgroup.digital</p>
            
        </div>
    );
    }
export default Footer;