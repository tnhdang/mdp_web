/** @format */

import React, { useState } from "react";
import { path } from "../../../utils/Constant";
import "./style.css"
import { RightOutlined } from '@ant-design/icons';

import { Row, Col, Card } from "antd";

import img1 from "../../../assets/Deposits/1.svg";
import img2 from "../../../assets/Deposits/2.png";

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
                <Row justify="center" align="middle" className="part4_Deposits_bg">
                    <Col span={24} className="part4_Deposits_topimg">
                        <img src={img1} />
                    </Col>
                    <Col span={24} className="part4_Deposits_bottomimg">
                        <img src={img1} />
                    </Col>
                </Row>
                <Row justify="start" align="top" className="part4_Deposits_content">
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part4_Deposits_content_text">
                        <p>Our feature-rich and highly flexible cloud-native deposit engine enables financial
                             and non-financial institutions to launch products fast. Create thousands of deposit
                              products via low-code/no-code APIs. No cumbersome resources or processes needed.
                        </p>
                        <button>Get in touch</button>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className="part4_Deposits_content_img">
                        <img src={img2}/>
                    </Col>
                </Row>
            </div>

        </>
    );
};

export default Deposits;
