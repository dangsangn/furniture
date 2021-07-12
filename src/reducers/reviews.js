import { ADD_A_REVIEW, GET_REVIEW_OF_PRODUCT_SUCCESS } from "../constants/user";

let initialValue = [];

const myReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_REVIEW_OF_PRODUCT_SUCCESS:
      return [...action.payload.data];

    case ADD_A_REVIEW:
      state.unshift(action.payload.data);
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
