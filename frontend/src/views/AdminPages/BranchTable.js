import React, { useState } from 'react';
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
import getInitials from 'src/utils/getInitials';
import BranchCreateModal from './BranchCreateModal';
import BranchUpdateModal from './BranchUpdateModal';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

let branches = [
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "phone1",
    phone2: "phone2",
    email: "email",
    branchId: "branchId",
  },
]


const BranchTable = ({ className, customers, ...rest }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="d-flex">
      <h2 className="mb3">Branches</h2>
        <BranchCreateModal />
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
                  <TableCell>
                    Branch Name
                </TableCell>
                  <TableCell>
                    Location
                </TableCell>
                  <TableCell>
                    Address
                </TableCell>
                  <TableCell>
                    City
                </TableCell>
                  <TableCell>
                    State
                </TableCell>
                  <TableCell>
                    Phone
                </TableCell>
                  <TableCell>
                    Email
                </TableCell>
                  <TableCell>
                    Branch ID
                </TableCell>
                  <TableCell>
                    Action
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {branches.map(el => (
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
                          {el.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {el.location}
                    </TableCell>
                    <TableCell>
                      {el.address}
                    </TableCell>
                    <TableCell>
                      {el.city}
                    </TableCell>
                    <TableCell>
                      {el.state}
                    </TableCell>
                    <TableCell>
                      {el.phone1}
                    </TableCell>
                    <TableCell>
                      {el.email}
                    </TableCell>
                    <TableCell>
                      {el.branchId}
                    </TableCell>
                    <TableCell>
                      <div>
                        <Button aria-controls="simple-menu" variant="contained" size="small" color="secondary" aria-haspopup="true" onClick={handleClick}>Action</Button>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}> <BranchUpdateModal branch={el} /> </MenuItem>
                          <MenuItem onClick={handleClose}>Delete</MenuItem>
                        </Menu>
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

BranchTable.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default BranchTable;
