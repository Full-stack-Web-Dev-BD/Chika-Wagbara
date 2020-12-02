import axios from 'axios';
import {
  ADD_PATIENT,
  GET_PATIENT,
  GET_COMPLETE_TEST,
  GET_PATIENTS,
  DELETE_PATIENT,
  UPDATE_PATIENT,
  GET_ERRORS,
} from './types';
// Get Patients
export const getPatients = () => dispatch => {
  axios
    .get('/api/patients/allPatient')
    .then(res =>
      dispatch({
        type: GET_PATIENTS,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_PATIENTS,
        payload: null
      })
    });
};

export const getCompleteTestPatients = () => dispatch => {
  axios
    .get('/api/patients/allCompletePatient')
    .then(res =>
      dispatch({
        type: GET_COMPLETE_TEST,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_COMPLETE_TEST,
        payload: null
      })
    });
};

// Get single Patient
export const getPatient = (id) => dispatch => {
  axios
    .get(`/api/patients/${id}`)
    .then(res =>
      dispatch({
        type: GET_PATIENT,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_PATIENT,
        payload: null
      })
    });
};

// Create Branch
export const addPatient = postData => dispatch => {
  console.log(postData)
  axios
    .post(`/api/patients/newPatient`, postData)
    .then(res =>
      dispatch({
        type: ADD_PATIENT,
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
export const updatePatient = (id, postData) => dispatch => {
  axios
    .get(`/api/patients/update/${id}`, postData)
    .then(res =>{
      dispatch({
        type: UPDATE_PATIENT,
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
export const deletePatient = id => dispatch => {
  axios
    .delete(`/api/patients/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_PATIENT,
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