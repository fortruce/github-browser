import 'whatwg-fetch';
import * as constants from '../constants';

const GITHUB_API = 'https://api.github.com';

function throwError(res) {
  const { status, statusText } = res;
  if (status !== 200)
    return new Error(statusText);
  return res;
}

export function fetchUser (options) {
  const { username } = options;
  return dispatch => {
    dispatch({
      type: constants.FETCH_START
    });

    fetch(`${GITHUB_API}/users/${username}`)
      .then(throwError)
      .then(res => res.json())
      .then(res =>
        dispatch({
          type: constants.FETCH_USER,
          user: res
        }))
      .catch(err =>
        dispatch({
          type: constants.FETCH_ERROR
        }));
  }
}

export function fetchRepo (options) {
  const { username, repo } = options;
  return dispatch => {
    dispatch({
      type: constants.FETCH_START
    });

    fetch(`${GITHUB_API}/repos/${username}/${repo}`)
      .then(throwError)
      .then(res => res.json())
      .then(res =>
        dispatch({
          type: constants.FETCH_REPO,
          repo: res
        }))
      .catch(err =>
        dispatch({
          type: constants.FETCH_ERROR
        }));
  }
}