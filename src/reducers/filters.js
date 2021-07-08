import {
  GET_PAGE_LIMIT_NUMBER,
  GET_PAGE_NUMBER,
  GET_PRODUCT_BY_CATEGORY,
  GET_RATING_PRODUCT,
  SORT_PRODUCT,
} from "../constants/control-action";

let initialValue = {
  hasFilter: false,
  _page: 1,
  _limit: 6,
};

const myReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_PAGE_NUMBER:
      return { ...state, _page: action.payload.data };
    case GET_PAGE_LIMIT_NUMBER:
      return {
        ...state,
        _page: action.payload.data.page ? action.payload.data.page : 1,
        _limit: action.payload.data?.limit,
      };
    case SORT_PRODUCT:
      return {
        ...state,
        _sort: action.payload.data[0],
        _order: action.payload.data[1],
        _page: 1,
      };
    case GET_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        categoryId: action.payload.data,
        _page: 1,
      };
    case GET_RATING_PRODUCT:
      return {
        ...state,
        stars_gte: action.payload.data,
        _page: 1,
      };
    default:
      return state;
  }
};
export default myReducer;
