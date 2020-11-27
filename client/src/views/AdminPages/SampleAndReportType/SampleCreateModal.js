import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AddCircle } from '@material-ui/icons';


import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { addSample } from '../../../actions/sampleAction'

const SampleCreateModal=(props)=> {

  const { id, inventory }=props
  
  const [type, setType] = useState('')
  const [container, setContainer] = useState('')
  const [containerCapColor, setContainerCapColor] = useState('')
  const [storageTemperature, setStorageTemperature] = useState('')
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const addSample =(e)=> {
    e.preventDefault()
    const newSample={
      type:type,
      container:container,
      containerCapColor:containerCapColor,
      storageTemperature:storageTemperature,
    }
    props.addSample(newSample);
    handleClose()
  };

  return (
    <div className="d-inline ml-auto">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       <AddCircle/> Create Sample
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Sample </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden', lineHeight: '0' }}>
              Please  enter required all filed to Update a Branch Please  enter required all
            </p>
          </DialogContentText>
          <form onSubmit={e => { addSample(e) }}>
          <div className="row">
            <div className="col-md-6">
              <TextField
                onChange={e => setType(e.target.value)}
                autoFocus
                required
                margin="dense"
                id="name"
                label="Sample Type"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e => setContainer(e.target.value)}
                required
                margin="dense"
                id="location"
                label="Container"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e => setContainerCapColor(e.target.value)}
                required
                margin="dense"
                id="address"
                label="Container Cap Color"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e => setStorageTemperature(e.target.value)}
                required
                margin="dense"
                id="city"
                label="Storage Temperature"
                type="text"
                fullWidth
              />
            </div>
          </div>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Cancel </Button>
            <Button size="small" variant="contained" type="submit" >Create</Button>
          </DialogActions>
        </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
SampleCreateModal.propTypes = {
  addSample: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(mapStateToProps, { addSample })(SampleCreateModal);
