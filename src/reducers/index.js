import { combineReducers } from "redux";
import products from "./products";
import ui from "./ui";
import category from "./category";
import filters from "./filters";
import pagination from "./pagination";
import productDetail from "./product-detail";
import user from "./user";
import cart from "./cart";
import reviews from "./reviews";
import payment from "./payment";

const rootReducer = combineReducers({
  products,
  ui,
  category,
  filters,
  pagination,
  productDetail,
  user,
  cart,
  reviews,
  payment,
});

export default rootReducer;
