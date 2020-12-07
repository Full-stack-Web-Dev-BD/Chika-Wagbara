import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DialogActions from '@material-ui/core/DialogActions';
import { AddCircle, Search } from '@material-ui/icons';
import PageviewIcon from '@material-ui/icons/Pageview';
import PropTypes from 'prop-types'
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
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
import { addPatient, getPatients } from '../../../actions/patientAction'
import { getGuardian, getGuardians } from '../../../actions/guardianAction'
import { getReferringPerson, getReferringPersons } from '../../../actions/referringPersonAction'
import { getReferringCenter, getReferringCenters } from '../../../actions/referringCenterAction'
import { getAge } from '../../../utils/AgeCalculator'


const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));
const AddPatient=(props)=> {
  const classes = useStyles();
  const { patients, guardians, guardian, referringPersons, referringPerson, referringCenters, referringCenter, className, ...rest }=props
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
  const [guardianName, setGuardianName] = useState('')
  const [referringPersonName, setReferringPersonName] = useState('')
  const [referringCenterName, setReferringCenterName] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchTermData, setSearchTermData] = useState([])
  const [open, setOpen] = useState(false);
  const [testForm, setTestForm] = useState(false);
  const [patientData, setPatientData] = useState({})
  const [testName, setTestName] = useState('')
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [testData, setTestData] = useState([])
  const [guardianEmail, setGuardianEmail] = useState('')
  const [referralPersonEmail, setReferralPersonEmail] = useState('')
  const [referralCenterEmail, setReferralCenterEmail] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const show=()=>{
    setOpen(!open)
  }


  useEffect(()=>{
    let patientSearch = () => patients.filter(data => Object.values(data).filter(v => v.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase()) !== -1).length > 0);
    setSearchTermData(patientSearch())
  }, [searchTerm])
  
  useEffect(()=>{
    props.getPatients();
  }, [])
  
  useEffect(()=>{
    props.getGuardian(guardianEmail);
    props.getGuardians();
  }, [guardianEmail])

  useEffect(()=>{
    props.getReferringPerson(referralPersonEmail);
    props.getReferringPersons();
  }, [referralPersonEmail])
  
  useEffect(()=>{
    props.getReferringCenter(referralCenterEmail);
    props.getReferringCenters();
  }, [referralCenterEmail])
  
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
      guardian:guardian._id
    }
    setPatientData(newPatient)
    setTestForm(!testForm)
  }

  const addTest=(e)=>{
    e.preventDefault();
    const newTest={
      testName:testName,
      price:price,
      discount:discount
    }
    setTestData([...testData, newTest]);
    setTestName('');
    setPrice('');
    setDiscount('');
  }

  const handleSubmit=()=>{
    patientData.tests=testData
    props.addPatient(patientData)
  }

  return (
    <div className="d-inline ml-auto">
      <div style={{margin:'20px', width:'500px'}}>
        Search Patient <PageviewIcon  onClick={()=> show()} style={{cursor:'pointer'}}/>
        {
          open?
          <div>
            <TextField
              onChange={e=>setSearchTerm(e.target.value)}
              autoFocus
              margin="dense"
              placeholder="Search by Any Key"
              type="text"
              fullWidth
            />
            <List component="nav" aria-label="main mailbox folders">
              <ListItem
                button
                onClick={()=> show()}
              >
                {
                  searchTermData?
                  searchTermData.map(data=>(
                    <div>
                    <ListItemText>
                      Name: {data.firstName} {data.lastName}
                    </ListItemText>
                    <ListItemText>
                      Title: {data.title}
                    </ListItemText>
                    <ListItemText>
                    Email: {data.email}
                  </ListItemText>
                  </div>
                  )):''
                }
              </ListItem>
            </List>  
            </div>
          :''
        }
      </div>
      {open==false?
      <div>
        {testForm==false?
        <form onSubmit={e => {addPatient(e)}} style={{margin:'20px'}}>
          <div className="row">
            <div className="col-md-3">
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
            <div className="col-md-3">
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
            <div className="col-md-3">
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
            <div className="col-md-3">
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
            <div className="col-md-3">
              <TextField
                onChange={e=>setOtherName(e.target.value)}
                margin="dense"
                id="phone1"
                label="Other Name"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-3">
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
            <div className="col-md-3">
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
            <div className="col-md-3">
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
            <div className="col-md-3">
              <TextField
                onChange={e=>setMobileNumber2(e.target.value)}
                margin="dense"
                id="email"
                label="Mobile Number2"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-3">
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
            <div className="col-md-3">
              <TextField
                onChange={e=>setEmail1(e.target.value)}
                margin="dense"
                id="email"
                label="Email 2"
                type="email"
                fullWidth
              />
            </div>
            <div className="col-md-3">
              <TextField
                onChange={e=>setAddress(e.target.value)}
                margin="dense"
                id="email"
                label="Address"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-3">
              <TextField
                onChange={e=>setLocationofAddress(e.target.value)}
                margin="dense"
                id="email"
                label="Location of Address"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-3">
              <TextField
                onChange={e=>setNationality(e.target.value)}
                margin="dense"
                id="email"
                label="Nationality"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-3">
              <TextField
                onChange={e=>setStateofOrigin(e.target.value)}
                margin="dense"
                id="email"
                label="State of Origin"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-3">
              <TextField
                onChange={e=>setReligion(e.target.value)}
                margin="dense"
                id="email"
                label="Religion"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-3">
              <TextField
                onChange={e=>setPrimaryInsurer(e.target.value)}
                margin="dense"
                id="email"
                label="Primary Insurer"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-3">
              <TextField
                onChange={e=>setPrimaryInsurancePolicy(e.target.value)}
                margin="dense"
                id="email"
                label="Primary Insurance Policy"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-3">
              <TextField
                onChange={e=>setPrimaryInsuranceNumber(e.target.value)}
                margin="dense"
                id="email"
                label="Primary Insurence Number"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-3">
              <TextField
                onChange={e=>setHearAboutUs(e.target.value)}
                margin="dense"
                id="email"
                label="Where Hear About Us"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-3">
              <TextField
                onChange={e=>setCreditLimit(e.target.value)}
                margin="dense"
                id="email"
                label="Credit Limit"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-3">
              <TextField
                onChange={e=>setDiscountForPatient(e.target.value)}
                margin="dense"
                id="email"
                label="Discount for Patient"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-3">
              <TextField
                onChange={e=>setOpeningBalance(e.target.value)}
                margin="dense"
                id="email"
                label="Openning Balance"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-3">
              <TextField
                onChange={e=>setPatientsMarketer(e.target.value)}
                margin="dense"
                id="email"
                label="Patients Marketer"
                type="text"
                fullWidth
              />
            </div>
            <div className="col-md-3">
            <TextField
                onChange={e=>setGuardianName(e.target.value)}
                margin="dense"
                id="email"
                label="Guardian"
                type="text"
                value={guardian? (guardian.firstName +" " +guardian.lastName):''}
                fullWidth
              />
          </div>
          <div className="col-md-3">
            <TextField
                onChange={e=>setReferringPersonName(e.target.value)}
                margin="dense"
                id="email"
                label="Referring Person"
                type="text"
                value={referringPerson?(referringPerson.firstName +" " +referringPerson.lastName):''}
                fullWidth
              />
          </div>
          <div className="col-md-3">
            <TextField
                onChange={e=>setReferringCenterName(e.target.value)}
                margin="dense"
                id="email"
                label="Referring Center"
                type="text"
                value={referringCenter?referringCenter.nameofReferralCenter:''}
                fullWidth
              />
          </div>
          </div>
          <DialogActions>
            <Button size="small"  variant="contained" type="submit" >Create</Button>
          </DialogActions>
        </form>:
        <form onSubmit={e => {addTest(e)}} style={{margin:'20px'}}>
        <div className="row">
          <div className="col-md-3">
            <TextField
              onChange={e=>setTestName(e.target.value)}
              autoFocus
              margin="dense"
              label="Test Name"
              name="testName"
              value={testName}
              type="text"
              fullWidth
            />
          </div>
          <div className="col-md-3">
            <TextField
              onChange={e=>setPrice(e.target.value)}
              margin="dense"
              label="Price"
              name="price"
              value={price}
              type="text"
              fullWidth
            />
          </div>
          <div className="col-md-3">
            <TextField
              onChange={e=>setDiscount(e.target.value)}
              margin="dense"
              label="Discount for Patient"
              name="discount"
              value={discount}
              type="text"
              fullWidth
            />
          </div>
          <div className="col-md-3">
            <Button size="small"  variant="contained" type="submit" style={{marginTop:'25px'}}>Add Test</Button>
          </div>
          <div className="col-md-3">
           
          </div>
          <div className="col-md-6">
            {testData.length?
                <div style={{marginTop:'20px'}}>
                <Card
                  className={clsx(classes.root, className)}
                  {...rest}
                >
                  <PerfectScrollbar>
                    <Box>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell >
                              Test Name
                          </TableCell>
                            <TableCell>
                              Price
                          </TableCell>
                            <TableCell>
                              Discount
                          </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {testData.map(el => (
                            <TableRow
                              hover
                            >
                              <TableCell>
                                <Box
                                  alignItems="center"
                                  display="flex"
                                >
                                  <Typography
                                    color="textPrimary"
                                    variant="body1"
                                  >
                                    {el.testName}
                                  </Typography>
                                </Box>
                              </TableCell>
                              <TableCell>
                                {el.price}
                              </TableCell>
                              <TableCell>
                                {el.discount}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </PerfectScrollbar>
                </Card>
              </div>:''
            }
          </div>
          <div className="col-md-3">
            
          </div>
          <div className="col-md-3">
           
          </div>
          <div className="col-md-6">
            <Button size="small"  variant="contained" onClick={()=> handleSubmit()} style={{marginTop:'20px'}}>Submit</Button>
          </div>
          <div className="col-md-3">
            
          </div>
        </div>
      </form>
        }
      </div>:''
      }
    </div>
  );
}
AddPatient.propTypes = {
  addPatient:PropTypes.func.isRequired,
  getPatients:PropTypes.func.isRequired,
  getGuardian:PropTypes.func.isRequired,
  getGuardians:PropTypes.func.isRequired,
  getReferringPersons:PropTypes.func.isRequired,
  getReferringPerson:PropTypes.func.isRequired,
  getReferringCenter:PropTypes.func.isRequired,
  getReferringCenters:PropTypes.func.isRequired,
  className:PropTypes.string,
  patients:PropTypes.array.isRequired,
  guardian:PropTypes.object.isRequired,
  guardians:PropTypes.array.isRequired,
  referringPerson:PropTypes.object.isRequired,
  referringPersons:PropTypes.array.isRequired,
  referringCenter:PropTypes.object.isRequired,
  referringCenters:PropTypes.array.isRequired
};
const mapStateToProps = (state) => ({
  patients:state.patient.patients,
  guardian:state.guardian.guardian,
  guardians:state.guardian.guardians,
  referringPerson:state.referringPerson.referringPerson,
  referringPersons:state.referringPerson.referringPersons,
  referringCenter:state.referringCenter.referringCenter
})
export default connect(mapStateToProps, { addPatient, getPatients, getGuardian, getGuardians, getReferringPerson, getReferringPersons, getReferringCenter, getReferringCenters })(AddPatient)