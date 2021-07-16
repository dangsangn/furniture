import { GET_PRODUCT_BY_KEY_SEARCH_SUCCESS } from "../constants/control-action";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_SUCCESS,
  CLEARE_MESSAGE_PRODUCT,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_LIST_COMING_SUCCESS,
  GET_PRODUCT_LIST_LATEST_SUCCESS,
  GET_PRODUCT_LIST_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_SUCCESS,
} from "../constants/product";

let initialValue = {
  listProduct: [],
  listProductLatest: [],
  listProductComing: [],
  listProductBySearch: [],
};

const myReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST_SUCCESS:
      return { ...state, listProduct: action.payload.data.data.reverse() };
    case GET_PRODUCT_LIST_LATEST_SUCCESS:
      return { ...state, listProductLatest: action.payload.data.data };

    case GET_PRODUCT_LIST_COMING_SUCCESS:
      return { ...state, listProductComing: action.payload.data.data };

    case GET_PRODUCT_BY_KEY_SEARCH_SUCCESS:
      return {
        ...state,
        listProductBySearch: action.payload.data,
        listProduct: action.payload.data,
      };

    case ADD_PRODUCT:
      return { ...state, isAddProductSuccess: false, messageAddProduct: "" };
    case ADD_PRODUCT_SUCCESS:
      state.listProduct.unshift(action.payload.data);
      return {
        ...state,
        isAddProductSuccess: true,
        messageAddProduct: "success",
      };

    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isAddProductSuccess: false,
        messageAddProduct: "error",
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        isUpdateProductSuccess: false,
        messageUpdateProduct: "",
      };

    case UPDATE_PRODUCT_SUCCESS:
      let indexUpdate = state.listProduct.findIndex(
        (item) => item.id === action.payload.id
      );
      state.listProduct[indexUpdate] = {
        ...state.listProduct[indexUpdate],
        ...action.payload.data,
      };
      return {
        ...state,
        isUpdateProductSuccess: true,
        messageUpdateProduct: "success",
      };

    case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        isUpdateProductSuccess: false,
        messageUpdateProduct: "error",
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        isDeleteProductSuccess: false,
        messageDeleteProduct: "",
      };

    case DELETE_PRODUCT_SUCCESS:
      let indexDelete = state.listProduct.findIndex(
        (item) => item.id === action.payload.id
      );
      state.listProduct.splice(indexDelete, 1);
      return {
        ...state,
        isDeleteProductSuccess: true,
        messageDeleteProduct: "success",
      };

    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        isDeleteProductSuccess: false,
        messageDeleteProduct: "error",
      };

    case CLEARE_MESSAGE_PRODUCT:
      return {
        listProduct: state.listProduct,
        listProductLatest: state.listProductLatest,
        listProductComing: state.listProductComing,
        listProductBySearch: state.listProductBySearch,
      };

    default:
      return state;
  }
};
export default myReducer;
