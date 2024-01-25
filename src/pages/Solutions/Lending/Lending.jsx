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
import img9 from "../../../assets/Lending/9.svg";
import img10 from "../../../assets/Lending/10.svg";
import img11 from "../../../assets/Lending/11.svg";
import img15 from "../../../assets/Lending/15.svg";
import img16 from "../../../assets/Lending/16.svg";
import img17 from "../../../assets/Lending/17.svg";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



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

      {/* Fourth big Row */}
      <div className="part4">
      <Row justify="center " xs={24} sm={24} md={24} lg={24} xl={24} className="Part4h2" >
            <h2>THOUSANDS OF USE CASES</h2>
          </Row>
          <Row justify="center "  xs={24} sm={24} md={24} lg={24} xl={24} className="Part4h1" >
            <h1>Our lending solutions</h1>
          </Row>
          <div className="line"><div></div></div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper-pc"
      >
        <SwiperSlide>
        <div className="img-part2"><img src={img9} /></div>
          <h2>Customised reports</h2>
          <p>Reporting options ensure that key operational and performance metrics are easily identified, analysed and tracked.</p>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-part2"><img src={img10} /></div>
          <h2>Flexible configuration</h2>
          <p>Configure interest rate and fees, limits, payment terms, grace periods, payment holidays, and more according to your needs.</p>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-part2"><img src={img11} /></div>
          <h2>Embedded finance</h2>
          <p>Connect loan products to any buying ecosystem. Offer everything from buy-now-pay-later to revolving credit and more.</p>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-part2"><img src={img2} /></div>
          <h2>End-to-end solutions</h2>
          <p>Utilise a broad range of partner solutions, connectors and APIs to deliver a faster and smoother lending experience.</p>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-part2"><img src={img9} /></div>
          <h2>Customised reports</h2>
          <p>Reporting options ensure that key operational and performance metrics are easily identified, analysed and tracked.</p>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-part2"><img src={img10} /></div>
          <h2>Flexible configuration</h2>
          <p>Configure interest rate and fees, limits, payment terms, grace periods, payment holidays, and more according to your needs.</p>
        </SwiperSlide>
        
      </Swiper>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper-mobile"
      >
        <SwiperSlide>
        <div className="img-part2"><img src={img9} /></div>
          <h2>Customised reports</h2>
          <p>Reporting options ensure that key operational and performance metrics are easily identified, analysed and tracked.</p>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-part2"><img src={img10} /></div>
          <h2>Flexible configuration</h2>
          <p>Configure interest rate and fees, limits, payment terms, grace periods, payment holidays, and more according to your needs.</p>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-part2"><img src={img11} /></div>
          <h2>Embedded finance</h2>
          <p>Connect loan products to any buying ecosystem. Offer everything from buy-now-pay-later to revolving credit and more.</p>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-part2"><img src={img2} /></div>
          <h2>End-to-end solutions</h2>
          <p>Utilise a broad range of partner solutions, connectors and APIs to deliver a faster and smoother lending experience.</p>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-part2"><img src={img9} /></div>
          <h2>Customised reports</h2>
          <p>Reporting options ensure that key operational and performance metrics are easily identified, analysed and tracked.</p>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-part2"><img src={img10} /></div>
          <h2>Flexible configuration</h2>
          <p>Configure interest rate and fees, limits, payment terms, grace periods, payment holidays, and more according to your needs.</p>
        </SwiperSlide>
        
      </Swiper>
      </div>

      {/* Part 5 */}

      <div className="fifthpart-lending">
      <Row justify="center " xs={24} sm={24} md={24} lg={24} xl={24} className="" >
            <h2 className="part5-tittle1">THOUSANDS OF USE CASES</h2>
          </Row>
          <Row justify="center "  xs={24} sm={24} md={24} lg={24} xl={24} className="" >
            <h1 className="part5-tittle2">Trusted by leading lenders</h1>
          </Row>
          <div className="line"><div></div></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper-part5"
      >
        <SwiperSlide>
          <div className="part5-swiper-content">
            <img src={img15}/>
            <p className="quotes">"Being cloud native, Mambu and its composable architecture gave us the foundation needed to seamlessly integrate with Allica’s own proprietary applications in our cloud based tech stack."</p>
            <p className="author">- Chief Executive Officer, Allica Bank</p>
            <button>Customer success story</button>
          </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="part5-swiper-content">
            <img src={img16}/>
            <p className="quotes">"By democratising access to an innovative bank-grade system, our partnership with Mambu has created a game-changing solution for the modern lending industry."</p>
            <p className="author">- Founder and Co-CEO, Kennek</p>
            <button>Customer success story</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="part5-swiper-content">
            <img src={img17}/>
            <p className="quotes">"Leveraging Mambu’s technology and ecosystem, we will speed up the development of flexible lending solutions, offering customers a full-range service combination of transactional, saving and credit solutions."</p>
            <p className="author">- Chief Executive Officer, Plazo</p>
            <button>Customer success story</button>
          </div>
        </SwiperSlide>
        
      </Swiper>

      </div>
    </>
  );
};

export default Lending;
