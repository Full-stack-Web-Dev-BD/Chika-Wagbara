import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddTotalDiscount=(props)=> {
    const { setTotalDiscount, totalBill }=props
    const [discountType, setDiscountType] = useState('')
    const [patientTotalDiscount, setPatientTotalDiscount] = useState('')
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const addTotalDiscount=(event)=>{
        event.preventDefault()
        if(discountType=="Concession (in NGN)"){
            setTotalDiscount(patientTotalDiscount)
        }else{
            setTotalDiscount((Number(patientTotalDiscount)*Number(totalBill))/100)
        }
        handleClose();
    }

    return (
        <div className="d-inline ml-auto">
        <Button variant="outlined" color="primary" className="search-button" onClick={handleClickOpen}>
            Enter Total Discount
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Total Discount</DialogTitle>
            <DialogContent>
            <form onSubmit={(e)=>addTotalDiscount(e)} style={{width:'400px'}}>
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
                        onChange={e=>setPatientTotalDiscount(e.target.value)}
                        margin="dense"
                        id="title"
                        label="Total Discount"
                        type="number"
                        fullWidth
                    />
                </div>
                </div>
                <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel </Button>
                <Button size="small"  variant="contained" type="submit">Add Total Discount</Button>
                </DialogActions>
            </form>
            </DialogContent>
        </Dialog>
        </div>
    );
}

export default AddTotalDiscount;