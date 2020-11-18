import { actions } from '../../constants';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { login } from '../api';
import { loginSuccess, loginFailure } from '../actions';

function* handleLogin(action) {
  try {
    const data = yield call(login, action.username, action.password);
    data && data.error ? yield put(loginFailure(data.data)) : yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error.toString()));
  }
}

function* actionWatcher() {
  yield takeLatest(actions.LOGIN, handleLogin);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
