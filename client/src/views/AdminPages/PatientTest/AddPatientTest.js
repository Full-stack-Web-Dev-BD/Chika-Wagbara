import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Card,
  Table,
  TableBody,
  TableCell,
  Grid,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types'
import moment from 'moment'
import { connect } from 'react-redux'
import { getPatients } from '../../../actions/patientAction'
import { getGuardians } from '../../../actions/guardianAction'
import { getReferringPersons } from '../../../actions/referringPersonAction'
import { getReferringCenters } from '../../../actions/referringCenterAction'
import { getTests } from '../../../actions/testAction'
import { search } from '../../../utils/Search'
import AddPatient from './AddPatient'
import AddGuardian from './AddGuardian'
import AddReferringPerson from './AddReferringPerson'
import AddReferringCenter from './AddReferringCenter'
import UpdatePatient from '../Patient/UpdatePatient'
import ReferringPersonUpdateModal from '../ReferringPerson/ReferringPersonUpdateModal'
import ReferringCenterUpdateModal from '../ReferringCenter/ReferringCenterUpdateModal'
import GuardianUpdateModal from '../Guardian/GuardianUpdateModal'
import AddDiscount from './AddDiscount'
import AddAdditionalBill from './AddAdditionalBill'
import AddPayment from './AddPayment'


const useStyles = makeStyles((theme) => ({
  root: {
    margin:theme.spacing(2)  
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  TableRow:{
    height:20
  },
  TableCell:{
    height: 'auto !important'
  }
}));

const AddPatientTest=(props)=> {
  const { patients, guardians, referringPersons, referringCenters, tests, className, ...rest }=props
  const classes = useStyles();
  const [patient, setPatient] = useState({})
  const [guardian, setGuardian] = useState('')
  const [referringPerson, setReferringPerson] = useState('')
  const [referringCenter, setReferringCenter] = useState('')
  const [patientEmail, setPatientEmail] = useState('')
  const [guardianEmail, setGuardianEmail] = useState('')
  const [referringPersonEmail, setReferringPersonEmail] = useState('')
  const [referringCenterName, setReferringCenterName] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [discount, setDiscount] = useState(null)
  const [testData, setTestData] = useState([])
  const [searchData, setSearchData] = useState([])
  const [testIndex, setTestIndex] = useState('')
  const [totalBill, setTotalBill] = useState(null)
  const [paidAmount, setPaidAmount] = useState(null)
  const [remainingAmount, setRemainingAmount] = useState(null)
  const [testName, setTestName] = useState('')
  const [price, setPrice] = useState('')

  const addTest=(data)=>{
    const newTest={
      testName:data.testName,
      testPrice:parseInt(data.testPrice),
      finalPrice:parseInt(data.testPrice)
    }
    setTestData([...testData, newTest]);
    setSearchTerm('');
}

  useEffect(()=>{
    if(price){
      const newTest={
        testName:testName,
        testPrice:parseInt(price),
        finalPrice:parseInt(price)
      }
      setTestData([...testData, newTest]);
    }
  }, [price])
  
  useEffect(()=>{
    let remaining=totalBill-paidAmount
    setRemainingAmount(remaining)
  }, [paidAmount])

  useEffect(()=>{
    props.getPatients();
    props.getGuardians();
    props.getReferringPersons();
    props.getReferringCenters();
    props.getTests();
  }, [])

  const deleteElement = (index) => {
    let allTest = [...testData]
    allTest.splice(index, 1)
    setTestData(allTest)
  }
  useEffect(()=>{
    setPatient(search(patients, patientEmail))
  }, [patientEmail])

  useEffect(()=>{
    setGuardian(search(guardians, guardianEmail))
  }, [guardianEmail])

  useEffect(()=>{
    setReferringPerson(search(referringPersons, referringPersonEmail))
  }, [referringPersonEmail])

  useEffect(()=>{
    setReferringCenter(search(referringCenters, referringCenterName))
  }, [referringCenterName])
  
  useEffect(()=>{
    if(searchTerm){
      setSearchData(search(tests, searchTerm))
    }else{
      setSearchData([])
    }
  }, [searchTerm])

  useEffect(()=>{
    if(discount){
      let totalTestBill=0
      let allTest=[...testData]
      allTest[testIndex].discount=Number(discount)
      allTest[testIndex].finalPrice=(allTest[testIndex].testPrice-Number(discount))
      setTestData(allTest)
    }
  }, [discount])

  useEffect(()=>{
    let totalTestBill=0
    for(var i=0; i<testData.length; i++){
      totalTestBill=totalTestBill+testData[i].finalPrice
    }
    setTotalBill(totalTestBill)
  }, [testData])

  const paymentMethod=[
    {name:'Payment Mode (Default: Cash)'},
    {name:'Cheque'},
    {name:'Swipe Machine (New)'},
    {name:'Credit'},
    {name:'Credit Card'},
    {name:'Debit Card'},
    {name:'Free'},
    {name:'Online Payment'},
    {name:'Others'},
  ]
  return (
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <PerfectScrollbar>
          <Box minWidth={1050} style={{marginBottom:100}}>
            <div className="row" style={{margin:'25px'}}>
              <div className="col-md-3" style={{marginTop:'10px'}}>
                <TextField
                  onChange={e=>setPatient(e.target.value)}
                  variant="outlined"
                  className="search-field"
                  margin="dense"
                  id="title"
                  label="Select Patient"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-3"  style={{marginTop:'10px'}}>
                <AddPatient setPatientEmail={setPatientEmail}/>
              </div>
              <div className="col-md-3"  style={{marginTop:'10px'}}>
                <TextField
                  onChange={e=>setGuardian(e.target.value)}
                  variant="outlined"
                  className="search-field"
                  margin="dense"
                  id="guardian"
                  label="Select Guardian"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-3"  style={{marginTop:'10px'}}>
                <AddGuardian setGuardianEmail={setGuardianEmail}/>
              </div>
              <div className="col-md-3"  style={{marginTop:'10px'}}>
                <TextField
                  onChange={e=>setReferringPerson(e.target.value)}
                  variant="outlined"
                  className="search-field"
                  margin="dense"
                  id="referringPerson"
                  label="Select Referring Person"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-3"  style={{marginTop:'10px'}}>
                <AddReferringPerson setReferringPersonEmail={setReferringPersonEmail}/>
              </div>              
              <div className="col-md-3"  style={{marginTop:'10px'}}>
                <TextField
                  onChange={e=>setReferringCenter(e.target.value)}
                  variant="outlined"
                  className="search-field"
                  margin="dense"
                  id="referringCenter"
                  label="Select Referring Center"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-3"  style={{marginTop:'10px'}}>
                <AddReferringCenter setReferringCenterName={setReferringCenterName} />
              </div>
            </div>
            <Table>
              <TableBody>
                {patient.length>0?
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
                         patient- {patient[0].patientNo}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {patient[0].firstName} {patient[0].lastName}
                    </TableCell>
                    <TableCell>
                      {patient[0].mobileNumber1}
                    </TableCell>
                    <TableCell>
                      {patient[0].email}
                    </TableCell>
                    <TableCell>
                    {patient[0].gender} {patient[0].age} {"Years"}
                    </TableCell>
                    <TableCell>
                      <div>
                        <UpdatePatient id={patient[0]._id}/>
                      </div>
                    </TableCell>
                  </TableRow>
                  :''}
                  {referringPerson.length>0?
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
                        Referring Person
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {referringPerson[0].firstName} {referringPerson[0].lastName}
                    </TableCell>
                    <TableCell>
                      {referringPerson[0].mobileNumber}
                    </TableCell>
                    <TableCell>
                      {referringPerson[0].email}
                    </TableCell>
                    <TableCell>
                      {referringPerson[0].speciality}
                    </TableCell>
                    <TableCell>
                      <div>
                        <ReferringPersonUpdateModal id={referringPerson[0]._id}/>
                      </div>
                    </TableCell>
                  </TableRow>
                  :''}
                  {referringCenter.length>0?
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
                        Referring Center
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {referringCenter[0].nameofReferralCenter}
                    </TableCell>
                    <TableCell>
                      {referringCenter[0].phone1}
                    </TableCell>
                    <TableCell>
                      {referringCenter[0].centerEmail}
                    </TableCell>
                    <TableCell>
                      {referringCenter[0].centerLocation}
                    </TableCell>
                    <TableCell>
                      <div>
                        <ReferringCenterUpdateModal id={referringCenter[0]._id}/>
                      </div>
                    </TableCell>
                  </TableRow>
                  :''}
                  {guardian.length>0?
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
                        Guardian
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {guardian[0].firstName} {guardian[0].lastName}
                    </TableCell>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                      {guardian[0].relationshipToPatient}
                    </TableCell>
                    <TableCell>
                      <div>
                        <GuardianUpdateModal id={guardian[0]._id}/>
                      </div>
                    </TableCell>
                  </TableRow>
                  :''}
              </TableBody>
            </Table>
            <Table style={{marginTop:'40px'}} size="small">
            <TableBody style={{borderTop:"1px solid lightgray"}}>
                <TableRow>
                  <TableCell>
                    Select Pricelist to use
                  </TableCell>
                  <TableCell>
                  
                  </TableCell>
                  <TableCell>
                    
                  </TableCell>
                  <TableCell>
                    
                  </TableCell>
                  <TableCell>
                    
                  </TableCell>
                  <TableCell>
                    
                  </TableCell>
                  <TableCell>
                    
                  </TableCell>
                  <TableCell>
                    
                  </TableCell>
                  <TableCell>
                    Date: {moment(Date.now()).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                      
                  </TableCell>
                  <TableCell>
                      
                  </TableCell>
                  <TableCell>
                      
                  </TableCell>
                </TableRow>
                <TableRow hover>
                    <TableCell colSpan={8}>
                      <TextField
                        onChange={e=>setSearchTerm(e.target.value)}
                        variant="outlined"
                        margin="dense"
                        id="title"
                        label="Select test by test name or test code"
                        type="text"
                        value={searchTerm}
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      Price
                    </TableCell>
                    <TableCell>
                      Discount Option
                    </TableCell>
                    <TableCell>
                      Final Price
                    </TableCell>
                    <TableCell>
                      
                  </TableCell>
                  </TableRow>
                </TableBody>
                  <List style={{zIndex:'2', position:'absolute', marginTop:'-10px', marginLeft:'17px', backgroundColor:'lightGray'}}>
                    {searchData.length>0?
                    searchData.map(data=>(
                      <ListItem style={{cursor:'pointer'}} onClick={()=> addTest(data)} >
                        <ListItemText>
                          <Typography variant="h6">
                            Test Code: {data.testCode}
                          </Typography>
                          <Typography variant="h6">
                            Test Name: {data.testName}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    )):''}
                  </List>
                  <TableBody style={{zIndex:'1'}}>
                    {
                      testData.length>0?
                      testData.map((data, index)=>(
                        <TableRow>
                          <TableCell colSpan={8}>
                            <Typography>
                              {data.testName}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            {data.testPrice}
                          </TableCell>
                          <TableCell>
                            {data.discount?
                              data.discount:
                              <AddDiscount setDiscount={setDiscount} setTestIndex={setTestIndex} index={index}/>
                            }
                          </TableCell>
                          <TableCell>
                            {data.finalPrice}
                          </TableCell>
                          <TableCell>
                            <IconButton className="iconButton" onClick={()=> deleteElement(index)}>
                              <CloseIcon />
                            </IconButton>
                          </TableCell>
                      </TableRow>
                      )):''}
                      {testData.length>0?
                      <TableRow hover>
                        <TableCell colSpan={8}>
                          <TextField
                            variant="outlined"
                            margin="dense"
                            id="title"
                            label="Select reason for additional bill"
                            type="text"
                            fullWidth
                          />
                        </TableCell>
                        <TableCell>
                          <AddAdditionalBill setTestName={setTestName} setPrice={setPrice}/>
                        </TableCell>
                        <TableCell>
                        
                        </TableCell>
                        <TableCell>
                        
                        </TableCell>
                        <TableCell>
                          
                        </TableCell>
                      </TableRow>: ''
                      }
              </TableBody>
            </Table> 
            {
            testData.length>0?
            <Grid container spacing={3} className="gridContainer">
              <Grid item md={5}>
                
              </Grid>
              <Grid item md={2} className="totalAmount">
                <Typography variant="h5">
                Total amount to Pay
                </Typography>
              </Grid>
              <Grid item md={1}>
                <Typography>
                  {totalBill}
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography>
                 
                </Typography>
              </Grid>
              <Grid item md={5}>
                
              </Grid>
              <Grid item md={2} className="totalAmount">
                <Typography variant="h5">
                Enter paid amount:
                </Typography>
              </Grid>
              <Grid item md={1}>
                <Typography>
                  {paidAmount?paidAmount:0}
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography>
                 
                </Typography>
              </Grid>
              <Grid item md={5}>
                
              </Grid>
              <Grid item md={2} className="totalAmount">
                <Typography variant="h5">
                Remaining Balance
                </Typography>
              </Grid>
              <Grid item md={1}>
                <Typography>
                  {paidAmount?remainingAmount:totalBill}
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography>
                 
                </Typography>
              </Grid>
              <Grid item md={5}>
                
              </Grid>
              <Grid item md={3} className="totalAmount">
              <TextField
                onChange={e=>setSearchTerm(e.target.value)}
                variant="outlined"
                margin="dense"
                id="totalAmount"
                type="text"
                value={searchTerm}
                fullWidth
                select
                SelectProps={{
                    native: true,
                }}
              >
                {
                  paymentMethod.map(data=>(
                    <option value={data.name}>{data.name}</option>
                  ))
                }
              </TextField>
              <AddPayment setPaidAmount={setPaidAmount}/>
              </Grid>
              <Grid item md={3}>
                <Typography>
                 
                </Typography>
              </Grid>
              <Grid item md={5}>
                
              </Grid>
              <Grid item md={3} className="totalAmount">
              <Button variant="outlined" color="primary" style={{width:'250px'}}>Confirm Payment</Button>
              </Grid>
              <Grid item md={3}>
                <Typography>
                 
                </Typography>
              </Grid>
            </Grid>
            :''
          }
          </Box>
        </PerfectScrollbar>
      </Card>
  );
}

AddPatientTest.propTypes = {
  getPatients:PropTypes.func.isRequired,
  getGuardians:PropTypes.func.isRequired,
  getReferringPersons:PropTypes.func.isRequired,
  getReferringCenters:PropTypes.func.isRequired,
  getTests:PropTypes.func.isRequired,
  className: PropTypes.string,
  patients: PropTypes.array.isRequired,
  guardians: PropTypes.array.isRequired,
  referringPersons: PropTypes.array.isRequired,
  referringCenters: PropTypes.array.isRequired,
  tests: PropTypes.array.isRequired,

};
const mapStateToProps = (state) => ({
  patients: state.patient.patients,
  guardians:state.guardian.guardians,
  referringPersons:state.referringPerson.referringPersons,
  referringCenters:state.referringCenter.referringCenters,
  tests:state.test.tests
})
export default connect(mapStateToProps, { getPatients, getGuardians, getReferringPersons, getTests, getReferringCenters  })(AddPatientTest)