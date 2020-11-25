import {
    ADD_DEPARTMENT,
    GET_DEPARTMENTS,
    DELETE_DEPARTMENT,
  } from '../actions/types';
  
  const initialState = {
    departments: [],
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_DEPARTMENTS:
        return {
          ...state,
          departments: action.payload,
        };
      case ADD_DEPARTMENT:
        return {
          ...state,
          departments: [action.payload, ...state.departments]
        };
      case DELETE_DEPARTMENT:
        return {
          ...state,
          departments: state.departments.filter(department => department._id !== action.payload)
        };
      default:
        return state;
    }
  }