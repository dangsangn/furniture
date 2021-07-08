import { authGet } from "./axiosClient";

export const fetchCategory = () => {
  const url = `/categories`;
  return authGet(url);
};
