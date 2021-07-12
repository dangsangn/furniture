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

export const sendListPayment = (data) => {
  const url = "/payments";
  return authPost(url, data);
};

export const getListPaymentUser = (id) => {
  const url = `/payments/${id}`;
  return authGet(url);
};
