import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { updateReferringCenter, getReferringCenters } from '../../../actions/referringCenterAction'

const UpdateForm=(props)=> {
  const { referringCenter, handleClose }=props
  const [nameofReferralCenter, setNameofReferralCenter] = useState(referringCenter?referringCenter.nameofReferralCenter:'')
  const [categoryofReferralCenter, setCategoryofReferralCenter] = useState(referringCenter?referringCenter.categoryofReferralCenter:'')
  const [primarySpecilityofCenter, setPrimarySpecilityofCenter] = useState(referringCenter?referringCenter.primarySpecilityofCenter:'')
  const [phone1, setPhone1] = useState(referringCenter?referringCenter.phone1:'')
  const [phone2, setPhone2] = useState(referringCenter?referringCenter.phone2:'')
  const [centerEmail, setCenterEmail] = useState(referringCenter?referringCenter.centerEmail:'')
  const [user_role, setUserRole] = useState(referringCenter?referringCenter.user_role:'')
  const [nameofDirector, setNameofDirector] = useState(referringCenter?referringCenter.nameofDirector:'')
  const [phoneNoofDirector, setPhoneNoofDirector] = useState(referringCenter?referringCenter.phoneNoofDirector:'')
  const [emailAddressofDirector, setEmailAddressofDirector] = useState(referringCenter?referringCenter.emailAddressofDirector:'')
  const [primaryContactPerson, setPrimaryContactPerson] = useState(referringCenter?referringCenter.primaryContactPerson:'')
  const [primaryContactPersonEmail, setPrimaryContactPersonEmail] = useState(referringCenter?referringCenter.primaryContactPersonEmail:'')
  const [primaryContactPersonPhone, setPrimaryContactPersonPhone] = useState(referringCenter?referringCenter.primaryContactPersonPhone:'')
  const [centerAddress, setCenterAddress] = useState(referringCenter?referringCenter.centerAddress:'')
  const [centerLocation, setCenterLocation] = useState(referringCenter?referringCenter.centerLocation:'')
  const [discountofCenterPatient, setDiscountofCenterPatient] = useState(referringCenter?referringCenter.discountofCenterPatient:'')
  const [password, setPassword] = useState(referringCenter?referringCenter:'')
  const [creditLimit, setCreditLimit] = useState(referringCenter?referringCenter.creditLimit:'')
  const [cutofReferringCenter, setCutofReferringCenter] = useState(referringCenter?referringCenter.cutofReferringCenter:'')
  const [referringCenterOpeningBalance, setReferringCenterOpeningBalance] = useState(referringCenter?referringCenter.referringCenterOpeningBalance:'')
  const [referringCenterRevenueTarget, setReferringCenterRevenueTarget] = useState(referringCenter?referringCenter.referringCenterRevenueTarget:'')
  const [referringCenterMarketer, setReferringCenterMarketer] = useState(referringCenter?referringCenter.referringCenterMarketer:'')
  const [open, setOpen] = React.useState(false);  
  
  const updateReferringCenter=(event)=>{
    event.preventDefault()
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
    props.updateReferringCenter(referringCenter._id, newReferringCenter);
    props.getReferringCenters();
    handleFormClose();
  }

  const handleFormClose = () => {
    handleClose()
  };

  return (
    <form onSubmit={e=>updateReferringCenter(e)}>
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
          value={nameofReferralCenter}
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
          value={categoryofReferralCenter}
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
          value={primarySpecilityofCenter}
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
          value={phone1}
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
          value={phone2}
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
          value={centerEmail}
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
          value={user_role}
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
          value={nameofDirector}
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
          value={phoneNoofDirector}
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
          value={emailAddressofDirector}
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
          value={primaryContactPerson}
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
          value={primaryContactPersonEmail}
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
          value={primaryContactPersonPhone}
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
          value={centerAddress}
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
          value={centerLocation}
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
          value={discountofCenterPatient}
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
          value={password}
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
          onChange={e=>setCutofReferringCenter(e.target.value)}
          margin="dense"
          id="email"
          label="Cut of Referring Center"
          type="text"
          value={cutofReferringCenter}
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
          value={referringCenterOpeningBalance}
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
          value={referringCenterRevenueTarget}
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
          value={referringCenterMarketer}
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
  updateReferringCenter:PropTypes.func.isRequired,
  getReferringCenters:PropTypes.func.isRequired,
  className: PropTypes.string,
};
const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps, { updateReferringCenter, getReferringCenters })(UpdateForm)