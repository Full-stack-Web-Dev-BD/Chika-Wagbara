import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { updateGuardian, getGuardians } from '../../../actions/guardianAction'

const UpdateForm=(props)=> {
  const { guardian, handleClose  }=props  
  const [title, setTitle] = useState(guardian?guardian.title:'')
  const [firstName, setFirstName] = useState(guardian?guardian.firstName:'')
  const [lastName, setLastName] = useState(guardian?guardian.lastName:'')
  const [mobileNumber, setMobileNumber] = useState(guardian?guardian.mobileNumber:'')
  const [email, setEmail] = useState(guardian?guardian.email:'')
  const [relationshipToPatient, setRelationshipToPatient] = useState(guardian?guardian.relationshipToPatient:'')
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleFormClose = () => {
    handleClose()
  };

  const updateGuardian=(event)=>{
    event.preventDefault()
    const newGuardian={
      title:title,
      firstName:firstName,
      lastName:lastName,
      mobileNumber:mobileNumber,
      email:email,
      relationshipToPatient:relationshipToPatient
    }
    props.updateGuardian(guardian._id, newGuardian);
    props.getGuardians();
    handleFormClose();
  }

  return (
    <form onSubmit={e=> updateGuardian(e)}>
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
                value={title}
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
                value={firstName}
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
                value={lastName}
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
                value={mobileNumber}
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
                value={email}
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
                value={relationshipToPatient}
                fullWidth
            />
            </div>
        </div>
        <DialogActions>
            <Button onClick={handleClose} color="primary">Cancel </Button>
            <Button size="small"  variant="contained" type="submit">Create</Button>
        </DialogActions>
    </form>
  );
}

UpdateForm.propTypes = {
  updateGuardian:PropTypes.func.isRequired,
  getGuardians:PropTypes.func.isRequired,
  className: PropTypes.string,
};
const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps, { updateGuardian, getGuardians })(UpdateForm)