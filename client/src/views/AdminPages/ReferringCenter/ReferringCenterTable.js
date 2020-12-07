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
import ReferringCenterCreateModal from './ReferringCenterCreateModal';
import ReferringCenterUpdateModal from './ReferringCenterUpdateModal';
import ViewReferringCenterDetails from './ViewReferringCenterDetails';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux'
import { getReferringCenters, deleteReferringCenter } from '../../../actions/referringCenterAction'
const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const ReferringCenterTable = (props) => {
  const { referringCenters, className, ...rest }=props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  
  useEffect(()=>{
    props.getReferringCenters()
  }, [])
  
  // Delete Branch
  const deleteReferringCenter = id => {
   props.deleteReferringCenter(id)
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
        <h2 className="mb3">Referring Centers</h2>
        <ReferringCenterCreateModal />
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
                  Name of Center
                </TableCell>
                  <TableCell>
                  Category of Center
                </TableCell>
                  <TableCell>
                  Primary Speciality of Center
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                  <TableCell>
                  Center Email
                </TableCell>
                  <TableCell>
                  Name of Director
                </TableCell>
                  <TableCell >
                    Action
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {referringCenters?
                referringCenters.map(el => (
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
                          {el.nameofReferralCenter}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {el.categoryofReferralCenter}
                    </TableCell>
                    <TableCell>
                      {el.primarySpecilityofCenter}
                    </TableCell>
                    <TableCell>
                      {el.phone1}
                    </TableCell>
                    <TableCell>
                      {el.centerEmail}
                    </TableCell>
                    <TableCell>
                      {el.nameofDirector}
                    </TableCell>
                    <TableCell>
                      <div>
                        <ReferringCenterUpdateModal id={el._id} />
                        <span onClick={e => deleteReferringCenter(el._id)}><DeleteOutlineIcon style={{ cursor: "pointer" }} /></span>
                        <ViewReferringCenterDetails id={el._id} />
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

ReferringCenterTable.propTypes = {
  getReferringCenters:PropTypes.func.isRequired,
  deleteReferringCenter:PropTypes.func.isRequired,
  className: PropTypes.string,
  referringCenters: PropTypes.array.isRequired
};
const mapStateToProps = (state) => ({
  referringCenters: state.referringCenter.referringCenters
})
export default connect(mapStateToProps, { getReferringCenters, deleteReferringCenter })(ReferringCenterTable);
