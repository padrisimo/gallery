import axios from 'axios';

import { FETCH_PICS, NET_ERROR } from './types';

export function fetchPics(page=1) {
  const data = {page: page};
  return dispatch => {
    axios.post('/api/pics', data)
      .then(response => {
        dispatch({
          type: FETCH_PICS,
          payload: response.data
        })
      })
      .catch(err => dispatch({
        type: NET_ERROR,
        payload: err
      }));

  }
}
