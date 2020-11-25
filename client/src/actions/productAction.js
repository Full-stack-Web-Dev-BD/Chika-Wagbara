import axios from 'axios';

import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ERRORS
} from './types';

// Add Inventory
export const addProduct = postData => dispatch => {
  axios
    .post('/api/products/newProduct', postData)
    .then(res =>
      dispatch({
        type: ADD_PRODUCT,
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

// Get Prodgucts
export const getProducts = () => dispatch => {
  axios
    .get('/api/products/allProduct')
    .then(res =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PRODUCTS,
        payload: null
      })
    );
};

// Get Product
export const getProduct = (id) => dispatch => {
    axios
      .get(`/api/products/${id}`)
      .then(res =>
        dispatch({
          type: GET_PRODUCT,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_PRODUCT,
          payload: null
        })
      );
  };
  
// Update Product
export const updateProduct = (id, postData) => dispatch => {
    axios
      .post(`/api/products/update/${id}`, postData)
      .then(res =>
        dispatch({
          type: UPDATE_PRODUCT,
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
export const deleteProduct = id => dispatch => {
  axios
    .delete(`/api/products/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_PRODUCT,
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
