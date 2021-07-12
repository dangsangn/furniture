import { fork } from "redux-saga/effects";
import productsSaga from "./product";
import categorySaga from "./category";
import userSaga from "./user";
import paymentSaga from "./payment";

function* rootSaga() {
  yield fork(productsSaga);
  yield fork(categorySaga);
  yield fork(userSaga);
  yield fork(paymentSaga);
}

export default rootSaga;
