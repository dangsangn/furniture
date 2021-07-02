import { GET_CATEGORY, GET_CATEGORY_SUCCESS } from "../constants/category";

export const getCategory = () => {
  return {
    type: GET_CATEGORY,
  };
};

export const getCategorySuccess = (data) => {
  return {
    type: GET_CATEGORY_SUCCESS,
    payload: { data },
  };
};
