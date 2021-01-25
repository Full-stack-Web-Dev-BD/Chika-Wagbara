import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


const EditAdditionalBill=(props)=> {
    const { additionalBill, setAdditionalBill, totalAmountToPay, setTotalAmountToPay, remainingBalance, setRemainingBalance }=props
    const [reason, setReason] = useState('')
    const [bill, setBill] = useState('')
    const [totalBill, setTotalBill] = useState([])
    const [remainBalance, setRemainBalance] = useState('')
    const [payAmount, setPayAmount] = useState('')
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    useEffect(()=>{
        setTotalBill(additionalBill);
        setPayAmount(totalAmountToPay)
        setRemainBalance(remainingBalance)
    }, [])

    const addAdditionalBill=(event)=>{
        event.preventDefault()
        if(reason && bill){
            let bills=[...totalBill]
            let willPay=payAmount
            let dueAmount=remainBalance
            bills.push({additionalBillReason:reason, additionalBillPrice:bill})
            setAdditionalBill(bills);
            setTotalAmountToPay(willPay+Number(bill))
            setRemainingBalance(dueAmount+Number(bill))
        }
        setReason('')
        setBill('')
        handleClose();
    }

    return (
        <div className="d-inline ml-auto">
        <Button className="discount-button" style={{textTransform:'none', minWidth:25}} onClick={handleClickOpen}>
          <EditOutlinedIcon />
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit Additional Bill</DialogTitle>
            <DialogContent>
            <form onSubmit={(e)=>addAdditionalBill(e)} style={{width:'400px'}}>
                <div className="row">
                    <div className="col-md-12">
                        <TextField
                        onChange={e=>setReason(e.target.value)}
                        margin="dense"
                        variant="outlined"
                        id="reason"
                        label="Reason for additional bill"
                        type="text"
                        fullWidth
                        />
                    </div>
                    <div className="col-md-12">
                        <TextField
                            onChange={e=>setBill(e.target.value)}
                            margin="dense"
                            variant="outlined"
                            id="bill"
                            label="Price"
                            type="number"
                            fullWidth
                        />
                    </div>
                </div>
                <DialogActions style={{padding:'7px 0px 7px 7px'}}>
                <Button onClick={handleClose} color="primary" size="small" style={{textTransform:'none', border:'1px solid lightgray'}}>Cancel </Button>
                <Button size="small"  variant="contained" type="submit" style={{textTransform:'none'}}>Add Bill</Button>
                </DialogActions>
            </form>
            </DialogContent>
        </Dialog>
        </div>
    );
}

export default EditAdditionalBill;