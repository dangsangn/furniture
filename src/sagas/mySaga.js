import { fork } from "redux-saga/effects";
import productsSaga from "./product";
import categorySaga from "./category";
import userSaga from "./user";

function* rootSaga() {
  yield fork(productsSaga);
  yield fork(categorySaga);
  yield fork(userSaga);
}

export default rootSaga;
