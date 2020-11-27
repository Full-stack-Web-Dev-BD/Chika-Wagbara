import {
    ADD_REFERRING_CENTER,
    GET_REFERRING_CENTERS,
    UPDATE_REFERRING_CENTER,
    DELETE_REFERRING_CENTER,
    GET_REFERRING_CENTER,
  } from '../actions/types';
  
  const initialState = {
    referringCenters: [],
    referringCenter:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case GET_REFERRING_CENTERS:
            return {
            ...state,
            referringCenters: action.payload,
            };
        case GET_REFERRING_CENTER:
            return {
            ...state,
            referringCenter: action.payload,
            };    
        case ADD_REFERRING_CENTER:
            return {
            ...state,
            referringCenters: [action.payload, ...state.referringCenters]
            };
        case UPDATE_REFERRING_CENTER:
            return {
            ...state,
            referringCenter: action.payload
            };
        case DELETE_REFERRING_CENTER:
            return {
            ...state,
            referringCenters: state.referringCenters.filter(referringCenter => referringCenter._id !== action.payload)
            };
        default:
        return state;
    }
  }