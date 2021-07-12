import React from "react";

// const HomePage = React.lazy(() => import("./../pages/Home"));
import HomePage from "./../pages/Home";
import ProductsPage from "./../pages/Products";
import DetailProduct from "./../pages/DetailProduct";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import Cart from "./../pages/Cart";

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
  {
    path: "/login",
    exact: true,
    main: <Login />,
  },
  {
    path: "/register",
    exact: true,
    main: <Register />,
  },
  {
    path: "/cart",
    exact: true,
    main: <Cart />,
  },
];

export default routers;
