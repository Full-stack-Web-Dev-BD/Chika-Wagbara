import {
    ADD_COUNTRY,
    GET_COUNTRIES,
    DELETE_COUNTRY,
  } from '../actions/types';
  
  const initialState = {
    countries: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_COUNTRIES:
        return {
          ...state,
          countries: action.payload,
          loading: false
        };
      case ADD_COUNTRY:
        return {
          ...state,
          countries: [action.payload, ...state.countries]
        };
      case DELETE_COUNTRY:
        return {
          ...state,
          countries: state.countries.filter(country => country._id !== action.payload)
        };
      default:
        return state;
    }
  }