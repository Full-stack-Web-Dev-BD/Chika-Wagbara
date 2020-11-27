import {
    ADD_TEST,
    GET_TESTS,
    DELETE_TEST,
    UPDATE_TEST
  } from '../actions/types';
  
  const initialState = {
    tests: [],
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_TESTS:
        return {
          ...state,
          tests: action.payload,
        };
      case ADD_TEST:
        return {
          ...state,
          tests: [action.payload, ...state.tests]
        };
      case UPDATE_TEST:
        return {
          ...state,
          tests: [action.payload, ...state.tests]
        };  
      case DELETE_TEST:
        return {
          ...state,
          tests: state.tests.filter(test => test._id !== action.payload)
        };
      default:
        return state;
    }
  }