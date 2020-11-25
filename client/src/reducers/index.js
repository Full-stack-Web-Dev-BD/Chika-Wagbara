import { combineReducers } from 'redux';
import authReducer from './authReducer';
import branchReducer from './branchReducer';
import countryReducer from './countryReducer';
import stateReducer from './stateReducer';
import cityReducer from './cityReducer'
import errorReducer from './errorReducer';
import postReducer from './postReducer';
import inventoryReducer from './inventoryReducer'
import departmentReducer from './departmentReducer'
import categoryReducer from './categoryReducer'
import productReducer from './productReducer';
import branchInventoryReducer from './branchInventoryReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  post: postReducer,
  branch:branchReducer,
  country:countryReducer,
  state:stateReducer,
  city:cityReducer,
  inventory:inventoryReducer,
  department:departmentReducer,
  category:categoryReducer,
  product:productReducer,
  branchInventory:branchInventoryReducer
});