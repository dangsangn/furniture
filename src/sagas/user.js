import jwt from "jsonwebtoken";
import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { userLoginSuccess, userLoginFailure } from "../actions/user";
import {
  fetchProfileUser,
  fetchUserLogin,
  fetchUserRegister,
} from "../apis/user";
import { GET_PROFILE_USER, USER_LOGIN, USER_REGISTER } from "../constants/user";
import { toastError, toastSucces } from "../helpers/toastMessage";
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
    window.history.back();
  } catch (error) {
    yield put(userLoginFailure("Opp! Login fail!"));
  }
}

function* userRegisterSaga({ payload }) {
  try {
    const res = yield call(fetchUserRegister, payload.data);
    if (res.status === 201) {
      toastSucces("Your register successfully!");
      yield delay(1000);
      history.push("/login");
    }
  } catch (error) {
    toastError("Opp! Please try again!");
  }
}

function* getProfileUserSaga({ payload }) {
  try {
    let decoded = jwt.decode(payload.data);
    let getData = yield call(fetchProfileUser, decoded.email);
    yield put(userLoginSuccess(getData.data[0]));
  } catch (error) {
    console.log(error);
  }
}

function* userSaga() {
  yield takeLatest(USER_LOGIN, userLoginSaga);
  yield takeLatest(USER_REGISTER, userRegisterSaga);
  yield takeEvery(GET_PROFILE_USER, getProfileUserSaga);
}

export default userSaga;
