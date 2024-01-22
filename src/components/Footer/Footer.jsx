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
            <Row justify="start" align="top">
                <Col span={6} className="footer-group" >
                    <h2 className="footer-tittle">Technology</h2>
                    <a className="footer-subtittle">Our platform</a>
                    <a className="footer-subtittle">Lending</a>
                    <a className="footer-subtittle">Deposits</a>
                    <a className="footer-subtittle">Enablement</a>
                    <a className="footer-subtittle">Customers</a>
                    <a className="footer-subtittle">Marketplace</a>
                </Col>
                <Col span={6} className="footer-group">
                <h2 className="footer-tittle">Company</h2>
                <a className="footer-subtittle">About</a>
                <a className="footer-subtittle">Sustainability</a>
                <a className="footer-subtittle">Modern Slavery statement</a>
                <a className="footer-subtittle">Careers</a>
                <a className="footer-subtittle">Our offices</a>
                <a className="footer-subtittle">Partners</a>
                <a className="footer-subtittle">SpeakUp</a>
                <a className="footer-subtittle">Contact us</a>
                </Col>
                <Col span={6} className="footer-group">
                <h2 className="footer-tittle">Event</h2>
                <a className="footer-subtittle">Articles</a>
                <a className="footer-subtittle">News</a>
                <a className="footer-subtittle">Webinars</a>
                <a className="footer-subtittle">Podcasts</a>
                <a className="footer-subtittle">Reports</a>
                </Col>
                <Col span={6} className="footer-group">
                <h2 className="footer-tittle">Mambu support</h2>
                <a className="footer-subtittle">Mambu User Guide</a>
                <a className="footer-subtittle">API Reference</a>
                <a className="footer-subtittle">Mambu ecosystem</a>
                <a className="footer-subtittle">Mambu status</a>
                </Col>
            </Row>
        </div>
    );
    }
export default Footer;