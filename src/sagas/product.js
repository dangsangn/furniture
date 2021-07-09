import queryString from "query-string";
import { call, put, takeEvery } from "redux-saga/effects";
import { getTotalItem } from "../actions/control-action";
import { hideLoading, showLoading } from "../actions/ui";
import {
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
} from "../apis/product";
import {
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_COMING,
  GET_PRODUCT_LIST_LATEST,
} from "../constants/product";

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

function* productsSaga() {
  yield takeEvery(GET_PRODUCT_LIST_LATEST, getProductLatestSaga);
  yield takeEvery(GET_PRODUCT_LIST_COMING, getProductComingSaga);
  yield takeEvery(GET_PRODUCT_LIST, getProductListSaga);
  yield takeEvery(GET_PRODUCT_DETAIL, getProductDetailSaga);
}

export default productsSaga;
