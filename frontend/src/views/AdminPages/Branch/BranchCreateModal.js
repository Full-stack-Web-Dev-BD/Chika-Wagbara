import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from 'axios'
import uID from 'src/utils/uIDGenerator12Digite';
import { AddCircle } from '@material-ui/icons';


export default function BranchCreateModal({getAllBranch}) {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [phone1, setPhone1] = useState('')
  const [phone2, setPhone2] = useState('')
  const [email, setEmail] = useState('')
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // Create Branch
  // const createBranch = (branchInfo) => {
  //   axios
  //     .get(`/api/branchs/newBranch`, branchInfo)
  //     .then(res => {
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  const createBranch=(event)=>{
    event.preventDefault()
    Axios.post('/api/branchs/newBranch',{
      name:name,
      location:location,
      city:city,
      address:address,
      state:state,
      phone1:phone1,
      phone2:phone2,
      email:email,
      branchId:uID
    })
    .then(res=>{
      handleClose()
      getAllBranch()
    })
    .catch(err=>{
      console.log(err);
    })
  }
  
  
  return (
    <div className="d-inline ml-auto">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       <AddCircle/> Create Branch
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Branch</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden',lineHeight:'0' }}>
              Please  enter required all filed to create a Branch Please  enter required all
            </p>
          </DialogContentText>
          <form onSubmit={e => {createBranch(e)}}>
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
                  onChange={e=>setLocation(e.target.value)}
                  required
                  margin="dense"
                  id="location"
                  label="Location"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setAddress(e.target.value)}
                  required
                  margin="dense"
                  id="address"
                  label="Address"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setCity(e.target.value)}
                  required
                  margin="dense"
                  id="city"
                  label="City"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setState(e.target.value)}
                  required
                  margin="dense"
                  id="state"
                  label="State"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setPhone1(e.target.value)}
                  required
                  margin="dense"
                  id="phone1"
                  label="Phoone 1"
                  type="number"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setPhone2(e.target.value)}
                  required
                  margin="dense"
                  id="phone2"
                  label="Phone 1"
                  type="number"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setEmail(e.target.value)}
                  required
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
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
