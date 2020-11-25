import {
    ADD_BRANCH_INVENTORY,
    GET_BRANCH_INVENTORIES,
    UPDATE_BRANCH_INVENTORY,
    DELETE_BRANCH_INVENTORY,
    GET_BRANCH_INVENTORY,
  } from '../actions/types';
  
  const initialState = {
    branchInventories: [],
    branchInventory:{}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case GET_BRANCH_INVENTORIES:
            return {
            ...state,
            branchInventories: action.payload,
            };
        case GET_BRANCH_INVENTORY:
            return {
            ...state,
            branchInventory: action.payload,
            };    
        case ADD_BRANCH_INVENTORY:
            return {
            ...state,
            branchInventories: [action.payload, ...state.branchInventories]
            };
        case UPDATE_BRANCH_INVENTORY:
            return {
            ...state,
            branchInventories: [action.payload, ...state.branchInventories]
            };
        case DELETE_BRANCH_INVENTORY:
            return {
            ...state,
            branchInventories: state.branchInventories.filter(branchInventory => branchInventory._id !== action.payload)
            };
        default:
        return state;
    }
  }