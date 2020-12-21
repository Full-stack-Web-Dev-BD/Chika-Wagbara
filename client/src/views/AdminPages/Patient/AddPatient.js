import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { AddCircle, Search } from '@material-ui/icons';
import PropTypes from 'prop-types'
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import { connect } from 'react-redux'
import { addPatient } from '../../../actions/patientAction'
import { getAge } from '../../../utils/AgeCalculator'


const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));
const AddPatient=(props)=> {
  const classes = useStyles();
  const { className, ...rest }=props
  const [patientNo, setPatientNo] = useState('')
  const [title, setTitle] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [otherName, setOtherName] = useState('')
  const [gender, setGender] = useState('')
  const [dateOfBirth, setDateofBirth] = useState('')
  const [mobileNumber1, setMobileNumber1] = useState('')
  const [mobileNumber2, setMobileNumber2] = useState('')
  const [email, setEmail] = useState('')
  const [email1, setEmail1] = useState('')
  const [address, setAddress] = useState('')
  const [locationofAddress, setLocationofAddress] = useState('')
  const [nationality, setNationality] = useState('')
  const [stateofOrigin, setStateofOrigin] = useState('')
  const [religion, setReligion] = useState('')
  const [primaryInsurer, setPrimaryInsurer] = useState('')
  const [primaryInsurancePolicy, setPrimaryInsurancePolicy] = useState('')
  const [primaryInsuranceNumber, setPrimaryInsuranceNumber] = useState('')
  const [hearAboutUs, setHearAboutUs] = useState('')
  const [creditLimit, setCreditLimit] = useState('')
  const [discountForPatient, setDiscountForPatient] = useState('')
  const [openingBalance, setOpeningBalance] = useState('')
  const [patientsMarketer, setPatientsMarketer] = useState('')
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const show=()=>{
    setOpen(!open)
  }

  const addPatient=(e)=>{
    e.preventDefault()
    const age=getAge(dateOfBirth);
    const newPatient={
      patientNo:patientNo,
      title:title,
      firstName:firstName,
      lastName:lastName,
      otherName:otherName,
      gender:gender,
      dateOfBirth:dateOfBirth,
      age:age,
      mobileNumber1:mobileNumber1,
      mobileNumber2:mobileNumber2,
      email:email,
      email1:email1,
      address:address,
      locationofAddress:locationofAddress,
      nationality:nationality,
      stateofOrigin:stateofOrigin,
      religion:religion,
      primaryInsurer:primaryInsurer,
      primaryInsurancePolicy:primaryInsurancePolicy,
      primaryInsuranceNumber:primaryInsuranceNumber,
      hearAboutUs:hearAboutUs,
      creditLimit:creditLimit,
      discountForPatient:discountForPatient,
      openingBalance:openingBalance,
      patientsMarketer:patientsMarketer,
    }
    props.addPatient(newPatient)
    handleClose();
  }


  return (
    <div className="d-inline ml-auto">
      <Button variant="outlined" color="primary" className="search-button" onClick={handleClickOpen}>
       <AddCircle/> Create Patient
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Patient</DialogTitle>
        <DialogContent>
          <form onSubmit={e => {addPatient(e)}} style={{margin:'20px'}}>
          <div className="row">
            <div className="col-md-6">
              <TextField
                onChange={e=>setPatientNo(e.target.value)}
                autoFocus
                required
                margin="dense"
                id="name"
                label="Patient No"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setTitle(e.target.value)}
                required
                margin="dense"
                id="name"
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
                id="location"
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
                onChange={e=>setOtherName(e.target.value)}
                margin="dense"
                id="phone1"
                label="Other Name"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e => { setGender(e.target.value) }}
                margin="dense"
                id="selectLocationType"
                label="Select Gender"
                select
                SelectProps={{
                  native: true,
                }}
                fullWidth
                required
              >
                <option >Select Gender</option>
                <option value="male" >Male</option>
                <option value="female">Female</option>
                <option value="Other">Other</option>
              </TextField>
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setDateofBirth(e.target.value)}
                required
                margin="dense"
                id="phone1"
                label="Date of Birth"
                type="date"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setMobileNumber1(e.target.value)}
                required
                margin="dense"
                id="email"
                label="Mobile Number1"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setMobileNumber2(e.target.value)}
                margin="dense"
                id="email"
                label="Mobile Number2"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setEmail(e.target.value)}
                required
                margin="dense"
                id="email"
                label="Email 1"
                type="email"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setEmail1(e.target.value)}
                margin="dense"
                id="email"
                label="Email 2"
                type="email"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setAddress(e.target.value)}
                margin="dense"
                id="email"
                label="Address"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setLocationofAddress(e.target.value)}
                margin="dense"
                id="email"
                label="Location of Address"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setNationality(e.target.value)}
                margin="dense"
                id="email"
                label="Nationality"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setStateofOrigin(e.target.value)}
                margin="dense"
                id="email"
                label="State of Origin"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setReligion(e.target.value)}
                margin="dense"
                id="email"
                label="Religion"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setPrimaryInsurer(e.target.value)}
                margin="dense"
                id="email"
                label="Primary Insurer"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setPrimaryInsurancePolicy(e.target.value)}
                margin="dense"
                id="email"
                label="Primary Insurance Policy"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setPrimaryInsuranceNumber(e.target.value)}
                margin="dense"
                id="email"
                label="Primary Insurence Number"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setHearAboutUs(e.target.value)}
                margin="dense"
                id="email"
                label="Where Hear About Us"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setCreditLimit(e.target.value)}
                margin="dense"
                id="email"
                label="Credit Limit"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setDiscountForPatient(e.target.value)}
                margin="dense"
                id="email"
                label="Discount for Patient"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setOpeningBalance(e.target.value)}
                margin="dense"
                id="email"
                label="Openning Balance"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={e=>setPatientsMarketer(e.target.value)}
                margin="dense"
                id="email"
                label="Patients Marketer"
                type="text"
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
AddPatient.propTypes = {
  addPatient:PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps, { addPatient })(AddPatient)