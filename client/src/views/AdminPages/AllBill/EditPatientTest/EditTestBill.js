import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


const EditTestBill=(props)=> {
    const { test, index, totalAmountToPay, setTotalAmountToPay, remainingBalance, setRemainingBalance, testData, setTestData }=props
    const [testPrice, setTestPrice] = useState('')    
    const [discount, setDiscount] = useState('')    
    const [testDiscount, setTestDiscount] = useState('')    
    const [finalPrice, setFinalPrice] = useState('')    
    const [allTest, setAllTest] = useState('')    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(()=>{
        setTestPrice(test.test.testPrice)
        setDiscount(test.discount?test.discount:0)
        setTestDiscount(test.discount?test.discount:0)
        setFinalPrice(test.finalPrice?test.finalPrice:test.test.testPrice)
        setAllTest(testData)
    }, [])

    useEffect(()=>{
        setFinalPrice(Number(test.test.testPrice)-Number(discount))
    }, [discount])

    const editBillTest=(event)=>{
        event.preventDefault()
        let tests=[...allTest]
        setTotalAmountToPay((Number(totalAmountToPay)+Number(testDiscount))-Number(discount))
        setRemainingBalance((Number(remainingBalance)+Number(testDiscount))-Number(discount))
        tests[index].discount=discount
        tests[index].finalPrice=finalPrice
        setTestData(tests)
        console.log(totalAmountToPay)
        console.log(testDiscount)
        console.log(discount)
        handleClose();
    }
    
    return (
        <div className="d-inline ml-auto">
        <Button className="discount-button" onClick={handleClickOpen} style={{textTransform:'none', minWidth:25}}>
          <EditOutlinedIcon />
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Upadte Test Bill</DialogTitle>
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
                        value={testPrice}
                        fullWidth
                    />
                </div>
                <div className="col-md-12" style={{marginBottom:10}}>
                    <TextField
                        variant="outlined"
                        size="small"
                        id="concession"
                        label="Concession"
                        onChange={(e)=> setDiscount(e.target.value)}
                        type="number"
                        value={discount}
                        fullWidth
                    />
                </div>
                <div className="col-md-12">
                    <TextField
                        variant="outlined"
                        size="small"
                        id="Final Price"
                        label="Concession"
                        type="number"
                        value={finalPrice}
                        fullWidth
                    />
                </div>
                </div>
                <DialogActions style={{padding:'7px 0px 7px 7px'}}>
                    <Button onClick={handleClose} color="primary" size="small" style={{textTransform:'none', border:'1px solid lightgray'}}>Cancel </Button>
                    <Button size="small"  variant="contained" type="submit" style={{textTransform:'none'}}>Edit Bill</Button>
                </DialogActions>
            </form>
            </DialogContent>
        </Dialog>
        </div>
    );
}

export default EditTestBill;