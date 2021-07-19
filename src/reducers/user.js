import {
  CLEARE_MESSAGE_USER,
  DELETE_USER,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  GET_LIST_USER_SUCCESS,
  GET_PROFILE_USER_SUCCESS,
  SEARCH_USER_SUCCESS,
  UPDATE_PROFILE_USER,
  UPDATE_PROFILE_USER_FAILURE,
  UPDATE_PROFILE_USER_SUCCESS,
  USER_LOGIN,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOG_OUT,
  USER_REGISTER,
  USER_REGISTER_FAILURE,
  USER_REGISTER_SUCCESS,
} from "../constants/user";

let initialValue = {
  isLogin: false,
  isUpdated: false,
  isRegister: false,
  listUser: [],
};

const myReducer = (state = initialValue, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogin: false,
        isRegister: false,
        errorLoginMessage: "",
        succesLoginMessage: "",
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload.data,
        isLogin: true,
        succesLoginMessage: "Login success",
        errorLoginMessage: "",
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLogin: false,
        errorLoginMessage: action.payload.data,
        succesLoginMessage: "",
      };

    case USER_REGISTER:
      return { ...state, isRegister: false };
    case USER_REGISTER_SUCCESS:
      return { ...state, isRegister: true, errorRegisterMessage: "" };

    case USER_REGISTER_FAILURE:
      return {
        ...state,
        isRegister: false,
        errorRegisterMessage: action.payload.data,
      };

    case USER_LOG_OUT:
      return { isLogin: false, isRegister: false };
    case GET_PROFILE_USER_SUCCESS:
      return {
        ...state,
        ...action.payload.data,
        isLogin: true,
        succesGetProfileMessage: "Get profile success",
        succesLoginMessage: "",
      };

    case UPDATE_PROFILE_USER:
      return { ...state, isUpdated: false, messageUpdateSuccess: "" };
    case UPDATE_PROFILE_USER_SUCCESS:
      const indexUpdate = state.listUser.findIndex(
        (item) => item.id === action.payload.data.id
      );
      if (indexUpdate !== -1) {
        state.listUser[indexUpdate] = action.payload.data;
      }
      return {
        ...state,
        ...action.payload.data,
        isUpdated: true,
        messageUpdateSuccess: "Update success",
      };
    case UPDATE_PROFILE_USER_FAILURE:
      return {
        ...state,
        isUpdated: false,
        errorUpdateProfileMessage: action.payload.data,
        messageUpdateSuccess: "",
      };

    case GET_LIST_USER_SUCCESS:
      return {
        ...state,
        listUser: action.payload.data,
      };

    case DELETE_USER:
      return {
        ...state,
        isDelete: false,
        messageDeleteUser: "",
      };

    case DELETE_USER_SUCCESS:
      const indexDel = state.listUser.findIndex(
        (item) => item.id === action.payload.data
      );
      if (indexDel !== -1) {
        state.listUser.splice(indexDel, 1);
      }
      return {
        ...state,
        isDelete: true,
        messageDeleteUser: "success",
      };

    case DELETE_USER_FAILURE:
      return {
        ...state,
        isDeleted: false,
        messageDeleteUser: "error",
      };

    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        listUser: action.payload.data,
      };

    case CLEARE_MESSAGE_USER:
      return {
        ...state,
        errorLoginMessage: "",
        succesLoginMessage: "",
        errorRegisterMessage: "",
        messageUpdateSuccess: "",
        errorUpdateProfileMessage: "",
        messageDeleteUser: "",
        succesGetProfileMessage: "",
      };
    default:
      return state;
  }
};
export default myReducer;
