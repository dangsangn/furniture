import { authDelete, authGet, authPatch, authPost } from "./axiosClient";

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
  const url = `/payments/?idUser=${id}`;
  return authGet(url);
};

export const addAReviewApi = (data) => {
  const url = "/reviews";
  return authPost(url, data);
};

export const getReviewOfProductApi = (id) => {
  const url = `/reviews/?idProduct=${id}`;
  return authGet(url);
};

export const updateProfileUserApi = (payload) => {
  const url = `/users/${payload.data.idUser}`;
  return authPatch(url, payload.data.data);
};

export const deleteUserApi = (id) => {
  const url = `/users/${id}`;
  return authDelete(url);
};

export const fetchListUserApi = () => {
  const url = "/users";
  return authGet(url);
};

export const searchUserByNameApi = (data) => {
  const url = `/users?email_like=${data}`;
  return authGet(url);
};
