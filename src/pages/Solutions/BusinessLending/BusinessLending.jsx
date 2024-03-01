/** @format */

import React, { useState } from "react";
import { Row, Col, Card } from "antd";
import { CheckOutlined } from "@ant-design/icons";
// import "./style.css";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/Lending/1.png";
import img2 from "../../../assets/Lending/1.png";
import img3 from "../../../assets/Lending/2.svg";
import img4 from "../../../assets/Lending/3.svg";
import img5 from "../../../assets/Lending/4.svg";
// import img5 from "../../../assets/Lending/5.png";
// import img6 from "../../../assets/Lending/6.png";
// import img7 from "../../../assets/Lending/7.png";
// import img8 from "../../../assets/Lending/8.png";
// import img9 from "../../../assets/Lending/9.svg";
// import img10 from "../../../assets/Lending/10.svg";
// import img11 from "../../../assets/Lending/11.svg";
import img15 from "../../../assets/Lending/15.svg";
import img16 from "../../../assets/Lending/16.svg";
import img17 from "../../../assets/Lending/17.svg";
// import img18 from "../../../assets/Lending/18.png";
// import img19 from "../../../assets/Lending/19.png";
// import img20 from "../../../assets/Lending/20.png";
// import img21 from "../../../assets/Lending/21.png";
import Lending from "./../Lending/Lending";

const BusinessLending = () => {
  return (
    <>
      {/* First Big Row */}
      <Row justify="center" align="top" className="firstpart-lending">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="firstpart-lending-left"
        >
          <h1>Business lending</h1>
          <p>
            Whether you offer loans for businesses to start new operations or
            financing to support expansion and growth, Mambu provides the tools
            to build fully configurable business lending products that are
            tailored to the unique needs of commercial organisations and small
            and medium-sized enterprises.
          </p>
          <button type="button">Contact us</button>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="firstpart-lending-right"
        >
          <img src={img1} />
        </Col>
      </Row>

      {/* Second Big Row */}
      <Row
        gutter={[38, 0]}
        justify="center"
        align="middle"
        className="secondpart-businesslending"
      >
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="">
          <h2>DELIVER DISTINCTIVE BUSINESS LENDING</h2>
          <h1>Configure. Connect. Grow.</h1>
          <div className="line">
            <div></div>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={8}
          className="secondpart-businesslending-left"
        >
          <div className="part2-card">
            <div className="img-part2">
              <img src={img2} />
            </div>
            <h2>Distinctive experience</h2>
            <p>
              Configure loan products to adapt and respond to the needs of your
              business customers.
            </p>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={8}
          className="secondpart-businesslending-right"
        >
          <div className="part2-card">
            <div className="img-part2">
              <img src={img3} />
            </div>
            <h2>Connect technologies</h2>
            <p>
              Connect with best-for-purpose modern technology vendors to
              establish seamless, fully automated loan processes.
            </p>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={8}
          className="secondpart-businesslending-right"
        >
          <div className="part2-card">
            <div className="img-part2">
              <img src={img4} />
            </div>
            <h2>Rapid scaling</h2>
            <p>
              Go to market quickly with scalable, low-code configurations, and
              well-fitting API connectors.
            </p>
          </div>
        </Col>
      </Row>

      {/* Third Big Row */}
      <div className="part3-businesslending">
        <Row justify="center " align="middle" className="">
          <h2 className="part3-businesslending-tittle1">
            FEATURES YOU WANT, WHEN YOU NEED THEM
          </h2>
        </Row>
        <Row justify="center " align="middle" className="">
          <h1 className="part3-businesslending-tittle2">
            Innovate with pre-built product configurations
          </h1>
        </Row>
        <div className="line">
          <div></div>
        </div>
        <p>
          The composable features and functionality of our lending engine mean
          you can use as-is or build on to meet your business needs.
        </p>
        <Row justify="start" align="top" className=""></Row>
      </div>

      {/* Fourth Big Row */}
      <div className="part4-businesslending">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper-businesslending"
        >
          <SwiperSlide>
            <Row
              justify="center "
              align="top"
              className="businesslending-swyper-content"
            >
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                className="part4-businesslending-right"
              >
                <img src={img5} />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                className="part4-businesslending-left"
              >
                <h1>Product level highlights</h1>

                <p>
                  <CheckOutlined />
                  Define new product settings
                </p>
                <p>
                  <CheckOutlined />
                  Set loan amounts and limits
                </p>
                <p>
                  <CheckOutlined />
                  Set up interest rate and configure fees
                </p>
                <p>
                  <CheckOutlined />
                  Create product link to deposit account for settlement
                </p>
                <p>
                  <CheckOutlined />
                  Enable securities
                </p>
                <p>
                  <CheckOutlined />
                  Capture additional details using custom fields
                </p>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row
              justify="center "
              align="top"
              className="businesslending-swyper-content"
            >
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                className="part4-businesslending-right"
              >
                <img src={img5} />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                className="part4-businesslending-left"
              >
                <h1>Product level highlights</h1>

                <p>
                  <CheckOutlined />
                  Define new product settings
                </p>
                <p>
                  <CheckOutlined />
                  Set loan amounts and limits
                </p>
                <p>
                  <CheckOutlined />
                  Set up interest rate and configure fees
                </p>
                <p>
                  <CheckOutlined />
                  Create product link to deposit account for settlement
                </p>
                <p>
                  <CheckOutlined />
                  Enable securities
                </p>
                <p>
                  <CheckOutlined />
                  Capture additional details using custom fields
                </p>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row
              justify="center "
              align="top"
              className="businesslending-swyper-content"
            >
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                className="part4-businesslending-right"
              >
                <img src={img5} />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                className="part4-businesslending-left"
              >
                <h1>Product level highlights</h1>

                <p>
                  <CheckOutlined />
                  Define new product settings
                </p>
                <p>
                  <CheckOutlined />
                  Set loan amounts and limits
                </p>
                <p>
                  <CheckOutlined />
                  Set up interest rate and configure fees
                </p>
                <p>
                  <CheckOutlined />
                  Create product link to deposit account for settlement
                </p>
                <p>
                  <CheckOutlined />
                  Enable securities
                </p>
                <p>
                  <CheckOutlined />
                  Capture additional details using custom fields
                </p>
              </Col>
            </Row>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Fifth Big Row */}
      <div className="part5-businesslending">
        <Row justify="center " align="middle" className="">
          <h2 className="part5-tittle1">THOUSANDS OF USE CASES</h2>
        </Row>
        <Row justify="center " align="middle" className="">
          <h1 className="part5-tittle2">Trusted by leading lenders</h1>
        </Row>
        <div className="line">
          <div></div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper-part5-businesslending"
        >
          <SwiperSlide>
            <div className="part5-swiper-content">
              <img src={img15} />
              <p className="quotes">
                "Being cloud native, Mambu and its composable architecture gave
                us the foundation needed to seamlessly integrate with Allica’s
                own proprietary applications in our cloud based tech stack."
              </p>
              <Row
                justify="center"
                align="middle"
                gutter={[48, 24]}
                className="flex"
              >
                <Col span={8} className="part5-swiper-content-col">
                  <h3>2021</h3>
                  <h4>launched</h4>
                </Col>
                <Col span={8} className="part5-swiper-content-col">
                  <h3>GBP 100M</h3>
                  <h4>loans in 12 months</h4>
                </Col>
                <Col span={8} className="part5-swiper-content-col">
                  <h3>Greenfield</h3>
                  <h4>implementation</h4>
                </Col>
              </Row>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="part5-swiper-content">
              <img src={img16} />
              <p className="quotes">
                "By democratising access to an innovative bank-grade system, our
                partnership with Mambu has created a game-changing solution for
                the modern lending industry."
              </p>
              <p className="author">- Founder and Co-CEO, Kennek</p>
              <button>Customer success story</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="part5-swiper-content">
              <img src={img17} />
              <p className="quotes">
                "Leveraging Mambu’s technology and ecosystem, we will speed up
                the development of flexible lending solutions, offering
                customers a full-range service combination of transactional,
                saving and credit solutions."
              </p>
              <p className="author">- Chief Executive Officer, Plazo</p>
              <button>Customer success story</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default BusinessLending;
