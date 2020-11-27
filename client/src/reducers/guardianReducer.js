import {
    ADD_GUARDIAN,
    GET_GUARDIANS,
    UPDATE_GUARDIAN,
    DELETE_GUARDIAN,
    GET_GUARDIAN,
  } from '../actions/types';
  
  const initialState = {
    guardians: [],
    guardian:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case GET_GUARDIANS:
            return {
            ...state,
            guardians: action.payload,
            };
        case GET_GUARDIAN:
            return {
            ...state,
            guardian: action.payload,
            };    
        case ADD_GUARDIAN:
            return {
            ...state,
            guardians: [action.payload, ...state.guardians]
            };
        case UPDATE_GUARDIAN:
            return {
            ...state,
            guardian: action.payload
            };
        case DELETE_GUARDIAN:
            return {
            ...state,
            guardians: state.guardians.filter(guardian => guardian._id !== action.payload)
            };
        default:
        return state;
    }
  }