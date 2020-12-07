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
import { addReferringPerson } from '../../../actions/referringPersonAction'

const ReferringPersonCreateModal=(props)=> {
  const [title, setTitle] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [speciality, setSpeciality] = useState('')
  const [dateofBirth, setDateofBirth] = useState('')
  const [primaryPlaceofPractice, setPrimaryPlaceofPractice] = useState('')
  const [creditLimit, setCreditLimit] = useState('')
  const [discountForReferringPerson, setDiscountForReferringPerson] = useState('')
  const [cutForReferringPerson, setCutForReferringPerson] = useState('')
  const [openingBalance, setOpeningBalance] = useState('')
  const [referringPersonMarketer, setReferringPersonMarketer] = useState('')
  const [password, setPassword] = useState([])
  const [open, setOpen] = React.useState(false);
  
  const createReferrgingPerson=(e)=>{
    e.preventDefault();
    const newReferringPerson={
      title:title,
      firstName:firstName,
      lastName:lastName,
      mobileNumber:mobileNumber,
      email:email,
      speciality:speciality,
      dateofBirth:dateofBirth,
      primaryPlaceofPractice:primaryPlaceofPractice,
      creditLimit:creditLimit,
      discountForReferringPerson:discountForReferringPerson,
      cutForReferringPerson:cutForReferringPerson,
      openingBalance:openingBalance,
      referringPersonMarketer:referringPersonMarketer,
      password:password
    }
    props.addReferringPerson(newReferringPerson)
    handleClose()
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <div className="d-inline ml-auto">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       <AddCircle/>Add Referring Person
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Referral Person</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden',lineHeight:'0' }}>
              Please  enter required all filed to create a Branch Please  enter required all
            </p>
          </DialogContentText>
          <form onSubmit={e=> createReferrgingPerson(e)}>
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
                  label="Email"
                  type="email"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setSpeciality(e.target.value)}
                  required
                  margin="dense"
                  label="Speciality"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setDateofBirth(e.target.value)}
                  required
                  margin="dense"
                  label="Date of Birth"
                  type="date"
                  fullWidth
                />
              </div>
              
              <div className="col-md-6">
                <TextField
                  onChange={e=>setPrimaryPlaceofPractice(e.target.value)}
                  required
                  margin="dense"
                  label="Primary Place of Practice"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setCreditLimit(e.target.value)}
                  required
                  margin="dense"
                  id="phone2"
                  label="Credit Limit"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setDiscountForReferringPerson(e.target.value)}
                  required
                  margin="dense"
                  label="Discount for Referring Person"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setCutForReferringPerson(e.target.value)}
                  required
                  margin="dense"
                  label="Cut for Referring Person"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setOpeningBalance(e.target.value)}
                  required
                  margin="dense"
                  label="Opening Balance"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setReferringPersonMarketer(e.target.value)}
                  required
                  margin="dense"
                  label="Referring Person Marketer"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setPassword(e.target.value)}
                  required
                  margin="dense"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </div>
            </div>
            <DialogActions>
              <Button onClick={handleClose} color="primary">Cancel </Button>
              <Button size="small"  variant="contained" type="submit" >Create</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

ReferringPersonCreateModal.propTypes = {
  addReferringPerson:PropTypes.func.isRequired,
  className: PropTypes.string,
  states: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps, { addReferringPerson })(ReferringPersonCreateModal)