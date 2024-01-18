/** @format */


import React from "react";
import "./style.css"
import "./HeaderData"
import { HeaderData } from "./HeaderData";

const Header = () => {
  return (
    
      <div id="header" className="header" >
            {HeaderData.map((item, index) => {

              return(
                <div style={{backgroundColor:`${item.color}`}}>
                  {item.name}

                </div>
              )
            })
            }
        Header

      </div>

  );
};

export default Header;
