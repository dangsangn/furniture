import React from "react";

// const HomePage = React.lazy(() => import("./../pages/Home"));
import HomePage from "./../pages/Home";
const routers = [
  {
    path: "/",
    exact: true,
    main: <HomePage />,
  },
];

export default routers;
