import { actions } from '../../constants';

export const login = (username, password) => ({
  type: actions.LOGIN,
  username,
  password,
});

export const loginSuccess = (data) => ({
  type: actions.LOGIN_SUCCESS,
  data,
});

export const loginFailure = (data) => ({
  type: actions.LOGIN_FAILURE,
  data,
});

export const getPolls = () => ({
  type: actions.GET_POLLS,
});

export const pollsReceived = (polls) => ({
  type: actions.POLLS_RECEIVED,
  polls,
});

export const getUsers = () => ({
  type: actions.GET_USERS,
});

export const usersReceived = (users) => ({
  type: actions.USERS_RECEIVED,
  users,
});

export const addUser = (body) => ({
  type: actions.ADD_USER,
  body,
});
