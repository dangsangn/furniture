import { HIDE_LOADING, SHOW_LOADING } from "../constants/ui";

let initialValue = {
  showLoading: false,
};

const myReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, showLoading: true };
    case HIDE_LOADING:
      return { ...state, showLoading: false };
    default:
      return state;
  }
};

export default myReducer;
