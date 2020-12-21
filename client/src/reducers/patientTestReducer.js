import {
    ADD_PATIENT_TEST,
    GET_PATIENT_TESTS,
    UPDATE_PATIENT_TEST,
    DELETE_PATIENT_TEST,
    GET_PATIENT_TEST,
    GET_COMPLETE_TEST,
  } from '../actions/types';
  
  const initialState = {
    patientTests: [],
    completePatientTests: [],
    patientTest:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PATIENT_TESTS:
            return {
            ...state,
            patientTests: action.payload,
            };
        case GET_COMPLETE_TEST:
            return {
            ...state,
            completeTestPatients: action.payload,
            };    
        case GET_PATIENT_TEST:
            return {
            ...state,
            patientTest: action.payload,
            };    
        case ADD_PATIENT_TEST:
            return {
            ...state,
            patientTests: [action.payload, ...state.patientTests]
            };
        case UPDATE_PATIENT_TEST:
            return {
            ...state,
            patientTest: action.payload
            };
        case DELETE_PATIENT_TEST:
            return {
            ...state,
            patientTests: state.patientTests.filter(patientTest => patientTest._id !== action.payload)
            };
        default:
        return state;
    }
  }