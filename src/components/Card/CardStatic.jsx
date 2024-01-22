/** @format */

import React from "react";
import { Statistic } from "antd";
import CountUp from "react-countup";
const CardStatic = ({ title, number, Prefix }) => {
  const formatter = (value) => (
    <CountUp
      end={value}
      separator=","
      className="font-black text-8xl bg-gradient-to-r from-[#4fb645]  to-[#057472] text-transparent bg-clip-text"
    />
  );
  return (
    <div className="flex flex-col justify-center ">
      <div className="flex justify-start items-center">
        <Statistic value={number} formatter={formatter} />
        <h1 class="font-black text-8xl bg-gradient-to-r from-[#4fb645]  to-[#057472] text-transparent bg-clip-text">
          {Prefix}
        </h1>
      </div>
      <div className="w-[70%] flex justify-start ">
        <p className="text-3xl text-start font-bold">{title}</p>
      </div>
    </div>
  );
};

export default CardStatic;
