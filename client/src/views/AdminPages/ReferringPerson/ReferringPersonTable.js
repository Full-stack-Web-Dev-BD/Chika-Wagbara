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
import ReferringPersonCreateModal from './ReferringPersonCreateModal';
import ReferringPersonUpdateModal from './ReferringPersonUpdateModal';
import axios from 'axios';
import ViewReferringPersonDetails from './ViewReferringPersonDetails';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux'
import { getReferringPersons, deleteReferringPerson } from '../../../actions/referringPersonAction'
const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const ReferringPersonTable = (props) => {
  const { referringPersons, className, ...rest }=props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  
  useEffect(()=>{
    props.getReferringPersons()
  }, [])
  
  // Delete Branch
  const deleteReferringPerson = id => {
   props.deleteReferringPerson(id)
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(referringPersons)
  return (
    <div>
      <div className="d-flex">
        <h2 className="mb3">Referring Persons</h2>
        <ReferringPersonCreateModal />
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
                    Title
                </TableCell>
                  <TableCell>
                    Name
                </TableCell>
                  <TableCell>
                    Mobile Number
                </TableCell>
                <TableCell>
                    Email
                </TableCell>
                  <TableCell>
                    Speciality
                </TableCell>
                  <TableCell>
                    Primary Place of Practice
                </TableCell>
                  <TableCell >
                    Action
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {referringPersons.map(el => (
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
                          {el.title}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {el.firstName} {el.lastName}
                    </TableCell>
                    <TableCell>
                      {el.mobileNumber}
                    </TableCell>
                    <TableCell>
                      {el.email}
                    </TableCell>
                    <TableCell>
                      {el.speciality}
                    </TableCell>
                    <TableCell>
                      {el.primaryPlaceofPractice}
                    </TableCell>
                    <TableCell>
                      <div>
                        <ReferringPersonUpdateModal id={el._id} />
                        <span onClick={e => deleteReferringPerson(el._id)}><DeleteOutlineIcon style={{ cursor: "pointer" }} /></span>
                        <ViewReferringPersonDetails id={el._id} />
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

ReferringPersonTable.propTypes = {
  getReferringPersons:PropTypes.func.isRequired,
  deleteReferringPerson:PropTypes.func.isRequired,
  className: PropTypes.string,
  referringPersons: PropTypes.array.isRequired
};
const mapStateToProps = (state) => ({
  referringPersons: state.referringPerson.referringPersons
})
export default connect(mapStateToProps, { getReferringPersons, deleteReferringPerson })(ReferringPersonTable);
