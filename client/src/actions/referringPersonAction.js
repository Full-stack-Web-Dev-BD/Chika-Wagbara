import axios from 'axios';
import {
  ADD_REFERRING_PERSON,
  GET_REFERRING_PERSON,
  GET_REFERRING_PERSONS,
  DELETE_REFERRING_PERSON,
  UPDATE_REFERRING_PERSON,
  GET_ERRORS,
} from './types';
// Get Patients
export const getReferringPersons = () => dispatch => {
  axios
    .get('/api/referringPersons/allReferringPerson')
    .then(res =>
      dispatch({
        type: GET_REFERRING_PERSONS,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_REFERRING_PERSONS,
        payload: null
      })
    });
};

// Get single Patient
export const getReferringPerson = (id) => dispatch => {
  axios
    .get(`/api/referringPersons/${id}`)
    .then(res =>
      dispatch({
        type: GET_REFERRING_PERSON,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_REFERRING_PERSON,
        payload: null
      })
    });
};

// Create Branch
export const addReferringPerson = postData => dispatch => {
  axios
    .post(`/api/referringPersons/newReferringPerson`, postData)
    .then(res =>
      dispatch({
        type: ADD_REFERRING_PERSON,
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
export const updateReferringPerson = (id, postData) => dispatch => {
  axios
    .get(`/api/referringPersons/update/${id}`, postData)
    .then(res =>{
      dispatch({
        type: UPDATE_REFERRING_PERSON,
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
export const deleteReferringPerson = id => dispatch => {
  axios
    .delete(`/api/referringPersons/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_REFERRING_PERSON,
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