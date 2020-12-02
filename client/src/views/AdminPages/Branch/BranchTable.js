import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
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
import BranchCreateModal from './BranchCreateModal';
import BranchUpdateModal from './BranchUpdateModal';
import axios from 'axios';
import ViewBranchDetails from './ViewBranchDetails';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux'
const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const BranchTable = ({ className, customers, ...rest }) => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [allBranch, setAllBranch] = useState([])

  const getAllBranch = () => {
    axios
      .get('/api/branchs/allBranch')
      .then(res => {

        setAllBranch(res.data)
        console.log(res.data);
      }
      )
      .catch(err => {
        console.log(err);
      });
  };

  // Get single Branch
  const getSingleBranch = (id) => {
    axios
      .get(`/api/branchs/getSingle/${id}`)
      .then(res => {

      })
      .catch(err => {
        console.log(err);
      });
  };

  // Delete Branch
  const deleteBranch = id => {
    handleClose()
    let confirm = window.confirm("Are you sure to delete this Branch  ? ")
    if (confirm) {
      axios
        .delete(`/api/branchs/delete/${id}`)
        .then(res => {
          getAllBranch()
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getAllBranch()
  }, [])


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
        <BranchCreateModal getAllBranch={getAllBranch} />
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
                    Branch Name
                </TableCell>
                  <TableCell>
                    Location
                </TableCell>
                  <TableCell>
                    State
                </TableCell>
                <TableCell>
                    City
                </TableCell>
                  <TableCell>
                    Phone
                </TableCell>
                  <TableCell>
                    Email
                </TableCell>
                  <TableCell >
                    Action
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allBranch.map(el => (
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
                      {el.city}
                    </TableCell>
                    <TableCell>
                      {el.phone1}
                    </TableCell>
                    <TableCell>
                      {el.email}
                    </TableCell>
                    <TableCell>
                      <div>
                        <BranchUpdateModal branch={el} getAllBranch={getAllBranch} />
                        <span onClick={e => deleteBranch(el._id)}><DeleteOutlineIcon style={{ cursor: "pointer" }} /></span>
                        <ViewBranchDetails branch={el} />
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
const mapStateToProps = (state) => ({
  branch: state.branch
})
export default BranchTable;
