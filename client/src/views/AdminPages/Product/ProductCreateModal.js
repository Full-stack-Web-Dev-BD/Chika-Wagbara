import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from 'axios'
import PropTypes from 'prop-types';
import { AddCircle } from '@material-ui/icons';
import { connect } from 'react-redux'
import { addProduct } from '../../../actions/productAction'
import { getDepartments } from '../../../actions/departmentAction'

const ProductCreateModal=(props)=> {
  const { departments } =props
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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  useEffect(()=>{
    props.getDepartments();
  }, [])

  const createProduct=(event)=>{
    event.preventDefault()
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
    props.addProduct(newProduct)
    handleClose()
  }
  
  
  return (
    <div className="d-inline ml-auto">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       <AddCircle/> Create Product
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden',lineHeight:'0' }}>
              Please  enter required all filed to create a product Please  enter required all
            </p>
          </DialogContentText>
          <form onSubmit={e => {createProduct(e)}}>
            <div className="row">
              <div className="col-md-6">
                <TextField
                  onChange={e=>setName(e.target.value)}
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                    onChange={e => { setDepartment(e.target.value) }}
                    margin="dense"
                    id="selectLocationType"
                    label="Select Department"
                    select
                    SelectProps={{
                      native: true,
                    }}
                    fullWidth
                    required
                  >
                    <option selected disabled hidden>Select Department</option>
                    {departments?
                      departments.map(data => (
                        <option value={data._id} > {data.name} </option>
                      )):''
                    }
                  </TextField>
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setType(e.target.value)}
                  required
                  margin="dense"
                  id="address"
                  label="Type"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setUnit(e.target.value)}
                  required
                  margin="dense"
                  id="city"
                  label="Unit"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setPurchaseCode(e.target.value)}
                  required
                  margin="dense"
                  id="state"
                  label="Purchase Code"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setMaterialSafetyCode(e.target.value)}
                  required
                  margin="dense"
                  id="phone1"
                  label="Material Safety Code"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setQuantity(e.target.value)}
                  required
                  margin="dense"
                  id="phone2"
                  label="Quantity"
                  type="number"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setAlertLevel(e.target.value)}
                  required
                  margin="dense"
                  id="email"
                  label="Alert Level"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setTax(e.target.value)}
                  required
                  margin="dense"
                  id="email"
                  label="Tax"
                  type="text"
                  fullWidth
                />
              </div>
            </div>
            <DialogActions>
              <Button onClick={handleClose} color="primary">Cancel </Button>
              <Button size="small"  variant="contained"  type="submit" >Create</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

ProductCreateModal.propTypes = {
  addProduct: PropTypes.func.isRequired,
  getDepartments: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  departments: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  departments: state.department.departments,
  errors: state.errors
});


export default connect(mapStateToProps, { addProduct, getDepartments })(ProductCreateModal);
