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
import BranchCreateModal from './BranchCreateModal';
import BranchUpdateModal from './BranchUpdateModal';
import Axios from 'axios';
import ViewBranchDetails from './ViewBranchDetails';

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
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
  {

    name: "name",
    location: "location",
    address: "address",
    city: "city",
    state: "state",
    phone1: "98120341",
    phone2: "98120342",
    email: "email",
    branchId: "branchId",
  },
]


const BranchTable = ({ className, customers, ...rest }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [allBranch, setAllBranch] = useState([])
  
  
  useEffect(()=>{
    Axios.get('/getbraqnchapi')
    .then(res=>{
      setAllBranch(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteBranch=(id)=>{
    Axios.delete(`/deleteApi/${id}`)
    .then(res=>{
      window.location.reload()
    })
    .catch(err=>{
      console.log(err);
    })
  }
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
                    State
                </TableCell>
                  <TableCell>
                    Phone
                </TableCell>
                  <TableCell>
                    Email
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
                      {el.state}
                    </TableCell>
                    <TableCell>
                      {el.phone1}
                    </TableCell>
                    <TableCell>
                      {el.email}
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
                          <MenuItem > <ViewBranchDetails branch={el} /> </MenuItem>
                          <MenuItem onClick={e=>deleteBranch(el._id)}>Delete</MenuItem>
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
