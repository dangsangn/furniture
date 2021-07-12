import queryString from "query-string";
import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getTotalItem } from "../actions/control-action";
import { hideLoading, showLoading } from "../actions/ui";
import {
  getProductByKeySearchSuccess,
  getProductDetailSuccess,
  getProductListComingSuccess,
  getProductListLatesSuccess,
  getProductListSuccess,
} from "../actions/product";
import {
  fetchProductComing,
  fetchProductDeatil,
  fetchProductLatest,
  fetchProducts,
  fetchProductsBySearch,
} from "../apis/product";
import {
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_COMING,
  GET_PRODUCT_LIST_LATEST,
} from "../constants/product";
import { GET_KEY_SEARCH } from "../constants/control-action";

function* getProductLatestSaga() {
  yield put(showLoading());
  try {
    const res = yield call(fetchProductLatest);
    yield put(getProductListLatesSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
  yield put(hideLoading());
}

function* getProductComingSaga() {
  yield put(showLoading());
  try {
    const res = yield call(fetchProductComing);
    yield put(getProductListComingSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
  yield put(hideLoading());
}

function* getProductListSaga({ payload }) {
  const params = payload.data;
  yield put(showLoading());
  try {
    const res = yield call(fetchProducts, queryString.stringify(params));
    const { data } = res;
    yield put(getProductListSuccess(data));
    yield put(getTotalItem(data.pagination._totalRows));
  } catch (error) {
    console.log(error);
  }
  yield delay(500);
  yield put(hideLoading());
}

function* getProductDetailSaga({ payload }) {
  const id = payload.data;
  try {
    const res = yield call(fetchProductDeatil, id);
    yield put(getProductDetailSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* getKeySearchSaga({ payload }) {
  yield delay(500);
  try {
    const res = yield call(fetchProductsBySearch, payload.data);
    yield put(getProductByKeySearchSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* productsSaga() {
  yield takeEvery(GET_PRODUCT_LIST_LATEST, getProductLatestSaga);
  yield takeEvery(GET_PRODUCT_LIST_COMING, getProductComingSaga);
  yield takeEvery(GET_PRODUCT_LIST, getProductListSaga);
  yield takeEvery(GET_PRODUCT_DETAIL, getProductDetailSaga);
  yield takeLatest(GET_KEY_SEARCH, getKeySearchSaga);
}

export default productsSaga;
