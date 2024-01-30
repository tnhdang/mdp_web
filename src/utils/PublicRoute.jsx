/** @format */

// import { HomePage } from "../pages/HomePage/HomePage";
import { Deposits, HomePage, OurPlatform } from "../pages";

import Lending from "../pages/Solutions/Lending/Lending";
import { path } from "./Constant";

const routes = [
  {
    path: path.HOME,
    exact: true,
    component: <HomePage />,
    main: () => <HomePage />,
  },
  {
    path: path.SOLUTIONS_LENDING,
    exact: true,
    component: <Lending />,
    main: () => <Lending />,
  },
  {
    path: path.OURPLATFORM,
    exact: true,
    component: <OurPlatform />,
    main: () => <OurPlatform />,
  },
  {
    path: path.SOLUTIONS_DEPOSITS,
    exact: true,
    component: <Deposits />,
    main: () => <Deposits />,
  },
];

export default routes;
