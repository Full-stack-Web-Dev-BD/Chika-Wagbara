import { sample } from 'lodash';
import {
    ADD_SAMPLE,
    GET_SAMPLES,
    GET_SAMPLE,
    DELETE_SAMPLE,
    UPDATE_SAMPLE
  } from '../actions/types';
  
  const initialState = {
    samples: [],
    sample:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_SAMPLES:
        return {
          ...state,
          samples: action.payload,
        };
      case GET_SAMPLE:
        return {
          ...state,
          sample: action.payload,
        };  
      case ADD_SAMPLE:
        return {
          ...state,
          samples: [action.payload, ...state.samples]
        };
      case UPDATE_SAMPLE:
        return {
          ...state,
          sample: action.payload
        };  
      case DELETE_SAMPLE:
        return {
          ...state,
          samples: state.samples.filter(sample => sample._id !== action.payload)
        };
      default:
        return state;
    }
  }