import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField'
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
  Button,
  makeStyles
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Popover from '@material-ui/core/Popover';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { connect } from 'react-redux'
import { getPatientTests, deletePatientTest } from '../../../actions/patientTestAction'
import SelectDate from './SelectDate'
const useStyles = makeStyles((theme) => ({
  root: {marginTop:18},
  avatar: {
    marginRight: theme.spacing(2)
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(2),
    marginTop:6,
  },
  popoverContent: {
    pointerEvents: 'auto',
  },
}));

const ReportManagement = (props) => {
  const { patientTests, className, ...rest }=props

  const classes = useStyles();
  const [patienAnchorEl, setPatientAnchorEl] = useState(null);
  const [guardianAnchorEl, setGuardianAnchorEl] = useState(null);
  const [referringPersonAnchorEl, setReferringPersonAnchorEl] = useState(null);
  const [referringCenterAnchorEl, setReferringCenterAnchorEl] = useState(null);
  const [patientSearchTerm, setPatientSearchTerm] = useState('')
  const [guardianSearchTerm, setGuardianSearchTerm] = useState('')
  const [referringPersonSearchTerm, setReferringPersonSearchTerm] = useState('')
  const [referringCenterSearchTerm, setReferringCenterSearchTerm] = useState('')
  const [allPatientTest, setAllPatientTest] = useState('')
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [dateLebel, setDateLebel] = useState(false);
  const [isComplete, setIsComplete] = useState('');

  const handlePatientClick = () => {
    setOpen(!open);
  };

  const showDateLevel=()=>{
    setDateLebel(true)
  }

  useEffect(()=>{
    if(startDate){
      setDateLebel(false)
    }
  }, [startDate])

  useEffect(() => {
    props.getPatientTests();
  }, [])

  useEffect(()=>{
    setStartDate(Date.now())
  }, [])

  useEffect(() => {
    setAllPatientTest(patientTests)
  }, [patientTests])

  useEffect(() => {
    let searchData=[]
    patientTests.filter(data =>{
      if((data.isComplete).toString()==isComplete.toString()){
        console.log(isComplete)
        searchData.push(data);
      }
    })
    setAllPatientTest(searchData)
  }, [isComplete])

  useEffect(() => {
    let searchData=[]
    if(startDate && endDate==''){
      patientTests.filter(data =>{
        if(moment(data.date).format('L')==moment(startDate).format('L')){
          searchData.push(data);
        }
      })
      setAllPatientTest(searchData)
    }
  }, [startDate])

  useEffect(() => {
    let searchData=[]
    if(endDate){
      patientTests.filter(data =>{
        if(Math.abs(new Date(moment(data.date).format('L')))>=Math.abs(new Date(moment(startDate).format('L'))) && Math.abs(new Date(moment(data.date).format('L')))<=Math.abs(new Date(moment(endDate).format('L')))){
          searchData.push(data);
        }
      })
      setAllPatientTest(searchData)
    }
  }, [endDate])
  useEffect(() => {
    setAllPatientTest(patientTests.filter(data => {
      if(data.patient){
        return Object.values(data.patient).filter(v=> v.toString().toLowerCase().indexOf(patientSearchTerm.toString().toLowerCase()) !== -1).length>0
      }
    }))
  }, [patientSearchTerm])

  useEffect(() => {
    setAllPatientTest(patientTests.filter(data => {
      if(data.guardian){
        return Object.values(data.guardian).filter(v=> v.toString().toLowerCase().indexOf(guardianSearchTerm.toString().toLowerCase()) !== -1).length>0
      }
    }))
  }, [guardianSearchTerm])

  useEffect(() => {
    setAllPatientTest(patientTests.filter(data => {
      if(data.referringPerson){
        return Object.values(data.referringPerson).filter(v=> v.toString().toLowerCase().indexOf(referringPersonSearchTerm.toString().toLowerCase()) !== -1).length>0
      }
    }))
  }, [referringPersonSearchTerm])

  useEffect(() => {
    setAllPatientTest(patientTests.filter(data => {
      if(data.referringCenter){
        return Object.values(data.referringCenter).filter(v=> v.toString().toLowerCase().indexOf(referringCenterSearchTerm.toString().toLowerCase()) !== -1).length>0
      }
    }))
  }, [referringCenterSearchTerm])

  const handlePatientPopoverOpen = (event, id) => {
    setId(id)
    setPatientAnchorEl(event.currentTarget);
  };

  const handlePatientPopoverClose = () => {
    setPatientAnchorEl(null);
  };

  const handleGuardianPopoverOpen = (event, id) => {
    setId(id)
    setGuardianAnchorEl(event.currentTarget);
  };

  const handleGuardianPopoverClose = () => {
    setGuardianAnchorEl(null);
  };

  const handleReferringPersonPopoverOpen = (event, id) => {
    setId(id)
    setReferringPersonAnchorEl(event.currentTarget);
  };

  const handleReferringPersonPopoverClose = () => {
    setReferringPersonAnchorEl(null);
  };

  const handleReferringCenterPopoverOpen = (event, id) => {
    setId(id)
    setReferringCenterAnchorEl(event.currentTarget);
  };

  const handleReferringCenterPopoverClose = () => {
    setReferringCenterAnchorEl(null);
  };
  
  const PatientPopOverOpen = Boolean(patienAnchorEl);
  const guardianPopOverOpen = Boolean(guardianAnchorEl);
  const referringPersonPopOverOpen = Boolean(referringPersonAnchorEl);
  const referringCenterPopOverOpen = Boolean(referringCenterAnchorEl);
  const popOpen = Boolean(anchorEl);
  const popId = open ? 'simple-popover' : undefined;

  const deletePatientTest=(e, id)=>{
    props.deletePatientTest(id)
    e.stopPropagation();
    handleClose()
  }
  
  const handleClick = (event, id) => {
    event.stopPropagation()
    setId(id)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchPatientTestDetails = (id) => {

    window.location.href=`http://localhost:3000/admin/patientTest/${id}`
  }
  return (
    <div>
      <div className="d-flex">
        <h2 className="mb3">Patient Test</h2>
        <div className="d-inline ml-auto select-test">
        <TextField
          onChange={e => setIsComplete(e.target.value)}
          id="outlined-basic"
          select
          SelectProps={{
            native: true,
          }}
          fullWidth
          variant="outlined"
          size="small"
        >
          <option selected disabled hidden >Select Type</option>
          <option value="true">Complete</option>
          <option value="false" >Incomplete</option>
          <option value="true">Signed</option>
        </TextField>
        </div>
        <div className="d-inline ml-auto">
          <Button variant="outlined" color="primary" onClick={()=>showDateLevel()} className="search-button">
            {
              endDate?<span>{moment(endDate).format('MMMM Do YYYY')}-</span>:''
            }
          <span style={{marginRight:10}}>{startDate?moment(startDate).format('MMMM Do YYYY'):moment(Date.now()).format('MMMM Do YYYY')}</span><CalendarTodayIcon />
          </Button>
          {dateLebel?<SelectDate setStartDate={setStartDate} setEndDate={setEndDate} />:''}
        </div>  
      </div>
      <div style={{marginBottom:'10px'}}>
      <Grid container spacing={3} style={{width:'70%'}}>
        <Grid item md={3} className="customSearch">
          <Button
            activeClassName={classes.active}
            id="contact-button"
            onClick={handlePatientClick}
          >
            Patients
          {open ? <ExpandLess /> : <ExpandMore />}
          </Button>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <TextField
              onChange={e=>setPatientSearchTerm(e.target.value)}
              placeholder="Search by any field"
              variant="outlined"
              size="small"
              type="text"
              value={patientSearchTerm}
              fullWidth
            />
          </Collapse>
        </Grid>
        <Grid item md={3} className="customSearch">
          <Button
            activeClassName={classes.active}
            className={classes.button}
            id="contact-button"
            onClick={handlePatientClick}
          >
            Guardians
          {open ? <ExpandLess /> : <ExpandMore />}
          </Button>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <TextField
              onChange={e=>setGuardianSearchTerm(e.target.value)}
              placeholder="Search by any field"
              variant="outlined"
              size="small"
              type="text"
              value={guardianSearchTerm}
              fullWidth
            />
          </Collapse>
        </Grid>
        <Grid item md={3} className="customSearch">
          <Button
            activeClassName={classes.active}
            className={classes.button}
            id="contact-button"
            onClick={handlePatientClick}
          >
            Referring Person
          {open ? <ExpandLess /> : <ExpandMore />}
          </Button>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <TextField
              onChange={e=>setReferringPersonSearchTerm(e.target.value)}
              placeholder="Search by any field"
              variant="outlined"
              size="small"
              type="text"
              value={referringPersonSearchTerm}
              fullWidth
            />
          </Collapse>
        </Grid>
        <Grid item md={3} className="customSearch">
          <Button
            activeClassName={classes.active}
            className={classes.button}
            id="contact-button"
            onClick={handlePatientClick}
          >
            Referring Center
          {open ? <ExpandLess /> : <ExpandMore />}
          </Button>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <TextField
              onChange={e=>setReferringCenterSearchTerm(e.target.value)}
              placeholder="Search by any field"
              variant="outlined"
              size="small"
              type="text"
              value={referringCenterSearchTerm}
              fullWidth
            />
          </Collapse>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{width:'30%'}}>
        
      </Grid>
      </div>
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <PerfectScrollbar>
          <Box minWidth={1050}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell >
                      Patient No
                  </TableCell>
                  <TableCell >
                    Patient Name
                </TableCell>
                  <TableCell>
                    Guardian
                </TableCell>
                  <TableCell>
                    Referring Person
                </TableCell>
                <TableCell>
                    Referring Center
                </TableCell>
                <TableCell>
                    Incomplete
                </TableCell>
                  <TableCell>
                    Completed
                </TableCell>
                  <TableCell>
                    Approved
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allPatientTest?
                allPatientTest.map((el, index) => (
                  <TableRow
                    hover
                    style={{cursor:'pointer'}}
                    onClick={()=> fetchPatientTestDetails(el._id)}
                  >  
                     <TableCell>
                      {el.patient?el.patient.patientNo:''}
                    </TableCell>
                    <TableCell>
                      <Box
                        alignItems="center"
                        display="flex"
                      >
                        <Typography
                          aria-owns={PatientPopOverOpen ? (index+1) : undefined}
                          aria-haspopup="true"
                          onMouseEnter={(e)=>handlePatientPopoverOpen(e, index+1)}
                          onMouseLeave={handlePatientPopoverClose}
                        >
                          {el.patient?el.patient.firstName:''} {el.patient?el.patient.lastName:''}
                        </Typography>
                      </Box>
                      <Popover
                          id={(index+1)}
                          className={classes.popover}
                          open={PatientPopOverOpen}
                          anchorEl={patienAnchorEl}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                          }}
                          onClose={handlePatientPopoverClose}
                          disableRestoreFocus
                        > 
                          {el.patient && id==index+1?
                            <div className="popover-layout">
                              <Typography style={{fontSize:12}}>Email: {el.patient.email}</Typography>
                              <Typography style={{fontSize:12}}>Mobile Number: {el.patient.mobileNumber1}</Typography>
                              <Typography style={{fontSize:12}}>Age: {el.patient.age}</Typography>
                              <Typography style={{fontSize:12}}>Gender: {el.patient.gender}</Typography>
                            </div>:''
                          }
                        </Popover>
                    </TableCell>
                    <TableCell>
                      <Box
                        alignItems="center"
                        display="flex"
                      >
                        <Typography
                          aria-owns={guardianPopOverOpen ? (index+2) : undefined}
                          aria-haspopup="true"
                          onMouseEnter={(e)=>handleGuardianPopoverOpen(e, index+1)}
                          onMouseLeave={handleGuardianPopoverClose}
                        >
                          {el.guardian?el.guardian.firstName:''} {el.guardian?el.guardian.lastName:''}
                        </Typography>
                      </Box>  
                      <Popover
                        id={(index+2)}
                        className={classes.popover}
                        open={guardianPopOverOpen}
                        anchorEl={guardianAnchorEl}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        onClose={handleGuardianPopoverClose}
                        disableRestoreFocus
                      >
                      {el.guardian && id==index+1?
                        <div className="popover-layout">
                          <Typography style={{fontSize:12}}>Email: {el.guardian.email}</Typography>
                          <Typography style={{fontSize:12}}>Mobile Number: {el.guardian.mobileNumber}</Typography>
                          <Typography style={{fontSize:12}}>RelationshipToPatient: {el.guardian.relationshipToPatient}</Typography>
                        </div>:''
                      }
                    </Popover>
                    </TableCell>
                    <TableCell>
                    <Box
                        alignItems="center"
                        display="flex"
                      >
                        <Typography
                          aria-owns={referringPersonPopOverOpen ? (index+3) : undefined}
                          aria-haspopup="true"
                          onMouseEnter={(e)=>handleReferringPersonPopoverOpen(e, index+1)}
                          onMouseLeave={handleReferringPersonPopoverClose}
                        >
                          {el.referringPerson?el.referringPerson.firstName:''} {el.referringPerson?el.referringPerson.lastName:''}
                        </Typography>
                      </Box> 
                    </TableCell>
                    <Popover
                      id={(index+3)}
                      className={classes.popover}
                      open={referringPersonPopOverOpen}
                      anchorEl={referringPersonAnchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      onClose={handleReferringPersonPopoverClose}
                      disableRestoreFocus
                    >
                      {el.referringPerson && id==index+1?
                        <div className="popover-layout">
                          <Typography style={{fontSize:12}}>Email: {el.referringPerson.email}</Typography>
                          <Typography style={{fontSize:12}}>Mobile Number: {el.referringPerson.mobileNumber}</Typography>
                          <Typography style={{fontSize:12}}>Speciality: {el.referringPerson.speciality}</Typography>
                        </div>:''
                      }
                    </Popover>
                    <TableCell>
                      <Box
                        alignItems="center"
                        display="flex"
                      >
                        <Typography
                          aria-owns={referringCenterPopOverOpen ? (index+4) : undefined}
                          aria-haspopup="true"
                          onMouseEnter={(e)=>handleReferringCenterPopoverOpen(e, index+1)}
                          onMouseLeave={handleReferringCenterPopoverClose}
                        >
                          {el.referringCenter?el.referringCenter.nameofReferralCenter:''}
                        </Typography>
                      </Box> 
                      <Popover
                        id={(index+4)}
                        className={classes.popover}
                        open={referringCenterPopOverOpen}
                        anchorEl={referringCenterAnchorEl}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        onClose={handleReferringCenterPopoverClose}
                        disableRestoreFocus
                      >
                        {el.referringCenter && id==index+1?
                          <div className="popover-layout">
                            <Typography style={{fontSize:12}}>Center Email: {el.referringCenter.centerEmail}</Typography>
                            <Typography style={{fontSize:12}}>Phone1: {el.referringCenter.phone1}</Typography>
                            <Typography style={{fontSize:12}}>Phone2: {el.referringCenter.phone2}</Typography>
                            <Typography style={{fontSize:12}}>Name of Director: {el.referringCenter.nameofDirector}</Typography>
                          </div>:''
                        }
                      </Popover>
                    </TableCell>
                    <TableCell>
                      {el.tests?el.tests.length:0}
                    </TableCell>
                    <TableCell>
                    {0}
                    </TableCell>
                    <TableCell>
                      {0}
                    </TableCell>
                    <TableCell>
                      <Button className="pop-button" aria-describedby={id} onClick={(e)=>handleClick(e, index+1)}>
                        <MoreVertIcon />
                      </Button>
                      <Popover
                        id={popId}
                        open={popOpen}
                        anchorEl={anchorEl}
                        onClick={handleClose}
                        className={classes.popover}
                        classes={{
                          paper: classes.popoverContent,
                        }}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                        style={{ marginTop:6}}
                      >
                        {id==index+1?
                        <div className="popover-layout">
                          <Typography className={classes.typography} style={{fontSize:12, marginBottom:5}}>
                            Sign All({el.tests.length})
                          </Typography>
                          <Typography className={classes.typography} style={{fontSize:12}}>Review All</Typography>
                          <Typography className={classes.typography} style={{fontSize:12, cursor:'pointer'}} onClick={(e)=>deletePatientTest(e, el._id)}>Clear Test</Typography>
                        </div>:''
                        }
                      </Popover>
                    </TableCell>
                  </TableRow>
                )):''}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      </Card>
    </div>
  );
};

ReportManagement.propTypes = {
    getPatientTests:PropTypes.func.isRequired,
    deletePatientTest:PropTypes.func.isRequired,
    patientTests:PropTypes.array.isRequired,
    className: PropTypes.string,
};
const mapStateToProps = (state) => ({
  patientTests: state.patientTest.patientTests
})
export default connect(mapStateToProps, { getPatientTests, deletePatientTest })(ReportManagement);
