import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AddCircle } from '@material-ui/icons';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    makeStyles
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    reason:{
        padding:'6px 6px 6px 0px',
        width:'60%'
    },
    price:{
        padding:'6px 6px 6px 0px',
        width:'30%'
    },
    deleteButton:{
        padding:'6px 6px 6px 0px',
        width:'10%'
    },
    paper: { 
        minWidth: "660px" 
    },
}));
  

const AddAdditionalBill=(props)=> {
    const classes = useStyles();
    const { additionalBill, setAdditionalBill, setTotalAdditionalBill }=props
    const [additionalBillReason, setAdditionalBillReason] = useState('')
    const [additionalBillPrice, setAdditionalBillPrice] = useState('')
    const [totalBill, setTotalBill] = useState('')
    const [billData, setBillData] = useState([])
    const [formField, setFormField] = useState([])

    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(()=>{
        let fieldData=[]
        let fields=(
            <>
                <div className="col-md-6">
                    <TextField
                        onChange={e=>setAdditionalBillReason(e.target.value)}
                        margin="dense"
                        variant="outlined"
                        id="title"
                        label='Reason'
                        type="text"
                        fullWidth
                    />
                </div>
                <div className="col-md-5">
                    <TextField
                        onChange={e=>setAdditionalBillPrice(e.target.value)}
                        margin="dense"
                        variant="outlined"
                        id="title"
                        label="Price"
                        type="number"
                        fullWidth
                    />
                </div>
            </>)
            fieldData.push(fields)
            setFormField([...formField, fieldData])
            setBillData(additionalBill)
    }, [])
    const AddField=()=>{
        let fieldData=[]
        let fields=(
            <>
                <div className="col-md-6">
                    <TextField
                        onChange={e=>setAdditionalBillReason(e.target.value)}
                        margin="dense"
                        variant="outlined"
                        id="title"
                        label="Reason"
                        type="text"
                        fullWidth
                    />
                </div>
                <div className="col-md-5">
                    <TextField
                        onChange={e=>setAdditionalBillPrice(e.target.value)}
                        margin="dense"
                        variant="outlined"
                        id="title"
                        label="Price"
                        type="number"
                        fullWidth
                    />
                </div>
            </>)
        if(billData.findIndex(x => x.additionalBillReason == additionalBillReason)==-1 && additionalBillReason && additionalBillPrice){
            let total=Number(totalBill)
            setTotalBill(total+Number(additionalBillPrice))
            addReasonData({additionalBillReason:additionalBillReason, additionalBillPrice:additionalBillPrice})
            fieldData.push(fields)
            setFormField([...formField, fieldData])
            setAdditionalBillReason('')
            setAdditionalBillPrice('')
        }    
    }
    
    const addReasonData=(data)=>{
        var paymentMode=[...billData]
        paymentMode.push(data);
        setBillData(paymentMode)
    }

    const addAdditionalBill=(event)=>{
        event.preventDefault()
        let allBilldata=[...billData]
        let total=totalBill
        if(additionalBillReason && additionalBillPrice){
            allBilldata.push({additionalBillReason:additionalBillReason, additionalBillPrice:additionalBillPrice})
            total=total+Number(additionalBillPrice)
        }
        setAdditionalBill(allBilldata)
        setTotalAdditionalBill(total)
        setBillData([])
        handleClose();
    }
    console.log(billData)
    const deleteElement = (index) => {
        let allFormField = [...formField]
        allFormField.splice(index, 1)
        setFormField(allFormField)
        let allBilldata=[...billData]
        allBilldata.splice(index, 1)
        setBillData(allBilldata)
        setAdditionalBillReason(allBilldata[index-1].additionalBillReason)
        setAdditionalBillPrice(allBilldata[index-1].additionalBillPrice)
    }

    // const deleteAdditionalBillData = (index) => {
    //     let allFormField = [...formField]
    //     allFormField.splice(index, 1)
    //     setFormField(allFormField)
    //     let allBilldata=[...billData]
    //     allBilldata.splice(index, 1)
    //     setBillData(allBilldata)
    // }
    

    return (
        <div className="d-inline ml-auto">
        <Button variant="outlined" color="primary" className="search-button" onClick={handleClickOpen}>
          Enter Additional Bill
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" classes={{ paper: classes.paper}}>
            <DialogTitle id="form-dialog-title">Add Additional Bill</DialogTitle>
            <DialogContent>
            <form onSubmit={(e)=>addAdditionalBill(e)} style={{width:'600px'}}>
               {
                    formField.map((data, index)=>(
                        <div className="row">
                            {data}
                            <div className="col-md-1">
                                <IconButton disabled={formField.length==1?true:false} className="iconButton" onClick={()=> deleteElement(index)} style={{marginTop:'15px'}}>
                                <CloseIcon />
                                </IconButton>
                            </div>
                        </div>
                    ))
                }
                <Button className="addButton" onClick={()=> AddField()}>
                    <AddCircle/>
                </Button>
                {/* {
                    billData.length>0?
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                            <TableCell className={classes.reason} >
                            Reason
                            </TableCell>
                            <TableCell className={classes.price}>
                            Price
                            </TableCell>
                            <TableCell className={classes.deleteButton}>
                              Price
                            </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                            billData.map((data, index) => (
                            <TableRow
                                hover
                            >
                                <TableCell className={classes.reason}>
                                {data.additionalBillReason}
                                </TableCell>
                                <TableCell className={classes.price}>
                                  {data.additionalBillPrice}
                                </TableCell>
                                <TableCell className={classes.deleteButton}>
                                    <IconButton className="iconButton" onClick={()=> deleteAdditionalBillData(index)} style={{}}>
                                        <CloseIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>:''
                } */}
                <DialogActions>
                <Button onClick={handleClose} color="primary" style={{textTransform:'none'}}>Cancel </Button>
                <Button size="small"  variant="contained" type="submit" style={{textTransform:'none'}}>Add Bill</Button>
                </DialogActions>
            </form>
            </DialogContent>
        </Dialog>
        </div>
    );
}

export default AddAdditionalBill;