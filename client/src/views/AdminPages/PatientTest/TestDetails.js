import React, {useState} from 'react'
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
  Button,
  makeStyles,
} from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import moment from 'moment'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ReportPdfView from './ReportPdfView'


const useStyles = makeStyles((theme) => ({
    root: {margin: theme.spacing(2)},
}));

const TestDetails=(props)=>{
  const { patientTest, className, ...rest }=props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [test, setTest] = useState({});


  const popOpen = Boolean(anchorEl);
  const popId = open ? 'simple-popover' : undefined;

  const handleClick = (event, id) => {
    event.stopPropagation()
    setId(id)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const deletePatientTest=(e, id)=>{
    props.deletePatientTest(id)
    e.stopPropagation();
    handleClose()
  }

  const handleClickOpen = (test) => {
    setTest(test)
    setModalOpen(true)
  };

  const handleClickClose = () => {
    setModalOpen(false);
  };
  
  return(
      <Card
          className={clsx(classes.root, className)}
          {...rest}
      >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  Bill Id
              </TableCell>
                <TableCell>
                  Test
              </TableCell>
                <TableCell>
                  Test Status
              </TableCell>
              <TableCell>
                  Accession Date
              </TableCell>
              <TableCell>
                  Payment
              </TableCell>

              <TableCell>
              
              </TableCell>
              <TableCell>
              
              </TableCell>
              <TableCell>
              
              </TableCell>
              <TableCell>
              
              </TableCell>
              
              </TableRow>
            </TableHead>
            <TableBody>
              {patientTest.tests?
              patientTest.tests.map((el, index) => (
                <TableRow
                  hover
                  key={index}
                  onClick={()=>handleClickOpen(el.test)}
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
                        {patientTest.patient.patientNo}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {el.test.testName}
                  </TableCell>
                  <TableCell>
                    {el.isComplete?
                    <span style={{padding:'3px 5px'}}>Complete</span>:
                    <span style={{padding:'3px 5px'}}>Incomplete</span>
                    }
                  </TableCell>
                  <TableCell>
                  {moment(patientTest.date).format('MMMM Do YYYY')}
                  </TableCell>
                  <TableCell>
                    {
                      patientTest.totalAmountToPay-patientTest.paidAmount>0?
                      <span style={{color:'red', padding:'3px 5px'}}>Due</span>:
                      <span style={{backgroundColor:'green', padding:'3px 5px'}}>Paid</span>
                    }
                  </TableCell>
                  <TableCell>
                    
                  </TableCell>
                  <TableCell style={{paddingRight:'5px'}}>
                    <Button variant="outlined" className="button-main" color="primary" style={{height:30, marginRight:-30}}>Preview</Button>
                  </TableCell>
                  <TableCell style={{paddingRight:'10px'}}>
                  <Button variant="outlined" className="button-main" color="primary" style={{height:30, marginRight:-30}}>Sign</Button>
                  </TableCell>
                  <TableCell>
                    <Button className="pop-button" style={{marginRight:-40}} aria-describedby={id} onClick={(e)=>handleClick(e, index+1)}>
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
                          Notify Doctor
                        </Typography>
                        <Typography className={classes.typography} style={{fontSize:12}}>Clear Report</Typography>
                        <Typography className={classes.typography} style={{fontSize:12, cursor:'pointer'}} onClick={(e)=>deletePatientTest(e, el._id)}>Redo Report</Typography>
                        <Typography className={classes.typography} style={{fontSize:12, cursor:'pointer'}} onClick={(e)=>deletePatientTest(e, el._id)}>Dismiss Report</Typography>
                      </div>:''
                      }
                    </Popover>
                  </TableCell>
                </TableRow>
              )):''}
              <ReportPdfView modalOpen={modalOpen} handleClickClose={handleClickClose} test={test}/>
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  )
}

export default TestDetails