/** @format */

import React, { useState } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { BackToTopButton } from "../components";
function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <BackToTopButton />
      <Footer />
    </>
  );
}

export default PublicLayout;
