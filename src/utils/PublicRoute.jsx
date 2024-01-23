/** @format */

// import { HomePage } from "../pages/HomePage/HomePage";
import { HomePage } from "../pages";
import Lending from "../pages/Solutions/Lending/Lending";


const routes = [
  
  {
    path: "/",
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
 
];

export default routes;
