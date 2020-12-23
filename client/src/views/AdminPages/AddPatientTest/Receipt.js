import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AddCircle } from '@material-ui/icons';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addGuardian } from '../../../actions/guardianAction'

const Receipt=(props)=> {
    const { setPatientEmail }=props
    const [email, setEmail] = useState('')
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const addPatient=(event)=>{
        event.preventDefault()
        setPatientEmail(email)
        handleClose();
    }

    return (
        <div className="d-inline ml-auto">
        <Button variant="outlined" color="primary" style={{width:'250px'}} onClick={handleClickOpen}>
            Confirm Payment
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogContent>
            <form onSubmit={(e)=>addPatient(e)} style={{width:'400px'}}>
                <div className="row">
                <div className="col-md-12">
                    <TextField
                    onChange={e=>setEmail(e.target.value)}
                    margin="dense"
                    id="title"
                    label="Patient Email"
                    type="email"
                    fullWidth
                    />
                </div>
                </div>
                <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel </Button>
                <Button size="small"  variant="contained" type="submit">Add Patient</Button>
                </DialogActions>
            </form>
            </DialogContent>
        </Dialog>
        </div>
    );
}

Receipt.propTypes = {
  addGuardian:PropTypes.func.isRequired,
  className: PropTypes.string,
};
const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps, { addGuardian })(Receipt)