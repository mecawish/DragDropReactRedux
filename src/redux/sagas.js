import { takeEvery, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { showNotification, hideNotification } from './actions';

function* rootSaga() {
  yield takeEvery("ADD_TEXTBOX", textbox => showHideNotification(textbox.text));
  yield takeEvery("DELETE_TEXTBOX", textbox => showHideNotification(textbox.text));
}

function* showHideNotification(text) {
	yield put(showNotification(text));
  
  	yield delay(5000);

  	yield put(hideNotification());
}

export default rootSaga;