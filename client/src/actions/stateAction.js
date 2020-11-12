import axios from 'axios';

import {
  ADD_STATE,
  GET_STATES,
  DELETE_STATE,
  GET_ERRORS
} from './types';

// Add State
export const addState = (countryId, postData) => dispatch => {
  console.log(countryId)
  axios
    .post(`/api/states/newState/${countryId}`, postData)
    .then(res =>
      dispatch({
        type: ADD_STATE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    );
};

// Get States
export const getStates = () => dispatch => {
  axios
    .get('/api/states/allState')
    .then(res =>
      dispatch({
        type: GET_STATES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_STATES,
        payload: null
      })
    );
};

// Delete Post
export const deleteState = id => dispatch => {
  axios
    .delete(`/api/states/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_STATE,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    );
};
