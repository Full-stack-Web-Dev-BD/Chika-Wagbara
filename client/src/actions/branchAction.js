import axios from 'axios';

import * as Types from './types'
// Get Branch
export const getAllBranch = () => dispatch => {
  axios
    .get('/api/branchs/allBranch')
    .then(res =>
      dispatch({
        type: Types.GET_ALL_BRANCH,
        payload: {
          allBranch:res.data
        }
      })
    )
    .catch(err =>{
      console.log(err);
    });
};

// Get single Branch
export const getSingleBranch = (id) => dispatch => {
  axios
    .get(`/api/getSingle/${id}`)
    .then(res =>
      dispatch({
        type: Types.GET_SINGLE_BRANCH,
        payload: res.data
      })
    )
    .catch(err =>{
      console.log(err);
    });
};

// Create Branch
export const createBranch = branchInfo => dispatch => {
  axios
    .get(`/api/posts/newBranch`,branchInfo)
    .then(res =>
      dispatch({
        type: Types.CREATE_BRANCH,
        payload: res.data
      })
    )
    .catch(err =>{
      console.log(err);
    });
};
// Edit Branch
export const editBranch = branchInfo => dispatch => {
  axios
    .get(`/api/posts/update/${branchInfo._id}`,branchInfo)
    .then(res =>{
      getAllBranch()
    })
    .catch(err =>{
      console.log(err);
    });
};

// Delete Branch
export const deleteBranch = id => dispatch => {
  axios
    .delete(`/api/delete/${id}`)
    .then(res =>
      dispatch({
        type: Types.DELETE_BRANCH,
        payload: id
      })
    )
    .catch(err =>{
      console.log(err);
    });
};