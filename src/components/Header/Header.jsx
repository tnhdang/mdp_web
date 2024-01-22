/** @format */


import React from "react";
import "./style.css"
import "./HeaderData"
import { WhatWeDo, Solutions, Company, Customers, Insights, Partners } from "./HeaderData";
import { DownOutlined,UpOutlined } from '@ant-design/icons';
import { Dropdown, message, Space, Col, Divider, Row } from 'antd';
import logo from "./logo.png"

const Header = () => {

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  return (

    
    <Row justify="center" align="middle" className="header-container" >
      <Col span={5} >
        <img className="logo" src={logo} alt="logo" />
      </Col>
      <Col span={19}>
      <Row justify="center" align="middle" className="header-content">
        <Col span={3.2} className="whatwedo-hover">
          <div className="dropdown dropdown-whatwedo">
            <h2 className="title dropbtn">What we do <DownOutlined className="downicon-whatwedo" /><UpOutlined className="upicon-whatwedo upicon" /></h2>  
            <div className="dropdown-content dropdown-content-whatwedo">
              <Row justify="center" align="top" >
                {WhatWeDo.map((item, index) => {
                  return (
                    <Col span={8}>
                      <a className="subtittle">{item.label}</a>
                      {item.list.map((subitem, subindex) => {
                        return (
                          <Row justify="center" align="top" >
                            <a>{subitem.label}</a>
                          </Row>
                        )
                      })}
                    </Col>
                  )
                })}
              </Row>
      </div>
          </div>
        </Col>
        <Col span={3.2} className="solutions-hover">
          <div  className="dropdown dropdown-solutions">
            <h2 className="title dropbtn">Solutions<DownOutlined className="downicon-solutions" /><UpOutlined className="upicon upicon-solutions"/></h2>
            <div className="dropdown-content dropdown-content-solutions">
              <Row justify="center" align="top" >
                {Solutions.map((item, index) => {
                  return (
                    <Col span={8}>
                      <a className="subtittle">{item.label}</a>
                      {item.list.map((subitem, subindex) => {
                        return (
                          <Row justify="center" align="top" >
                            <a>{subitem.label}</a>
                          </Row>
                        )
                      })}
                    </Col>
                  )
                })}
              </Row>
            </div>
            
          </div>
        </Col>
        <Col span={3.2} className="customers-hover">
          <div className="dropdown dropdown-customers">
            <h2 className="title dropbtn">Customers<DownOutlined className="downicon-customers" /><UpOutlined className="upicon upicon-customers"/></h2>
            <div className="dropdown-content dropdown-content-customers">
              <Row justify="center" align="top" >
                {Customers.map((item, index) => {
                  return (
                    <Col span={12}>
                      <a className="subtittle">{item.label}</a>
                      {item.list.map((subitem, subindex) => {
                        return (
                          <Row justify="center" align="top" >
                            <a>{subitem.label}</a>
                          </Row>
                        )
                      })}
                    </Col>
                  )
                })}
              </Row>
              </div>
          </div>
        </Col>
        <Col span={3.2} className="partners-hover">
          <div className="dropdown dropdown-partners">
            <h2 className="title dropbtn">Partners<DownOutlined className="downicon-partners" /><UpOutlined className="upicon upicon-partners"/></h2>
            <div className="dropdown-content dropdown-content-partners">
              <Row justify="center" align="top" >
                {Partners.map((item, index) => {
                  return (
                    <Col span={12}>
                      <a className="subtittle">{item.label}</a>
                      {item.list.map((subitem, subindex) => {
                        return (
                          <Row justify="center" align="top" >
                            <a>{subitem.label}</a>
                          </Row>
                        )
                      })}
                    </Col>
                  )
                })}
              </Row>
              </div>
          </div>
        </Col>
        <Col span={3.2} className="company-hover">
          <div className="dropdown dropdown-company">
            <h2 className="title dropbtn">Company<DownOutlined  className="downicon-company"/><UpOutlined className="upicon upicon-company"/></h2>
            <div className="dropdown-content dropdown-content-company">
              <Row justify="center" align="top" >
                {Company.map((item, index) => {
                  return (
                    <Col span={8}>
                      <a className="subtittle">{item.label}</a>
                      {item.list.map((subitem, subindex) => {
                        return (
                          <Row justify="center" align="top" >
                            <a>{subitem.label}</a>
                          </Row>
                        )
                      })}
                    </Col>
                  )
                })}
              </Row>
              </div>
          </div>
        </Col>
        <Col span={3} className="insights-hover">
          <div className="dropdown dropdown-insights">
            <h2 className="title dropbtn">Insights<DownOutlined className="downicon-insights" /><UpOutlined className="upicon-insights upicon"/></h2>
            <div className="dropdown-content dropdown-content-insights">
              <Row justify="center" align="top" >
                {Insights.map((item, index) => {
                  return (
                    <Col span={24}>
                      <a className="subtittle">{item.label}</a>
                      {item.list.map((subitem, subindex) => {
                        return (
                          <Row justify="center" align="top" >
                            <a>{subitem.label}</a>
                          </Row>
                        )
                      })}
                    </Col>
                  )
                })}
              </Row>
              </div>
          </div>
        </Col>
        <Col span={3.2}>
          <button className="contact-btn">Contact us</button>
        </Col>

      </Row>
      </Col>
    </Row>
      
    

  );
};

export default Header;
