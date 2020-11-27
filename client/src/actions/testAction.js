import axios from 'axios';

import {
  ADD_TEST,
  GET_TESTS,
  DELETE_TEST,
  GET_ERRORS,
  UPDATE_TEST
} from './types';

// Add Post
export const addTest =postData=> dispatch => {
  axios
    .post(`/api/tests/newTest`, postData)
    .then(res =>
      dispatch({
        type: ADD_TEST,
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
export const getTests = () => dispatch => {
  axios
    .get('/api/tests/allTest')
    .then(res =>
      dispatch({
        type: GET_TESTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TESTS,
        payload: null
      })
    );
};

export const updateTest = (id, postData) => dispatch => {
    axios
      .post(`/api/tests/update/${id}`, postData)
      .then(res =>
        dispatch({
          type: UPDATE_TEST,
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
export const deleteTest = id => dispatch => {
  axios
    .delete(`/api/tests/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_TEST,
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
