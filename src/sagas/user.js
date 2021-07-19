import jwt from "jsonwebtoken";
import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  deleteUserFailure,
  deleteUserSuccess,
  getListPaymentUserSuccess,
  getListUserSuccess,
  getProfileUserSuccess,
  searchUserSuccess,
  updateProfileUserFailure,
  updateProfileUserSuccess,
  userLoginFailure,
  userLoginSuccess,
  userRegisterFailure,
  userRegisterSuccess,
} from "../actions/user";
import {
  deleteUserApi,
  fetchListUserApi,
  fetchProfileUser,
  fetchUserLogin,
  fetchUserRegister,
  getListPaymentUser,
  searchUserByNameApi,
  updateProfileUserApi,
} from "../apis/user";
import { adminProductURL, homeURL, loginURL } from "../constants/baseURL";
import {
  DELETE_USER,
  GET_LIST_PAYMENT_USER,
  GET_LIST_USER,
  GET_PROFILE_USER,
  SEARCH_USER,
  UPDATE_PROFILE_USER,
  USER_LOGIN,
  USER_REGISTER,
} from "../constants/user";
import history from "../untils/history";

function* userLoginSaga({ payload }) {
  try {
    const getToken = yield call(fetchUserLogin, payload.data);
    localStorage.setItem(
      "authentication_token",
      JSON.stringify(getToken.data.access_token)
    );
    let decoded = jwt.decode(getToken.data.access_token);
    yield put(userLoginSuccess({ email: decoded.email }));
    let getData = yield call(fetchProfileUser, decoded.email);
    if (getData.data[0].role === "admin") {
      history.push(adminProductURL);
    } else {
      history.push(homeURL);
    }
    yield put(getProfileUserSuccess(getData.data[0]));
  } catch (error) {
    yield put(userLoginFailure("Login fail!"));
  }
}

function* userRegisterSaga({ payload }) {
  try {
    const res = yield call(fetchUserRegister, payload.data);
    if (res.status === 201) {
      yield put(userRegisterSuccess());
      history.push(loginURL);
    }
  } catch (error) {
    yield put(userRegisterFailure("Register fail!"));
  }
}

function* getProfileUserSaga({ payload }) {
  try {
    let decoded = jwt.decode(payload.data);
    let getData = yield call(fetchProfileUser, decoded.email);
    yield put(getProfileUserSuccess(getData.data[0]));
  } catch (error) {
    console.log(error);
  }
}

function* updateProfileUserSaga({ payload }) {
  try {
    const res = yield call(updateProfileUserApi, payload);
    yield put(updateProfileUserSuccess(res.data));
  } catch (error) {
    yield put(updateProfileUserFailure(error));
  }
}

function* getListPaymentUserSage({ payload }) {
  try {
    const res = yield call(getListPaymentUser, payload.data);
    yield put(getListPaymentUserSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* getListUserSaga() {
  try {
    const res = yield call(fetchListUserApi);
    yield put(getListUserSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* deleteUserSaga({ payload }) {
  console.log({ payload });
  try {
    yield call(deleteUserApi, payload.data);
    yield put(deleteUserSuccess(payload.data));
  } catch (error) {
    yield put(deleteUserFailure(error));
  }
}

function* searchUserSaga({ payload }) {
  yield delay(500);
  try {
    const res = yield call(searchUserByNameApi, payload.data);
    yield put(searchUserSuccess(res.data));
  } catch (error) {
    console.error(error);
  }
}

function* userSaga() {
  yield takeLatest(USER_LOGIN, userLoginSaga);
  yield takeLatest(USER_REGISTER, userRegisterSaga);
  yield takeEvery(GET_PROFILE_USER, getProfileUserSaga);
  yield takeLatest(UPDATE_PROFILE_USER, updateProfileUserSaga);
  yield takeEvery(GET_LIST_PAYMENT_USER, getListPaymentUserSage);
  yield takeEvery(GET_LIST_USER, getListUserSaga);
  yield takeLatest(DELETE_USER, deleteUserSaga);
  yield takeLatest(SEARCH_USER, searchUserSaga);
}

export default userSaga;
