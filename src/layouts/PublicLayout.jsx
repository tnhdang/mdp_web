/** @format */

import React, { useState } from "react";

import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";


function PublicLayout() {
  return (
    <>
      <Header/>
      <Outlet />
    
    </>
  );
}

export default PublicLayout;
