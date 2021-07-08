import {
  GET_TOTAL_ITEM,
  GET_PAGE_NUMBER,
  GET_PAGE_LIMIT_NUMBER,
  SORT_PRODUCT,
  GET_PRODUCT_BY_CATEGORY,
  GET_SIZE_PRODUCT,
  GET_COLOR_PRODUCT,
  GET_RATING_PRODUCT,
  CLEAR_FILTERS,
} from "../constants/control-action";

export const getTotalItem = (data) => {
  return {
    type: GET_TOTAL_ITEM,
    payload: { data },
  };
};

export const getPageNumber = (data) => {
  return {
    type: GET_PAGE_NUMBER,
    payload: { data },
  };
};

export const getPageLimitNumber = (data) => {
  return {
    type: GET_PAGE_LIMIT_NUMBER,
    payload: { data },
  };
};

export const sortProduct = (data) => {
  return {
    type: SORT_PRODUCT,
    payload: { data },
  };
};

export const getProductByCategory = (data) => {
  return {
    type: GET_PRODUCT_BY_CATEGORY,
    payload: { data },
  };
};

export const getSizeProduct = (data) => {
  return {
    type: GET_SIZE_PRODUCT,
    payload: { data },
  };
};

export const getColorProduct = (data) => {
  return {
    type: GET_COLOR_PRODUCT,
    payload: { data },
  };
};

export const getRatingProduct = (data) => {
  return {
    type: GET_RATING_PRODUCT,
    payload: { data },
  };
};

export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS,
  };
};
