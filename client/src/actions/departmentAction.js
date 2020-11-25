import axios from 'axios';

import {
  ADD_DEPARTMENT,
  GET_DEPARTMENTS,
  DELETE_DEPARTMENT,
  GET_ERRORS
} from './types';

// Add Post
export const addDepartment =postData=> dispatch => {
  axios
    .post(`/api/departments/newDepartment`, postData)
    .then(res =>
      dispatch({
        type: ADD_DEPARTMENT,
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
export const getDepartments = () => dispatch => {
  axios
    .get('/api/departments/allDepartment')
    .then(res =>
      dispatch({
        type: GET_DEPARTMENTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_DEPARTMENTS,
        payload: null
      })
    );
};

// Delete Post
export const deleteDepartment = id => dispatch => {
  axios
    .delete(`/api/departments/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_DEPARTMENT,
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
