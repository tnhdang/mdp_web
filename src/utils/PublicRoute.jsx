/** @format */

// import { HomePage } from "../pages/HomePage/HomePage";
import { HomePage, OurPlatform, Composable, MultiCloud, BusinessLending } from "../pages";
import { Deposits, Lending } from "../pages";
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
    path: path.SOLUTIONS_BUSINESS_LENDING,
    exact: true,
    component: <BusinessLending />,
    main: () => <BusinessLending />,
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
  {
    path: path.SOLUTIONS_DEPOSITS,
    exact: true,
    component: <Deposits />,
    main: () => <Deposits />,
  },
];

export default routes;
