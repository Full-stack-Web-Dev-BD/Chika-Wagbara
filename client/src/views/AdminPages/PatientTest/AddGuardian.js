import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AddCircle } from '@material-ui/icons';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addGuardian } from '../../../actions/guardianAction'

const GuardianCreateModal=(props)=> {
    const { setGuardianEmail }=props
    const [email, setEmail] = useState('')
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const addGuardian=(event)=>{
        event.preventDefault()
        setGuardianEmail(email)
        handleClose();
    }

    return (
        <div className="d-inline ml-auto">
        <Button variant="outlined" color="primary" className="search-button" onClick={handleClickOpen}>
        <AddCircle/> Add Guardian
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Guardian</DialogTitle>
            <DialogContent>
            <form onSubmit={(e)=>addGuardian(e)} style={{width:'400px'}}>
                <div className="row">
                    <div className="col-md-12">
                        <TextField
                        onChange={e=>setEmail(e.target.value)}
                        autoFocus
                        required
                        margin="dense"
                        id="title"
                        label="Guardian Email"
                        type="email"
                        fullWidth
                        />
                    </div>
                </div>
                <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel </Button>
                <Button size="small"  variant="contained" type="submit">Add Guardian</Button>
                </DialogActions>
            </form>
            </DialogContent>
        </Dialog>
        </div>
    );
}

GuardianCreateModal.propTypes = {
  addGuardian:PropTypes.func.isRequired,
  className: PropTypes.string,
};
const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps, { addGuardian })(GuardianCreateModal)