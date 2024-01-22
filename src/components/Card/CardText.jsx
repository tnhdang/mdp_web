/** @format */

import React from "react";

const CardText = () => {
  const dataCardText = [
    {
      key: "1",
      title: "Deliver distinctive CX.",
      description: (
        <p className="">
          With Mambu at the core of your{" "}
          <a className="text-teal-800 underline cursor-pointer">banking</a> or{" "}
          <a className="text-teal-800 underline cursor-pointer">lebding</a>{" "}
          architecture you get a{" "}
          <a className="text-teal-800 underline cursor-pointer">
            composable technology foundation
          </a>{" "}
          where you can build customer-centric experiences that you fully
          control. Our extensive{" "}
          <a className="text-teal-800 underline cursor-pointer">
            {" "}
            partner ecosystem
          </a>{" "}
          connects you to independent services and solutions for the creation of
          differentiated financial offerings.
        </p>
      ),
    },
    {
      key: "2",
      title: "Outpace the market.",
      description: (
        <p className="">
          To be competitive, you need a
          <a className="text-teal-800 underline cursor-pointer">
            high-velocity operating model
          </a>
          only made possible with Mambu. Our go lives are measured in days and
          weeks, not years. Plus, Mambu's low-code process, single code base,{" "}
          <a className="text-teal-800 underline cursor-pointer">
            publicly available APIs
          </a>{" "}
          and regular releases have you future-proofed, so you continuously
          iterate with zero disruption.
        </p>
      ),
    },
    {
      key: "3",
      title: "Realise new economics.",
      description: (
        <p className="">
          Cloud-native, with a transparent{" "}
          <a className="text-teal-800 underline cursor-pointer">SaaS model</a>,
          our platform can scale with you in numbers or across borders. Costs
          are aligned to growth, opening up new possibilities with no heavy
          upfront investment, vendor lock-in or expensive professional service
          engagements. Digital transformation that’s cost-effective.
        </p>
      ),
    },
  ];
  return (
    <>
      <div className="flex w-[75%] mx-auto pb-20">
        {dataCardText.map((item, index) => {
          return (
            <div className="flex flex-col gap-y-3 px-6 cursor-pointer hover:bg-slate-300 hover:-translate-y-2 duration-500 py-2 rounded-md">
              <p className="text-3xl font-bold text-start">{item.title}</p>
              <div className="text-start text-lg  ">{item.description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardText;
