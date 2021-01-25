import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddTotalDiscount=(props)=> {
    const { totalDiscount, setTotalDiscount, totalAmountToPay, setTotalAmountToPay, remainingBalance, setRemainingBalance }=props
    const [discountType, setDiscountType] = useState('')
    const [patientTotalDiscount, setPatientTotalDiscount] = useState('')
    const [discount, setDiscount] = useState('')
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(()=>{
        setDiscount(totalDiscount)
        setPatientTotalDiscount(totalDiscount)
        setDiscountType('')
    }, [])

    const addTotalDiscount=(event)=>{
        event.preventDefault()
        if(discountType=="Concession (in NGN)"){
            console.log(totalAmountToPay)
            console.log(remainingBalance)
            console.log(totalDiscount)
            setTotalAmountToPay(Number(totalAmountToPay)+Number(discount)-Number(patientTotalDiscount))
            setRemainingBalance(Number(remainingBalance)+Number(discount)-Number(patientTotalDiscount))
            setTotalDiscount(patientTotalDiscount)
        }else{
            let amountToPay=Number(totalAmountToPay)+Number(discount)
            let remain=Number(remainingBalance)+Number(discount)
            let allDiscount=(Number(patientTotalDiscount)*Number(amountToPay))/100
            setTotalAmountToPay(amountToPay-allDiscount)
            setRemainingBalance(remain-allDiscount)
            setTotalDiscount(allDiscount)
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
                        id="discount"
                        label="Discount Type"
                        type="text"
                        variant="outlined"
                        fullWidth
                        select
                        SelectProps={{
                            native: true,
                        }}
                    >
                        <option selected="selected" selected disabled hidden>Discount Type</option>
                        <option value="Concession (in NGN)">Concession (in NGN)</option>
                        <option value="Concession (in %)">Concession (in %)</option>
                    </TextField>
                </div>
                <div className="col-md-12">
                    <TextField
                        onChange={e=>setPatientTotalDiscount(e.target.value)}
                        margin="dense"
                        id="price"
                        variant="outlined"
                        label="Total Discount"
                        value={patientTotalDiscount}
                        type="number"
                        fullWidth
                    />
                </div>
                </div>
                <DialogActions>
                <Button onClick={handleClose} color="primary" size="small" style={{textTransform:'none', border:'1px solid lightgray'}}>Cancel </Button>
                <Button size="small"  variant="contained" type="submit" style={{textTransform:'none'}}>Add Discount</Button>
                </DialogActions>
            </form>
            </DialogContent>
        </Dialog>
        </div>
    );
}

export default AddTotalDiscount;