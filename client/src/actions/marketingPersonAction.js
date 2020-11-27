import axios from 'axios';
import {
  ADD_MARKETING_PERSON,
  GET_MARKETING_PERSON,
  GET_MARKETING_PERSONS,
  DELETE_MARKETING_PERSON,
  UPDATE_MARKETING_PERSON,
  GET_ERRORS,
} from './types';
// Get Patients
export const getMarketingPersons = () => dispatch => {
  axios
    .get('/api/marketingPersons/allMarketingPerson')
    .then(res =>
      dispatch({
        type: GET_MARKETING_PERSONS,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_MARKETING_PERSONS,
        payload: null
      })
    });
};

// Get single Patient
export const getMarketingPerson = (id) => dispatch => {
  axios
    .get(`/api/marketingPersons/${id}`)
    .then(res =>
      dispatch({
        type: GET_MARKETING_PERSON,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_MARKETING_PERSON,
        payload: null
      })
    });
};

// Create Branch
export const addMarketingPerson = postData => dispatch => {
  axios
    .get(`/api/marketingPersons/newMarketingPerson`, postData)
    .then(res =>
      dispatch({
        type: ADD_MARKETING_PERSON,
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
export const updateMarketingPerson = (id, postData) => dispatch => {
  axios
    .get(`/api/marketingPersons/update/${id}`, postData)
    .then(res =>{
      dispatch({
        type: UPDATE_MARKETING_PERSON,
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
export const deleteMarketingPerson = id => dispatch => {
  axios
    .delete(`/api/marketingPersons/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_MARKETING_PERSON,
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