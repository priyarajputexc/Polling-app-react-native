import { actions } from '../../constants';

const initialState = {
  isLoading: false,
  polls: null,
  users: null,
  accessToken: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        isLoading: true,
      };

    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        accessToken: action.data && action.data.token,
        error: null,
      };

    case actions.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.data,
        accessToken: null,
      };

    case actions.SIGN_OUT:
      return { ...initialState };

    case actions.POLLS_RECEIVED:
      return {
        ...state,
        isLoading: false,
        polls: action.polls,
      };

    case actions.USERS_RECEIVED:
      return {
        ...state,
        isLoading: false,
        users: action.users,
      };

    case actions.GET_POLLS:
    case actions.GET_USERS:
    case actions.ADD_USER:
    case actions.CREATE_POLL:
    case actions.EDIT_POLL_TITLE:
    case actions.DELETE_POLL:
    case actions.VOTE_POLL:
    case actions.CREATE_OPTION:
    case actions.DELETE_OPTION:
      return {
        ...state,
        isLoading: true,
      };

    case actions.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
