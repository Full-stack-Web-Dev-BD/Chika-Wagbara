import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ShopIcon from '@material-ui/icons/Shop';


import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getProduct } from '../../../actions/productAction'
import { addInventory } from '../../../actions/inventoryAction'

const PurchaseProduct=(props)=> {

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
  }, [])
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const addInventory =(e)=> {
    e.preventDefault()
    const newInventory={
      name:product.name,
      department:product.department._id,
      type:product.type,
      unit:product.unit,
      user:product.user._id,
      purchaseCode:product.purchaseCode,
      materialSafetyCode:product.materialSafetyCode,
      quantity:quantity,
      alertLevel:product.alertLevel,
      tax:product.tax
    }
    props.addInventory(newInventory);
    handleClose()
  };

  return (
    <div className="d-inline ml-auto">
      <span title="Edit Branch" style={{cursor:"pointer"}} onClick={handleClickOpen}><ShopIcon/></span>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Purchase Product </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden', lineHeight: '0' }}>
              Please  enter required all filed to Update a Branch Please  enter required all
            </p>
          </DialogContentText>
          <form onSubmit={e => { addInventory(e) }}>
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
                  value={product.name}
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
                  value={product.department?product.department.name:0}
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
                  value={product.type}
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
                  value={product.unit}
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
                  value={product.purchaseCode}
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
                  value={product.materialSafetyCode}
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
                  value={product.alertLevel}
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
                  value={product.tax}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e => setTax(e.target.value)}
                  required
                  margin="dense"
                  id="email"
                  label="Suplyer"
                  type="text"
                  fullWidth
                  value={product.user?product.user.name:0}
                />
              </div>
            </div>
            <DialogActions>
              <Button onClick={handleClose} color="primary">Cancel </Button>
              <Button size="small" variant="contained" type="submit" >Purchase</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
PurchaseProduct.propTypes = {
  getProduct: PropTypes.func.isRequired,
  addInventory: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  product: state.product.product,
  errors: state.errors
});


export default connect(mapStateToProps, { getProduct, addInventory })(PurchaseProduct);
