import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

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

export default function StaffCreateModal() {
  const [staffNo,setstaffNo]=useState('')
  const [title,settitle]=useState('')
  const [firstName,setfirstName]=useState('')
  const [lastName,setlastName]=useState('')
  const [otherName,setotherName]=useState('')
  const [gender,setgender]=useState('')
  const [dateOfBirth,setdateOfBirth]=useState('')
  const [age,setage]=useState('')
  const [maritialStatus,setmaritialStatus]=useState('')
  const [mobileNumber1,setmobileNumber1]=useState('')
  const [mobileNumber2,setmobileNumber2]=useState('')
  const [email1,setemail1]=useState('')
  const [email2,setemail2]=useState('')
  const [jobTitle,setjobTitle]=useState('')
  const [department,setdepartment]=useState('')
  const [level,setlevel]=useState('')
  const [salaryBand,setsalaryBand]=useState('')
  const [manager,setmanager]=useState('')
  const [primaryJobLocation,setprimaryJobLocation]=useState('')
  const [address,setaddress]=useState('')
  const [locationofAddress,setlocationofAddress]=useState('')
  const [nationality,setnationality]=useState('')
  const [stateofOrigin,setstateofOrigin]=useState('')
  const [lga,setlga]=useState('')
  const [religion,setreligion]=useState('')
  const [primaryInsurer,setprimaryInsurer]=useState('')
  const [emergencyContactName,setemergencyContactName]=useState('')
  const [emergencyContactEmail,setemergencyContactEmail]=useState('')
  const [emergencyContactPhone,setemergencyContactPhone]=useState('')
  const [nextofKinName,setnextofKinName]=useState('')
  const [nextofKinContactEmail,setnextofKinContactEmail]=useState('')
  const [nextofKinContactPhone,setnextofKinContactPhone]=useState('')
  const [nextofKinContactAddress,setnextofKinContactAddress]=useState('')
  const [dateofEmployment,setdateofEmployment]=useState('')
  const [bankName,setbankName]=useState('')
  const [bankAccountNumber,setbankAccountNumber]=useState('')
  const [digitalSignature,setdigitalSignature]=useState('')
  const [date,setdate]=useState('')
  
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <Button variant="contained" className="mr4" size="small" color="primary"  onClick={handleClickOpen}>Add Staff</Button>
      <Dialog
        fullWidth={true}
        maxWidth='lg'
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Add Staff</DialogTitle>
        <DialogContent>
          <form>
            <div className="row">
              <div className="col-md-4">
                <TextField
                  onChange={e => { setstaffNo(e.target.value) }}
                  required
                  margin="dense"
                  id="staffNo"
                  label="staffNo"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { settitle(e.target.value) }}
                  required
                  margin="dense"
                  id="title"
                  label="title"
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
                  label="firstName"
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
                  label="lastName"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setotherName(e.target.value) }}
                  required
                  margin="dense"
                  id="otherName"
                  label="otherName"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setgender(e.target.value) }}
                  required
                  margin="dense"
                  id="gender"
                  label="gender"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setdateOfBirth(e.target.value) }}
                  required
                  margin="dense"
                  id="dateOfBirth"
                  label="dateOfBirth"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setage(e.target.value) }}
                  required
                  margin="dense"
                  id="age"
                  label="age"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setmaritialStatus(e.target.value) }}
                  required
                  margin="dense"
                  id="maritialStatus"
                  label="maritialStatus"
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
                  label="mobileNumber1"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setmobileNumber2(e.target.value) }}
                  required
                  margin="dense"
                  id="mobileNumber2"
                  label="mobileNumber2"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setemail1(e.target.value) }}
                  required
                  margin="dense"
                  id="email1"
                  label="email1"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setemail2(e.target.value) }}
                  required
                  margin="dense"
                  id="email2"
                  label="email2"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setjobTitle(e.target.value) }}
                  required
                  margin="dense"
                  id="jobTitle"
                  label="jobTitle"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setdepartment(e.target.value) }}
                  required
                  margin="dense"
                  id="department"
                  label="department"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setlevel(e.target.value) }}
                  required
                  margin="dense"
                  id="level"
                  label="level"
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
                  label="manager"
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
                  label="primaryJobLocation"
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
                  label="address"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setlocationofAddress(e.target.value) }}
                  required
                  margin="dense"
                  id="locationofAddress"
                  label="locationofAddress"
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
                  label="nationality"
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
                  label="stateofOrigin"
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
                  label="lga"
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
                  label="religion"
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
                  label="primaryInsurer"
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
                  label="emergencyContactName"
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
                  label="emergencyContactEmail"
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
                  label="emergencyContactPhone"
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
                  label="nextofKinName"
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
                  label="nextofKinContactEmail"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setnextofKinContactPhone(e.target.value) }}
                  required
                  margin="dense"
                  id="nextofKinContactPhone"
                  label="nextofKinContactPhone"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setnextofKinContactAddress(e.target.value) }}
                  required
                  margin="dense"
                  id="nextofKinContactAddress"
                  label="nextofKinContactAddress"
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
                  label="dateofEmployment"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setbankName(e.target.value) }}
                  required
                  margin="dense"
                  id="bankName"
                  label="bankName"
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
                  label="bankAccountNumber"
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
                  label="digitalSignature"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => { setdate(e.target.value) }}
                  required
                  margin="dense"
                  id="date"
                  label="date"
                  type="text"
                  fullWidth
                />

              </div>

            </div>
            <DialogActions>
          <Button onClick={handleClose} color="primary" size="small" variant="contained" >Cancel</Button>
          <Button onClick={e=>{}} color="primary" size="small" variant="contained" type="submit" >Submit</Button>
        </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
