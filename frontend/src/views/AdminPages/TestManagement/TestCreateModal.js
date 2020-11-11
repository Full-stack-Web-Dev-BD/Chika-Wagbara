import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from 'axios'
import { AddCircle } from '@material-ui/icons';


export default function TestCreateModal() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const createBranch = (event) => {
    event.preventDefault()
    Axios.post('/api/branchs/newBranch', {
    })
      .then(res => {
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="d-inline ml-auto">
      <Button variant="contained" color="primary" onClick={handleClickOpen}><AddCircle /> Create a new test</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a new test </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden', lineHeight: '0' }}>
              Please  enter required all filed to create a Branch Please  enter required all
            </p>
          </DialogContentText>
          <form onSubmit={e => { createBranch(e) }}>
            <div className="row">
              <div className="col-md-4">
                <TextField
                  required
                  margin="dense"
                  id="testCode"
                  label="Test Code"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-8">
                <TextField
                  required
                  margin="dense"
                  id="testName"
                  label="Test Name"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-4">
                <TextField
                  required
                  margin="dense"
                  id="LOINCCode"
                  label="LOINC Code"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-4">
                <TextField
                  required
                  margin="dense"
                  id="testPrice"
                  label="Test Price"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-4">
                <TextField
                  required
                  margin="dense"
                  id="revenueTarget"
                  label="Revenue Target"
                  type="text"
                  fullWidth
                />
            </div>

              <div className="col-md-4">
                <TextField
                  required
                  margin="dense"
                  id="positionPriority"
                  label="Position Priority"
                  type="text"
                  fullWidth
                />
            </div>

              <div className="col-md-4">
                <TextField
                  required
                  margin="dense"
                  id="depertment"
                  label="Department"
                  type="text"
                  fullWidth
                />
              </div>

              <div className="col-md-4">
                <TextField
                  required
                  margin="dense"
                  id="category"
                  label="Category"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  required
                  margin="dense"
                  id="sampleType"
                  label="Sample Type"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-4">
                <TextField
                  required
                  margin="dense"
                  id="reportType"
                  label="Report Type"
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
