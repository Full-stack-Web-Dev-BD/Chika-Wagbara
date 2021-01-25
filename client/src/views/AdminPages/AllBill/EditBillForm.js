import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { Button, Divider } from '@material-ui/core';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import moment from 'moment'
import ViewPayment from './ViewPayment'
import EditBillTest from './EditBillTest'
import EditPayment from './EditPatientTest/AddPayment'
import { updatePatientTest, getPatientTest } from '../../../actions/patientTestAction'


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  }
}));

const EditBillForm=(props)=> {
  const classes = useStyles();
  const { patientTest }=props
  const [orderNumber, setOrderNumber] = useState('');
  const [guardian, setGuardian] = useState('');
  const [referringPerson, setReferringPerson] = useState('');
  const [referringCenter, setReferringCenter] = useState('');
  const [patientId, setPatientId] = useState('');
  const [guardianId, setGuardianId] = useState('');
  const [referringPersonId, setReferringPersonId] = useState('');
  const [referringCenterId, setReferringCenterId] = useState('');
  const [additionalBill, setAdditionalBill] = useState({});
  const [paymentMode, setPaymentMode]= useState([])
  const [paidAmount, setPaidAmount]= useState('')
  const [remainingBalance, setRemainingBalance]= useState('')
  const [totalAmountToPay, setTotalAmountToPay]= useState('')
  const [value, setValue] = useState('Controlled');
  const [tests, setTests] = useState([]);
  const [testPrice, setTestPrice] = useState('');
  const [testIndex, setTestIndex] = useState('');
  const [emergency, setEmergency] = useState(false);


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(()=>{
    setTests(patientTest.tests)
  }, [patientTest])
  
  useEffect(()=>{
    setGuardian(patientTest.guardian?(patientTest.guardian.firstName +" " +patientTest.guardian.lastName):null)
    setReferringPerson(patientTest.referringPerson?(patientTest.referringPerson.firstName +" " +patientTest.referringPerson.lastName):null)
    setReferringCenter(patientTest.referringCenter?(patientTest.referringCenter.nameofReferralCenter):null)
    setPatientId(patientTest.patient?(patientTest.patient._id):null)
    setGuardianId(patientTest.guardian?(patientTest.guardian._id):null)
    setReferringPersonId(patientTest.referringPerson?(patientTest.referringPerson._id):null)
    setReferringCenterId(patientTest.referringCenter?(patientTest.referringCenter._id):null)
    setAdditionalBill({reason:(patientTest.additionalBill?patientTest.additionalBill.reason:null), price:(patientTest.additionalBill?patientTest.additionalBill.price:null)})
    setPaymentMode(patientTest.paymentMode)
    setPaidAmount(patientTest.paidAmount)
    setRemainingBalance(patientTest.remainingBalance)
    setTotalAmountToPay(patientTest.totalAmountToPay)
    setTests(patientTest.tests)
    setEmergency(patientTest.emergency)
  }, [patientTest])


  useEffect(()=>{
    setRemainingBalance(Number(totalAmountToPay)-Number(paidAmount))
  }, [paidAmount])

  console.log(paidAmount)

  useEffect(()=>{
    const allTest=[...tests]
    if(testPrice){
      allTest[testIndex].finalPrice=testPrice
      setTests(allTest)
    }
  }, [testPrice])

  const updatePatientBill=()=>{
    const newPatientTest={
      patient:patientId,
      guardian:guardianId,
      referringPerson:referringPersonId,
      referringCenter:referringCenterId,
      additionalBill:additionalBill,
      paidAmount:paidAmount,
      totalAmountToPay:totalAmountToPay,
      paymentMode:paymentMode,
      tests:tests,
      remainingBalance:remainingBalance,
      emergency:emergency
    }
    props.updatePatientTest(patientTest._id, newPatientTest)
    props.getPatientTest(patientTest._id)
  }
  console.log(patientTest)
  return (
      <div className="editBillForm" style={{width:'100%'}}>
        <div className="d-flex" style={{margin:5}}>
          <h6 className="mb3">Bill Update</h6>
        </div>
        <Divider light style={{margin:5}}/>
        {
          Object.keys(patientTest).length>0?
          <>
          <Grid container spacing={3} style={{marginTop:5, marginBottom:5}}>
            <Grid item md={12}>
              <div style={{margin:5}}>
                <h6 className="mb3">Bill ID: {patientTest.billId} 
                  {
                    patientTest.totalAmountToPay-patientTest.paidAmount>0?
                    <span style={{backgroundColor:'#f0ad4e', padding:'3px 5px 3px 5px', margin:10, borderRadius:'2px', color:'white'}}>Incomplete</span>:
                    <span style={{backgroundColor:'#5cb85c', padding:'3px 5px 3px 5px', margin:10, borderRadius:'2px', color:'white'}}>Complete</span>
                  }
                </h6>
                <h6 className="mb3" style={{display:'block'}}>Name: Bill Of {patientTest.patient?(patientTest.patient.title +" " +patientTest.patient.firstName +" " + patientTest.patient.lastName):''}</h6>
              </div>
            </Grid>
            <Grid item md={6}>
              <div style={{margin:5}}>
                <h6 className="mb3">
                  <TextField
                    id="order-number"
                    label="Order Number"
                    className="search-input"
                    size="small"
                    value={orderNumber}
                    onChange={(e)=> setOrderNumber(e.target.value)}
                    variant="outlined"
                    fullWidth
                  />
                </h6>
              </div>
            </Grid>
            <Grid item md={6}>
              <div style={{margin:5}}>
                <h6 className="mb3">
                  <TextField
                    id="guardian"
                    label="Guardian"
                    size="small"
                    value={guardian}
                    onChange={(e)=> setGuardian(e.target.value)}
                    variant="outlined"
                    fullWidth
                  />
                </h6>
              </div>
            </Grid>
            <Grid item md={6}>
              <div style={{margin:5}}>
                <h6 className="mb3">
                  <TextField
                    id="referringPerson"
                    label="Referring Person"
                    size="small"
                    value={referringPerson}
                    onChange={(e)=> setReferringPerson(e.target.value)}
                    variant="outlined"
                    fullWidth
                  />
                </h6>
              </div>
            </Grid>
            <Grid item md={6}>
              <div style={{margin:5}}>
                <h6 className="mb3">
                  <TextField
                    id="referringCenter"
                    label="Referring Center"
                    size="small"
                    value={referringCenter}
                    onChange={(e)=> setReferringCenter(e.target.value)}
                    variant="outlined"
                    fullWidth
                  />
                </h6>
              </div>
            </Grid>
          </Grid>
          <Divider light style={{margin:5}}/>
          <Grid container spacing={3} style={{marginTop:5, marginBottom:5}}>
            <Grid item md={6}>
              <div style={{margin:5}}>
                <h6 className="mb3">
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Date"
                    size="small"
                    value={moment(patientTest.date).format('MMMM Do YYYY, h:mm A')}
                    onChange={handleChange}
                    variant="outlined"
                    type="text"
                    fullWidth
                  />
                </h6>
              </div>
            </Grid>
            <Grid item md={6}>
              <div style={{margin:5}}>
                <h6 className="mb3">
                  <TextField
                    id="outlined-multiline-flexible"
                    size="small"
                    value={value}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    select
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option>Additional Services (Default: None)</option>
                    <option>Home Visit Services</option>
                    <option>Inter-Laboratory Services</option>
                    <option>Health Camp</option>
                    <option>Night Charges</option>
                    <option>Other</option>
                  </TextField>
                </h6>
              </div>
            </Grid>
          </Grid>
          <Divider light style={{margin:5}}/>
          <Grid container spacing={3} style={{marginTop:5, marginBottom:5}}>
            <Grid item md={7}>
              <div style={{margin:5}}>
                <h6 className="mb3">Test Name</h6>
              </div>
            </Grid>
            <Grid item md={3}>
              <div style={{margin:5}}>
                <h6 className="mb3">
                  Test Amount (Concession)
                </h6>
              </div>
            </Grid>
            <Grid item md={2}>
              <div style={{margin:5}}>
                <h6 className="mb3"></h6>
              </div>
            </Grid>
            {
              tests?
              tests.map((data, index)=>(
                <>
                  {
                    data.test?
                    <>
                    <Grid item md={8}>
                      <div style={{margin:5}}>
                        <h6 className="mb3" style={{fontSize:15}}>{data.test.testName}</h6>
                      </div>
                    </Grid>
                    <Grid item md={3}>
                      <div style={{margin:5}}>
                        <h6 className="mb3" style={{fontSize:15}}>
                          {data.finalPrice}
                        </h6>
                      </div>
                    </Grid>
                    <Grid item md={1}>
                      <div style={{margin:5}}>
                        <EditBillTest testPrice={data.finalPrice} setTestPrice={setTestPrice} index={index} setTestIndex={setTestIndex}/>
                      </div>
                    </Grid>
                    </>:''
                  }
                </>
              )):''
            }
          </Grid>
          <Divider light style={{margin:5}}/>
          <Grid container spacing={3} style={{marginTop:5, marginBottom:5}}>
            <Grid item md={6}>
              <div style={{margin:5}}>
                <h6 className="mb3">
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Other Referral (if any) "
                    size="small"
                    value={value}
                    onChange={handleChange}
                    variant="outlined"
                    type="text"
                    fullWidth
                  />
                </h6>
              </div>
            </Grid>
            <Grid item md={6}>
              <div style={{margin:5}}>
                <h6 className="mb3">
                  <TextField
                    id="outlined-multiline-flexible"
                    size="small"
                    value={value}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    select
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option>Report Collection (Default: Personally)</option>
                    <option>Home Delivery</option>
                    <option>Courier</option>
                  </TextField>
                </h6>
              </div>
            </Grid>
          </Grid>
          <Divider light style={{margin:5}}/>
          <Grid container spacing={3} style={{marginTop:5}}>
            <Grid item md={6}>
              <div style={{margin:5}}>
                <Grid container spacing={3}>
                  <Grid item md={5} style={{paddingTop:0, paddingBottom:0}}>
                    <div style={{margin:5}}>
                      <h6 className="mb3">
                        Additional Price (if any):
                      </h6>
                    </div>
                  </Grid>
                  <Grid item md={7} style={{paddingTop:0, paddingBottom:0}}>
                    <div>
                      <h6 className="mb3">
                        <TextField
                          id="outlined-multiline-flexible"
                          size="small"
                          value={additionalBill.price}
                          onChange={(e)=> setAdditionalBill(e.target.value)}
                          variant="outlined"
                          type="number"
                          fullWidth
                        />
                      </h6>
                    </div>
                  </Grid>
                  <Grid item md={5} style={{paddingTop:0, paddingBottom:0}}>
                  <div>
                    <h6 className="mb3">
                      <TextField
                        id="outlined-multiline-flexible"
                        size="small"
                        value={value}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        select
                        SelectProps={{
                          native: true,
                        }}
                      >
                        <option>Concession (in NGN)</option>
                        <option>Concession (in %)</option>
                      </TextField>
                    </h6>
                  </div>
                  </Grid>
                  <Grid item md={7} style={{paddingTop:0, paddingBottom:0}}>
                    <div>
                      <h6 className="mb3">
                        <TextField
                          id="outlined-multiline-flexible"
                          size="small"
                          value={value}
                          onChange={handleChange}
                          variant="outlined"
                          type="number"
                          fullWidth
                        />
                      </h6>
                    </div>
                  </Grid>
                </Grid>  
              </div>
            </Grid>
            <Grid item md={6}>
              <div style={{margin:5}}>
              <Grid container spacing={3}>
                  <Grid item md={12} style={{paddingTop:0, paddingBottom:0}}>
                    <div style={{margin:5}}>
                      <h6 className="mb3">
                        <ViewPayment paymentMode={paymentMode} setPaymentMode={setPaymentMode} paidAmount={paidAmount} setPaidAmount={setPaidAmount} />
                      </h6>
                    </div>
                  </Grid>
                  <Grid item md={12} style={{paddingTop:0, paddingBottom:0}}>
                    <div style={{textAlign:'center', width:'100%', backgroundColor:'rgb(239, 239, 239)', border:'1px solid #dee2e6', borderRadius:2}}>
                      <h6 className="mb3" style={{padding:'9px 9px 0px 9px'}}>
                        {patientTest.patient?(patientTest.patient.title +" " +patientTest.patient.firstName +" " + patientTest.patient.lastName):''}'s Advance : NGN {remainingBalance}
                      </h6>
                    </div>
                  </Grid>
                </Grid>  
              </div>
            </Grid>
            <Grid item md={6}>
              <div style={{margin:5}}>
              
              </div>
            </Grid>
            <Grid item md={6}>
              <div style={{margin:5}}>
                <Grid container spacing={3}>
                  <Grid item md={12} style={{paddingTop:0, paddingBottom:0}}>
                    <div style={{ textAlign:'center', width:'100%'}}>
                      <Grid container spacing={3}>
                        <Grid item md={6} style={{paddingTop:0, paddingBottom:0}}>
                          <div style={{textAlign:'right', width:'100%'}}>
                            <h6 className="mb3" style={{padding:'9px 9px 0px 9px', color:'#333'}}>
                              Payable Amount : 
                            </h6>
                          </div>
                        </Grid>
                        <Grid item md={6} style={{paddingTop:0, paddingBottom:0}}>
                          <div style={{textAlign:'left', width:'100%'}}>
                            <h6 className="mb3" style={{padding:'9px 9px 0px 9px'}}>
                              NGN {totalAmountToPay}
                            </h6>
                          </div>
                        </Grid>
                        <Grid item md={6} style={{paddingTop:0, paddingBottom:0}}>
                          <div style={{textAlign:'right', width:'100%'}}>
                            <h6 className="mb3" style={{padding:'9px 9px 0px 9px'}}>
                              Advance Paid : 
                            </h6>
                          </div>
                        </Grid>
                        <Grid item md={6} style={{paddingTop:0, paddingBottom:0}}>
                          <div style={{textAlign:'left', marginLeft:7, width:'100%', backgroundColor:'rgb(239, 239, 239)', border:'1px solid lightgray', borderRadius:2}}>
                          <EditPayment paymentMode={paymentMode} setPaymentMode={setPaymentMode} paidAmount={paidAmount} setPaidAmount={setPaidAmount} />
                          </div>
                        </Grid>
                        <Grid item md={6} style={{paddingTop:0, paddingBottom:0}}>
                          <div style={{textAlign:'right', width:'100%'}}>
                            <h6 className="mb3" style={{padding:'9px 9px 0px 9px'}}>
                              Return : 
                            </h6>
                          </div>
                        </Grid>
                        <Grid item md={6} style={{paddingTop:0, paddingBottom:0}}>
                          <div style={{textAlign:'left', width:'100%'}}>
                            <h6 className="mb3" style={{padding:'9px 9px 0px 9px'}}>
                              -{remainingBalance}
                            </h6>
                          </div>
                        </Grid>
                      </Grid>  
                    </div>
                  </Grid>
                </Grid>  
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{marginTop:5, marginBottom:5}}>
            <Grid item md={12}>
              <div style={{margin:5}}>
                <h6 className="mb3">
                  <Checkbox
                    checked={emergency?true:false}
                    onChange={(e)=>setEmergency(e.target.checked)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  <span style={{color:'#333'}}>Critical / Emergency Reports.</span>
                </h6>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{marginTop:5, marginBottom:5}}>
            <Grid item md={12}>
              <div style={{margin:5}}>
                <h6 className="mb3">
                  <Button onClick={()=> updatePatientBill()} style={{backgroundColor:'#5cb85c', float:'right', padding:'10px 15px 10px 15px'}}>Update</Button>
                </h6>
              </div>
            </Grid>
          </Grid>
        </>:''
        
      }
    </div>    
  );
}
EditBillForm.prototype={
  updatePatientTest:PropTypes.func.isRequired,
  getPatientTest:PropTypes.func.isRequired
}
const mapStateToProps=(state)=>({

})
export default connect(mapStateToProps, { updatePatientTest, getPatientTest })(EditBillForm);