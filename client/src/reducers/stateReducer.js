import {
    ADD_STATE,
    GET_STATES,
    DELETE_STATE,
  } from '../actions/types';
  
  const initialState = {
    states: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_STATES:
        return {
          ...state,
          states: action.payload,
          loading: false
        };
      case ADD_STATE:
        return {
          ...state,
          states: [action.payload, ...state.states]
        };
      case DELETE_STATE:
        return {
          ...state,
          states: state.states.filter(state => state._id !== action.payload)
        };
      default:
        return state;
    }
  }