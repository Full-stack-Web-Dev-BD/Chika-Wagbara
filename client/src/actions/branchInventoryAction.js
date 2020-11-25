import axios from 'axios';

import {
  ADD_BRANCH_INVENTORY,
  GET_BRANCH_INVENTORIES,
  GET_BRANCH_INVENTORY,
  DELETE_BRANCH_INVENTORY,
  UPDATE_BRANCH_INVENTORY,
  GET_ERRORS,
  GET_INVENTORY
} from './types';

// Add Branch Inventory
export const addbBranchInventory = postData => dispatch => {
  axios
    .post('/api/branchInventories/newBranchInventory', postData)
    .then(res =>
      dispatch({
        type: ADD_BRANCH_INVENTORY,
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

// Get Branch Inventories
export const getBranchInventories = (id) => dispatch => {
  axios
    .get(`/api/branchInventories/${id}/allBranchInventory`)
    .then(res =>
      dispatch({
        type: GET_INVENTORIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BRANCH_INVENTORIES,
        payload: null
      })
    );
};

// Get Branch Inventory
export const getBranchInventory = (branchId, id) => dispatch => {
  axios
    .get(`/api/branchInventories/${branchId}/${id}`)
    .then(res =>
      dispatch({
        type: GET_BRANCH_INVENTORY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BRANCH_INVENTORY,
        payload: null
      })
    );
};


// Update Branch Inventory
export const UpdateBranchInventory = (branchId, id, postData) => dispatch => {
    axios
      .post(`/api/branchInventories/${branchId}/update/${id}`, postData)
      .then(res =>
        dispatch({
          type: UPDATE_BRANCH_INVENTORY,
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

// Delete Branch Inventory
export const deleteBranchInventory = (branchId, id) => dispatch => {
  axios
    .delete(`/api/branchInventories/${branchId}/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_BRANCH_INVENTORY,
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
