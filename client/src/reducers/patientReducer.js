import {
    ADD_PATIENT,
    GET_PATIENTS,
    UPDATE_PATIENT,
    DELETE_PATIENT,
    GET_PATIENT,
  } from '../actions/types';
  
  const initialState = {
    patients: [],
    patient:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PATIENTS:
            return {
            ...state,
            patients: action.payload,
            };
        case GET_PATIENT:
            return {
            ...state,
            patient: action.payload,
            };    
        case ADD_PATIENT:
            return {
            ...state,
            patients: [action.payload, ...state.patients]
            };
        case UPDATE_PATIENT:
            return {
            ...state,
            patient: action.payload
            };
        case DELETE_PATIENT:
            return {
            ...state,
            patients: state.patients.filter(patient => patient._id !== action.payload)
            };
        default:
        return state;
    }
  }