import {
  GET_PROFILE_USER,
  USER_LOGIN,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_LOG_OUT,
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
