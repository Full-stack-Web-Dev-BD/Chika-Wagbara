import * as Types from '../actions/types'
const initialState = {
  allBranch: [],
  singleBranch: {}
};

export default function(state = initialState, action) {
  switch (action.type) {

    case Types.GET_ALL_BRANCH:
      return {
        ...state,
        allBranch: action.payload.allBranch,
      };
    case Types.GET_SINGLE_BRANCH:
      return {
        ...state,
        singleBranch: action.payload
      };
    case Types.CREATE_BRANCH:
      return {
        ...state,
        allBranch: [action.payload, ...state.allBranch]
      };
    case Types.DELETE_BRANCH:
      return {
        ...state,
        allBranch: state.allBranch.filter(branch => branch._id !== action.payload)
      };
    default:
      return state;
  }
}