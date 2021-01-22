import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddDiscount=(props)=> {
    const { testPrice, setTestPrice, index, setTestIndex }=props
    const [price, setPrice] = useState('')    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(()=>{
        setPrice(testPrice)
    }, [])

    const editBillTest=(event)=>{
        event.preventDefault()
        setTestPrice(price)
        setTestIndex(index)
        handleClose();
    }
    
    return (
        <div className="d-inline ml-auto">
        <Button className="discount-button" onClick={handleClickOpen} style={{textTransform:'none'}}>
            Edit
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit Bill Test</DialogTitle>
            <DialogContent>
            <form onSubmit={(e)=>editBillTest(e)} style={{width:'400px'}}>
                <div className="row">
                <div className="col-md-12" style={{marginBottom:10}}>
                    <TextField
                        variant="outlined"
                        size="small"
                        id="testQuantity"
                        label="Test Quantity"
                        type="number"
                        value={1}
                        fullWidth
                    />
                </div>
                <div className="col-md-12" style={{marginBottom:10}}>
                    <TextField
                        variant="outlined"
                        size="small"
                        id="sellingPrice"
                        label="Selling Price"
                        type="number"
                        value={0.00}
                        fullWidth
                    />
                </div>
                <div className="col-md-12" style={{marginBottom:10}}>
                    <TextField
                        variant="outlined"
                        size="small"
                        id="amount"
                        label="Amount"
                        onChange={(e)=> setPrice(e.target.value)}
                        type="number"
                        value={price}
                        fullWidth
                    />
                </div>
                <div className="col-md-12">
                    <TextField
                        variant="outlined"
                        size="small"
                        id="concession"
                        label="Concession"
                        type="number"
                        value={0}
                        fullWidth
                    />
                </div>
                </div>
                <DialogActions>
                <Button onClick={handleClose} color="primary" style={{textTransform:'none'}}>Cancel </Button>
                <Button size="small"  variant="contained" type="submit" style={{textTransform:'none'}}>Edit Bill</Button>
                </DialogActions>
            </form>
            </DialogContent>
        </Dialog>
        </div>
    );
}

export default AddDiscount;