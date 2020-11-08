import { combineReducers } from 'redux';
import authReducer from './authReducer';
import branchReducer from './branchReducer';
import errorReducer from './errorReducer';
import postReducer from './postReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  post: postReducer,
  branch:branchReducer
});