import { call, takeEvery, put } from "redux-saga/effects";
import { getServerOnfromAPI } from "./api";

function* getserverfromAPISaga(): any {
  try {
    const data = yield call(getServerOnfromAPI);
    yield put({ type: "vertexaislice/getserveronfromAPI", payload: data?.serveron || false });
  } catch (error) {
    yield put({ type: 'vertexaislice/getserveronfromAPI', payload: { error: "API error" } })
  }
}

function* setSignInSaga({payload}:any): any {
  try {
    yield put({ type: "vertexaislice/setIsSignIn", payload: payload });
  } catch (error) {
    yield put({ type: 'vertexaislice/getserveronfromAPI', payload: { error: "API error" } })
  }
}

export default function* rootSaga() {
  yield takeEvery("CHECK_API_ISON", getserverfromAPISaga);
  yield takeEvery("LOGOUT_SAGA", setSignInSaga);
}