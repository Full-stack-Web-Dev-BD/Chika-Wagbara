import {
    ADD_REPORT_TYPE,
    GET_REPORT_TYPES,
    DELETE_REPORT_TYPE,
    UPDATE_REPORT_TYPE
  } from '../actions/types';
  
  const initialState = {
    reportTypes: [],
    reportType:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_REPORT_TYPES:
        return {
          ...state,
          reportTypes: action.payload,
        };
      case ADD_REPORT_TYPE:
        return {
          ...state,
          reportTypes: [action.payload, ...state.reportTypes]
        };
      case UPDATE_REPORT_TYPE:
        return {
          ...state,
          reportType: action.payload
        };  
      case DELETE_REPORT_TYPE:
        return {
          ...state,
          reportTypes: state.reportTypes.filter(report => report._id !== action.payload)
        };
      default:
        return state;
    }
  }          