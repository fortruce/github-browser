import 'whatwg-fetch';
import * as constants from '../constants';

const GITHUB_API = 'https://api.github.com';

export function fetchUser (username) {
  return dispatch => {
    dispatch({
      type: constants.FETCH_START
    });

    fetch(`${GITHUB_API}/users/${username}`)
      .then(res => {
        if (res.status !== 200)
          return new Error(response.statusText);
        return res;
      })
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