import { all, call } from "@redux-saga/core/effects";
import getAuthSaga from "./authSaga";

function* rootSaga() {
  yield all([call(getAuthSaga)]);
}

export default rootSaga;
