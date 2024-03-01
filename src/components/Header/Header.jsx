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
      {/* <Row justify="center" align="middle" className="header-container-pc">
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
                <a href="/usecases" className="title dropbtn">
                  Use Cases
                </a>
              </div>
            </Col>
            <Col span={3.4} className="customers-hover">
              <div className="dropdown dropdown-customers">
                <a href="/baas" className="title dropbtn">
                BaaS
                </a>
              </div>
            </Col>
            <Col span={3.4} className="partners-hover">
              <div className="dropdown dropdown-partners">
                <a href="/partners" className="title dropbtn">
                  Partners
                </a>
              </div>
            </Col>
            <Col span={3.4} className="company-hover">
              <div className="dropdown dropdown-company">
                <a href="/company" className="title dropbtn">
                  Company
                </a>
              </div>
            </Col>
            
            <Col span={3.4}>
              <button className="contact-btn">
              <a  href="mailto: sales@mdpgroup.digital" className="">Contact us</a>
              </button>
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
          <a className="title dropbtn mobile-header" href="/services">
            Services
          </a>
         
          <a
            href="/usecases"
            className="title dropbtn mobile-header"
          >
            Use Cases
          </a>

          <a
            href="/baas"
            className="title dropbtn mobile-header"
          >
            BaaS
          </a>
          <a className="title dropbtn mobile-header"
          href="/partners">
            Partners
          </a>


          <a className="title dropbtn mobile-header"
          href="/company">
            Company
          </a>
        </div>
      </Row> */}

      <div className="w-fll h-fit flex flex-row items-center content-center justify-center">

        <Row gutter={[0, 24]} justify="center" align="middle" className="header-content">
          <Col span={3} className="logo-col">
            <img
              className="logo"
              src={logo}
              alt="logo"
              onClick={() => navigate("/")}
            />
          </Col>

          <Col span={2} className="whatwedo-hover">

          </Col>

          <Col span={3} className="whatwedo-hover">
            <div className="dropdown dropdown-whatwedo">
              <a href="/services" className="title dropbtn">
                Services
              </a>
            </div>
          </Col>

          <Col span={3} className="solutions-hover">
            <div className="dropdown dropdown-solutions">
              <a href="/usecases" className="title dropbtn">
                Use Cases
              </a>
            </div>
          </Col>

          <Col span={3} className="customers-hover">
            <div className="dropdown dropdown-customers">
              <a href="/baas" className="title dropbtn">
                BaaS
              </a>
            </div>
          </Col>

          <Col span={3} className="partners-hover">
            <div className="dropdown dropdown-partners">
              <a href="/partners" className="title dropbtn">
                Partners
              </a>
            </div>
          </Col>

          <Col span={3} className="company-hover">
            <div className="dropdown dropdown-company">
              <a href="/company" className="title dropbtn">
                Company
              </a>
            </div>
          </Col>

          <Col span={4} className="button-contact" >
            <button className="contact-btn">
              <a href="mailto: sales@mdpgroup.digital" className="">Contact us</a>
            </button>
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
          <a className="title dropbtn mobile-header" href="/services">
            Services
          </a>
         
          <a
            href="/usecases"
            className="title dropbtn mobile-header"
          >
            Use Cases
          </a>

          <a
            href="/baas"
            className="title dropbtn mobile-header"
          >
            BaaS
          </a>
          <a className="title dropbtn mobile-header"
          href="/partners">
            Partners
          </a>


          <a className="title dropbtn mobile-header"
          href="/company">
            Company
          </a>
        </div>
      </Row>

      </div>

    </>
  );
};

export default Header;
