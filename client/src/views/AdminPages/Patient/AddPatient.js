import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from 'axios'
import uID from 'src/utils/uIDGenerator12Digite';
import { AddCircle } from '@material-ui/icons';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPatient } from '../../../actions/patientAction'

const AddPatient=(props)=> {
  const [patientNo, setPatientNo] = useState('')
  const [title, setTitle] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [otherName, setOtherName] = useState('')
  const [gender, setGender] = useState('')
  const [dateOfBirth, setDateofBirth] = useState('')
  const [age, setAge] = useState('')
  const [mobileNumber1, setMobileNumber1] = useState('')
  const [mobileNumber2, setMobileNumber2] = useState('')
  const [email1, setEmail1] = useState('')
  const [email2, setEmail2] = useState('')
  const [address, setAddress] = useState('')
  const [locationofAddress, setLocationofAddress] = useState('')
  const [natgionality, setNationality] = useState('')
  const [stateofOrigin, setLocationofAddress] = useState('')
  const [religion, setReligion] = useState('')
  const [primaryInsurer, setPrimaryInsurer] = useState('')
  const [primaryInsurancePolicy, setPrimaryInsurancePolicy] = useState('')
  const [primaryInsuranceNumber, setPrimaryInsuranceNumber] = useState('')
  const [hearAboutUs, setHearAboutUs] = useState('')
  const [creditLimit, setCreditLimit] = useState('')
  const [discountForPatient, setDiscountForPatient] = useState('')
  const [openingBalance, setOpeningBalance] = useState('')
  const [patientsMarketer, setPatientsMarketer] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    props.getStates();
  }, [])
  // Create Branch
  // const createBranch = (branchInfo) => {
  //   axios
  //     .get(`/api/branchs/newBranch`, branchInfo)
  //     .then(res => {
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  const createBranch=(event)=>{
    event.preventDefault()
    Axios.post('/api/branchs/newBranch',{
      name:name,
      location:location,
      city:city,
      address:address,
      state:state,
      phone1:phone1,
      phone2:phone2,
      email:email,
      branchId:uID
    })
    .then(res=>{
      handleClose()
      getAllBranch()
    })
    .catch(err=>{
      console.log(err);
    })
  }
  
  useEffect(()=>{
    states.map(data=>{
      if(data.name==state){
        setCities(data.cities)
      }
    })
  }, [state])

  return (
    <div className="d-inline ml-auto">
      <form onSubmit={e => {createBranch(e)}}>
            <div className="row">
              <div className="col-md-6">
                <TextField
                  onChange={e=>setName(e.target.value)}
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setLocation(e.target.value)}
                  required
                  margin="dense"
                  id="location"
                  label="Location"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setAddress(e.target.value)}
                  required
                  margin="dense"
                  id="address"
                  label="Address"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
              <TextField
                  onChange={e => { setState(e.target.value) }}
                  margin="dense"
                  id="selectLocationType"
                  label="Select State"
                  select
                  SelectProps={{
                    native: true,
                  }}
                  fullWidth
                  required
                >
                  <option >Select State</option>
                  { states?
                    states.map(el => (
                      <option value={el.name} > {el.name} </option>
                    )):''
                  }
                </TextField>
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e => { setCity(e.target.value) }}
                  margin="dense"
                  id="selectLocationType"
                  label="Select City"
                  select
                  SelectProps={{
                    native: true,
                  }}
                  fullWidth
                  required
                >
                  <option >Select City</option>
                  { states?
                    cities.map(el => (
                      <option value={el.name} > {el.name} </option>
                    )):''
                  }
                </TextField>
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setPhone1(e.target.value)}
                  required
                  margin="dense"
                  id="phone1"
                  label="Phoone 1"
                  type="number"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setPhone2(e.target.value)}
                  required
                  margin="dense"
                  id="phone2"
                  label="Phone 1"
                  type="number"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e=>setEmail(e.target.value)}
                  required
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                />
              </div>
            </div>
            <DialogActions>
              <Button onClick={handleClose} color="primary">Cancel </Button>
              <Button size="small"  variant="contained"  type="submit" >Create</Button>
            </DialogActions>
          </form>
    </div>
  );
}

AddPatient.propTypes = {
  getStates:PropTypes.func.isRequired,
  className: PropTypes.string,
  states: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  states: state.state.states
})
export default connect(mapStateToProps, { getStates })(AddPatient)