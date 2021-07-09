import { combineReducers } from "redux";
import products from "./products";
import ui from "./ui";
import category from "./category";
import filters from "./filters";
import pagination from "./pagination";
import productDetail from "./product-detail";

const rootReducer = combineReducers({
  products,
  ui,
  category,
  filters,
  pagination,
  productDetail,
});

export default rootReducer;
