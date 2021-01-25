import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getReferringCenter } from '../../../actions/referringCenterAction'
import UpdateForm from './UpdateForm';

const  ReferringCenterUpdateModal=(props)=> {
  const { id, referringCenter }=props
  const [open, setOpen] = React.useState(false);

  useEffect(()=>{
    props.getReferringCenter(id);
  }, [])
  
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className="d-inline ml-auto">
      <span title="Edit Branch" style={{cursor:"pointer"}} onClick={handleClickOpen}><EditOutlinedIcon/></span>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden', lineHeight: '0' }}>
              Please  enter required all filed to Update a Branch Please  enter required all
            </p>
          </DialogContentText>
          <UpdateForm referringCenter={referringCenter} handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
ReferringCenterUpdateModal.propTypes = {
  getReferringCenter:PropTypes.func.isRequired,
  className: PropTypes.string,
  referringCenter: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  referringCenter: state.referringCenter.referringCenter
})
export default connect(mapStateToProps, { getReferringCenter })(ReferringCenterUpdateModal)
