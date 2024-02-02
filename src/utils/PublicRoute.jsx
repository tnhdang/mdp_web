/** @format */

// import { HomePage } from "../pages/HomePage/HomePage";
import {
  HomePage,
  OurPlatform,
  Composable,
  MultiCloud,
  ProcessOrchesTrator,
} from "../pages";
import { Deposits } from "../pages";
import BusinessBanking from "../pages/Solutions/Businessbanking/BusinessBanking";
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
    path: path.SOLUTION_BUSINESS_BANKING,
    exact: true,
    component: <BusinessBanking />,
    main: () => <BusinessBanking />,
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
  {
    path: path.PROCESS_ORCHESTRATOR,
    exact: true,
    component: <ProcessOrchesTrator />,
    main: () => <ProcessOrchesTrator />,
  },
];

export default routes;
