import {
    ADD_CITY,
    GET_CITIES,
    DELETE_CITY,
  } from '../actions/types';
  
  const initialState = {
    cities: [],
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_CITIES:
        return {
          ...state,
          cities: action.payload,
        };
      case ADD_CITY:
        return {
          ...state,
          cities: [action.payload, ...state.cities]
        };
      case DELETE_CITY:
        return {
          ...state,
          cities: state.cities.filter(city => city._id !== action.payload)
        };
      default:
        return state;
    }
  }