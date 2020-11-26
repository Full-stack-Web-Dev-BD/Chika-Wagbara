import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { updateProduct } from '../../../actions/productAction'

const ModalForm=(props)=> {

  const { product }=props
  
  const [name, setName] = useState(product.name)
  const [department, setDepartment] = useState(product.department?product.department.name:'')
  const [type, setType] = useState(product.type)
  const [unit, setUnit] = useState(product.unit)
  const [purchaseCode, setPurchaseCode] = useState(product.purchaseCode)
  const [materialSafetyCode, setMaterialSafetyCode] = useState(product.materialSafetyCode)
  const [quantity, setQuantity] = useState(product.quantity)
  const [alertLevel, setAlertLevel] = useState(product.alertLevel)
  const [tax, setTax] = useState(product.tax)
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    props.handleClose();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const updateProduct =(e)=> {
    e.preventDefault()
    const newProduct={
      name:name,
      department:product.department._id,
      type:type,
      unit:unit,
      purchaseCode:purchaseCode,
      materialSafetyCode:materialSafetyCode,
      quantity:quantity,
      alertLevel:alertLevel,
      tax:tax
    }
    props.updateProduct(product._id, newProduct);
    handleClose()
  };

  return (
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
  );
}
ModalForm.propTypes = {
  updateProduct: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  product: state.product.product,
  errors: state.errors
});


export default connect(mapStateToProps, { updateProduct })(ModalForm);

