import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ViewBranchDetails({branch}) {
  const [name, setName] = useState(branch.name)
  const [location, setLocation] = useState(branch.location)
  const [address, setAddress] = useState(branch.address)
  const [city, setCity] = useState(branch.city)
  const [state, setState] = useState(branch.state)
  const [phone1, setPhone1] = useState(branch.phone1)
  const [phone2, setPhone2] = useState(branch.phone2)
  const [email, setEmail] = useState(branch.email)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="d-inline ml-auto">
      <span onClick={handleClickOpen}>Details </span>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">View Branch Details </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden',lineHeight:'0' }}>
              Please  enter required all filed to Update a Branch Please  enter required all
            </p>
          </DialogContentText>
          <form >
            <div className="row">
              <div className="col-md-6">
                <TextField
                  disabled
                  onChange ={e=>setName(e.target.value)}
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
                  disabled
                  onChange ={e=>setLocation(e.target.value)}
                  required
                  margin="dense"
                  id="location"
                  label="Location"
                  type="text"
                  fullWidth
                  value={location}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  disabled
                  onChange ={e=>setAddress(e.target.value)}
                  required
                  margin="dense"
                  id="address"
                  label="Address"
                  type="text"
                  fullWidth
                  value={address}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  disabled
                  onChange ={e=>setCity(e.target.value)}
                  required
                  margin="dense"
                  id="city"
                  label="City"
                  type="text"
                  fullWidth
                  value={city}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  disabled
                  onChange ={e=>setState(e.target.value)}
                  required
                  margin="dense"
                  id="state"
                  label="State"
                  type="text"
                  fullWidth
                  value={state}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  disabled
                  onChange ={e=>setPhone1(e.target.value)}
                  required
                  margin="dense"
                  id="phone1"
                  label="Phoone 1"
                  type="number"
                  fullWidth
                  value={phone1}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  disabled
                  onChange ={e=>setPhone2(e.target.value)}
                  required
                  margin="dense"
                  id="phone2"
                  label="Phone 1"
                  type="number"
                  fullWidth
                  value={phone2}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  disabled
                  onChange ={e=>setEmail(e.target.value)}
                  required
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  value={email}
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
