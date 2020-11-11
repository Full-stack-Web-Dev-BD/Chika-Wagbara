import { combineReducers } from 'redux';
import authReducer from './authReducer';
import branchReducer from './branchReducer';
import countryReducer from './countryReducer';
import stateReducer from './stateReducer';
import cityReducer from './cityReducer'
import errorReducer from './errorReducer';
import postReducer from './postReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  post: postReducer,
  branch:branchReducer,
  country:countryReducer,
  state:stateReducer,
  city:cityReducer

});