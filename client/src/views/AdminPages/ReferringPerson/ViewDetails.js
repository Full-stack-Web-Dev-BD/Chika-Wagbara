import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { updateReferringPerson, getReferringPersons } from '../../../actions/referringPersonAction'

const ViewDetails=(props)=> {
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
  const [open, setOpen] = useState(false);
  
 

  const handleFormClose = () => {
    handleClose()
  };

  return (
    <form>
        <div className="row">
        <div className="col-md-6">
            <TextField
              disabled
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
              disabled
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
              disabled
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
              disabled
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
              disabled
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
              disabled
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
              disabled
              onChange={e=>setDateofBirth(e.target.value)}
              required
              margin="dense"
              label="Date of Birth"
              type="text"
              value={dateofBirth}
              fullWidth
            />
          </div>
          
          <div className="col-md-6">
            <TextField
              disabled
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
              disabled
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
              disabled
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
              disabled
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
              disabled
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
              disabled
              onChange={e=>setReferringPersonMarketer(e.target.value)}
              required
              margin="dense"
              label="Referring Person Marketer"
              type="text"
              value={referringPersonMarketer}
              fullWidth
            />
          </div>
        </div>
    </form>
  );
}

export default ViewDetails;