import { GET_CATEGORY_SUCCESS } from "../constants/category";

let initialValue = [];

const myReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_CATEGORY_SUCCESS:
      return [...action.payload.data];

    default:
      return state;
  }
};
export default myReducer;
