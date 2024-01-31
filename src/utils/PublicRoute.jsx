/** @format */

// import { HomePage } from "../pages/HomePage/HomePage";
import { HomePage, OurPlatform, Composable, MultiCloud } from "../pages";

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
    path: "/lending",
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
    path: path.COMPOSABLE,
    exact: true,
    component: <Composable />,
    main: () => <Composable />,
  },
  {
    path: path.MULTICLOUD,
    exact: true,
    component: <MultiCloud />,
    main: () => <MultiCloud />,
  },
];

export default routes;
