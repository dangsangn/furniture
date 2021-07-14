import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { addAReviewSuccess, getReviewOfProductSuccess } from "../actions/user";
import { addAReviewApi, getReviewOfProductApi } from "../apis/user";
import { ADD_A_REVIEW, GET_REVIEW_OF_PRODUCT } from "../constants/user";

function* addAReviewSaga({ payload }) {
  try {
    yield call(addAReviewApi, payload.data);
    yield put(addAReviewSuccess(payload.data));
  } catch (error) {
    console.log(error);
  }
}

function* getReviewOfProductSaga({ payload }) {
  try {
    const res = yield call(getReviewOfProductApi, payload.data);
    yield put(getReviewOfProductSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* reviewSaga() {
  yield takeLatest(ADD_A_REVIEW, addAReviewSaga);
  yield takeEvery(GET_REVIEW_OF_PRODUCT, getReviewOfProductSaga);
}

export default reviewSaga;
