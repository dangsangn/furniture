import { authGet, authPost } from "./axiosClient";

export const fetchUserLogin = (data) => {
  const url = "/auth/login";
  return authPost(url, data);
};

export const fetchUserRegister = (data) => {
  const url = "/users";
  return authPost(url, data);
};

export const fetchProfileUser = (data) => {
  const url = `/users?email=${data}`;
  return authGet(url);
};
