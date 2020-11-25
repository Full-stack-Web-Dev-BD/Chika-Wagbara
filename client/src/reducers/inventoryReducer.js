import {
    ADD_INVENTORY,
    GET_INVENTORIES,
    UPDATE_INVENTORY,
    DELETE_INVENTORY,
    GET_INVENTORY,
    PURCHASE_ORDER,
    PURCHASE_INVENTORY
  } from '../actions/types';
  
  const initialState = {
    inventories: [],
    inventory:{},
    purchaseOrders:[]
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case GET_INVENTORIES:
            return {
            ...state,
            inventories: action.payload,
            };
        case PURCHASE_ORDER:
            return {
            ...state,
            purchaseOrders: action.payload,
            };    
        case GET_INVENTORY:
            return {
            ...state,
            inventory: action.payload,
            };    
        case ADD_INVENTORY:
            return {
            ...state,
            inventories: [action.payload, ...state.inventories]
            };
        case PURCHASE_INVENTORY:
            return {
            ...state,
            inventories: [action.payload, ...state.inventories]
            };
        case UPDATE_INVENTORY:
            return {
            ...state,
            inventories: [action.payload, ...state.inventories]
            };
        case DELETE_INVENTORY:
            return {
            ...state,
            inventories: state.inventories.filter(inventory => inventory._id !== action.payload)
            };
        default:
        return state;
    }
  }