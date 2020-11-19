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

    default:
      return state;
  }
};

export default reducer;
