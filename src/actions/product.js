import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_COMING,
  GET_PRODUCT_LIST_COMING_SUCCESS,
  GET_PRODUCT_LIST_LATEST,
  GET_PRODUCT_LIST_LATEST_SUCCESS,
  GET_PRODUCT_LIST_SUCCESS,
} from "../constants/product";

export const getProductListLates = () => {
  return {
    type: GET_PRODUCT_LIST_LATEST,
  };
};

export const getProductListLatesSuccess = (data) => {
  return {
    type: GET_PRODUCT_LIST_LATEST_SUCCESS,
    payload: { data },
  };
};

export const getProductListComing = () => {
  return {
    type: GET_PRODUCT_LIST_COMING,
  };
};

export const getProductListComingSuccess = (data) => {
  return {
    type: GET_PRODUCT_LIST_COMING_SUCCESS,
    payload: { data },
  };
};

export const getProductList = (params) => {
  return {
    type: GET_PRODUCT_LIST,
    payload: { data: params },
  };
};

export const getProductListSuccess = (data) => {
  return {
    type: GET_PRODUCT_LIST_SUCCESS,
    payload: { data },
  };
};
