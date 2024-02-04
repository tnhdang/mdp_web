/** @format */

import React from "react";

const CardRAG = ({ img, title, desc, linkdowload }) => {
  return (
    <div className="bg-white shadow-lg shadow-gray-300 ">
      <div className="">
        <img className="object-cover" src={img}></img>
      </div>
      <div className="p-4">
        <div className="">
          <p className="text-start font-bold text-3xl py-4">{title}</p>
          <p className="text-start">{desc}</p>
        </div>
        <div className="flex flex-start py-4">
          <button className="bg-secondary1 hover:bg-black px-4 py-2 rounded-xl">
            <a
              href={linkdowload}
              target="_blank"
              className="text-white font-bold"
            >
              Dowload the guide
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardRAG;
