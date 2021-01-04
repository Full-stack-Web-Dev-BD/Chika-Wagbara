import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import PropTypes from 'prop-types'
import {
  makeStyles
} from '@material-ui/core';
import { connect } from 'react-redux'
import UpdateForm from './UpdateForm'
import { getPatient } from '../../../actions/patientAction'


const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));
const UpdatePatient=(props)=> {
  const classes = useStyles();
  const { id, patient, className, ...rest }=props
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
      props.getPatient(id)
  }, [])
  console.log(id)
  console.log(patient)
  return (
    <div className="d-inline ml-auto">
        <span title="Edit Branch" style={{cursor:"pointer"}} onClick={handleClickOpen}><EditOutlinedIcon/></span>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Patient</DialogTitle>
            <DialogContent>
            <DialogContentText>
                <p style={{ visibility: 'hidden',lineHeight:'0' }}>
                Please  enter required all filed to create a Branch Please  enter required all
                </p>
            </DialogContentText>
            <UpdateForm patient={patient} handleClose={handleClose}/>
            </DialogContent>
        </Dialog>
    </div>
  );
}
UpdatePatient.propTypes = {
  getPatient:PropTypes.func.isRequired,
  patient:PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  patient:state.patient.patient
})
export default connect(mapStateToProps, { getPatient })(UpdatePatient)