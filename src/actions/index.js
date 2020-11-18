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
