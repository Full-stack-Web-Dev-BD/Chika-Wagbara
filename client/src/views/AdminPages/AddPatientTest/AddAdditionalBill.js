import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addGuardian } from '../../../actions/guardianAction'

const GuardianCreateModal=(props)=> {
    const { setAdditionalBill }=props
    const [reason, setReason] = useState('')
    const [bill, setBill] = useState('')
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const addAdditionalBill=(event)=>{
        event.preventDefault()
        setAdditionalBill({reason:reason, price:bill})
        handleClose();
    }

    return (
        <div className="d-inline ml-auto">
        <Button variant="outlined" color="primary" className="search-button" onClick={handleClickOpen}>
          Enter Additional Bill
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Additional Bill</DialogTitle>
            <DialogContent>
            <form onSubmit={(e)=>addAdditionalBill(e)} style={{width:'400px'}}>
                <div className="row">
                    <div className="col-md-12">
                        <TextField
                        onChange={e=>setReason(e.target.value)}
                        margin="dense"
                        id="title"
                        label="Reason for additional bill"
                        type="text"
                        fullWidth
                        />
                    </div>
                    <div className="col-md-12">
                        <TextField
                            onChange={e=>setBill(e.target.value)}
                            margin="dense"
                            id="title"
                            label="Price"
                            type="number"
                            fullWidth
                        />
                    </div>
                </div>
                <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel </Button>
                <Button size="small"  variant="contained" type="submit">Add Bill</Button>
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