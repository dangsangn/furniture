import { call, takeLatest } from "redux-saga/effects";
import { sendListPayment } from "../apis/user";
import { SEND_LIST_PAYMENT } from "../constants/user";

function* sendListPaymentSaga({ payload }) {
  try {
    yield call(sendListPayment, payload.data);
  } catch (error) {
    console.log(error);
  }
}

function* paymentSaga() {
  yield takeLatest(SEND_LIST_PAYMENT, sendListPaymentSaga);
}

export default paymentSaga;
