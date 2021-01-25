import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider } from '@material-ui/core';

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
import { getPatients } from '../../../../actions/patientAction'
import { getGuardians } from '../../../../actions/guardianAction'
import { getReferringPersons } from '../../../../actions/referringPersonAction'
import { getReferringCenters } from '../../../../actions/referringCenterAction'
import { getTests } from '../../../../actions/testAction'
import { search } from '../../../../utils/Search'
import AddPatient from '../../Patient/AddPatient'
import AddGuardian from '../../Guardian/GuardianCreateModal'
import AddReferringPerson from '../../ReferringPerson/ReferringPersonCreateModal'
import AddReferringCenter from '../../ReferringCenter/ReferringCenterCreateModal'
import UpdatePatient from '../../Patient/UpdatePatient'
import ReferringPersonUpdateModal from '../../ReferringPerson/ReferringPersonUpdateModal'
import ReferringCenterUpdateModal from '../../ReferringCenter/ReferringCenterUpdateModal'
import GuardianUpdateModal from '../../Guardian/GuardianUpdateModal'
import AddDiscount from './AddDiscount'
import AddTotalDiscount from './AddTotalDiscount'
import AddAdditionalBill from './AddAdditionalBill'
import AddPayment from './AddPayment'
import EditTestBill from './EditTestBill'
import { updatePatientTest, getPatientTest } from '../../../../actions/patientTestAction'
import EditAdditionalBill from './EditAdditionalBill';


const useStyles = makeStyles((theme) => ({
  root: {
    margin:theme.spacing(1)  
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

const EditPatientTest=(props)=> {
  const { patientTest, patients, guardians, referringPersons, referringCenters, tests, className, ...rest }=props
  const { user } = props.auth;

  const classes = useStyles();
  const [patient, setPatient] = useState('')
  const [guardian, setGuardian] = useState('')
  const [referringPerson, setReferringPerson] = useState('')
  const [referringCenter, setReferringCenter] = useState('')
  const [guardianName, setGuardianName] = useState('')
  const [patientId, setPatientId] = useState('');
  const [guardianId, setGuardianId] = useState('');
  const [referringPersonId, setReferringPersonId] = useState('');
  const [referringCenterId, setReferringCenterId] = useState('');
  const [patientSearchTerm, setPatientSearchTerm] = useState('')
  const [guardianSearchTerm, setGuardianSearchTerm] = useState('')
  const [referringPersonSearchTerm, setReferringPersonSearchTerm] = useState('')
  const [referringCenterSearchTerm, setReferringCenterSearchTerm] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [discount, setDiscount] = useState('')
  const [totalDiscount, setTotalDiscount] = useState('')
  const [testData, setTestData] = useState([])
  const [searchData, setSearchData] = useState([])
  const [testIndex, setTestIndex] = useState('')
  const [totalBill, setTotalBill] = useState('')
  const [paidAmount, setPaidAmount] = useState(0)
  const [patientSearchData, setPatientSearchData]=useState([])
  const [guardianSearchData, setGuadianSearchData]=useState([])
  const [referringPersonSeachData, setReferringPersonSearchData]=useState([])
  const [referringCenterSearchData, setReferringCenterSearchData]=useState([])
  const [additionalBill, setAdditionalBill]=useState('')  
  const [paymentMode, setPaymentMode]=useState([])
  const [remainingBalance, setRemainingBalance]= useState('')
  const [totalAmountToPay, setTotalAmountToPay]= useState('')
  const [emergency, setEmergency] = useState(false);

  
  useEffect(()=>{
    setGuardian(patientTest.guardian?patientTest.guardian:null)
    setReferringPerson(patientTest.referringPerson?patientTest.referringPerson:null)
    setReferringCenter(patientTest.referringCenter?patientTest.referringCenter:null)
    setGuardianSearchTerm(patientTest.guardian?(patientTest.guardian.firstName +" " +patientTest.guardian.lastName):null)
    setReferringPersonSearchTerm(patientTest.referringPerson?(patientTest.referringPerson.firstName +" " +patientTest.referringPerson.lastName):null)
    setReferringCenterSearchTerm(patientTest.referringCenter?(patientTest.referringCenter.nameofReferralCenter + " "):null)
    setPatientId(patientTest.patient?(patientTest.patient._id):null)
    setGuardianId(patientTest.guardian?(patientTest.guardian._id):null)
    setReferringPersonId(patientTest.referringPerson?(patientTest.referringPerson._id):null)
    setReferringCenterId(patientTest.referringCenter?(patientTest.referringCenter._id):null)
    setAdditionalBill(patientTest.additionalBill?patientTest.additionalBill:0)
    setPaymentMode(patientTest.paymentMode)
    setPaidAmount(patientTest.paidAmount)
    setRemainingBalance(patientTest.remainingBalance)
    setTotalAmountToPay(patientTest.totalAmountToPay)
    setTotalDiscount(patientTest.totalDiscount)
    setTestData(patientTest.tests)
    setEmergency(patientTest.emergency)
  }, [patientTest])
  
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
      setReferringCenterSearchData(search(referringCenters, referringCenterSearchTerm))
    }else{
      setReferringCenterSearchData([])
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
    setReferringCenterSearchData([])
    setReferringCenter(data)
    setReferringCenterSearchTerm(data.nameofReferralCenter);
    setReferringCenterId(data._id)
  }

  const updatePatientTest=()=>{
    const newPatientTest={
      patient:patientId,
      guardian:guardianId,
      referringPerson:referringPersonId,
      referringCenter:referringCenterId,
      additionalBill:additionalBill,
      paidAmount:paidAmount,
      totalAmountToPay:totalAmountToPay,
      paymentMode:paymentMode,
      tests:testData,
      totalDiscount:totalDiscount,
      remainingBalance:remainingBalance,
      emergency:emergency
    }
    props.updatePatientTest(patientTest._id, newPatientTest)
    props.getPatientTest(patientTest._id)
  }


  const addTest=(data)=>{
    console.log(data)
    const newTest={
      test:data,
      finalPrice:Number(data.testPrice)
    }
    setTestData([...testData, newTest]);
    setSearchTerm('');
    setTotalAmountToPay(totalAmountToPay+Number(data.testPrice))
    setRemainingBalance(remainingBalance+Number(data.testPrice))
  }


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
  const deleteAdditionalBill=(index)=>{
    let allAdditionalBill=[...additionalBill]
    setTotalAmountToPay(totalAmountToPay-Number(additionalBill[index].additionalBillPrice))
    setRemainingBalance(remainingBalance-Number(additionalBill[index].additionalBillPrice))
    allAdditionalBill.splice(index, 1)
    setAdditionalBill(allAdditionalBill)
  }

  const completed = (index) => {
    let allTest=testData
    if(!allTest[index].completed){
      allTest[index].completed=true;
      setTestData(allTest)
      setTotalAmountToPay(totalAmountToPay-Number(allTest[index].finalPrice?allTest[index].finalPrice:allTest[index].test.testPrice))
      setRemainingBalance(remainingBalance-Number(allTest[index].finalPrice?allTest[index].finalPrice:allTest[index].test.testPrice))
    }else{
      allTest[index].completed=false;
      setTestData(allTest)
      setTotalAmountToPay(totalAmountToPay+Number(allTest[index].finalPrice?allTest[index].finalPrice:allTest[index].test.testPrice))
      setRemainingBalance(remainingBalance+Number(allTest[index].finalPrice?allTest[index].finalPrice:allTest[index].test.testPrice))
    }
 }

 console.log(patientTest)

  return (
    <div className="editBillForm" style={{width:'100%'}}>
      <div className="d-flex" style={{margin:5}}>
        <h6 className="mb3">Bill Update</h6>
      </div>
      <Divider light style={{margin:5}}/>
      {Object.keys(patientTest).length>0?
      <>
      <Grid container spacing={3} style={{marginTop:5, marginBottom:5}}>
        <Grid item md={12}>
          <div style={{margin:10}}>
            <h6 className="mb3">Bill ID: {patientTest.billId} 
              {
                patientTest.totalAmountToPay-patientTest.paidAmount>0?
                <span style={{backgroundColor:'#f0ad4e', padding:'3px 5px 3px 5px', margin:10, borderRadius:'2px', color:'white'}}>Incomplete</span>:
                <span style={{backgroundColor:'#5cb85c', padding:'3px 5px 3px 5px', margin:10, borderRadius:'2px', color:'white'}}>Complete</span>
              }
            </h6>
            <h6 className="mb3" style={{display:'block'}}>Patient Name: {patientTest.patient?(patientTest.patient.title +" " +patientTest.patient.firstName +" " + patientTest.patient.lastName):''}</h6>
          </div>
        </Grid>
      </Grid>  
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <PerfectScrollbar>
          <Box minWidth={1050} style={{marginBottom:100}}>
            <div className="row" style={{margin:'0px', zIndex:'1'}}>
              <div className="col-md-3" style={{marginTop:'10px'}}>
                <TextField
                  disabled
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
                <AddPatient  disabled/>
              </div>
              <div className="col-md-3"  style={{marginTop:'10px', marginLeft:-5}}>
                <TextField
                  onChange={e=>setGuardianSearchTerm(e.target.value)}
                  variant="outlined"
                  className="search-field"
                  margin="dense"
                  id="guardian"
                  label="Select Guardian"
                  value={guardianName}
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
                      testData?
                      testData.map((data, index)=>(
                        <TableRow style={{ textDecoration : data.completed ? 'line-through' : 'none' }}>
                          <TableCell colSpan={8}>
                              {data.test.testName}
                          </TableCell>
                          <TableCell>
                            {data.test.testPrice}
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
                           <IconButton className="iconButton" size="small">
                              <EditTestBill index={index} test={data} totalAmountToPay={totalAmountToPay} setTotalAmountToPay={setTotalAmountToPay} remainingBalance={remainingBalance} setRemainingBalance={setRemainingBalance} testData={testData} setTestData={setTestData}/>
                            </IconButton>
                            <IconButton className="iconButton" onClick={()=> completed(index)}>
                              <CloseIcon />
                            </IconButton>
                          </TableCell>
                      </TableRow>
                      )):''}
                      {
                        additionalBill.length>0?
                        additionalBill.map((data, index)=>(
                          <TableRow>
                            <TableCell colSpan={8}>
                              <Typography>
                                {data.additionalBillReason}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              {data.additionalBillPrice}
                            </TableCell>
                            <TableCell>
                              
                            </TableCell>
                            <TableCell>
                              {data.additionalBillPrice}
                            </TableCell>
                            <TableCell>
                              <IconButton className="iconButton" size="small">
                                <EditAdditionalBill data={data}/>
                              </IconButton>
                              <IconButton className="iconButton" onClick={()=> deleteAdditionalBill(index)}>
                                <CloseIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        )):''
                      }
                      {testData?
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
                          <AddAdditionalBill additionalBill={additionalBill} setAdditionalBill={setAdditionalBill} totalAmountToPay={totalAmountToPay} setTotalAmountToPay={setTotalAmountToPay} remainingBalance={remainingBalance} setRemainingBalance={setRemainingBalance}/>
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
                          <AddTotalDiscount totalDiscount={totalDiscount} setTotalDiscount={setTotalDiscount} totalAmountToPay={totalAmountToPay} setTotalAmountToPay={setTotalAmountToPay} remainingBalance={remainingBalance} setRemainingBalance={setRemainingBalance} />
                        </TableCell>
                        <TableCell>
                          <Typography>
                            {totalDiscount?totalDiscount:0}
                          </Typography>
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
            testData?
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
                  {totalAmountToPay}
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
                  {-paidAmount?remainingBalance:totalBill}
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
              <AddPayment paidAmount={paidAmount} setPaidAmount={setPaidAmount} remainingBalance={remainingBalance} setRemainingBalance={setRemainingBalance} paymentMode={paymentMode} setPaymentMode={setPaymentMode}/>
              </Grid>
              <Grid item md={6}>
                <Typography>
                  <Checkbox
                    checked={emergency?true:false}
                    onChange={(e)=>setEmergency(e.target.checked)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  <span style={{color:'#333'}}>Critical / Emergency Reports.</span>
                </Typography>
              </Grid>
              <Grid item md={2}>
              <Button variant="outlined" color="primary" style={{width:'250px'}} onClick={()=> updatePatientTest()}  style={{backgroundColor:'#5cb85c', padding:'7px 40px 7px 40px', color:'white'}}>Update</Button>
              </Grid>
              <Grid item md={4}>
                <Typography>
                 
                </Typography>
              </Grid>
            </Grid>
            :''
          }
          </Box>
        </PerfectScrollbar>
      </Card>
      </>:""
    }
  </div>
  );
}

EditPatientTest.propTypes = {
  getPatients:PropTypes.func.isRequired,
  getGuardians:PropTypes.func.isRequired,
  getReferringPersons:PropTypes.func.isRequired,
  getReferringCenters:PropTypes.func.isRequired,
  getTests:PropTypes.func.isRequired,
  updatePatientTest:PropTypes.func.isRequired,
  getPatientTest:PropTypes.func.isRequired,
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
  patientTest:state.patientTest.patientTest,
  auth:state.auth
})
export default connect(mapStateToProps, { getPatients, getGuardians, getReferringPersons, getTests, getReferringCenters, updatePatientTest, getPatientTest })(EditPatientTest)