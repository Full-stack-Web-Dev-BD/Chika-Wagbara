import axios from 'axios';

import {
  ADD_INVENTORY,
  GET_INVENTORIES,
  GET_INVENTORY,
  DELETE_INVENTORY,
  UPDATE_INVENTORY,
  PURCHASE_ORDER,
  PURCHASE_INVENTORY,
  GET_ERRORS
} from './types';

// Add Inventory
export const addInventory = postData => dispatch => {
  axios
    .post('/api/inventories/newInventory', postData)
    .then(res =>
      dispatch({
        type: ADD_INVENTORY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Inventories
export const getInventories = () => dispatch => {
  axios
    .get('/api/inventories/allInventory')
    .then(res =>
      dispatch({
        type: GET_INVENTORIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_INVENTORIES,
        payload: null
      })
    );
};

// Get Inventories
export const  orderInventories = () => dispatch => {
  axios
    .get('/api/inventories/purchaseOrder')
    .then(res =>
      dispatch({
        type: PURCHASE_ORDER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: PURCHASE_ORDER,
        payload: null
      })
    );
};

// Get Inventory
export const getInventory = (id) => dispatch => {
  axios
    .get(`/api/inventories/${id}`)
    .then(res =>
      dispatch({
        type: GET_INVENTORY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_INVENTORY,
        payload: null
      })
    );
};

// Update Inventory
export const updateInventory = (id, postData) => dispatch => {
    axios
      .post(`/api/inventories/update/${id}`, postData)
      .then(res =>
        dispatch({
          type: UPDATE_INVENTORY,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

// Purchase Inventory
export const purchaseInventory = (id, postData) => dispatch => {
  axios
    .post(`/api/inventories/${id}/purchase`, postData)
    .then(res =>
      dispatch({
        type: PURCHASE_INVENTORY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Inventory
export const deleteInventory = id => dispatch => {
  axios
    .delete(`/api/inventories/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_INVENTORY,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
