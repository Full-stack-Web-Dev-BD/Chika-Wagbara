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


export default function ReportCreateModal() {

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
      <Button variant="contained" color="primary" onClick={handleClickOpen}><AddCircle /> Create Report </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create  Report   </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden', lineHeight: '0' }}>
              Please  enter required all filed to create a Branch Please  enter required all
            </p>
          </DialogContentText>
          <form onSubmit={e => { }}>
            <div className="row">
              <div className="col-12">
                <TextField
                  required
                  margin="dense"
                  id="departmentname"
                  label="Report  Name"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-12">
                <TextField
                  onChange={e => {}}
                  margin="dense"
                  id="gender"
                  label="Select Report Type"
                  type="text"
                  fullWidth
                  select
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value ={null} >Select Report Type</option>
                  <option value="Male">type 1</option>
                  <option value="Male">type 2</option>
                </TextField>
              </div>
              
              <div className="col-12">
                <TextField
                  onChange={e => {}}
                  margin="dense"
                  id="gender"
                  label="Select Report Type"
                  type="text"
                  fullWidth
                  select
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value ={null} >Select Default Doctor</option>
                  <option value="Male">Jon</option>
                  <option value="Male">MR. Robin</option>
                  <option value="Male">MD:Hamid</option>
                </TextField>
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
