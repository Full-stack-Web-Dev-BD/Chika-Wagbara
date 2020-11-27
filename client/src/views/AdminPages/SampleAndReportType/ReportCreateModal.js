import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AddCircle } from '@material-ui/icons';


import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { addReportType } from '../../../actions/reportTypeAction'

const ReportCreateModal=(props)=> {

  
  const [name, setName] = useState('')
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const addReportType =(e)=> {
    e.preventDefault()
    const newReport={
      name:name,
    }
    props.addReportType(newReport);
    handleClose()
  };

  return (
    <div className="d-inline ml-auto">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       <AddCircle/> Create Report
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Report </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden', lineHeight: '0' }}>
              Please  enter required all filed to Update a Branch Please  enter required all
            </p>
          </DialogContentText>
          <form onSubmit={e => { addReportType(e) }}>
          <div className="row">
            <div className="col-md-6">
              <TextField
                onChange={e => setName(e.target.value)}
                autoFocus
                required
                margin="dense"
                id="name"
                label="Report Type"
                type="text"
                fullWidth
              />
            </div>
          </div>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Cancel </Button>
            <Button size="small" variant="contained" type="submit" >Create</Button>
          </DialogActions>
        </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
ReportCreateModal.propTypes = {
  addReportType: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(mapStateToProps, { addReportType })(ReportCreateModal);
