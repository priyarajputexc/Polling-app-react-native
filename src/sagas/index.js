import { actions } from '../../constants';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { login, getPolls } from '../api';
import { loginSuccess, loginFailure, pollsReceived } from '../actions';

function* handleLogin(action) {
  try {
    const data = yield call(login, action.username, action.password);
    data && data.error
      ? yield put(loginFailure(data.data))
      : yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error.toString()));
  }
}

function* handleGetPolls() {
  try {
    const data = yield call(getPolls);
    if (data && !data.error) yield put(pollsReceived(data.data));
  } catch (error) {
    // yield put(loginFailure(error.toString()));
  }
}

function* actionWatcher() {
  yield takeLatest(actions.LOGIN, handleLogin);
  yield takeLatest(actions.GET_POLLS, handleGetPolls);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
