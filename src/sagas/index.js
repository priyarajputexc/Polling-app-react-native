import { actions } from '../../constants';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { login, getPolls, getUsers, addUser } from '../api';
import {
  loginSuccess,
  loginFailure,
  pollsReceived,
  usersReceived,
} from '../actions';

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
    console.error(error);
  }
}

function* handleGetUsers() {
  try {
    const data = yield call(getUsers);
    if (data && !data.error) yield put(usersReceived(data.data));
  } catch (error) {
    console.error(error);
  }
}

function* handleAddUser(action) {
  try {
    const data = yield call(addUser, action.body);
    if (data && !data.error) yield handleGetUsers();
  } catch (error) {
    console.error(error);
  }
}

function* actionWatcher() {
  yield takeLatest(actions.LOGIN, handleLogin);
  yield takeLatest(actions.GET_POLLS, handleGetPolls);
  yield takeLatest(actions.GET_USERS, handleGetUsers);
  yield takeLatest(actions.ADD_USER, handleAddUser);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
