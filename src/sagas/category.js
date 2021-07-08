import { call, put, takeEvery } from "redux-saga/effects";
import { getCategorySuccess } from "../actions/category";
import { fetchCategory } from "../apis/category";
import { GET_CATEGORY } from "../constants/category";
import { hideLoading, showLoading } from "./../actions/ui";

function* getCategorySaga() {
  yield put(showLoading());
  try {
    const res = yield call(fetchCategory);
    yield put(getCategorySuccess(res.data));
  } catch (error) {
    console.log(error);
  }
  yield put(hideLoading());
}

function* categorySaga() {
  yield takeEvery(GET_CATEGORY, getCategorySaga);
}

export default categorySaga;
