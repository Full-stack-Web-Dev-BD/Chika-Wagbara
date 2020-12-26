import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
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
import { search } from '../../../utils/Search'
import { getPatientTests, deletePatientTest } from '../../../actions/patientTestAction'
import AddPatient from './AddPatient';
import UpdatePatient from './UpdatePatient'
import ViewPatientDetails from './ViewPatientDetails'
const useStyles = makeStyles((theme) => ({
  root: {margin: theme.spacing(2)},
  avatar: {
    marginRight: theme.spacing(2)
  },
  h2:{
    margin: theme.spacing(2)
  }
}));

const ReportManagement = (props) => {
  const { patientTests, className, ...rest }=props

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('')
  const [allPatientTest, setAllPatientTest] = useState('')

  useEffect(() => {
    props.getPatientTests();
  }, [])

  useEffect(() => {
    setAllPatientTest(patientTests)
  }, [patientTests])

  useEffect(() => {
    setAllPatientTest(patientTests.filter(data => Object.values(data.patient).filter(v => v.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase()) !== -1).length > 0))
  }, [searchTerm])


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deletePatientTest=(id)=>{
    props.deletePatientTest(id)
  }
  
  return (
    <div>
      <div className="d-flex" style={{margin:'20px'}}>
        <h2 className="mb3">Patients</h2>
      </div>
      <div style={{marginBottom:'10px', marginLeft:'20px', marginRight:'20px'}}>
        <TextField
          onChange={e=>setSearchTerm(e.target.value)}
          margin="dense"
          placeholder="Search by any field"
          type="text"
          value={searchTerm}
          fullWidth
        />
      </div>
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <PerfectScrollbar>
          <Box minWidth={1050}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell >
                      Patient No
                  </TableCell>
                  <TableCell >
                    Patient Name
                </TableCell>
                  <TableCell>
                    Title
                </TableCell>
                  <TableCell>
                    Email
                </TableCell>
                <TableCell>
                    Mobile Number
                </TableCell>
                  <TableCell>
                    Age
                </TableCell>
                  <TableCell>
                    Address
                </TableCell>
                  <TableCell style={{width:'120px'}}>
                    Action
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allPatientTest?
                allPatientTest.map(el => (
                  <TableRow
                    hover
                    style={{cursor:'pointer'}}
                  >  
                     <TableCell>
                      {el.patient.patientNo}
                    </TableCell>
                    <TableCell>
                      <Box
                        alignItems="center"
                        display="flex"
                      >
                        <Typography
                          color="textPrimary"
                          variant="body1"
                        >
                          {el.patient.firstName} {el.patient.lastName}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {el.patient.title}
                    </TableCell>
                    <TableCell>
                      {el.patient.email}
                    </TableCell>
                    <TableCell>
                      {el.patient.mobileNumber1}
                    </TableCell>
                    <TableCell>
                      {el.patient.age}
                    </TableCell>
                    <TableCell>
                      {el.patient.address}
                    </TableCell>
                    <TableCell style={{width:'120px'}}>
                      <div>
                        <UpdatePatient id={el._id} />
                        <span onClick={e => deletePatientTest(el._id)}><DeleteOutlineIcon style={{ cursor: "pointer" }} /></span>
                        <ViewPatientDetails id={el._id} />
                      </div>
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
