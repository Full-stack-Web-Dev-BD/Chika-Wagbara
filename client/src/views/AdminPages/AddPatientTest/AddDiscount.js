import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AddCircle } from '@material-ui/icons';

const AddDiscount=(props)=> {
    const { setDiscount, setTestIndex, index, testPrice }=props
    const [discountType, setDiscountType] = useState('')
    const [patientDiscount, setPatientDiscount] = useState('')
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const addDiscount=(event)=>{
        event.preventDefault()
        if(discountType=="Concession (in NGN)"){
            setDiscount(patientDiscount)
        }else{
            setDiscount((Number(patientDiscount)*Number(testPrice))/100)
        }
        setTestIndex(index)
        handleClose();
    }
    
    return (
        <div className="d-inline ml-auto">
        <Button className="discount-button" onClick={handleClickOpen}>
        <AddCircle/>
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Discount</DialogTitle>
            <DialogContent>
            <form onSubmit={(e)=>addDiscount(e)} style={{width:'400px'}}>
                <div className="row">
                <div className="col-md-12">
                    <TextField
                        onChange={e=>setDiscountType(e.target.value)}
                        margin="dense"
                        id="title"
                        label="Discount Type"
                        type="text"
                        value={discountType}
                        fullWidth
                        select
                        SelectProps={{
                            native: true,
                        }}
                    >
                        <option value="" selected disabled hidden>Discount Type</option>
                        <option value="Concession (in NGN)" selected="selected">Concession (in NGN)</option>
                        <option value="Concession (in %)">Concession (in %)</option>
                    </TextField>
                </div>
                <div className="col-md-12">
                    <TextField
                        onChange={e=>setPatientDiscount(e.target.value)}
                        margin="dense"
                        id="title"
                        label="Discount"
                        type="number"
                        fullWidth
                    />
                </div>
                </div>
                <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel </Button>
                <Button size="small"  variant="contained" type="submit">Add Discount</Button>
                </DialogActions>
            </form>
            </DialogContent>
        </Dialog>
        </div>
    );
}

export default AddDiscount;