import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { updateReferringPerson, getReferringPersons } from '../../../actions/referringPersonAction'

const UpdateForm=(props)=> {
  const { referringPerson, handleClose }=props
  const [title, setTitle] = useState(referringPerson?referringPerson.title:'')
  const [firstName, setFirstName] = useState(referringPerson?referringPerson.firstName:'')
  const [lastName, setLastName] = useState(referringPerson?referringPerson.lastName:'')
  const [mobileNumber, setMobileNumber] = useState(referringPerson?referringPerson.mobileNumber:'')
  const [email, setEmail] = useState(referringPerson?referringPerson.email:'')
  const [speciality, setSpeciality] = useState(referringPerson?referringPerson.speciality:'')
  const [dateofBirth, setDateofBirth] = useState(referringPerson?referringPerson.dateofBirth:'')
  const [primaryPlaceofPractice, setPrimaryPlaceofPractice] = useState(referringPerson?referringPerson.primaryPlaceofPractice:'')
  const [creditLimit, setCreditLimit] = useState(referringPerson?referringPerson.creditLimit:'')
  const [discountForReferringPerson, setDiscountForReferringPerson] = useState(referringPerson?referringPerson.discountForReferringPerson:'')
  const [cutForReferringPerson, setCutForReferringPerson] = useState(referringPerson?referringPerson.cutForReferringPerson:'')
  const [openingBalance, setOpeningBalance] = useState(referringPerson?referringPerson.openingBalance:'')
  const [referringPersonMarketer, setReferringPersonMarketer] = useState(referringPerson?referringPerson.referringPersonMarketer:'')
  const [password, setPassword] = useState(referringPerson?referringPerson.password:'')  
  
  const updateReferringPerson=(event)=>{
    event.preventDefault()
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
    props.updateReferringPerson(referringPerson._id, newReferringPerson);
    props.getReferringPersons();
    handleFormClose();
  }

  const handleFormClose = () => {
    handleClose()
  };

  console.log(referringPerson)

  return (
    <form onSubmit={e=> updateReferringPerson(e)}>
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
              label="Email"
              type="email"
              value={email}
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
              value={speciality}
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
              value={dateofBirth}
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
              value={primaryPlaceofPractice}
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
              value={creditLimit}
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
              value={discountForReferringPerson}
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
              value={cutForReferringPerson}
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
              value={openingBalance}
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
              value={referringPersonMarketer}
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
              value={password}
              fullWidth
            />
          </div>
        </div>
        <DialogActions>
            <Button onClick={handleClose} color="primary">Cancel </Button>
            <Button size="small"  variant="contained" type="submit">Update</Button>
        </DialogActions>
    </form>
  );
}

UpdateForm.propTypes = {
  updateReferringPerson:PropTypes.func.isRequired,
  getReferringPersons:PropTypes.func.isRequired,
  className: PropTypes.string,
};
const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps, { updateReferringPerson, getReferringPersons })(UpdateForm)