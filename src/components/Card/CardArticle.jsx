/** @format */

import React from "react";
import { Divider } from "antd";
const CardArticle = ({ title, description }) => {
  return (
    <div>
      <Divider className="h-2 bg-gradient-to-r  from-[#7878ff]  to-[#6e2aac]" />
      <div className="py-2">
        <p className="text-5xl font-bold text-start">{title}</p>
      </div>
      <div className="py-2">
        <p className="text-start text-xl">{description}</p>
      </div>
    </div>
  );
};

export default CardArticle;
