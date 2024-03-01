/** @format */

import React from "react";
import { dataBenefitConfig } from "../../../utils/Mockdata";
import { CardDisrupt } from "../../../components";
const ConfigurationAsCode = () => {
  return (
    <div>
      <div className=" h-[400px] w-[100vw] bg-gradient-to-r from-[#14acbb] to-[#926db6] flex items-center">
        <div className="  w-[70%] mx-auto pvmax:max-lg:w-[90%] ">
          <p className="text-white text-7xl  font-bold text-start  w-[60%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-4xl">
            Configuration as Code
          </p>
        </div>
      </div>
      <div className="mx-auto w-[70%] py-20 pvmax:max-lg:w-[90%] ">
        <p className="text-start font-bold text-lg w-[70%] pvmax:max-lg:w-[100%]">
          Customers want better ways to manage their money. They are looking for
          choice and convenience, and all this means change. Our cloud banking
          platform helps make financial change happen. Differentiate,
          collaborate and breathe new life into services.
        </p>
      </div>
      {/* Start section Innovate   */}

      <div className="flex w-[70%] mx-auto py-10 pvmax:max-lg:w-[90%]">
        <p className="text-5xl font-bold ">
          Innovate and change at speed with CasC
        </p>
      </div>

      <div className=" grid grid-cols-2  mx-auto w-[70%] py-20 md:max-xl:grid-cols-1 pvmax:max-md:grid-cols-1">
        <div className="w-[80%] mx-auto pvmax:max-md:w-[100%]">
          <ul className="list-disc text-start  py-10 pvmax:max-md:mx-auto ">
            <li className="py-2 ">
              <strong className="">Quicker</strong>
              <p className="">
                Reduce configuration management from hours to seconds
              </p>
            </li>
            <li className="py-2">
              <strong className="">Safer</strong>
              <p className="">Reduce human error rate tenfold</p>
            </li>
            <li className="py-2">
              <strong className="">More efficient</strong>
              <p className="">
                Increase the number of deployments ten times over
              </p>
            </li>
          </ul>
          <div className="flex py-10">
            <button className="py-2 px-4 rounded-2xl bg-secondary1 text-white font-bold hover:bg-black ">
              <p className="">Get in Touch</p>
            </button>
          </div>
        </div>
        <div className=" ">
          <img
            className=" "
            src="https://cdn.sanity.io/images/0k2k2bbv/production/3f4efeebb25c7566b4abf87cb464746cc6a8b622-1200x675.jpg?w=800&h=450&q=75&fit=max&auto=format"
          ></img>
        </div>
      </div>
      {/* End section Innovate  */}

      {/* Start section 6 benefit */}

      <div className="flex w-[70%] mx-auto py-10 pvmax:max-lg:w-[90%]">
        <p className="text-5xl font-bold ">6 benefits of config as code</p>
      </div>
      <div className=" grid grid-cols-3 gap-10 w-[80%] mx-auto md:max-lg:w-[90%] pvmax:max-md:grid-cols-1 md:max-xl:grid-cols-2 pvmax:max-md:w-[90%] pb-10">
        {dataBenefitConfig.map((item, index) => {
          return (
            <>
              <CardDisrupt
                title={item.title}
                description={item.desc}
                img={item.img}
              />
            </>
          );
        })}
      </div>

      {/* End section 6 benefit */}

      {/* Start quote  */}
      <div className="  w-[100vw] bg-gradient-to-r from-[#37a95b] to-[#0a565b] py-24 ">
        <div className="mx-auto w-[70%]">
          <div className=" w-[100%] mx-auto flex flex-col">
            <p className="text-white font-bold text-4xl text-start leading-normal">
              "CasC has greatly improved efficiency in instance configuration.
              Before CasC, the process was error prone as we had to manually
              create all custom fields and transaction channels manually. This
              would cause problems later on due to human error."
            </p>
          </div>
          <div className="flex flex-col justify-end items-end py-20 text-white font-bold">
            <p className="">Gloria Odip</p>
            <p className="">Software Engineer, Kwara</p>
          </div>
        </div>
      </div>
      {/* End Quote */}

      {/* Start section Open up possibilities*/}

      <div className="flex w-[70%] mx-auto py-10 pvmax:max-lg:w-[90%]">
        <p className="text-5xl font-bold ">
          Innovate and change at speed with CasC
        </p>
      </div>

      <div className=" grid grid-cols-2  mx-auto w-[80%] py-20 md:max-xl:grid-cols-1 pvmax:max-md:grid-cols-1">
        <div className="w-[80%] mx-auto pvmax:max-md:w-[100%]">
          <p className="">
            With Mambu’s CasC you can define all configuration elements in a
            simple plain text YAML file including:
          </p>
          <ul className="list-disc text-start  py-10 pvmax:max-md:mx-auto ">
            <li className="py-2 ">
              <p className="">General set up</p>
            </li>
            <li className="py-2 ">
              <p className="">Financial set up</p>
            </li>{" "}
            <li className="py-2 ">
              <p className="">Organisation</p>
            </li>{" "}
            <li className="py-2 ">
              <p className="">Custom fields</p>
            </li>{" "}
            <li className="py-2 ">
              <p className="">User roles</p>
            </li>
            <li className="py-2 ">
              <p className="">Deposit products</p>
            </li>
            <li className="py-2 ">
              <p className="">Loan products</p>
            </li>
          </ul>
        </div>
        <div className=" ">
          <img
            className=" "
            src="https://cdn.sanity.io/images/0k2k2bbv/production/bdc2c0a4eca1fe44b024383479c6698946005640-1200x800.jpg?w=800&h=533&q=75&fit=max&auto=format"
          ></img>
        </div>
      </div>
      {/* End section Open up possibilities*/}

      {/* Start quote 2 */}
      <div className="  w-[100vw] py-24 ">
        <div className="mx-auto w-[70%]">
          <div className=" w-[100%] mx-auto flex flex-col">
            <p className="text-black font-bold text-4xl text-start leading-normal">
              "CasC has also helped us set up more instances in a shorter period
              of time. We are able to configure up to 10 instances in one day,
              something we couldn't do with manual configuration."
            </p>
          </div>
          <div className="flex flex-col justify-end items-end py-20 text-black font-bold">
            <p className="">Gloria Odip</p>
            <p className="">Software Engineer, Kwara</p>
          </div>
        </div>
      </div>
      {/* End quote 2 */}

      <div className="  w-[100vw] bg-gradient-to-r from-[#6a2eaa] to-[#02c5b0] py-24 flex flex-col items-center gap-10 ">
        <p className="text-white font-bold text-8xl text-start mx-auto pvmax:max-md:text-5xl pvmax:max-md:text-center ">
          Learn More
        </p>
        <p className="text-white">Curious about our platform?</p>
        <button className="bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-black hover:text-white">
          <p className="">Meet Our Form</p>
        </button>
      </div>
    </div>
  );
};

export default ConfigurationAsCode;
