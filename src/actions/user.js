import {
  GET_PROFILE_USER,
  USER_LOGIN,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_LOG_OUT,
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
  UPDATE_QUANTITY_CART_ITEM,
  SEND_LIST_PAYMENT,
  GET_LIST_PAYMENT_USER,
} from "../constants/user";

export const userLogin = (data) => {
  return {
    type: USER_LOGIN,
    payload: { data },
  };
};

export const userLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: { data },
  };
};

export const userLoginFailure = (error) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: { data: error },
  };
};

export const userRegister = (data) => {
  return {
    type: USER_REGISTER,
    payload: { data },
  };
};

export const userRegisterSuccess = (data) => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: { data },
  };
};

export const getProfileUser = (data) => {
  return {
    type: GET_PROFILE_USER,
    payload: { data },
  };
};

export const userLogout = () => {
  return {
    type: USER_LOG_OUT,
  };
};

export const addCartItem = (data) => {
  return {
    type: ADD_CART_ITEM,
    payload: { data },
  };
};

export const deleteCartItem = (id) => {
  return {
    type: DELETE_CART_ITEM,
    payload: { data: id },
  };
};

export const updateQuantityCart = (id, quantity, color, size) => {
  return {
    type: UPDATE_QUANTITY_CART_ITEM,
    payload: { id, quantity, color, size },
  };
};

export const sendListPayment = (data) => {
  return {
    type: SEND_LIST_PAYMENT,
    payload: { data },
  };
};

export const getListPaymentUser = (id) => {
  return {
    type: GET_LIST_PAYMENT_USER,
    payload: { data: id },
  };
};
