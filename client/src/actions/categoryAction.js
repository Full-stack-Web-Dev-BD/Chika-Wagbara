import axios from 'axios';

import {
  ADD_DEPARTMENT,
  GET_DEPARTMENTS,
  DELETE_DEPARTMENT,
  GET_ERRORS,
  ADD_CATEGORY,
  GET_CATEGORIES,
  DELETE_CATEGORY
} from './types';

// Add Category
export const addCategory =(id, postData)=> dispatch => {
  axios
    .post(`/api/categories/${id}/newCategory`, postData)
    .then(res =>
      dispatch({
        type: ADD_CATEGORY,
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

// Get Category
export const getCategories = () => dispatch => {
  axios
    .get('/api/categories/allCategory')
    .then(res =>
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CATEGORIES,
        payload: null
      })
    );
};

// Delete Category
export const deleteCategory = id => dispatch => {
  axios
    .delete(`/api/categories/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_CATEGORY,
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
