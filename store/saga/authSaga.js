import { call, put, takeLatest } from "redux-saga/effects";
import * as authAPI from "../api/authAPI";
import { authActions } from "../authReducer";
function* login() {
  try {
    const response = yield call(authAPI.login);
    yield put(authActions.loginSuccess(response.data));
  } catch (error) {
    yield put(authActions.loginError(error));
  }
}
function* watchLogin() {
  yield takeLatest(authActions.login, login);
}

function* logout() {
  try {
    const response = yield call(authAPI.logout);
    yield put(authActions.logoutSuccess(response.data));
  } catch (error) {
    yield put(authActions.logoutError(error));
  }
}
function* watchLogout() {
  yield takeLatest(authActions.logout, logout);
}

export default function* getAuthSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
