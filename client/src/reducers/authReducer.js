import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER, UPDATE_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  users:[],
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
      case UPDATE_USER:
        return {
          ...state,
          users: [action.payload, ...state.users]
        };  
    default:
      return state;
  }
}
