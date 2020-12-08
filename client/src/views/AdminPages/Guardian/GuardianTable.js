import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
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
import GuardianCreateModal from './GuardianCreateModal';
import GuardianUpdateModal from './GuardianUpdateModal'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux'
import { search} from '../../../utils/Search'
import { getGuardians, deleteGuardian } from '../../../actions/guardianAction'
const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const GuardianTable = (props) => {
  const { guardians, className, ...rest }=props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('')
  const [allGuardian, setAllGuargdian] = useState([])
  
  useEffect(()=>{
    props.getGuardians()
  }, [])

  useEffect(()=>{
    setAllGuargdian(search(guardians, searchTerm))
  }, [searchTerm])

  useEffect(()=>{
    setAllGuargdian(guardians)
  }, [guardians])  

  // Delete Branch
  const deleteGuardian = id => {
    props.deleteGuardian(id)
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="d-flex">
        <h2 className="mb3">Guardians</h2>
        <GuardianCreateModal />
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
                    email
                </TableCell>
                  <TableCell>
                    RelationshipToPatient
                </TableCell>
                  <TableCell >
                    Action
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allGuardian?
                allGuardian.map(el => (
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
                      {el.firstname} {el.lastName}
                    </TableCell>
                    <TableCell>
                      {el.mobileNumber}
                    </TableCell>
                    <TableCell>
                      {el.email}
                    </TableCell>
                    <TableCell>
                      {el.relationshipToPatient}
                    </TableCell>
                    <TableCell>
                      <div>
                        <GuardianUpdateModal id={el._id}/>
                        <span onClick={e => deleteGuardian(el._id)}><DeleteOutlineIcon style={{ cursor: "pointer" }} /></span>
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

GuardianTable.propTypes = {
    getGuardians:PropTypes.func.isRequired,
    deleteGuardian:PropTypes.func.isRequired,
    className: PropTypes.string,
    guardians: PropTypes.array.isRequired
};
const mapStateToProps = (state) => ({
  guardians: state.guardian.guardians
})
export default connect(mapStateToProps, { getGuardians, deleteGuardian })(GuardianTable);
