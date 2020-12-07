import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AddCircle } from '@material-ui/icons';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addGuardian } from '../../../actions/guardianAction'

const GuardianCreateModal=(props)=> {
  const [title, setTitle] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [relationshipToPatient, setRelationshipToPatient] = useState('')
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const createGuardian=(event)=>{
    event.preventDefault()
    const newGuardian={
      title:title,
      firstName:firstName,
      lastName:lastName,
      mobileNumber:mobileNumber,
      email:email,
      relationshipToPatient:relationshipToPatient
    }
    props.addGuardian(newGuardian)
    handleClose();
  }

  return (
    <div className="d-inline ml-auto">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       <AddCircle/> Add Guardian
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Guardian</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden',lineHeight:'0' }}>
              Please  enter required all filed to create a Branch Please  enter required all
            </p>
          </DialogContentText>
          <form onSubmit={(e)=>createGuardian(e)}>
            <div className="row">
              <div className="col-md-6">
                <TextField
                  onChange={e=>setTitle(e.target.value)}
                  autoFocus
                  required
                  margin="dense"
                  id="title"
                  label="Title"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setFirstName(e.target.value)}
                  required
                  margin="dense"
                  id="firstName"
                  label="First Name"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setLastName(e.target.value)}
                  required
                  margin="dense"
                  id="address"
                  label="Last Name"
                  type="text"
                  fullWidth
                />
              </div>              
              <div className="col-md-6">
                <TextField
                  onChange={e=>setMobileNumber(e.target.value)}
                  required
                  margin="dense"
                  id="phone1"
                  label="Mobile Number"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setEmail(e.target.value)}
                  required
                  margin="dense"
                  id="phone2"
                  label="Email"
                  type="email"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setRelationshipToPatient(e.target.value)}
                  required
                  margin="dense"
                  id="email"
                  label="Relationship To Patient"
                  type="text"
                  fullWidth
                />
              </div>
            </div>
            <DialogActions>
              <Button onClick={handleClose} color="primary">Cancel </Button>
              <Button size="small"  variant="contained" type="submit">Create</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

GuardianCreateModal.propTypes = {
  addGuardian:PropTypes.func.isRequired,
  className: PropTypes.string,
};
const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps, { addGuardian })(GuardianCreateModal)