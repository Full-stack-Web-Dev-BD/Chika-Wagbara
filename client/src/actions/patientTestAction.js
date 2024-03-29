import axios from 'axios';
import { success } from 'react-notification-system-redux';

import {
  ADD_PATIENT_TEST,
  GET_PATIENT_TESTS,
  GET_COMPLETE_TEST,
  GET_PATIENT_TEST,
  DELETE_PATIENT_TEST,
  UPDATE_PATIENT_TEST,
  GET_ERRORS,
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

export const getIncompletePatientTests = () => dispatch => {
  axios
    .get('/api/patientTests/allIncompletePatientTest')
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

      if(res.status==200){
        dispatch(success({
          title: 'Data has updated successfully',
          position: 'tr',
          autoDismiss: 10
        }))
      }
    })
    .catch(err =>{
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
};

export const addReportResult = (id, postData) => dispatch => {
  axios
    .post(`/api/patientTests/${id}/addReportResult`, postData)
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