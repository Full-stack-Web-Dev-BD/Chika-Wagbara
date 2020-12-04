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
import { addReferringCenter } from '../../../actions/referringCenterAction'

const ReferringCenterCreateModal=(props)=> {
  const { setReferralCenterEmail }=props
  const [nameofReferralCenter, setNameofReferralCenter] = useState('')
  const [categoryofReferralCenter, setCategoryofReferralCenter] = useState('')
  const [primarySpecilityofCenter, setPrimarySpecilityofCenter] = useState('')
  const [phone1, setPhone1] = useState('')
  const [phone2, setPhone2] = useState('')
  const [centerEmail, setCenterEmail] = useState('')
  const [user_role, setUserRole] = useState('')
  const [nameofDirector, setNameofDirector] = useState('')
  const [phoneNoofDirector, setPhoneNoofDirector] = useState('')
  const [emailAddressofDirector, setEmailAddressofDirector] = useState('')
  const [primaryContactPerson, setPrimaryContactPerson] = useState('')
  const [primaryContactPersonEmail, setPrimaryContactPersonEmail] = useState('')
  const [primaryContactPersonPhone, setPrimaryContactPersonPhone] = useState('')
  const [centerAddress, setCenterAddress] = useState('')
  const [centerLocation, setCenterLocation] = useState('')
  const [discountofCenterPatient, setDiscountofCenterPatient] = useState('')
  const [password, setPassword] = useState('')
  const [creditLimit, setCreditLimit] = useState('')
  const [cutofReferringCenter, setCutofReferringCenter] = useState('')
  const [referringCenterOpeningBalance, setReferringCenterOpeningBalance] = useState('')
  const [referringCenterRevenueTarget, setReferringCenterRevenueTarget] = useState('')
  const [referringCenterMarketer, setReferringCenterMarketer] = useState('')
  const [open, setOpen] = React.useState(false);
  
  const CreateReferringCenter=(e)=>{
    e.preventDefault()
    const newReferringCenter={
      nameofReferralCenter:nameofReferralCenter,
      categoryofReferralCenter:categoryofReferralCenter,
      primarySpecilityofCenter:primarySpecilityofCenter,
      phone1:phone1,
      phone2:phone2,
      centerEmail:centerEmail,
      user_role:user_role,
      nameofDirector:nameofDirector,
      phoneNoofDirector:phoneNoofDirector,
      emailAddressofDirector:emailAddressofDirector,
      primaryContactPerson:primaryContactPerson,
      primaryContactPersonEmail:primaryContactPersonEmail,
      primaryContactPersonPhone:primaryContactPersonPhone,
      centerAddress:centerAddress,
      centerLocation:centerLocation,
      discountofCenterPatient:discountofCenterPatient,
      password:password,
      creditLimit:creditLimit,
      cutofReferringCenter:cutofReferringCenter,
      referringCenterOpeningBalance:referringCenterOpeningBalance,
      referringCenterRevenueTarget:referringCenterRevenueTarget,
      referringCenterMarketer:referringCenterMarketer
    }
    props.addReferringCenter(newReferringCenter)
    setReferralCenterEmail(centerEmail);
    handleClose();
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
       <AddCircle/>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Referral Center</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden',lineHeight:'0' }}>
              Please  enter required all filed to create a Branch Please  enter required all
            </p>
          </DialogContentText>
          <form>
            <div className="row">
              <div className="col-md-6">
                <TextField
                  onChange={e=>setNameofReferralCenter(e.target.value)}
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  label="Name of Referral Center"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setCategoryofReferralCenter(e.target.value)}
                  required
                  margin="dense"
                  id="name"
                  label="Category of Referral Center"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setPrimarySpecilityofCenter(e.target.value)}
                  required
                  margin="dense"
                  id="location"
                  label="Primary Speciality of Center"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setPhone1(e.target.value)}
                  required
                  margin="dense"
                  id="address"
                  label="Phone 1"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setPhone2(e.target.value)}
                  margin="dense"
                  id="phone1"
                  label="Phone 2"
                  type="text"
                  fullWidth
                />
              </div>
              
              <div className="col-md-6">
                <TextField
                  onChange={e=>setCenterEmail(e.target.value)}
                  required
                  margin="dense"
                  id="phone1"
                  label="Center Email"
                  type="email"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setUserRole(e.target.value)}
                  required
                  margin="dense"
                  id="email"
                  label="User Role"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setNameofDirector(e.target.value)}
                  margin="dense"
                  id="email"
                  label="Name of Director"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setPhoneNoofDirector(e.target.value)}
                  required
                  margin="dense"
                  id="email"
                  label="Phone No of Director"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setEmailAddressofDirector(e.target.value)}
                  margin="dense"
                  id="email"
                  label="Email Address of Director"
                  type="email"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setPrimaryContactPerson(e.target.value)}
                  margin="dense"
                  id="email"
                  label="Primary Contact Person"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setPrimaryContactPersonEmail(e.target.value)}
                  margin="dense"
                  id="email"
                  label="Primary Contact Person Email"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setPrimaryContactPersonPhone(e.target.value)}
                  margin="dense"
                  id="email"
                  label="Primary Contact Person Phone"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setCenterAddress(e.target.value)}
                  margin="dense"
                  id="email"
                  label="Center Address"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setCenterLocation(e.target.value)}
                  margin="dense"
                  id="email"
                  label="Center Location"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setDiscountofCenterPatient(e.target.value)}
                  margin="dense"
                  id="email"
                  label="Discount of Center Patient"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setPassword(e.target.value)}
                  margin="dense"
                  id="email"
                  label="Password"
                  type="password"
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
                  onChange={e=>setCutofReferringCenter(e.target.value)}
                  margin="dense"
                  id="email"
                  label="Cut of Referring Center"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setReferringCenterOpeningBalance(e.target.value)}
                  margin="dense"
                  id="email"
                  label="Referring Center Opening Balance"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setReferringCenterRevenueTarget(e.target.value)}
                  margin="dense"
                  id="email"
                  label="Referring Center Revenue Target"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setReferringCenterMarketer(e.target.value)}
                  margin="dense"
                  id="email"
                  label="Referring Center Marketer"
                  type="text"
                  fullWidth
                />
              </div>
            </div>
            <DialogActions>
              <Button onClick={handleClose} color="primary">Cancel </Button>
              <Button size="small"  variant="contained" onClick={(e)=>CreateReferringCenter(e)} >Create</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

ReferringCenterCreateModal.propTypes = {
  addReferringCenter:PropTypes.func.isRequired,
  className: PropTypes.string,
};
const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps, { addReferringCenter })(ReferringCenterCreateModal)