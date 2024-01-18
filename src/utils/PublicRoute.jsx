/** @format */

// import { HomePage } from "../pages/HomePage/HomePage";
import { HomePage } from "../pages";


const routes = [
  
  {
    path: "/",
    exact: true,
    component: <HomePage />,
    main: () => <HomePage />,
  },
 
];

export default routes;
