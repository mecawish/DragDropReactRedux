import { takeEvery, takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { showNotification, hideNotification, helloWorld, removeHello, displayTextboxes } from './actions';
import axios from 'axios';
const API_URL = 'http://localhost:8080/textboxes';

function* rootSaga() {
  yield takeEvery("ADD_TEXTBOX", textbox => showHideNotification(textbox.text));
  yield takeEvery("DELETE_TEXTBOX", textbox => showHideNotification(textbox.text));
  yield takeLatest("TEST_API", getHelloWorld);
  yield takeEvery("LOAD_TEXTBOXES", getTextboxes);
}

function* showHideNotification(text) {
	yield put(showNotification(text));
  
  	yield delay(3000);

  	yield put(hideNotification());
}

function* getHelloWorld() {
	const res = yield call(axios.get, `${API_URL}/helloworld`);
	yield put(helloWorld(res.data));

	yield delay(5000);

	yield put(removeHello());
}

function* getTextboxes() {
	const res = yield call(axios.get, `${API_URL}/getTextboxes`);
	yield put(displayTextboxes(res.data));
}

export default rootSaga;