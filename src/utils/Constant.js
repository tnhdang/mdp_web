/** @format */
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const path = {
  HOME: "/",
  OURPLATFORM: "our-platform",
  LENDING: "lending",
  BUSINESSLENDING: "business-lending",
  COMPOSABLE: "composable-approach",
  MULTICLOUD: "multicloud-approach",
  SOLUTIONS_DEPOSITS: "/solutions/deposits",
  SOLUTIONS_LENDING: "/solutions/lending",
  SOLUTION_BUSINESS_LENDING: "/solution/businesslending",
  SOLUTION_BUSINESS_BANKING: "/solution/businessbanking",
  PROCESS_ORCHESTRATOR: "process-orchestrator",
  SERVICES: "/services",
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
