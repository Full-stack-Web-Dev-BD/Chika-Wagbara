import { combineReducers } from 'redux';
import authReducer from './authReducer';
import branchReducer from './branchReducer';
import countryReducer from './countryReducer';
import stateReducer from './stateReducer';
import cityReducer from './cityReducer'
import errorReducer from './errorReducer';
import inventoryReducer from './inventoryReducer'
import departmentReducer from './departmentReducer'
import categoryReducer from './categoryReducer'
import productReducer from './productReducer';
import branchInventoryReducer from './branchInventoryReducer'
import testReducer from './testReducer';
import reportTypeReducer from './reportTypeReducer'
import sampleReducer from './sampleReducer';
import patientReducer from './patientReducer'
import guardianReducer from './guardianReducer'
import marketingPersonReducer from './marketingPersonReducer'
import referringPersonReducer from './referringPersonReducer';
import referringCenterReducer from './referringCenterReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  branch:branchReducer,
  country:countryReducer,
  state:stateReducer,
  city:cityReducer,
  inventory:inventoryReducer,
  department:departmentReducer,
  category:categoryReducer,
  product:productReducer,
  branchInventory:branchInventoryReducer,
  test:testReducer,
  reportType:reportTypeReducer,
  sample:sampleReducer,
  patient:patientReducer,
  guardian:guardianReducer,
  marketingPerson:marketingPersonReducer,
  referringPerson:referringPersonReducer,
  referringCenter:referringCenterReducer
});