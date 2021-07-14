import {
  CLEAR_FILTERS,
  GET_COLOR_PRODUCT,
  GET_PAGE_LIMIT_NUMBER,
  GET_PAGE_NUMBER,
  GET_PRODUCT_BY_CATEGORY,
  GET_RATING_PRODUCT,
  GET_SIZE_PRODUCT,
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
      return { ...state, _page: action.payload.data, hasFilter: false };
    case GET_PAGE_LIMIT_NUMBER:
      return {
        ...state,
        _limit: action.payload.data?.limit,
        _page: 1,
        hasFilter: false,
      };
    case SORT_PRODUCT:
      return {
        ...state,
        _sort: action.payload.data[0],
        _order: action.payload.data[1],
        _page: 1,
        hasFilter: false,
      };
    case GET_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        categoryId: action.payload.data,
        _page: 1,
        hasFilter: false,
      };
    case GET_RATING_PRODUCT:
      return {
        ...state,
        stars_gte: action.payload.data,
        _page: 1,
        hasFilter: false,
      };
    case GET_SIZE_PRODUCT:
      return {
        ...state,
        size_like: action.payload.data,
        _page: 1,
        hasFilter: false,
      };
    case GET_COLOR_PRODUCT:
      return {
        ...state,
        color_like: action.payload.data,
        _page: 1,
        hasFilter: false,
      };

    case CLEAR_FILTERS:
      return {
        hasFilter: true,
        _page: 1,
        _limit: 6,
      };
    default:
      return state;
  }
};
export default myReducer;
