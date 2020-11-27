import axios from 'axios';
import {
  ADD_BRANCH,
  GET_BRANCH,
  GET_BRANCHS,
  DELETE_BRANCH,
  UPDATE_BRANCH,
  GET_ERRORS,
} from './types';
// Get Branch
export const getBranchs = () => dispatch => {
  axios
    .get('/api/branchs/allBranch')
    .then(res =>
      dispatch({
        type: GET_BRANCHS,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_BRANCHS,
        payload: null
      })
    });
};

// Get single Branch
export const getBranch = (id) => dispatch => {
  axios
    .get(`/api/branchs/${id}`)
    .then(res =>
      dispatch({
        type: GET_BRANCH,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_BRANCH,
        payload: null
      })
    });
};

// Create Branch
export const createBranch = postData => dispatch => {
  axios
    .get(`/api/posts/newBranch`,branchInfo)
    .then(res =>
      dispatch({
        type: ADD_BRANCH,
        payload: res.data
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
};
// Edit Branch
export const updateBranch = (id, postData) => dispatch => {
  axios
    .get(`/api/branchs/update/${id}`, postData)
    .then(res =>{
      dispatch({
        type: UPDATE_BRANCH,
        payload: res.data
      })
    })
    .catch(err =>{
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
};

// Delete Branch
export const deleteBranch = id => dispatch => {
  axios
    .delete(`/api/branchs/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_BRANCH,
        payload: id
      })
    )
    .catch(err =>{
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
};