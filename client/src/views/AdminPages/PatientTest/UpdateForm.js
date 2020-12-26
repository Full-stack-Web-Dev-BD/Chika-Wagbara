import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import PropTypes from 'prop-types';
import {
  makeStyles
} from '@material-ui/core';
import { connect } from 'react-redux'
import { getPatients, updatePatient } from '../../../actions/patientAction'
import { getAge } from '../../../utils/AgeCalculator'


const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));
const UpdateForm=(props)=> {
  const classes = useStyles();
  const { patient, handleClose, className, ...rest }=props
  const [patientNo, setPatientNo] = useState(patient?patient.patientNo:'')
  const [title, setTitle] = useState(patient?patient.title:'')
  const [firstName, setFirstName] = useState(patient?patient.firstName:'')
  const [lastName, setLastName] = useState(patient?patient.lastName:'')
  const [otherName, setOtherName] = useState(patient?patient.otherName:'')
  const [gender, setGender] = useState(patient?patient.gender:'')
  const [dateOfBirth, setDateofBirth] = useState(patient?patient.dateOfBirth:'')
  const [mobileNumber1, setMobileNumber1] = useState(patient?patient.mobileNumber1:'')
  const [mobileNumber2, setMobileNumber2] = useState(patient?patient.mobileNumber2:'')
  const [email, setEmail] = useState(patient?patient.email:'')
  const [email1, setEmail1] = useState(patient?patient.email1:'')
  const [address, setAddress] = useState(patient?patient.address:'')
  const [locationofAddress, setLocationofAddress] = useState(patient?patient.locationofAddress:'')
  const [nationality, setNationality] = useState(patient?patient.nationality:'')
  const [stateofOrigin, setStateofOrigin] = useState(patient?patient.stateofOrigin:'')
  const [religion, setReligion] = useState(patient?patient.religion:'')
  const [primaryInsurer, setPrimaryInsurer] = useState(patient?patient.primaryInsurer:'')
  const [primaryInsurancePolicy, setPrimaryInsurancePolicy] = useState(patient?patient.primaryInsurancePolicy:'')
  const [primaryInsuranceNumber, setPrimaryInsuranceNumber] = useState(patient?patient.primaryInsuranceNumber:'')
  const [hearAboutUs, setHearAboutUs] = useState(patient?patient.hearAboutUs:'')
  const [creditLimit, setCreditLimit] = useState(patient?patient.creditLimit:'')
  const [discountForPatient, setDiscountForPatient] = useState(patient?patient.discountForPatient:'')
  const [openingBalance, setOpeningBalance] = useState(patient?patient.openingBalance:'')
  const [patientsMarketer, setPatientsMarketer] = useState(patient?patient.patientsMarketer:'')
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleFormClose = () => {
    handleClose()
  };

  const updatePatient=(e)=>{
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
    props.updatePatient(patient._id, newPatient)
    props.getPatients();
    handleFormClose();
  }

  return (
    <form onSubmit={e => {updatePatient(e)}} style={{margin:'20px'}}>
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
                value={patientNo}
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
                value={title}
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
                onChange={e=>setOtherName(e.target.value)}
                margin="dense"
                id="phone1"
                label="Other Name"
                type="text"
                value={otherName}
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
                    value={gender}
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
                value={dateOfBirth}
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
                value={mobileNumber1}
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
                value={mobileNumber2}
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
                value={email}
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
                value={email1}
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
                value={address}
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
                value={locationofAddress}
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
                value={nationality}
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
                value={stateofOrigin}
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
                value={religion}
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
                value={primaryInsurer}
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
                value={primaryInsurancePolicy}
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
                value={primaryInsuranceNumber}
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
                value={hearAboutUs}
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
                value={creditLimit}
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
                value={discountForPatient}
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
                value={openingBalance}
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
                value={patientsMarketer}
                fullWidth
                />
            </div>
        </div>
        <DialogActions>
            <Button onClick={handleClose} color="primary">Cancel </Button>
            <Button size="small"  variant="contained" type="submit" >Update</Button>
        </DialogActions>
    </form>
  );
}
UpdateForm.propTypes={
    updatePatient:PropTypes.func.isRequired,
    getPatients:PropTypes.func.isRequired
}
const mapStateToProps=(state)=>({

})
export default connect(mapStateToProps, { updatePatient, getPatients  })(UpdateForm)