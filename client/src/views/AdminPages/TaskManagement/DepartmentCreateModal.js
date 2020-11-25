import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { PlusCircle } from 'react-feather';
import { TextField } from '@material-ui/core';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { addDepartment } from '../../../actions/departmentAction';
import { addCategory } from '../../../actions/categoryAction'
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const LocationCreateModal=(props)=> {
  const { departments }=props
  const [open, setOpen] = React.useState(false);
  const [locationType, setLocationType] = useState('')
  const [departmentName, setDepartmentName] = useState('')
  const [departmentRevenueTarget, setDepartmentRevenueTarget] = useState('')
  
  

  const [categoryName, setCategoryName] = useState('')
  const [categoryRevenueTarget, setCategoryRevenueTarget] = useState('')
  const [departmentId, setDepartmentId] = useState('')

  const addDepartment=(e)=>{
    e.preventDefault()
    props.addDepartment({name:departmentName, revenueTarget:departmentRevenueTarget})
    handleClose();
  }

  const addCategory=(e)=>{
    e.preventDefault()
    props.addCategory(departmentId, {name:categoryName, revenueTarget:categoryRevenueTarget})
    handleClose();
  }


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log(departmentId)
  return (
    <div>
      <Button variant="contained" size="small" color="secondary" onClick={handleClickOpen} > <PlusCircle /> Add Department & Category
</Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add A Location
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Please Select What you like to Add . <span style={{ visibility: 'hidden' }}>(For Example you can select country to add a country )</span>
          </Typography>

          <TextField
            onChange={e => { setLocationType(e.target.value) }}
            margin="dense"
            id="selectLocationType"
            label="Select A Type"
            select
            SelectProps={{
              native: true,
            }}
            fullWidth
          >
            <option >Select Type</option>
            <option value="department">Department</option>
            <option value="category">Category</option>
          </TextField>
          {
            locationType === "department" ?
              <form onSubmit={e=>{addDepartment(e)}}>
                <TextField
                  onChange={e => { setDepartmentName(e.target.value) }}
                  required
                  margin="dense"
                  id="department"
                  label="Department Name"
                  type="text"
                  fullWidth
                />
                <TextField
                  onChange={e => { setDepartmentRevenueTarget(e.target.value) }}
                  required
                  margin="dense"
                  id="country"
                  label="Revenue Target"
                  type="text"
                  fullWidth
                />
                <Button type="submit" size="small" variant="contained"> Add </Button>
              </form> : ''
          }

          {
            locationType === "category" ?
              <div>
                <TextField
                  onChange={e => { setDepartmentId(e.target.value) }}
                  margin="dense"
                  id="selectLocationType"
                  label="Select The Country of This State"
                  select
                  SelectProps={{
                    native: true,
                  }}
                  fullWidth
                  required
                >
                  <option >Select Department</option>
                  {
                    departments.map(el => (
                      <option value={el._id} > {el.name} </option>
                    ))
                  }
                </TextField>
                <TextField
                  onChange={e => { setCategoryName(e.target.value) }}
                  required
                  margin="dense"
                  id="statename"
                  label="Category Name"
                  type="text"
                  fullWidth
                />
                <TextField
                  onChange={e => { setCategoryRevenueTarget(e.target.value) }}
                  required
                  margin="dense"
                  id="statename"
                  label="Revenue Target"
                  type="text"
                  fullWidth
                />
                {
                  categoryName && categoryRevenueTarget && departmentId ?
                    <Button onClick={e => {addCategory(e)}} type="submit" size="small" variant="contained"> Add </Button>
                    : ''
                }
              </div> : ''
          }
        </DialogContent>
      </Dialog>
    </div>
  );
}

LocationCreateModal.propTypes = {
  addDepartment: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  departments: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  departments: state.department.departments,
  errors: state.errors
});


export default connect(mapStateToProps, { addDepartment, addCategory })(LocationCreateModal);


