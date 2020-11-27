import axios from 'axios';

import {
  ADD_SAMPLE,
  GET_SAMPLES,
  GET_SAMPLE,
  DELETE_SAMPLE,
  UPDATE_SAMPLE,
  GET_ERRORS,
} from './types';

// Add Post
export const addSample =postData=> dispatch => {
  axios
    .post(`/api/samples/newSample`, postData)
    .then(res =>
      dispatch({
        type: ADD_SAMPLE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Posts
export const getSamples = () => dispatch => {
  axios
    .get('/api/samples/allSample')
    .then(res =>
      dispatch({
        type: GET_SAMPLES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SAMPLES,
        payload: null
      })
    );
};

export const updateSample = (id, postData) => dispatch => {
    axios
      .post(`/api/samples/update/${id}`, postData)
      .then(res =>
        dispatch({
          type: UPDATE_SAMPLE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

// Delete Post
export const deleteSample = id => dispatch => {
  axios
    .delete(`/api/samples/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_SAMPLE,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
