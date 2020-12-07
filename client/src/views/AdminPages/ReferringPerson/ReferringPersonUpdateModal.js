import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getReferringPerson } from '../../../actions/referringPersonAction'
import UpdateForm from './UpdateForm';

const  ReferringPersonUpdateModal=(props)=> {
  const { id, referringPerson }=props
  const [open, setOpen] = React.useState(false);

  useEffect(()=>{
    props.getReferringPerson(id);
  }, [])
  
  console.log(referringPerson)
  
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
          <UpdateForm referringPerson={referringPerson} handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
ReferringPersonUpdateModal.propTypes = {
  getReferringPerson:PropTypes.func.isRequired,
  className: PropTypes.string,
  referringPerson: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  referringPerson: state.referringPerson.referringPerson
})
export default connect(mapStateToProps, { getReferringPerson })(ReferringPersonUpdateModal)
