import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import ModalForm from './ModalForm'
import { getProduct } from '../../../actions/productAction'

const ProductUpdateModal=(props)=> {

  const { id, product }=props

  const [open, setOpen] = React.useState(false);
  
  useEffect(()=>{
    props.getProduct(id)
  }, [])

  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className="d-inline ml-auto">
      <span title="Edit Branch" style={{cursor:"pointer"}} onClick={handleClickOpen}><EditOutlinedIcon/></span>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden', lineHeight: '0' }}>
              Please  enter required all filed to Update a Branch Please  enter required all
            </p>
          </DialogContentText>
          <ModalForm product={product} handleClose={handleClose}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
ProductUpdateModal.propTypes = {
  getProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  product: state.product.product,
  errors: state.errors
});


export default connect(mapStateToProps, { getProduct })(ProductUpdateModal);

