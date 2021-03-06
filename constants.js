import { Dimensions } from 'react-native';

export const colors = {
  blue: '#1D4354',
  white: '#fff',
  grey: '#d3d3d3',
  green: '#61DEA4',
  red: '#F45E6D',
  lightGrey: '#f4f4f4',
};

export const dimensions = {
  width: Dimensions.get('window').width,
};

export const actions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  SIGN_OUT: 'SIGN_OUT',

  GET_USERS: 'GET_USERS',
  USERS_RECEIVED: 'USERS_RECEIVED',
  ADD_USER: 'ADD_USER',

  GET_POLLS: 'GET_POLLS',
  POLLS_RECEIVED: 'POLLS_RECEIVED',

  CREATE_POLL: 'CREATE_POLL',
  EDIT_POLL_TITLE: 'EDIT_POLL_TITLE',
  DELETE_POLL: 'DELETE_POLL',
  VOTE_POLL: 'VOTE_POLL',

  CREATE_OPTION: 'CREATE_OPTION',
  DELETE_OPTION: 'DELETE_OPTION',

  STOP_LOADING: 'STOP_LOADING',
};
