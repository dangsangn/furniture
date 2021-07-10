import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOG_OUT,
} from "../constants/user";
import { toastError, toastSucces } from "../helpers/toastMessage";

let initialValue = {
  isLogin: false,
};

const myReducer = (state = initialValue, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      toastSucces("Welcome " + action.payload.data.email);
      return { ...state, isLogin: true, ...action.payload.data };
    case USER_LOGIN_FAILURE:
      toastError(action.payload.data);
      return { ...state };
    case USER_LOG_OUT:
      return { ...state, isLogin: false };
    default:
      return state;
  }
};
export default myReducer;
