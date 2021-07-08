import { authGet } from "./axiosClient";

export const fetchProductLatest = () => {
  const url = `/products?productLatest=true&_limit=8`;
  return authGet(url);
};

export const fetchProductComing = () => {
  const url = `/products?productComing=true&_limit=8`;
  return authGet(url);
};

export const fetchProducts = (params) => {
  const url = `/products?${params}`;
  return authGet(url);
};
