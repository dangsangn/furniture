import React from "react";

// const HomePage = React.lazy(() => import("./../pages/Home"));
import HomePage from "./../pages/Home";
import ProductsPage from "./../pages/Products";
import DetailProduct from "./../pages/DetailProduct";
const routers = [
  {
    path: "/",
    exact: true,
    main: <HomePage />,
  },
  {
    path: "/products",
    exact: true,
    main: <ProductsPage />,
  },
  {
    path: "/products/:idProduct",
    exact: true,
    main: <DetailProduct />,
  },
];

export default routers;
