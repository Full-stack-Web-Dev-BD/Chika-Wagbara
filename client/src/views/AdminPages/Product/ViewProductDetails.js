import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import StreetviewIcon from '@material-ui/icons/Streetview';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getProduct } from '../../../actions/productAction'


const ViewProductDetails=(props)=> {
  const {id, product}=props
  const [name, setName] = useState(product.name)
  const [department, setDepartment] = useState('')
  const [type, setType] = useState(product.type)
  const [unit, setUnit] = useState('')
  const [purchaseCode, setPurchaseCode] = useState('')
  const [materialSafetyCode, setMaterialSafetyCode] = useState('')
  const [quantity, setQuantity] = useState('')
  const [alertLevel, setAlertLevel] = useState('')
  const [tax, setTax] = useState('')
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    props.getProduct(id)
  }, [])
  const getProduct=(id)=>{
    props.getProduct(id)
  }
  console.log(name)
  return (
    <div className="d-inline ml-auto">
      <span  title="View Full Details" style={{cursor:"pointer"}} onClick={handleClickOpen}><StreetviewIcon/> </span>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">View Branch Details </DialogTitle>
        <DialogContent>
          <form >
            <div className="row">
              <div className="col-md-6">
                <TextField
                  disabled
                  onChange ={e=>setName(product.name)}
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
                  disabled
                  onChange ={e=>setDepartment(e.target.value)}
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
                  disabled
                  onChange ={e=>setType(e.target.value)}
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
                  disabled
                  onChange ={e=>setUnit(e.target.value)}
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
                  disabled
                  onChange ={e=>setPurchaseCode(e.target.value)}
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
                  disabled
                  onChange ={e=>setMaterialSafetyCode(e.target.value)}
                  required
                  margin="dense"
                  id="phone1"
                  label="Material Safety Code"
                  type="number"
                  fullWidth
                  value={product.materialSafetyCode}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  disabled
                  onChange ={e=>setQuantity(e.target.value)}
                  required
                  margin="dense"
                  id="phone2"
                  label="Quantity"
                  type="number"
                  fullWidth
                  value={product.quantity}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  disabled
                  onChange ={e=>setAlertLevel(e.target.value)}
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
                  disabled
                  onChange ={e=>setTax(e.target.value)}
                  required
                  margin="dense"
                  id="email"
                  label="Tax"
                  type="text"
                  fullWidth
                  value={product.tax}
                />
              </div>
            </div>
          </form>
          
          <DialogActions>
              <Button onClick={handleClose} color="primary">Close </Button>
            </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}

ViewProductDetails.propTypes = {
  getProduct: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  product: state.product.product,
  errors: state.errors
});


export default connect(mapStateToProps, { getProduct })(ViewProductDetails);

