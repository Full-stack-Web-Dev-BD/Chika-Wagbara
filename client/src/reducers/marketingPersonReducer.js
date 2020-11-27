import {
    ADD_MARKETING_PERSON,
    GET_MARKETING_PERSONS,
    UPDATE_MARKETING_PERSON,
    DELETE_MARKETING_PERSON,
    GET_MARKETING_PERSON,
  } from '../actions/types';
  
  const initialState = {
    marketingPersons: [],
    marketingPerson:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case GET_MARKETING_PERSONS:
            return {
            ...state,
            marketingPersons: action.payload,
            };
        case GET_MARKETING_PERSON:
            return {
            ...state,
            marketingPerson: action.payload,
            };    
        case ADD_MARKETING_PERSON:
            return {
            ...state,
            marketingPersons: [action.payload, ...state.marketingPersons]
            };
        case UPDATE_MARKETING_PERSON:
            return {
            ...state,
            marketingPerson: action.payload
            };
        case DELETE_MARKETING_PERSON:
            return {
            ...state,
            marketingPersons: state.marketingPersons.filter(marketingPerson => marketingPerson._id !== action.payload)
            };
        default:
        return state;
    }
  }