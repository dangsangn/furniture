import {
  GET_ID_PRODUCT,
  GET_PRODUCT_DETAIL_SUCCESS,
} from "../constants/product";

let initialValue = {
  id: "",
  name: "",
  categoryId: "",
  link_img: [],
  stars: 0,
  price: 0,
  discount: 0,
  description: "",
  productLatest: true,
  productComing: true,
  size: [],
  color: [],
};

const myReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_SUCCESS:
      return { ...state, ...action.payload.data };
    case GET_ID_PRODUCT:
      return { ...state, id: action.payload.data };
    default:
      return state;
  }
};
export default myReducer;
