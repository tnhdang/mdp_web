/** @format */
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const path = {
  HOME: "/",
  OURPLATFORM: "our-platform",
  COMPOSABLE: "composable-approach",
  MULTICLOUD: "multicloud-approach",
  SOLUTIONS_DEPOSITS: "/solutions/deposits",
  SOLUTIONS_LENDING: "/solutions/lending",
  SOLUTIONS_BUSINESS_LENDING: "/solutions/business-lending",
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
