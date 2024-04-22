/** @format */

import React, { useState } from "react";
import { path } from "../../../utils/Constant";
import "./style.css"
import { RightOutlined } from '@ant-design/icons';

import { Row, Col, Card } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {  Pagination } from 'swiper/modules';

import img1 from "../../../assets/Deposits/1.svg";
import img2 from "../../../assets/Deposits/2.png";
import img3 from "../../../assets/Deposits/4.png";
import img5 from "../../../assets/Deposits/5.png";
import img6 from "../../../assets/Deposits/6.png";
import img7 from "../../../assets/Deposits/7.png";
import img8 from "../../../assets/Deposits/8.png";
import img9 from "../../../assets/Deposits/9.png";
import img10 from "../../../assets/Deposits/10.png";
import img11 from "../../../assets/Deposits/11.png";
import img12 from "../../../assets/Deposits/12.png";
import img13 from "../../../assets/Deposits/13.png";
import img14 from "../../../assets/Deposits/14.png";
import img15 from "../../../assets/Deposits/15.png";
import img16 from "../../../assets/Deposits/16.svg";
import img17 from "../../../assets/Deposits/17.png";
import img18 from "../../../assets/Deposits/18.png";
import img19 from "../../../assets/Deposits/19.webp";
import img20 from "../../../assets/Deposits/20.webp";
import img21 from "../../../assets/Deposits/21.webp";
import img22 from "../../../assets/Deposits/22.webp";



import bg1 from "../../../assets/Deposits/bg1.png";
import bg2 from "../../../assets/Deposits/bg2.png";


const { Meta } = Card;
const Deposits = () => {

    return (
        <>
            {/* Part 1 */}
            <div className="part1_Deposits">
                Deposits
            </div>

            {/* Part 2 */}
            <div className="part2_Deposits">
                <a href={path.SOLUTIONS_LENDING}>Our cloud banking platform</a>
                <RightOutlined />
                <a href={path.SOLUTIONS_DEPOSIT} className="part2_Deposits_main">Deposits</a>
            </div>

            {/* Part 3 */}
            <div className="part3_Deposits">
                <p>More than 75% of the world’s population has a financial account to deposit and save money, pay bills, connect a debit card, and receive funds. Mambu gives you a dynamic deposit engine and a connected ecosystem of third-party vendors that enable financial and non-financial institutions to build a variety of deposit-based offerings to reach this vast market.</p>
            </div>

            {/* Part 4 */}
            <div className="part4_Deposits">
                <Row justify="start" align="top" className="part4_Deposits_content">
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part4_Deposits_content_text">
                        <p>Our feature-rich and highly flexible cloud-native deposit engine enables financial
                            and non-financial institutions to launch products fast. Create thousands of deposit
                            products via low-code/no-code APIs. No cumbersome resources or processes needed.
                        </p>
                        <button>Get in touch</button>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part4_Deposits_content_img">
                        <img src={img2} />
                    </Col>
                </Row>
            </div>

            {/* Part 5 */}
            <div className="part5_Deposits">
                <div className="part5_Deposits_content">
                    <h2>Modernise your deposit and transactional banking portfolio effortlessly.</h2>
                    <p>Expand to new markets through scalable, low-code/no-code product configurations.
                        Iterate and test with in-house resources and publicly available APIs to reduce
                        development costs and connect your entire deposit and transactional ecosystem.
                    </p>
                    <img src={img3} className="part5_Deposits_contentimg" />
                </div>
                {/* <img src={bg1} className="part5_Deposits_bg" /> */}
            </div>

            {/* Part 6 */}
            <div className="part6_Deposits">
                <h1>We provide the foundation. You compose your perfect banking business.</h1>
            </div>

            {/* Part 7 */}
            <div className="part7_Deposits">
                <h2>Tailor solutions using five product categories</h2>
                <Row gutter={[48, 48]} justify="start" align="top" className="part7_Deposits_content">

                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part7_Deposits_content_card">
                        <div>
                            <h3>Personal banking</h3>
                            <p>Daily transactional banking accounts for personal use with debit card/ overdraft support. Also known as current or chequing (checking) accounts.</p>
                            <a>Learn more</a>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part7_Deposits_content_card">
                        <div>
                            <h3>Business banking</h3>
                            <p>Daily transactional banking accounts for business use with debit card/overdraft support. Also known as current or chequing (checking) accounts.</p>
                            <a>Learn more</a>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part7_Deposits_content_card">
                        <div>
                            <h3>Stored value accounts</h3>
                            <p>Limited current account functionality for digital wallet or gift card support.</p>
                            <a>Stored value digital wallets</a>
                            <br></br>
                            <a>Stored value cards</a>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part7_Deposits_content_card">
                        <div>
                            <h3>Personal deposits</h3>
                            <p>Savings accounts for personal use with interest bearing capabilities.</p>
                            <a>Learn more</a>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part7_Deposits_content_card">
                        <div>
                            <h3>Business deposits</h3>
                            <p>Savings accounts for business use with interest bearing capabilities.</p>
                            <a>Learn more</a>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Part 8 */}
            <div className="part8_Deposits">
                <h2>Tailor solutions using five product categories</h2>
                <Row gutter={[48, 48]} justify="start" align="top" className="part8_Deposits_content">

                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part8_Deposits_content_card">
                        <div>
                            <img src={img5} />
                            <p>Launch new deposit products faster in a matter of days vs. months or even years compared to legacy core technology providers.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part8_Deposits_content_card">
                        <div>
                            <img src={img6} />
                            <p>Proactively and continuously improve your products and services.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part8_Deposits_content_card">
                        <div>
                            <img src={img7} />
                            <p>Reduce development costs and free up technical resources.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part8_Deposits_content_card">
                        <div>
                            <img src={img8} />
                            <p>Create, upgrade, enhance or migrate deposit and transactional offerings of all types.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part8_Deposits_content_card">
                        <div>
                            <img src={img9} />
                            <p>Cloud-native SaaS model, pay as you grow.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part8_Deposits_content_card">
                        <div>
                            <img src={img10} />
                            <p>Multi-cloud approach - choose one of the three major cloud providers.</p>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Part 9 */}
            <div className="part9_Deposits">
                <h1>"The only way to build a state-of-the-art bank is to find the
                    best technology partner. One that can evolve at the speed today’s
                    times demand while remaining simple and easy to use."
                </h1>
                <div className="part9_Deposits_cre">
                    <img src={img11} />
                    <p>CEO</p>
                </div>

            </div>

            {/* Part 10 */}
            <div className="part7_Deposits">
                <h2>Deposits made easy</h2>
                <Row gutter={[48, 48]} justify="start" align="top" className="part7_Deposits_content">

                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part7_Deposits_content_card">
                        <div>
                            <img src={img7} />
                            <h3>Flexible savings</h3>
                            <p>Daily transactional banking accounts for personal use with debit card/ overdraft support. Also known as current or chequing (checking) accounts.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part7_Deposits_content_card">
                        <div>
                            <img src={img12} />
                            <h3>Flexible overdraft</h3>
                            <p>Daily transactional banking accounts for business use with debit card/overdraft support. Also known as current or chequing (checking) accounts.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part7_Deposits_content_card">
                        <div>
                            <img src={img8} />
                            <h3>Stored value instruments</h3>
                            <p>Limited current account functionality for digital wallet or gift card support.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part7_Deposits_content_card">
                        <div>
                            <img src={img13} />
                            <h3>Custom reports & alerts</h3>
                            <p>Savings accounts for personal use with interest bearing capabilities.</p>
                        </div>
                    </Col>

                </Row>
            </div>

            {/* Part 11 */}
            <div className="part11_Deposits">
                <Row justify="start" align="top" className="part11_Deposits_content">
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part11_Deposits_content_text">
                        <h2>Why WDP</h2>
                        <p>Put your personal savings and business deposit services and stored value, daily and
                            business banking accounts ahead of the competition. Are you ready to make change to
                            your biggest asset and eliminate reliance on restrictive old-fashioned core banking systems?
                        </p>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part11_Deposits_content_img">
                        <img src={img14} />
                    </Col>
                </Row>
            </div>

            {/* Part 12 */}
            <div className="part12_Deposits">
                <h2>Tailor solutions using five product categories</h2>
                <Row gutter={[48, 48]} justify="start" align="top" className="part12_Deposits_content">

                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part12_Deposits_content_card">
                        <div>
                            <img src={img5} />
                            <p>Expand to new markets through scalable, low-code/no-code product configuration. Iterate and test with in-house resources and publicly available APIs to reduce development costs.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part12_Deposits_content_card">
                        <div>
                            <img src={img6} />
                            <p>Connect with best-in-class technology vendors to enable seamless, fully automated digital account opening processes and additional services, so you can onboard and approve new accounts.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part12_Deposits_content_card">
                        <div>
                            <img src={img7} />
                            <p>We were in the cloud before it was cool. Optimise multi-cloud approaches with a choice of major cloud providers.</p>
                        </div>
                    </Col>

                </Row>
            </div>

            {/* Part 13 */}
            <div className="part13_Deposits">
                <h2>Customer stories</h2>
                <Row gutter={[48, 48]} justify="start" align="top" className="part13_Deposits_content">

                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part13_Deposits_content_card">
                        <div>
                            <img src={img15} />
                            <h3>BancoEstado</h3>
                            <p>BancoEstado is Chile’s only state-owned bank, and it serves 13M customers.</p>
                            <a>Success story</a>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part13_Deposits_content_card">
                        <div>
                            <img src={img16} />
                            <h3>TymeBank</h3>
                            <p>TymeBank is the first bank in South Africa to receive a full banking license in almost 20 years.</p>
                            <a>Success story</a>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part13_Deposits_content_card">
                        <div>
                            <img src={img17} />
                            <h3>Bank Islam</h3>
                            <p>Bank Islam is not only Shariah-compliant, but is also designed around the customer.</p>
                            <a>Success story</a>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part13_Deposits_content_card">
                        <div>
                            <img src={img18} />
                            <h3>N26</h3>
                            <p>The first pan-European mobile-only bank serving millions of customers worldwide.</p>
                            <a>Success story</a>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Part 14 */}
            <div className="part14_Deposits">

                <h2>INSIGHTS</h2>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="part14_Deposits_mySwiper-pc"
                >
                    <SwiperSlide>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={img19} />}
                        >
                            <h3>REPORT - Sep 15, 2021</h3>
                            <Meta title="Evolve or be extinct" description="Covid-19 has triggered large-scale digital disruption for industries globally. Retail banking is no exception.A report by Financial Times Focus in partnership with Mambu explores what banks need to build stronger,..." />
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={img20} />}
                        >
                            <h3>ARTICLE - Jan 21, 2022</h3>
                            <Meta title="Why Mambu's customers are 32% more likely to scale " description="Our Advisory team explains how cloud-native infrastructure, composable platforms, configurable products, and low upfront investments are paramount to unlocking value and scale faster, cheaper, and with a better customer experience...." />
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={img21} />}
                        >
                            <h3>ARTICLE- Jan 28, 2022</h3>
                            <Meta title="Portrait of a techcelerator" description="Get behind these tech-savvy consumers who manage their money online, having increasingly adopted digital banking services during the pandemic." />
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={img22} />}
                        >
                            <h3>ARTICLE- Nov 12, 2021</h3>
                            <Meta title="What’s your banking tribe? " description="The one-size-fits-all segmentation model, in which customers are divided up based on how much they earn, has become obsolete with the rise of open banking. It’s time for banks to..." />
                        </Card>
                    </SwiperSlide>
                </Swiper>


                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="part14_Deposits_mySwiper-mobile"
                >
                    <SwiperSlide>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={img19} />}
                        >
                            <h3>REPORT - Sep 15, 2021</h3>
                            <Meta title="Evolve or be extinct" description="Covid-19 has triggered large-scale digital disruption for industries globally. Retail banking is no exception.A report by Financial Times Focus in partnership with Mambu explores what banks need to build stronger,..." />
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={img20} />}
                        >
                            <h3>ARTICLE - Jan 21, 2022</h3>
                            <Meta title="Why Mambu's customers are 32% more likely to scale " description="Our Advisory team explains how cloud-native infrastructure, composable platforms, configurable products, and low upfront investments are paramount to unlocking value and scale faster, cheaper, and with a better customer experience...." />
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={img21} />}
                        >
                            <h3>ARTICLE- Jan 28, 2022</h3>
                            <Meta title="Portrait of a techcelerator" description="Get behind these tech-savvy consumers who manage their money online, having increasingly adopted digital banking services during the pandemic." />
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={img22} />}
                        >
                            <h3>ARTICLE- Nov 12, 2021</h3>
                            <Meta title="What’s your banking tribe? " description="The one-size-fits-all segmentation model, in which customers are divided up based on how much they earn, has become obsolete with the rise of open banking. It’s time for banks to..." />
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Part 15 */}
            <div className="part15_Deposits">
                <Row justify="start" align="middle">
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="">
                        <h1>Ready to get started?</h1>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="button">
                        <button>Contact us</button>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Deposits;
