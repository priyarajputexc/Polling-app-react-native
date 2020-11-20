import { actions } from '../../constants';

const reducer = (state, action) => {
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
      return {};

    case actions.GET_POLLS:
      return {
        ...state,
        isLoading: true,
      };

    case actions.POLLS_RECEIVED:
      return {
        ...state,
        isLoading: false,
        polls: action.polls,
      };

    case actions.GET_USERS:
      return {
        ...state,
        isLoading: true,
      };

    case actions.USERS_RECEIVED:
      return {
        ...state,
        isLoading: false,
        users: action.users,
      };

    case actions.ADD_USER:
      return {
        ...state,
        body: action.body,
        isLoading: true,
      };

    case actions.DELETE_OPTION:
      return {
        ...state,
        body: action.body,
      };

    default:
      return state;
  }
};

export default reducer;
