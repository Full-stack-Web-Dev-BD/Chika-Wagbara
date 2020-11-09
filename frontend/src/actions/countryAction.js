import axios from 'axios';

import {
  ADD_COUNTRY,
  GET_COUNTRIES,
  DELETE_COUNTRY,
  GET_ERRORS
} from './types';

// Add Post
export const addCountry = postData => dispatch => {
  axios
    .post('/api/countries/newCountry', postData)
    .then(res =>
      dispatch({
        type: ADD_COUNTRY,
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
export const getCountries = () => dispatch => {
  axios
    .get('/api/countries/allCountry')
    .then(res =>
      dispatch({
        type: GET_COUNTRIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COUNTRIES,
        payload: null
      })
    );
};

// Delete Post
export const deleteCountry = id => dispatch => {
  axios
    .delete(`/api/countries/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_COUNTRY,
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
