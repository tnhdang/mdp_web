/** @format */

// import { HomePage } from "../pages/HomePage/HomePage";
import { BusinessLending, HomePage, OurPlatform } from "../pages";

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
    path: path.LENDING,
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
    path: path.BUSINESSLENDING,
    exact: true,
    component: <BusinessLending />,
    main: () => <BusinessLending />,
  }
];

export default routes;
