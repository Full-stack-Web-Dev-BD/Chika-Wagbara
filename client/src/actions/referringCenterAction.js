import axios from 'axios';
import {
  ADD_REFERRING_CENTER,
  GET_REFERRING_CENTER,
  GET_REFERRING_CENTERS,
  DELETE_REFERRING_CENTER,
  UPDATE_REFERRING_CENTER,
  GET_ERRORS,
} from './types';
// Get Patients
export const getReferringCenters = () => dispatch => {
  axios
    .get('/api/referringCenters/allReferringCenter')
    .then(res =>
      dispatch({
        type: GET_REFERRING_CENTERS,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_REFERRING_CENTERS,
        payload: null
      })
    });
};

// Get single Patient
export const getReferringCenter = (id) => dispatch => {
  axios
    .get(`/api/referringCenters/${id}`)
    .then(res =>
      dispatch({
        type: GET_REFERRING_CENTER,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_REFERRING_CENTER,
        payload: null
      })
    });
};

// Create Branch
export const addReferringCenter = postData => dispatch => {
  axios
    .get(`/api/referringCenters/newReferringPerson`, postData)
    .then(res =>
      dispatch({
        type: ADD_REFERRING_CENTER,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
};
// Edit Branch
export const updateReferringCenter = (id, postData) => dispatch => {
  axios
    .get(`/api/referringCenters/update/${id}`, postData)
    .then(res =>{
      dispatch({
        type: UPDATE_REFERRING_CENTER,
        payload: res.data
      })
    })
    .catch(err =>{
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
};

// Delete Branch
export const deleteReferringCenter = id => dispatch => {
  axios
    .delete(`/api/referringCenters/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_REFERRING_CENTER,
        payload: id
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
};