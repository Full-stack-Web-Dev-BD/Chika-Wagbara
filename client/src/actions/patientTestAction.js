import axios from 'axios';
import {
  ADD_PATIENT_TEST,
  GET_PATIENT_TESTS,
  GET_COMPLETE_TEST,
  GET_PATIENT_TEST,
  DELETE_PATIENT_TEST,
  UPDATE_PATIENT_TEST,
  GET_ERRORS,
  GET_PATIENT_TEST,
} from './types';
// Get Patients
export const getPatientTests = () => dispatch => {
  axios
    .get('/api/patientTests/allPatientTest')
    .then(res =>
      dispatch({
        type: GET_PATIENT_TESTS,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_PATIENT_TESTS,
        payload: null
      })
    });
};

export const getCompletePatientTests = () => dispatch => {
  axios
    .get('/api/patientTests/allCompletePatientTest')
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

// Get single Patient Test
export const getPatientTest = (id) => dispatch => {
  axios
    .get(`/api/patientTests/${id}`)
    .then(res =>
      dispatch({
        type: GET_PATIENT_TEST,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_PATIENT_TEST,
        payload: null
      })
    });
};

// Create Patient Test
export const addPatientTest = postData => dispatch => {
  axios
    .post(`/api/patientTests/newPatientTest`, postData)
    .then(res =>
      dispatch({
        type: ADD_PATIENT_TEST,
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
export const updatePatientTest = (id, postData) => dispatch => {
  axios
    .post(`/api/patientTests/update/${id}`, postData)
    .then(res =>{
      dispatch({
        type: UPDATE_PATIENT_TEST,
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
export const deletePatientTest = id => dispatch => {
  axios
    .delete(`/api/patientTests/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_PATIENT_TEST,
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