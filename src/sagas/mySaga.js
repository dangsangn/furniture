import { fork } from "redux-saga/effects";
import productsSaga from "./product";
import categorySaga from "./category";

function* rootSaga() {
  yield fork(productsSaga);
  yield fork(categorySaga);
}

export default rootSaga;
