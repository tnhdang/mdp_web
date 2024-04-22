/** @format */
import React, { useState } from "react";
import { path } from "../../../utils/Constant";
import "./style.css"
import { RightOutlined } from '@ant-design/icons';

import { Row, Col, Card } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import img1 from "../../../assets/BusinessBanking/1.webp";
import img2 from "../../../assets/BusinessBanking/2.png";
import img3 from "../../../assets/BusinessBanking/3.png";
import img4 from "../../../assets/BusinessBanking/4.png";



const BusinessBanking = () => {

    return (
        <>
            {/* Part 1 */}
            <div className="part1_BusinessBanking">
                Business banking & deposits
            </div>

            {/* Part 2 */}
            <div className="part2_BusinessBanking">
                <p>More than 75% of the world’s population has a financial account
                     to deposit and save money, pay bills, connect a debit card, and
                      receive funds. Mambu gives you a dynamic deposit engine and a connected
                       ecosystem of third-party vendors that enable financial and non-financial
                        institutions to build a variety of deposit-based offerings to reach this vast market.
                </p>
            </div>

            {/* Part 3 */}
            <div className="part3_BusinessBanking">
                <h2>Evolve the business banking experience</h2>
                <Row justify="start" align="top" className="part3_BusinessBanking_content">
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part3_BusinessBanking_content_text">
                        <p>Fuelled by the pandemic, 43% of small and medium enterprises (SMEs) have increased their use of online banking services, and 40% used more mobile banking services*.
                            Mambu’s composable approach, cloud-native deposit engine and low-code/no-code experience help you quickly configure, launch and scale products.
                        </p>
                        <button>Get in touch</button>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part3_BusinessBanking_content_img">
                        <img src={img1} />
                    </Col>
                </Row>
            </div>

            {/* Part 4 */}
            <div className="part4_BusinessBanking">
                <h2>Revamp business banking with Mambu</h2>
                <Row gutter={[48, 48]} justify="start" align="top" className="part4_BusinessBanking_content">

                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part4_BusinessBanking_content_card">
                        <div>
                            <img src={img2} />
                            <h4>Personalisation and flexibility</h4>
                            <p>Expand to new markets through scalable, low-code/no-code product configuration. Iterate and test with in-house resources and publicly available APIs to reduce development costs.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part4_BusinessBanking_content_card">
                        <div>
                            <img src={img3} />
                            <h4>Speed to market</h4>
                            <p>Connect with best-in-class technology vendors to enable seamless, fully automated digital account opening processes and additional services, so you can onboard and approve new accounts.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="part4_BusinessBanking_content_card">
                        <div>
                            <img src={img4} />
                            <h4>Innovate with scale</h4>
                            <p>We were in the cloud before it was cool. Optimise multi-cloud approaches with a choice of major cloud providers.</p>
                        </div>
                    </Col>

                </Row>
            </div>
        </>
    );
}

export default BusinessBanking