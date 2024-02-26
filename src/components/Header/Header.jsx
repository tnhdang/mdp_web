/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import "./HeaderData";
import {
  WhatWeDo,
  Solutions,
  Company,
  Customers,
  Insights,
  Partners,
} from "./HeaderData";
import { DownOutlined, UpOutlined, MenuOutlined } from "@ant-design/icons";
import { message, Space, Col, Divider, Row } from "antd";
import logo from "./logo.png";

const Header = () => {
  const navigate = useNavigate();

  const [visible, setvisible] = useState("none");
  const [visibleWhatWeDo, setvisibleWhatWeDo] = useState("none");
  const [visibleSolutions, setvisibleSolutions] = useState("none");
  const [visibleCompany, setvisibleCompany] = useState("none");
  const [visiblePartners, setvisiblePartners] = useState("none");
  const [visibleCustomers, setvisibleCustomers] = useState("none");
  const [visibleInsights, setvisibleInsights] = useState("none");

  const onClickNavBar = () => {
    if (visible == "none") {
      setvisible("block");
    } else {
      setvisible("none");
      setvisibleCompany("none");
      setvisibleCustomers("none");
      setvisibleInsights("none");
      setvisiblePartners("none");
      setvisibleSolutions("none");
      setvisibleWhatWeDo("none");
    }
  };

  const onClickNavBarWhatWeDo = () => {
    if (visibleWhatWeDo == "none") {
      setvisibleWhatWeDo("block");
    } else {
      setvisibleWhatWeDo("none");
    }
  };

  const onClickNavBarSolutions = () => {
    if (visibleSolutions == "none") {
      setvisibleSolutions("block");
    } else {
      setvisibleSolutions("none");
    }
    console.log(visibleSolutions);
  };

  const onClickNavBarCompany = () => {
    if (visibleCompany == "none") {
      setvisibleCompany("block");
    } else {
      setvisibleCompany("none");
    }
  };

  const onClickNavBarCustomers = () => {
    if (visibleCustomers == "none") {
      setvisibleCustomers("block");
    } else {
      setvisibleCustomers("none");
    }
  };

  const onClickNavBarInsights = () => {
    if (visibleInsights == "none") {
      setvisibleInsights("block");
    } else {
      setvisibleInsights("none");
    }
  };
  const onClickNavBarPartners = () => {
    if (visiblePartners == "none") {
      setvisiblePartners("block");
    } else {
      setvisiblePartners("none");
    }
  };

  return (
    <>
      <Row justify="center" align="middle" className="header-container-pc">
        <Col span={5} className="logo-col">
          <img
            className="logo"
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </Col>
        <Col span={19} className="navbar-pc">
          <Row gutter={[24, 48]} justify="center" align="middle" className="header-content">
            <Col span={3.4} className="whatwedo-hover">
              <div className="dropdown dropdown-whatwedo">
                <a href="/services" className="title dropbtn">
                  Services
                </a>
              </div>
            </Col>
            <Col span={3.4} className="solutions-hover">
              <div className="dropdown dropdown-solutions">
                <h2 className="title dropbtn">
                  Use Cases
                </h2>
              </div>
            </Col>
            <Col span={3.4} className="customers-hover">
              <div className="dropdown dropdown-customers">
                <h2 className="title dropbtn">
                BaaS
                </h2>
              </div>
            </Col>
            <Col span={3.4} className="partners-hover">
              <div className="dropdown dropdown-partners">
                <h2 className="title dropbtn">
                  Partners
                </h2>
              </div>
            </Col>
            <Col span={3.4} className="company-hover">
              <div className="dropdown dropdown-company">
                <h2 className="title dropbtn">
                  Company
                </h2>
              </div>
            </Col>
            
            <Col span={3.4}>
              <button className="contact-btn">Contact us</button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center" align="middle" className="header-container-mobile">
        <Col span={16} className="logo-col-mobile">
          <img
            className="logo-mobile"
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </Col>
        <Col span={8} className="navbar-mobile">
          <MenuOutlined onClick={() => onClickNavBar()} />
        </Col>
        <div
          className="dropdown-mobile-container"
          style={{ display: visible }}
          onClick={() => onClickNavBar()}
        ></div>
        <div className="dropdown-mobile" style={{ display: visible }}>
          <h2 className="title dropbtn" >
            Services
          </h2>
         
          <h2
            className="title dropbtn"
          >
            Use Cases
          </h2>

          <h2
            className="title dropbtn"
          >
            BaaS
          </h2>
          <h2 className="title dropbtn">
            Partners
          </h2>


          <h2 className="title dropbtn">
            Company
          </h2>
        </div>
      </Row>
    </>
  );
};

export default Header;
