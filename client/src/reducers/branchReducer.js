import {
  ADD_BRANCH,
  GET_BRANCH,
  GET_BRANCHS,
  DELETE_BRANCH,
  UPDATE_BRANCH,
  GET_ERRORS,
} from '../actions/types';
const initialState = {
  branchs: [],
  branch: {}
};

export default function(state = initialState, action) {
  switch (action.type) {

    case GET_BRANCHS:
      return {
        ...state,
        branchs: action.payload,
      };
    case GET_BRANCH:
      return {
        ...state,
        branch: action.payload
      };
    case ADD_BRANCH:
      return {
        ...state,
        branchs: [action.payload, ...state.branchs]
      };
    case UPDATE_BRANCH:
        return {
          ...state,
          branch: action.payload
        };  
    case DELETE_BRANCH:
      return {
        ...state,
        branchs: state.branchs.filter(branch => branch._id !== action.payload)
      };
    default:
      return state;
  }
}