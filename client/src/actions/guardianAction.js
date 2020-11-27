import axios from 'axios';
import {
  ADD_GUARDIAN,
  GET_GUARDIAN,
  GET_GUARDIANS,
  DELETE_GUARDIAN,
  UPDATE_GUARDIAN,
  GET_ERRORS,
} from './types';

// Get Patients
export const getGuardians = () => dispatch => {
  axios
    .get('/api/guardians/allGuardian')
    .then(res =>
      dispatch({
        type: GET_GUARDIANS,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_GUARDIANS,
        payload: null
      })
    });
};

// Get single Patient
export const getGuardian = (id) => dispatch => {
  axios
    .get(`/api/guardians/${id}`)
    .then(res =>
      dispatch({
        type: GET_GUARDIAN,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_GUARDIAN,
        payload: null
      })
    });
};

// Create Branch
export const addGuardian = postData => dispatch => {
  axios
    .get(`/api/guardians/newGuardian`, postData)
    .then(res =>
      dispatch({
        type: ADD_GUARDIAN,
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
export const updateGuardian = (id, postData) => dispatch => {
  axios
    .get(`/api/guardians/update/${id}`, postData)
    .then(res =>{
      dispatch({
        type: UPDATE_GUARDIAN,
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
export const deleteGuardian = id => dispatch => {
  axios
    .delete(`/api/guardians/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_GUARDIAN,
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