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

export const signOut = () => ({
  type: actions.SIGN_OUT,
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

export const createPoll = (body) => ({
  type: actions.CREATE_POLL,
  body,
});

export const editPollTitle = (body) => ({
  type: actions.EDIT_POLL_TITLE,
  body,
});

export const deletePoll = (pollId) => ({
  type: actions.DELETE_POLL,
  pollId,
});

export const votePoll = () => ({
  type: actions.VOTE_POLL,
});

export const createOption = (body) => ({
  type: actions.CREATE_OPTION,
  body,
});

export const deleteOption = (body) => ({
  type: actions.DELETE_OPTION,
  body,
});

export const stopLoading = () => ({
  type: actions.STOP_LOADING,
});
