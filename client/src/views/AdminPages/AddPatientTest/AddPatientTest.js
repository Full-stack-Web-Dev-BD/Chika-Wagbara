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
import AddPatient from '../Patient/AddPatient'
import AddGuardian from '../Guardian/GuardianCreateModal'
import AddReferringPerson from '../ReferringPerson/ReferringPersonCreateModal'
import AddReferringCenter from '../ReferringCenter/ReferringCenterCreateModal'
import UpdatePatient from '../Patient/UpdatePatient'
import ReferringPersonUpdateModal from '../ReferringPerson/ReferringPersonUpdateModal'
import ReferringCenterUpdateModal from '../ReferringCenter/ReferringCenterUpdateModal'
import GuardianUpdateModal from '../Guardian/GuardianUpdateModal'
import AddDiscount from './AddDiscount'
import AddTotalDiscount from './AddTotalDiscount'
import AddAdditionalBill from './AddAdditionalBill'
import AddPayment from './AddPayment'
import Receipt from './Receipt'
import PrintandPdf from './PrintandPdf'
import { addPatientTest } from '../../../actions/patientTestAction'


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
  const { user } = props.auth;

  const classes = useStyles();
  const [patient, setPatient] = useState('')
  const [guardian, setGuardian] = useState('')
  const [referringPerson, setReferringPerson] = useState('')
  const [referringCenter, setReferringCenter] = useState('')
  const [patientSearchTerm, setPatientSearchTerm] = useState('')
  const [guardianSearchTerm, setGuardianSearchTerm] = useState('')
  const [referringPersonSearchTerm, setReferringPersonSearchTerm] = useState('')
  const [referringCenterSearchTerm, setReferringCenterSearchTerm] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [discount, setDiscount] = useState(null)
  const [totalDiscount, setTotalDiscount] = useState(null)
  const [testData, setTestData] = useState([])
  const [searchData, setSearchData] = useState([])
  const [testIndex, setTestIndex] = useState('')
  const [totalBill, setTotalBill] = useState(null)
  const [paidAmount, setPaidAmount] = useState(0)
  const [remainingAmount, setRemainingAmount] = useState(null)
  const [testName, setTestName] = useState('')
  const [price, setPrice] = useState('')
  const [displayTest, setDisplayTest] = useState(true)
  const [patientSearchData, setPatientSearchData]=useState([])
  const [guardianSearchData, setGuadianSearchData]=useState([])
  const [referringPersonSeachData, setReferringPersonSearchData]=useState([])
  const [referringCenterSearchData, SetReferringCenterSearchData]=useState([])
  const [totalPrice, setTotalPrice]=useState('')  
  const [totalFinalPrice, setTotalFinalPrice]=useState(null)  
  const [testDiscount, setTestDiscount]=useState(null)  
  const [paymentMode, setPaymentMode]=useState([])
   
  useEffect(() => {
    if(patientSearchTerm){
      setPatientSearchData(search(patients, patientSearchTerm))
    }else{
      setPatientSearchData([])
    }
  }, [patientSearchTerm])

  useEffect(() => {
    if(guardianSearchTerm){
      setGuadianSearchData(search(guardians, guardianSearchTerm))
    }else{
      setGuadianSearchData([])
    }
  }, [guardianSearchTerm])

  useEffect(() => {
    if(referringPersonSearchTerm){
      setReferringPersonSearchData(search(referringPersons, referringPersonSearchTerm))
    }else{
      setReferringPersonSearchData([])
    }
  }, [referringPersonSearchTerm])

  useEffect(() => {
    if(referringCenterSearchTerm){
      SetReferringCenterSearchData(search(referringCenters, referringCenterSearchTerm))
    }else{
      SetReferringCenterSearchData([])
    }
  }, [referringCenterSearchTerm])

  const addPatient=(data)=>{
    setPatient(data)
    setPatientSearchTerm('')
  }
  
  const addGuardian=(data)=>{
    setGuardian(data)
    setGuardianSearchTerm('')
  }

  const addReferringPerson=(data)=>{
    setReferringPerson(data)
    setReferringPersonSearchTerm('')
  }

  const addReferringCenter=(data)=>{
    setReferringCenter(data)
    setReferringCenterSearchTerm('')
  }

  const addPatientTest=()=>{
    const newPatientTest={
      patient:patient?patient._id:null,
      guardian:guardian?guardian._id:null,
      referringPerson:referringPerson?referringPerson._id:null,
      referringCenter:referringCenter?referringCenter._id:null,
      tests:testData,
      totalAmountToPay:totalBill,
      paidAmount:paidAmount?paidAmount:0,
      remainingBalance:paidAmount?remainingAmount:totalBill,
      paymentMode:paymentMode,
      totalDiscount:totalDiscount?totalDiscount:0
    }
    props.addPatientTest(newPatientTest)

    setDisplayTest(false)
  }


  const addTest=(data)=>{
    const newTest={
      test:data._id,
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
    if(searchTerm){
      setSearchData(search(tests, searchTerm))
    }else{
      setSearchData([])
    }
  }, [searchTerm])

  useEffect(()=>{
    if(discount){
      let allTest=[...testData]
      allTest[testIndex].discount=Number(discount)
      allTest[testIndex].finalPrice=(allTest[testIndex].testPrice-Number(discount))
      setTestData(allTest)
    }
  }, [discount])

  useEffect(()=>{
    let price=0
    let finalPrice=0
    let totalTestBill=0
    let discount=0
    for(var i=0; i<testData.length; i++){
      totalTestBill=totalTestBill+testData[i].finalPrice
      price=price+testData[i].testPrice
      finalPrice=finalPrice+testData[i].finalPrice
      discount=discount+(testData[i].discount?testData[i].discount:0)
    }
    setTotalBill(totalTestBill)
    setTotalPrice(price)
    setTotalFinalPrice(finalPrice)
    setTestDiscount(discount)
  }, [testData])

  useEffect(()=>{
    let result=totalBill-totalDiscount
    setTotalBill(result)
  }, [totalDiscount])

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
    <>
    {displayTest?
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <PerfectScrollbar>
          <Box minWidth={1050} style={{marginBottom:100}}>
            <div className="row" style={{margin:'25px', zIndex:'1'}}>
              <div className="col-md-3" style={{marginTop:'10px'}}>
                <TextField
                  onChange={e=>setPatientSearchTerm(e.target.value)}
                  variant="outlined"
                  className="search-field"
                  margin="dense"
                  id="Patient"
                  label="Select Patient"
                  type="text"
                  value={patientSearchTerm}
                  fullWidth
                />
                <List style={{zIndex:'2', position:'absolute', marginTop:'-3px', backgroundColor:'lightGray'}}>
                  {patientSearchData.length>0?
                  patientSearchData.map(data=>(
                    <ListItem style={{cursor:'pointer'}} onClick={()=> addPatient(data)} >
                      <ListItemText>
                        <Typography variant="h6">
                          Name: {data.firstName} {data.lastName}
                        </Typography>
                        <Typography variant="h6">
                          Email: {data.email}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  )):''}
                </List>
              </div>
              <div className="col-md-3"  style={{marginTop:'10px'}}>
                <AddPatient />
              </div>
              <div className="col-md-3"  style={{marginTop:'10px'}}>
                <TextField
                  onChange={e=>setGuardianSearchTerm(e.target.value)}
                  variant="outlined"
                  className="search-field"
                  margin="dense"
                  id="guardian"
                  label="Select Guardian"
                  type="text"
                  value={guardianSearchTerm}
                  fullWidth
                />
                <List style={{zIndex:'2', position:'absolute', marginTop:'-3px', backgroundColor:'lightGray'}}>
                  {guardianSearchData.length>0?
                  guardianSearchData.map(data=>(
                    <ListItem style={{cursor:'pointer'}} onClick={()=> addGuardian(data)} >
                      <ListItemText>
                        <Typography variant="h6">
                          Name: {data.firstName} {data.lastName}
                        </Typography>
                        <Typography variant="h6">
                          Email: {data.email}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  )):''}
                </List>
              </div>
              <div className="col-md-3"  style={{marginTop:'10px'}}>
                <AddGuardian />
              </div>
              <div className="col-md-3"  style={{marginTop:'10px'}}>
                <TextField
                  onChange={e=>setReferringPersonSearchTerm(e.target.value)}
                  variant="outlined"
                  className="search-field"
                  margin="dense"
                  id="referringPerson"
                  label="Select Referring Person"
                  type="text"
                  value={referringPersonSearchTerm}
                  fullWidth
                />
                <List style={{zIndex:'2', position:'absolute', marginTop:'-3px', backgroundColor:'lightGray'}}>
                  {referringPersonSeachData.length>0?
                  referringPersonSeachData.map(data=>(
                    <ListItem style={{cursor:'pointer'}} onClick={()=> addReferringPerson(data)} >
                      <ListItemText>
                        <Typography variant="h6">
                          Name: {data.firstName} {data.lastName}
                        </Typography>
                        <Typography variant="h6">
                          Email: {data.email}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  )):''}
                </List>
              </div>
              <div className="col-md-3"  style={{marginTop:'10px'}}>
                <AddReferringPerson />
              </div>              
              <div className="col-md-3"  style={{marginTop:'10px'}}>
                <TextField
                  onChange={e=>setReferringCenterSearchTerm(e.target.value)}
                  variant="outlined"
                  className="search-field"
                  margin="dense"
                  id="referringCenter"
                  label="Select Referring Center"
                  type="text"
                  value={referringCenterSearchTerm}
                  fullWidth
                />
                <List style={{zIndex:'2', position:'absolute', marginTop:'-3px', backgroundColor:'lightGray'}}>
                  {referringCenterSearchData.length>0?
                  referringCenterSearchData.map(data=>(
                    <ListItem style={{cursor:'pointer'}} onClick={()=> addReferringCenter(data)} >
                      <ListItemText>
                        <Typography variant="h6">
                          Name: {data.nameofReferralCenter}
                        </Typography>
                        <Typography variant="h6">
                          Email: {data.centerEmail}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  )):''}
                </List>
              </div>
              <div className="col-md-3"  style={{marginTop:'10px'}}>
                <AddReferringCenter />
              </div>
            </div>
            <Table style={{zIndex:1}}>
              <TableBody>
                {patient?
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
                         patient- {patient.patientNo}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {patient.firstName} {patient.lastName}
                    </TableCell>
                    <TableCell>
                      {patient.mobileNumber1}
                    </TableCell>
                    <TableCell>
                      {patient.email}
                    </TableCell>
                    <TableCell>
                    {patient.gender} {patient.age} {"Years"}
                    </TableCell>
                    <TableCell>
                      <div>
                        <UpdatePatient id={patient._id}/>
                      </div>
                    </TableCell>
                  </TableRow>
                  :''}
                  {referringPerson?
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
                      {referringPerson.firstName} {referringPerson.lastName}
                    </TableCell>
                    <TableCell>
                      {referringPerson.mobileNumber}
                    </TableCell>
                    <TableCell>
                      {referringPerson.email}
                    </TableCell>
                    <TableCell>
                      {referringPerson.speciality}
                    </TableCell>
                    <TableCell>
                      <div>
                        <ReferringPersonUpdateModal id={referringPerson._id}/>
                      </div>
                    </TableCell>
                  </TableRow>
                  :''}
                  {referringCenter?
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
                      {referringCenter.nameofReferralCenter}
                    </TableCell>
                    <TableCell>
                      {referringCenter.phone1}
                    </TableCell>
                    <TableCell>
                      {referringCenter.centerEmail}
                    </TableCell>
                    <TableCell>
                      {referringCenter.centerLocation}
                    </TableCell>
                    <TableCell>
                      <div>
                        <ReferringCenterUpdateModal id={referringCenter._id}/>
                      </div>
                    </TableCell>
                  </TableRow>
                  :''}
                  {guardian?
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
                      {guardian.firstName} {guardian.lastName}
                    </TableCell>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                      {guardian.relationshipToPatient}
                    </TableCell>
                    <TableCell>
                      <div>
                        <GuardianUpdateModal id={guardian._id}/>
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
                    Date: {moment(Date.now()).format('DD/MM/YYYY   hh:mm A')}
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
                        id="test"
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
                              <AddDiscount setDiscount={setDiscount} setTestIndex={setTestIndex} index={index} testPrice={data.testPrice}/>
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
                      <>
                      <TableRow hover>
                        <TableCell colSpan={8}>
                          <TextField
                            disabled
                            variant="outlined"
                            margin="dense"
                            id="bill"
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
                      </TableRow>
                      <TableRow hover>
                        <TableCell colSpan={8}>
                          <TextField
                            disabled
                            variant="outlined"
                            margin="dense"
                            id="title"
                            label="Select Total Discount Option"
                            type="text"
                            fullWidth
                          />
                        </TableCell>
                        <TableCell>
                          <AddTotalDiscount setTotalDiscount={setTotalDiscount} totalBill={totalBill}/>
                        </TableCell>
                        <TableCell>
                        {totalDiscount?totalDiscount:0}
                        </TableCell>
                        <TableCell>
                        
                        </TableCell>
                        <TableCell>
                          
                        </TableCell>
                      </TableRow>
                      </>: ''
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
              <Grid item md={2} className="amountTextfield">
              <TextField
                variant="outlined"
                style={{width:110}}
                size="small"
                id="paidAmount"
                onChange={(e)=> setPaidAmount(e.target.value)}
                type="text"
                value={paidAmount}
                fullWidth
              />
              </Grid>
              <Grid item md={2}>
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
              <AddPayment setPaidAmount={setPaidAmount} setPaymentMode={setPaymentMode}/>
              </Grid>
              <Grid item md={3}>
                <Typography>
                 
                </Typography>
              </Grid>
              <Grid item md={5}>
                
              </Grid>
              <Grid item md={3} className="totalAmount">
              <Button variant="outlined" color="primary" style={{width:'250px'}} onClick={()=> addPatientTest()}>Confirm Payment</Button>
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
      </Card>:
      <PrintandPdf testData={testData} totalDiscount={totalDiscount} totalPrice={totalPrice} totalFinalPrice={totalFinalPrice} testDiscount={testDiscount} patientNo={patient?patient.patientNo:0} paidAmount={paidAmount?paidAmount:0} remainingAmount={paidAmount?remainingAmount:totalBill} paymentMode={paymentMode} billTo={patient.firstName +" " +patient.lastName} billBy={user}/>
    }
  </>
  );
}

AddPatientTest.propTypes = {
  getPatients:PropTypes.func.isRequired,
  getGuardians:PropTypes.func.isRequired,
  getReferringPersons:PropTypes.func.isRequired,
  getReferringCenters:PropTypes.func.isRequired,
  getTests:PropTypes.func.isRequired,
  addPatientTest:PropTypes.func.isRequired,
  className: PropTypes.string,
  patients: PropTypes.array.isRequired,
  guardians: PropTypes.array.isRequired,
  referringPersons: PropTypes.array.isRequired,
  referringCenters: PropTypes.array.isRequired,
  tests: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  patients: state.patient.patients,
  guardians:state.guardian.guardians,
  referringPersons:state.referringPerson.referringPersons,
  referringCenters:state.referringCenter.referringCenters,
  tests:state.test.tests,
  auth:state.auth
})
export default connect(mapStateToProps, { getPatients, getGuardians, getReferringPersons, getTests, getReferringCenters, addPatientTest })(AddPatientTest)