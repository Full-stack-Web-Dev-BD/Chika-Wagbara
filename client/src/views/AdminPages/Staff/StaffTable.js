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
  makeStyles,
} from '@material-ui/core';
import axios from 'axios';
import { search } from '../../../utils/Search'
import StaffCreateModal from './StaffCreateModal';
import { DeleteOutline } from '@material-ui/icons';
import ViewStaffDetails from './ViewStaffDetails';
import UpdateStaff from './UpdateStaff';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));


const StaffTable = ({ className, customers, ...rest }) => {
  const [allStaff, setAllStaff] = useState([])
  const [staffs, setStaffs] = useState([])
  const [searchTerm, setSearchTerm]=useState('')

  const classes = useStyles();
  const getAllStaff = () => {
    axios
      .get('/api/staffs/allStaff')
      .then(res => {
        setStaffs(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Get single 
  const getSingleBranch = (id) => {
    axios
      .get(`/api/staffs/getSingle/${id}`)
      .then(res => {

      })
      .catch(err => {
        console.log(err);
      });
  };

  // Delete Branch


  useEffect(() => {
    getAllStaff()
  }, [])

  useEffect(()=>{
    setAllStaff(staffs)
  }, [staffs])

  useEffect(()=>{
    setAllStaff(search(staffs, searchTerm))
  }, [searchTerm])


  const deleteStaff = (id) => {
    axios.delete(`/api/staffs/delete/${id}`)
      .then(res => {
        getAllStaff()
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div>
      <div className="d-flex">
        <h2 className="mb3">All Staff</h2>
        <StaffCreateModal getAllStaff={getAllStaff} />
      </div>
      <div style={{marginBottom:'10px'}}>
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
                  <TableCell>
                    Staff ID
                </TableCell>
                  <TableCell>
                    First Name
                </TableCell>
                  <TableCell>
                    Last Name
                </TableCell>
                  <TableCell>
                    Email
                </TableCell>
                  <TableCell>
                    Phone
                </TableCell>
                  <TableCell>
                    Action
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allStaff.map(el => (
                  <TableRow
                    hover
                  >
                    <TableCell>
                      {el.staffNo}
                    </TableCell>
                    <TableCell>
                      {el.firstName}
                    </TableCell>
                    <TableCell>
                      {el.lastName}
                    </TableCell>
                    <TableCell>
                      {el.email1}
                    </TableCell>
                    <TableCell>
                      {el.mobileNumber1}
                    </TableCell>
                    <TableCell>
                      <div>
                        <UpdateStaff staff={el} getAllStaff={getAllStaff} />
                        <span onClick={e => deleteStaff(el._id)}><DeleteOutline style={{ cursor: "pointer" }} /></span>
                        <ViewStaffDetails staff={el} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      </Card>
    </div>
  );
};

StaffTable.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default StaffTable;
