import {
    ADD_REFERRING_PERSON,
    GET_REFERRING_PERSONS,
    UPDATE_REFERRING_PERSON,
    DELETE_REFERRING_PERSON,
    GET_REFERRING_PERSON,
  } from '../actions/types';
  
  const initialState = {
    referringPersons: [],
    referringPerson:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case GET_REFERRING_PERSONS:
            return {
            ...state,
            referringPersons: action.payload,
            };
        case GET_REFERRING_PERSON:
            return {
            ...state,
            referringPerson: action.payload,
            };    
        case ADD_REFERRING_PERSON:
            return {
            ...state,
            referringPersons: [action.payload, ...state.referringPersons]
            };
        case UPDATE_REFERRING_PERSON:
            return {
            ...state,
            referringPerson: action.payload
            };
        case DELETE_REFERRING_PERSON:
            return {
            ...state,
            referringPersons: state.referringPersons.filter(referringPerson => referringPerson._id !== action.payload)
            };
        default:
        return state;
    }
  }