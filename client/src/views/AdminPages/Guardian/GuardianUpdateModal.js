import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UpdateForm from './UpdateForm'
import { getGuardian } from '../../../actions/guardianAction'

const GuardianCreateModal=(props)=> {
  const { guardian, id }=props
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    props.getGuardian(id)
  }, [])

  return (
    <div className="d-inline ml-auto">
      <span title="Edit Branch" style={{cursor:"pointer"}} onClick={handleClickOpen}><EditOutlinedIcon/></span>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Guardian</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden',lineHeight:'0' }}>
              Please  enter required all filed to create a Branch Please  enter required all
            </p>
          </DialogContentText>
          <UpdateForm guardian={guardian} handleClose={handleClose}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}

GuardianCreateModal.propTypes = {
  getGuardian:PropTypes.func.isRequired,
  className: PropTypes.string,
  guardian: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  guardian:state.guardian.guardian
})
export default connect(mapStateToProps, { getGuardian })(GuardianCreateModal)