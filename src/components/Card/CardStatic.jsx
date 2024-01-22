/** @format */

import React from "react";
import { Statistic } from "antd";
import CountUp from "react-countup";
const CardStatic = ({ title, number, Prefix }) => {
  const formatter = (value) => (
    <CountUp
      end={value}
      separator=","
      className="font-black text-8xl bg-gradient-to-r from-[#4fb645]  to-[#057472] text-transparent bg-clip-text pvmax:max-md:text-5xl"
    />
  );
  return (
    <div className="flex flex-col justify-center ">
      <div className="flex justify-start items-center pvmax:max-md:w-[90%] pvmax:max-md:justify-center ">
        <Statistic value={number} formatter={formatter} />
        <h1 class="font-bold text-8xl pvmax:max-md:text-5xl bg-gradient-to-r from-[#4fb645]  to-[#057472] text-transparent bg-clip-text">
          {Prefix}
        </h1>
      </div>
      <div className="w-[70%] flex justify-start pvmax:max-md:w-[90%] pvmax:max-md:justify-center ">
        <p className="text-3xl text-start font-bold pvmax:max-md:text-xl pvmax:max-md:text-center pvmax:max-md:w-[80%] ">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CardStatic;
