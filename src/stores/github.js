import assign from 'object-assign';
import * as constants from '../constants';

const initialState = {
  user: {},
  repo: {},
  error: false,
  fetching: false
}

const actionsMap = {
  [constants.FETCH_START]: (state, action) => ({
    fetching: true,
    error: false
  }),
  [constants.FETCH_USER]: (state, action) => ({
    fetching: false,
    user: action.user
  }),
  [constants.FETCH_REPO]: (state, action) => ({
    fetching: false,
    repo: action.repo
  }),
  [constants.FETCH_ERROR]: (state, action) => ({
    fetching: false,
    error: true
  })
}

export default function github (state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn)
    return state;

  return assign({}, state, reduceFn(state, action));
}