import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  Menu,
  MenuItem,
  Button
} from '@material-ui/core';
import axios from 'axios';
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
  const classes = useStyles();
  const getAllStaff = () => {
    axios
      .get('/api/staffs/allStaff')
      .then(res => {
        setAllStaff(res.data)
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
      <h2 >All Staff</h2>
      <div className="p2"></div>
      <StaffCreateModal getAllStaff={getAllStaff} />
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <PerfectScrollbar>
          <Box minWidth={1050}>
            <Table>
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
