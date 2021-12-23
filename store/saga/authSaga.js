import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import * as authAPI from "../api/authAPI";
import { authActions } from "../authReducer";
function* login(action) {
  try {
    const response = yield call(() => authAPI.login(action.formData));
    yield put(authActions.loginSuccess(response.data));
  } catch (error) {
    yield put(authActions.loginError(error));
  }
}
function* watchLogin() {
  yield takeLatest(authActions.loginAction, login);
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
  yield takeLatest(authActions.logoutAction, logout);
}

export default function* getAuthSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
