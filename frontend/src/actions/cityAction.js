import axios from 'axios';

import {
  ADD_CITY,
  GET_CITIES,
  DELETE_CITY,
  GET_ERRORS
} from './types';

// Add Post
export const addCity =(stateId, postData) => dispatch => {
  console.log(stateId)
  axios
    .post(`/api/cities/newCity/${stateId}`, postData)
    .then(res =>
      dispatch({
        type: ADD_CITY,
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
export const getCities = () => dispatch => {
  axios
    .get('/api/cities/allCity')
    .then(res =>
      dispatch({
        type: GET_CITIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CITIES,
        payload: null
      })
    );
};

// Delete Post
export const deleteCity = id => dispatch => {
  axios
    .delete(`/api/cities/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_CITY,
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
