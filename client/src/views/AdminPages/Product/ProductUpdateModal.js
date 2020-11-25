import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from 'axios'
import uID from 'src/utils/uIDGenerator12Digite';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getProduct, updateProduct } from '../../../actions/productAction'

const ProductUpdateModal=(props)=> {

  const { id, product }=props
  
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [type, setType] = useState('')
  const [unit, setUnit] = useState('')
  const [purchaseCode, setPurchaseCode] = useState('')
  const [materialSafetyCode, setMaterialSafetyCode] = useState('')
  const [quantity, setQuantity] = useState('')
  const [alertLevel, setAlertLevel] = useState('')
  const [tax, setTax] = useState('')
  const [open, setOpen] = React.useState(false);
  
  useEffect(()=>{
    props.getProduct(id)
    setName(product.name)
  }, [])

  useEffect(()=>{
    if(Object.keys(product).length!=0){
      setName(product.name)
    }
  }, [])
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const updateProduct =(e)=> {
    e.preventDefault()
    const newProduct={
      name:name,
      department:department,
      type:type,
      unit:unit,
      purchaseCode:purchaseCode,
      materialSafetyCode:materialSafetyCode,
      quantity:quantity,
      alertLevel:alertLevel,
      tax:tax
    }
    props.updateProduct(id, newProduct);
    handleClose()
  };

  console.log(name)
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
          <form onSubmit={e => { updateProduct(e) }}>
            <div className="row">
              <div className="col-md-6">
                <TextField
                  onChange={e => setName(e.target.value)}
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                  value={name}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e => setDepartment(e.target.value)}
                  required
                  margin="dense"
                  id="location"
                  label="Department"
                  type="text"
                  fullWidth
                  value={department}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e => setType(e.target.value)}
                  required
                  margin="dense"
                  id="address"
                  label="Type"
                  type="text"
                  fullWidth
                  value={type}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e => setUnit(e.target.value)}
                  required
                  margin="dense"
                  id="city"
                  label="Unit"
                  type="text"
                  fullWidth
                  value={unit}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e => setPurchaseCode(e.target.value)}
                  required
                  margin="dense"
                  id="state"
                  label="Purchase Code"
                  type="text"
                  fullWidth
                  value={purchaseCode}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e => setMaterialSafetyCode(e.target.value)}
                  required
                  margin="dense"
                  id="phone1"
                  label="Material Safety Code"
                  type="text"
                  fullWidth
                  value={materialSafetyCode}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e => setQuantity(e.target.value)}
                  required
                  margin="dense"
                  id="phone2"
                  label="Quantity"
                  type="number"
                  fullWidth
                  value={quantity}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e => setAlertLevel(e.target.value)}
                  required
                  margin="dense"
                  id="email"
                  label="Alert Level"
                  type="text"
                  fullWidth
                  value={alertLevel}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e => setTax(e.target.value)}
                  required
                  margin="dense"
                  id="email"
                  label="Tax"
                  type="text"
                  fullWidth
                  value={tax}
                />
              </div>
            </div>
            <DialogActions>
              <Button onClick={handleClose} color="primary">Cancel </Button>
              <Button size="small" variant="contained" type="submit" >Update</Button>
            </DialogActions>
          </form>
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


export default connect(mapStateToProps, { getProduct, updateProduct })(ProductUpdateModal);

