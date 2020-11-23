import { actions } from '../../constants';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
  login,
  getPolls,
  getUsers,
  addUser,
  deleteOption,
  createPoll,
  deletePoll,
  editPollTitle,
} from '../api';
import {
  loginSuccess,
  loginFailure,
  pollsReceived,
  usersReceived,
} from '../actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* handleLogin(action) {
  try {
    const data = yield call(login, action.username, action.password);
    if (data && data.error) {
      yield put(loginFailure(data.data));
    } else {
      yield put(loginSuccess(data));
      data.token && AsyncStorage.setItem('accessToken', data.token);
      data.token && AsyncStorage.setItem('username', action.username);
    }
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

function* handleCreatePoll(action) {
  try {
    const data = yield call(createPoll, action.body);
    if (data && !data.error) yield handleGetPolls();
  } catch (error) {
    console.error(error);
  }
}

function* handleEditPollTitle(action) {
  try {
    const data = yield call(editPollTitle, action.body);
    if (data && !data.error) yield handleGetPolls();
  } catch (error) {
    console.error(error);
  }
}

function* handleDeletePoll(action) {
  try {
    const data = yield call(deletePoll, action.pollId);
    if (data && !data.error) yield handleGetPolls();
  } catch (error) {
    console.error(error);
  }
}

function* handleDeleteOption(action) {
  try {
    const data = yield call(deleteOption, action.body);
    if (data && !data.error) yield handleGetPolls();
  } catch (error) {
    console.error(error);
  }
}

function* actionWatcher() {
  yield takeLatest(actions.LOGIN, handleLogin);
  yield takeLatest(actions.GET_POLLS, handleGetPolls);
  yield takeLatest(actions.GET_USERS, handleGetUsers);
  yield takeLatest(actions.ADD_USER, handleAddUser);

  yield takeLatest(actions.CREATE_POLL, handleCreatePoll);
  yield takeLatest(actions.EDIT_POLL_TITLE, handleEditPollTitle);
  yield takeLatest(actions.DELETE_POLL, handleDeletePoll);

  yield takeLatest(actions.DELETE_OPTION, handleDeleteOption);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
