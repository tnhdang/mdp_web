/** @format */

import React, { useState } from "react";
import { Row, Col, Card } from "antd";
import "./style.css";
import img1 from "../../../assets/Lending/1.png";
import img2 from "../../../assets/Lending/2.svg";
import img3 from "../../../assets/Lending/3.svg";
import img4 from "../../../assets/Lending/4.svg";
import img5 from "../../../assets/Lending/5.png";
import img6 from "../../../assets/Lending/6.png";
import img7 from "../../../assets/Lending/7.png";
import img8 from "../../../assets/Lending/8.png";



const { Meta } = Card;

const Lending = () => {




  return (
    <>
      {/* First Big Row */}
      <Row justify="center" align="top" className="firstpart-lending">
        <Col xs={24} sm={24} md={24} lg={12} xl={12} className="firstpart-lending-left">
          <h1>Reimagine lending</h1>
          <p>Innovate the lending experience by delivering modern products and features
            to market faster. Mambu's composable, cloud lending platform enables you to
            build thousands of lending solutions and create better customer experiences.
          </p>
          <button type="button" >Contact us</button>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} className="firstpart-lending-right">
          <img src={img1} />
        </Col>
      </Row>

      {/* Second Big Row */}
      <Row gutter={[48, 24]} justify="center" align="middle" className="secondpart-lending">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="secondpart-lending-right">
          <h1>Build. Connect. Launch.</h1>
          <div className="line"><div></div></div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} className="secondpart-lending-left">
          <div className="img-part2"><img src={img2} /></div>
          <h2>Built in the cloud</h2>
          <p>True SaaS and cloud-native, our lending engine gives you the flexibility to define rules, maintain workflows and modify loan terms.</p>

        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} className="secondpart-lending-right">
          <div className="img-part2"><img src={img3} /></div>
          <h2>Low-code configuration</h2>
          <p>Build fit-for-purpose solutions using our low-code APIs and configurations. Reduce development time and costs so you can grow and expand.</p>

        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} className="secondpart-lending-right">
          <div className="img-part2"><img src={img4} /></div>
          <h2>Ultimate flexibility</h2>
          <p>Our composable approach reduces reliance on restrictive legacy providers and allows you to assemble and reassemble components as needed.</p>

        </Col>
      </Row>

      {/* Third Big Row */}
      <Row justify="center " align="middle" className="thirdpart-lending">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="">
          <Row justify="center " xs={24} sm={24} md={24} lg={24} xl={24} className="" >
            <h2>THOUSANDS OF USE CASES</h2>
          </Row>
          <Row justify="center "  xs={24} sm={24} md={24} lg={24} xl={24} className="" >
            <h1>Our lending solutions</h1>
          </Row>
          <div className="line"><div></div></div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={6} className="t">

          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={img5} />}
          >
            <Meta title="Retail mortgages" description="Collateral based real estate loans including home purchase, refinance and equity." />
            <p>More on <a href="#">retail mortgages</a></p>
          </Card>

        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={6} className="">
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={img6} />}
          >
            <Meta title="Personal lending" description="Interest-bearing secured or unsecured loans for individual and household use." />
            <p>Discover <a href="#">personal lending</a></p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={6} className="">
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={img7} />}
          >
            <Meta title="Business lending" description="Interest-bearing secured or unsecured loans to start or expand a business, or to support operational needs."/>
            <p>Explore <a href="#">business lending</a></p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={6} className="">
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={img8} />}
          >
            <Meta title="Purchase finance" description="Consumer loans such as point of sale financing, revolving lines of credit, and buy-now-pay-later." />
            <p>Look into <a href="#">purchase finance</a></p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Lending;
