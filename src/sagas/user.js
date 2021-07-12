import jwt from "jsonwebtoken";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getListPaymentUserSuccess,
  getProfileUserSuccess,
  updateProfileUserFailure,
  updateProfileUserSuccess,
  userLoginFailure,
  userLoginSuccess,
  userRegisterFailure,
  userRegisterSuccess,
} from "../actions/user";
import {
  fetchProfileUser,
  fetchUserLogin,
  fetchUserRegister,
  getListPaymentUser,
  updateProfileUserApi,
} from "../apis/user";
import {
  GET_LIST_PAYMENT_USER,
  GET_PROFILE_USER,
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
      history.push("/login");
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

function* userSaga() {
  yield takeLatest(USER_LOGIN, userLoginSaga);
  yield takeLatest(USER_REGISTER, userRegisterSaga);
  yield takeEvery(GET_PROFILE_USER, getProfileUserSaga);
  yield takeLatest(UPDATE_PROFILE_USER, updateProfileUserSaga);
  yield takeEvery(GET_LIST_PAYMENT_USER, getListPaymentUserSage);
}

export default userSaga;
