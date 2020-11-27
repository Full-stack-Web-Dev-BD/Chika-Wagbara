import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import { Edit, StreetviewOutlined } from '@material-ui/icons';
import uID from 'src/utils/uIDGenerator12Digite';
import { getAge } from 'src/utils/AgeCalculator';
import Axios from 'axios';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getDepartments } from '../../../actions/departmentAction'

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const UpdateStaff=(props)=> {
  
  const { departments, staff,getAllStaff }=props
  const [title, settitle] = useState(staff.title)
  const [firstName, setfirstName] = useState(staff.firstName)
  const [lastName, setlastName] = useState(staff.lastName)
  const [otherName, setotherName] = useState(staff.otherName)
  const [gender, setgender] = useState(staff.gender)
  const [dateOfBirth, setdateOfBirth] = useState(staff.dateOfBirth)
  const [maritialStatus, setmaritialStatus] = useState(staff.maritialStatus)
  const [mobileNumber1, setmobileNumber1] = useState(staff.mobileNumber1)
  const [mobileNumber2, setmobileNumber2] = useState(staff.mobileNumber2)
  const [email1, setemail1] = useState(staff.email1)
  const [email2, setemail2] = useState(staff.email2)
  const [jobTitle, setjobTitle] = useState(staff.jobTitle)
  const [department, setdepartment] = useState(staff.department)
  const [level, setlevel] = useState(staff.level)
  const [salaryBand, setsalaryBand] = useState(staff.salaryBand)
  const [manager, setmanager] = useState(staff.manager)
  const [primaryJobLocation, setprimaryJobLocation] = useState(staff.primaryJobLocation)
  const [address, setaddress] = useState(staff.address)
  const [locationofAddress, setlocationofAddress] = useState(staff.locationofAddress)
  const [nationality, setnationality] = useState(staff.nationality)
  const [stateofOrigin, setstateofOrigin] = useState(staff.stateofOrigin)
  const [lga, setlga] = useState(staff.lga)
  const [religion, setreligion] = useState(staff.religion)
  const [primaryInsurer, setprimaryInsurer] = useState(staff.primaryInsurer)
  const [emergencyContactName, setemergencyContactName] = useState(staff.emergencyContactName)
  const [emergencyContactEmail, setemergencyContactEmail] = useState(staff.emergencyContactEmail)
  const [emergencyContactPhone, setemergencyContactPhone] = useState(staff.emergencyContactPhone)
  const [nextofKinName, setnextofKinName] = useState(staff.nextofKinName)
  const [nextofKinContactEmail, setnextofKinContactEmail] = useState(staff.nextofKinContactEmail)
  const [nextofKinContactPhone, setnextofKinContactPhone] = useState(staff.nextofKinContactPhone)
  const [nextofKinContactAddress, setnextofKinContactAddress] = useState(staff.nextofKinContactAddress)
  const [dateofEmployment, setdateofEmployment] = useState(staff.dateofEmployment)
  const [bankName, setbankName] = useState(staff.bankName)
  const [bankAccountNumber, setbankAccountNumber] = useState(staff.bankAccountNumber)
  const [digitalSignature, setdigitalSignature] = useState(staff.digitalSignature)


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submitHandler = (e) => {
    e.preventDefault()

    const staffNo = uID
    const age = getAge(dateOfBirth)
    let staffInfo = {
      staffNo:staffNo,
      age:age,
      title,
      firstName,
      lastName,
      otherName,
      gender,
      dateOfBirth,
      maritialStatus,
      mobileNumber1,
      mobileNumber2,
      email1,
      email2,
      jobTitle,
      department,
      level,
      salaryBand,
      manager,
      primaryJobLocation,
      address,
      locationofAddress,
      nationality,
      stateofOrigin,
      lga,
      religion,
      primaryInsurer,
      emergencyContactName,
      emergencyContactEmail,
      emergencyContactPhone,
      nextofKinName,
      nextofKinContactEmail,
      nextofKinContactPhone,
      nextofKinContactAddress,
      dateofEmployment,
      bankName,
      bankAccountNumber,
      digitalSignature,
    }
    Axios.post(`/api/staffs/update/${staff._id}`,staffInfo)
    .then(res=>{
      handleClose()
      getAllStaff()
    })
    .catch(err=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    props.getDepartments()
  }, [])

  return (
    <React.Fragment>
      <span  title="View Full Details" style={{cursor:"pointer"}} onClick={handleClickOpen}><Edit/> </span>
      <Dialog
        fullWidth={true}
        maxWidth='lg'
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Update Staff</DialogTitle>
        <DialogContent>
          <form onSubmit={e=>submitHandler(e)}>
            <div className="row">
              <div className="col-md-4">
                <TextField
                  autoFocus
                  onChange={e => { settitle(e.target.value) }}
                  required
                  margin="dense"
                  id="title"
                  value={title}
                  label="Title"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setfirstName(e.target.value) }}
                  required
                  margin="dense"
                  id="firstName"
                  value={firstName}
                  label="First Name"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setlastName(e.target.value) }}
                  required
                  margin="dense"
                  id="lastName"
                  value={lastName}
                  label="Last Name"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  required
                  onChange={e => { setotherName(e.target.value) }}
                  margin="dense"
                  id="otherName"
                  value={otherName}
                  label="Other Name"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setgender(e.target.value) }}
                  margin="dense"
                  id="gender"
                  value={gender}
                  label="Gender"
                  type="text"
                  fullWidth
                  select
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option >Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </TextField>
                {/* <TextField
                  onChange={e => { setgender(e.target.value) }}
                  margin="dense"
                  id="gender"
                  value={gender}
                  label="Gender"
                  type="text"
                  fullWidth
                /> */}

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setdateOfBirth(e.target.value) }}
                  required
                  margin="dense"
                  id="dateOfBirth"
                  value={dateOfBirth}
                  label="Date Of Birth"
                  type="date"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setmaritialStatus(e.target.value) }}
                  margin="dense"
                  id="maritialStatus"
                  value={maritialStatus}
                  label="Maritial Status"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setmobileNumber1(e.target.value) }}
                  required
                  margin="dense"
                  id="mobileNumber1"
                  value={mobileNumber1}
                  label="Mobile Number 1"
                  type="number"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setmobileNumber2(e.target.value) }}
                  required
                  margin="dense"
                  id="mobileNumber2"
                  value={mobileNumber2}
                  label="Mobile Number 2"
                  type="number"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setemail1(e.target.value) }}
                  required
                  margin="dense"
                  id="email1"
                  value={email1}
                  label="Email 1"
                  type="email"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setemail2(e.target.value) }}
                  required
                  margin="dense"
                  id="email2"
                  value={email2}
                  label="Email 2"
                  type="email"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setjobTitle(e.target.value) }}
                  margin="dense"
                  id="jobTitle"
                  value={jobTitle}
                  label="Job Title"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setdepartment(e.target.value) }}
                  margin="dense"
                  id="selectLocationType"
                  label="Select Department"
                  value={department}
                  select
                  SelectProps={{
                    native: true,
                  }}
                  fullWidth
                  required
                >
                  <option >Select Department</option>
                  { departments?
                    departments.map(el => (
                      <option value={el.name} > {el.name} </option>
                    )):''
                  }
                </TextField>

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setlevel(e.target.value) }}
                  required
                  margin="dense"
                  id="level"
                  value={level}
                  label="Level"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setsalaryBand(e.target.value) }}
                  required
                  margin="dense"
                  id="salaryBand"
                  value={salaryBand}
                  label="salaryBand"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setmanager(e.target.value) }}
                  required
                  margin="dense"
                  id="manager"
                  value={manager}
                  label="Manager"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setprimaryJobLocation(e.target.value) }}
                  required
                  margin="dense"
                  id="primaryJobLocation"
                  value={primaryJobLocation}
                  label="Primary Job Location"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setaddress(e.target.value) }}
                  required
                  margin="dense"
                  id="address"
                  value={address}
                  label="Address"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setlocationofAddress(e.target.value) }}
                  margin="dense"
                  id="locationofAddress"
                  value={locationofAddress}
                  label="Location of Address"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setnationality(e.target.value) }}
                  required
                  margin="dense"
                  id="nationality"
                  value={nationality}
                  label="Nationality"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setstateofOrigin(e.target.value) }}
                  required
                  margin="dense"
                  id="stateofOrigin"
                  value={stateofOrigin}
                  label="State of Origin"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setlga(e.target.value) }}
                  required
                  margin="dense"
                  id="lga"
                  value={lga}
                  label="LGA"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setreligion(e.target.value) }}
                  required
                  margin="dense"
                  id="religion"
                  value={religion}
                  label="Religion"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setprimaryInsurer(e.target.value) }}
                  required
                  margin="dense"
                  id="primaryInsurer"
                  value={primaryInsurer}
                  label="Primary Insurer"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setemergencyContactName(e.target.value) }}
                  required
                  margin="dense"
                  id="emergencyContactName"
                  value={emergencyContactName}
                  label="Emergency Contact Name"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setemergencyContactEmail(e.target.value) }}
                  required
                  margin="dense"
                  id="emergencyContactEmail"
                  value={emergencyContactEmail}
                  label="Emergency Contact Email"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setemergencyContactPhone(e.target.value) }}
                  required
                  margin="dense"
                  id="emergencyContactPhone"
                  value={emergencyContactPhone}
                  label="Emergency Contact Phone"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setnextofKinName(e.target.value) }}
                  required
                  margin="dense"
                  id="nextofKinName"
                  value={nextofKinName}
                  label="Next of Kin Name"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setnextofKinContactEmail(e.target.value) }}
                  required
                  margin="dense"
                  id="nextofKinContactEmail"
                  value={nextofKinContactEmail}
                  label="Next of Kin Contact Email"
                  type="email"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setnextofKinContactPhone(e.target.value) }}
                  required
                  margin="dense"
                  id="nextofKinContactPhone"
                  value={nextofKinContactPhone}
                  label="Next of Kin Contact Phone"
                  type="number"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setnextofKinContactAddress(e.target.value) }}
                  required
                  margin="dense"
                  id="nextofKinContactAddress"
                  value={nextofKinContactAddress}
                  label=" Next of Kin Contact Address"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setdateofEmployment(e.target.value) }}
                  required
                  margin="dense"
                  id="dateofEmployment"
                  value={dateofEmployment}
                  label="Date of Employment"
                  type="Date"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setbankName(e.target.value) }}
                  required
                  margin="dense"
                  id="bankName"
                  value={bankName}
                  label="Bank Name"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setbankAccountNumber(e.target.value) }}
                  required
                  margin="dense"
                  id="bankAccountNumber"
                  value={bankAccountNumber}
                  label="Bank Account Number"
                  type="text"
                  fullWidth
                />
              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setdigitalSignature(e.target.value) }}
                  required
                  margin="dense"
                  id="digitalSignature"
                  value={digitalSignature}
                  label="Digital Signature"
                  type="text"
                  fullWidth
                />

              </div>

            </div>
            
            <DialogActions>
              <Button onClick={handleClose} color="primary" size="small" variant="contained" >Cancel</Button>
              <Button onClick={e => { }} color="primary" size="small" variant="contained" type="submit" >Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
UpdateStaff.propTypes={
  getDepartments:PropTypes.func.isRequired,
  departments:PropTypes.array.isRequired
}
const mapStateToProps=(state)=>({
  departments:state.department.departments
})
export default connect(mapStateToProps, { getDepartments })(UpdateStaff)