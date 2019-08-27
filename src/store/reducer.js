import * as ACTIONS from './actions';

export const initialState = {
  isLoading: true,
  data: [],
  error: '',
}

export const reducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case ACTIONS.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: `Something went wrong! ${action.error}`,
      }
    default:
      return state;
  }
}
