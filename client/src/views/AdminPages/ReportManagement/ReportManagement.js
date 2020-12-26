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
  makeStyles
} from '@material-ui/core';
import { connect } from 'react-redux'
import { search } from '../../../utils/Search'
import { getPatients } from '../../../actions/patientAction'
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
  const { patients, className, customers, ...rest }=props

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('')
  const [allPatient, setAllPatient] = useState('')

  useEffect(() => {
    props.getPatients();
  }, [])

  useEffect(() => {
    setAllPatient(patients)
  }, [patients])

  useEffect(() => {
    setAllPatient(search(patients, searchTerm))
  }, [searchTerm])


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="d-flex" style={{margin:'20px'}}>
        <h2 className="mb3">Patients Test</h2>
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
                  <TableCell>
                      Nationality
                  </TableCell>
                  <TableCell >
                    Action
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allPatient?
                allPatient.map(el => (
                  <TableRow
                    hover
                    style={{cursor:'pointer'}}
                  >  
                     <TableCell>
                      {el.patientNo}
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
                          {el.firstName} {el.lastName}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {el.title}
                    </TableCell>
                    <TableCell>
                      {el.email}
                    </TableCell>
                    <TableCell>
                      {el.mobileNumber1}
                    </TableCell>
                    <TableCell>
                      {el.age}
                    </TableCell>
                    <TableCell>
                      {el.address}
                    </TableCell>
                    <TableCell>
                      {el.nationality}
                    </TableCell>
                    <TableCell>
                      <div>
                        {/* <span onClick={e => deleteBranch(el._id)}><DeleteOutlineIcon style={{ cursor: "pointer" }} /></span>
                        <ViewBranchDetails branch={el} /> */}
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
    getPatients:PropTypes.func.isRequired,
    patients:PropTypes.array.isRequired,
    className: PropTypes.string,
    customers: PropTypes.array.isRequired
};
const mapStateToProps = (state) => ({
  patients: state.patient.patients
})
export default connect(mapStateToProps, { getPatients })(ReportManagement);
