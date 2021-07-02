import {
  GET_PRODUCT_LIST_COMING_SUCCESS,
  GET_PRODUCT_LIST_LATEST_SUCCESS,
  GET_PRODUCT_LIST_SUCCESS,
} from "../constants/product";

let initialValue = {
  listProduct: [],
  listProductLatest: [],
  listProductComing: [],
};

const myReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST_SUCCESS:
      return { ...state, listProduct: action.payload.data.data };
    case GET_PRODUCT_LIST_LATEST_SUCCESS:
      return { ...state, listProductLatest: action.payload.data.data };
    case GET_PRODUCT_LIST_COMING_SUCCESS:
      return { ...state, listProductComing: action.payload.data.data };
    default:
      return state;
  }
};
export default myReducer;
