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
  ADD_A_REVIEW,
  GET_REVIEW_OF_PRODUCT,
  GET_REVIEW_OF_PRODUCT_SUCCESS,
  ADD_A_REVIEW_SUCCESS,
  DELETE_LIST_CART_ORDERED,
  UPDATE_PROFILE_USER,
  UPDATE_PROFILE_USER_SUCCESS,
  USER_REGISTER_FAILURE,
  UPDATE_PROFILE_USER_FAILURE,
  GET_PROFILE_USER_SUCCESS,
  GET_LIST_PAYMENT_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  SEARCH_USER,
  SEARCH_USER_SUCCESS,
  GET_LIST_USER,
  GET_LIST_USER_SUCCESS,
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

export const userRegisterFailure = (error) => {
  return {
    type: USER_REGISTER_FAILURE,
    payload: { data: error },
  };
};

export const getProfileUser = (data) => {
  return {
    type: GET_PROFILE_USER,
    payload: { data },
  };
};

export const getProfileUserSuccess = (data) => {
  return {
    type: GET_PROFILE_USER_SUCCESS,
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

export const deleteListCartOrdered = (data) => {
  return {
    type: DELETE_LIST_CART_ORDERED,
    payload: { data },
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

export const getListPaymentUserSuccess = (data) => {
  return {
    type: GET_LIST_PAYMENT_USER_SUCCESS,
    payload: { data },
  };
};

export const addAReview = (data) => {
  return {
    type: ADD_A_REVIEW,
    payload: { data },
  };
};

export const addAReviewSuccess = (data) => {
  return {
    type: ADD_A_REVIEW_SUCCESS,
    payload: { data },
  };
};

export const getReviewOfProduct = (id) => {
  return {
    type: GET_REVIEW_OF_PRODUCT,
    payload: { data: id },
  };
};

export const getReviewOfProductSuccess = (data) => {
  return {
    type: GET_REVIEW_OF_PRODUCT_SUCCESS,
    payload: { data },
  };
};

export const updateProfileUser = (data) => {
  return {
    type: UPDATE_PROFILE_USER,
    payload: { data },
  };
};

export const updateProfileUserSuccess = (data) => {
  return {
    type: UPDATE_PROFILE_USER_SUCCESS,
    payload: { data },
  };
};

export const updateProfileUserFailure = (error) => {
  return {
    type: UPDATE_PROFILE_USER_FAILURE,
    payload: { data: error },
  };
};

export const getListUser = () => {
  return {
    type: GET_LIST_USER,
  };
};

export const getListUserSuccess = (data) => {
  return {
    type: GET_LIST_USER_SUCCESS,
    payload: { data },
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: { data: id },
  };
};

export const deleteUserSuccess = (id) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: { data: id },
  };
};

export const deleteUserFailure = (error) => {
  return {
    type: DELETE_USER,
    payload: { data: error },
  };
};

export const searchUser = (keySearch) => {
  return {
    type: SEARCH_USER,
    payload: { data: keySearch },
  };
};

export const searchUserSuccess = (data) => {
  return {
    type: SEARCH_USER_SUCCESS,
    payload: { data },
  };
};
