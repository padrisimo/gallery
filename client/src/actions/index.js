import axios from 'axios';

import { FETCH_PICS, NET_ERROR } from './types';

export function fetchPics() {
  return dispatch => {
    axios.get('/api/pics')
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
