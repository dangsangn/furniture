import {
  GET_KEY_SEARCH,
  GET_PRODUCT_BY_KEY_SEARCH_SUCCESS,
} from "../constants/control-action";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_SUCCESS,
  CLEARE_MESSAGE_PRODUCT,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  GET_ID_PRODUCT,
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_COMING,
  GET_PRODUCT_LIST_COMING_SUCCESS,
  GET_PRODUCT_LIST_LATEST,
  GET_PRODUCT_LIST_LATEST_SUCCESS,
  GET_PRODUCT_LIST_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_SUCCESS,
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

export const getProductDetail = (id) => {
  return {
    type: GET_PRODUCT_DETAIL,
    payload: { data: id },
  };
};

export const getProductDetailSuccess = (data) => {
  return {
    type: GET_PRODUCT_DETAIL_SUCCESS,
    payload: { data },
  };
};

export const getIdProduct = (id) => {
  return {
    type: GET_ID_PRODUCT,
    payload: { data: id },
  };
};

export const getKeySearch = (data) => {
  return {
    type: GET_KEY_SEARCH,
    payload: { data },
  };
};

export const getProductByKeySearchSuccess = (data) => {
  return {
    type: GET_PRODUCT_BY_KEY_SEARCH_SUCCESS,
    payload: { data },
  };
};

export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: { data },
  };
};

export const addProductSucess = (data) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: { data },
  };
};

export const addProductFailure = (error) => {
  return {
    type: ADD_PRODUCT_FAILURE,
    payload: { error },
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: { data: id },
  };
};

export const deleteProductSucess = (data) => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: { data },
  };
};

export const deleteProductFailure = (error) => {
  return {
    type: DELETE_PRODUCT_FAILURE,
    payload: { error },
  };
};

export const updateProduct = (id, data) => {
  return {
    type: UPDATE_PRODUCT,
    payload: { id, data },
  };
};

export const updateProductSucess = (id, data) => {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: { id, data },
  };
};

export const updateProductFailure = (error) => {
  return {
    type: UPDATE_PRODUCT_FAILURE,
    payload: { error },
  };
};

export const cleareMessageProduct = () => {
  return {
    type: CLEARE_MESSAGE_PRODUCT,
  };
};
