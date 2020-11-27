import axios from 'axios';

import {
  ADD_REPORT_TYPE,
  GET_REPORT_TYPES,
  DELETE_REPORT_TYPE,
  GET_ERRORS,
  UPDATE_REPORT_TYPE
} from './types';

// Add Post
export const addReportType =postData=> dispatch => {
  axios
    .post(`/api/reportTypes/newReportType`, postData)
    .then(res =>
      dispatch({
        type: ADD_REPORT_TYPE,
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
export const getReportTypes = () => dispatch => {
  axios
    .get('/api/reportTypes/allReportType')
    .then(res =>
      dispatch({
        type: GET_REPORT_TYPES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_REPORT_TYPES,
        payload: null
      })
    );
};

export const updateReportType = (id, postData) => dispatch => {
  axios
    .post(`/api/reportTpes/update/${id}`, postData)
    .then(res =>
      dispatch({
        type: UPDATE_REPORT_TYPE,
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
export const deleteReportType = id => dispatch => {
  axios
    .delete(`/api/reportTypes/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_REPORT_TYPE,
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
