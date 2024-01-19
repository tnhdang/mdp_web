/** @format */


import React from "react";
import "./style.css"
import "./HeaderData"
import { WhatWeDo, Solutions, Company, Customers, Insights, Partners } from "./HeaderData";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space, Col, Divider, Row } from 'antd';

const Header = () => {

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  return (
    // <Row justify="center" align="top" >
    //   {HeaderData.map((item, index) => {
    //     if (index == 0) {
    //       return (
    //         <Col span={4}>
    //           <a>{item.label.toUpperCase()}</a>
    //           <Row justify="center" align="top" >
    //             {item.list.map((subitem, subindex) => {
    //               return (

    //                 <Col span={8}>
    //                   <a >{subitem.label}</a>
    //                   {subitem.list.map((minisubitem, minisubindex) => {
    //                     return (
    //                       <Row justify="center" align="top" >
    //                         <a>{minisubitem.label}</a>
    //                       </Row>
    //                     )
    //                   })}
    //                 </Col>
    //               )
    //             })}
    //           </Row>
    //         </Col>
    //       )
    //     }
    //   })}
    // </Row>


    // <div className="dropdown">
    //   {HeaderData.map((item, index) => {
    //       return (
    //         <>
    //           <button className="dropbtn">{item.label.toUpperCase()}</button>
    //           <div className="dropdown-content" style={{left:"30rem"}}>
    //             <Row justify="center" align="top" >
    //               {item.list.map((subitem, subindex) => {
    //                 return (
    //                   <Col span={8}>
    //                     <a >{subitem.label}</a>
    //                     {subitem.list.map((minisubitem, minisubindex) => {
    //                       return (
    //                         <Row justify="center" align="top" >
    //                           <a>{minisubitem.label}</a>
    //                         </Row>
    //                       )
    //                     })}
    //                   </Col>
    //                 )
    //               })}

    //             </Row>
    //           </div>
    //         </>
    //       )

    //   })}</div>


    <>
      <Row justify="center" align="top" >
        <Col span={4} className="whatwedo menu">
          <div className="dropdowndata">
          <Row justify="center" align="middle" >
            <h2 className="title">What we do</h2>
            <DownOutlined />
          </Row>

          <Row justify="center" align="middle" >
            {WhatWeDo.map((subitem, subindex) => {
              return (
                <Col span={8}>
                  <a>{subitem.label}</a>
                  {subitem.list.map((minisubitem, minisubindex) => {
                    return (
                      <Row justify="center" align="top" >
                        <a>{minisubitem.label}</a>
                      </Row>
                    )
                  })}
                </Col>
              )
            })} 
          </Row>
          </div>
        </Col>
        <Col span={4}>
          <Row justify="center" align="middle" >
            <h2>Solutions</h2>
            <DownOutlined />
          </Row>
        </Col>
        <Col span={4}>
          <Row justify="center" align="middle" >
            <h2>Customers</h2>
            <DownOutlined />
          </Row>
        </Col>
        <Col span={4}>
          <Row justify="center" align="middle" >
            <h2>Partners</h2>
            <DownOutlined />
          </Row>
        </Col>
        <Col span={4}>
          <Row justify="center" align="middle" >
            <h2>Company</h2>
            <DownOutlined />
          </Row>
        </Col>
        <Col span={4}>
          <Row justify="center" align="middle" >
            <h2>Insights</h2>
            <DownOutlined />
          </Row>
        </Col>

      </Row>
    </>

  );
};

export default Header;
