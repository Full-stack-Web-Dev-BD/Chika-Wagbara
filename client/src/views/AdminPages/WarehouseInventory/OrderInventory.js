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
import { getInventory } from '../../../actions/inventoryAction'
import { addbBranchInventory } from '../../../actions/branchInventoryAction'

const OrderInventory=(props)=> {

  const { id, inventory }=props
  
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
    props.getInventory(id)
  }, [])
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const addbBranchInventory =(e)=> {
    e.preventDefault()
    const newInventory={
      name:inventory.name,
      department:inventory.department._id,
      type:inventory.type,
      unit:inventory.unit,
      purchaseCode:inventory.purchaseCode,
      materialSafetyCode:inventory.materialSafetyCode,
      quantity:quantity,
      alertLevel:inventory.alertLevel,
      tax:inventory.tax
    }
    props.addbBranchInventory(newInventory);
    handleClose()
  };

  return (
    <div className="d-inline ml-auto">
      <span title="Edit Branch" style={{cursor:"pointer"}} onClick={handleClickOpen}><ShopIcon/></span>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Inventory Order </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden', lineHeight: '0' }}>
              Please  enter required all filed to Update a Branch Please  enter required all
            </p>
          </DialogContentText>
          {inventory?
          <form onSubmit={e => { addbBranchInventory(e) }}>
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
                value={inventory.name}
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
                value={inventory.department?inventory.department.name:0}
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
                value={inventory.type}
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
                value={inventory.unit}
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
                value={inventory.purchaseCode}
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
                value={inventory.materialSafetyCode}
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
                value={inventory.alertLevel}
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
                value={inventory.tax}
              />
            </div>
          </div>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Cancel </Button>
            <Button size="small" variant="contained" type="submit" >Order</Button>
          </DialogActions>
        </form>:''
          }
        </DialogContent>
      </Dialog>
    </div>
  );
}
OrderInventory.propTypes = {
  getInventories: PropTypes.func.isRequired,
  addbBranchInventory: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  inventory: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  inventory: state.inventory.inventory,
  errors: state.errors
});


export default connect(mapStateToProps, { getInventory, addbBranchInventory })(OrderInventory);
