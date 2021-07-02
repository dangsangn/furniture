import { GET_TOTAL_ITEM } from "../constants/control-action";

let initialValue = {
  totalPages: 1,
};

const myReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_TOTAL_ITEM:
      return { totalPages: action.payload.data };
    default:
      return state;
  }
};

export default myReducer;
