import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { success } from 'react-notification-system-redux';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AddCircle } from '@material-ui/icons';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    makeStyles
} from '@material-ui/core';
import { addGuardian } from '../../../../actions/guardianAction'
const useStyles = makeStyles((theme) => ({
    tableCell:{
        padding:'6px 6px 6px 0px'
    },
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
  
const method=[
    'Payment Mode (Default: Cash)',
    'Cheque',
    'Swipe Machine (New)',
    'Credit',
    'Credit Card',
    'Debit Card',
    'Free',
    'Online Payment',
    'Others'
]
const EditPayment=(props)=> {
    const classes = useStyles();
    const { paidAmount, setPaidAmount, remainingBalance, setRemainingBalance,  paymentMode, setPaymentMode}=props
    const [methodType, setMetodType] = useState('')
    const [amount, setAmount] = useState('')
    const [totalPaidAmount, setTotalPaidAmount] = useState('')
    const [formField, setFormField] = useState([])
    const [paymentMethod, setPaymentMethod] = useState(method)
    const [methodData, setMethodData] = useState([])
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(()=>{
        setMethodData(paymentMode)
    }, [paymentMode])

    useEffect(()=>{
        setTotalPaidAmount(paidAmount)
    }, [paidAmount])

    useEffect(()=>{
        let fieldData=[]
        let fields=(
            <>
                <div className="col-md-6">
                    <TextField
                        onChange={e=>setMetodType(e.target.value)}
                        margin="dense"
                        variant="outlined"
                        id="title"
                        type="text"
                        fullWidth
                        select
                        SelectProps={{
                            native: true,
                        }}
                    >
                       <option value="" selected="selected" selected disabled hidden>Select Payment Method</option>
                    {
                        paymentMethod.map(data=>(
                            <option value={data}>{data}</option>
                        ))
                    }
                    </TextField>
                </div>
                <div className="col-md-5">
                    <TextField
                        onChange={e=>setAmount(e.target.value)}
                        margin="dense"
                        variant="outlined"
                        id="title"
                        label="Amount"
                        type="number"
                        fullWidth
                    />
                </div>
            </>)
            fieldData.push(fields)
            setFormField([...formField, fieldData])
    }, [])

    const addMethod=(data)=>{
        var payMethod=[...methodData]
        payMethod.push(data);
        setMethodData(payMethod)
    }

    const addPaymentMode=(data)=>{
        var paymentMode=[...methodData]
        paymentMode.push(data);
        setMethodData(paymentMode)
    }
    
    const AddField=()=>{
        let fieldData=[]
        let fields=(
            <>
                <div className="col-md-6">
                    <TextField
                        onChange={e=>setMetodType(e.target.value)}
                        margin="dense"
                        variant="outlined"
                        id="title"
                        type="text"
                        fullWidth
                        select
                        SelectProps={{
                            native: true,
                        }}
                    >
                    {
                        paymentMethod.map(data=>(
                            <option value={data}>{data}</option>
                        ))
                    }
                    </TextField>
                </div>
                <div className="col-md-5">
                    <TextField
                        onChange={e=>setAmount(e.target.value)}
                        margin="dense"
                        variant="outlined"
                        id="title"
                        label="Amount"
                        type="number"
                        fullWidth
                    />
                </div>
            </>)
           
        if(methodData.findIndex(x => x.type == methodType)==-1 && methodType && amount){
            addMethod(methodType)
            setTotalPaidAmount(Number(totalPaidAmount)+Number(amount))
            addPaymentMode({type:methodType, amount:amount, date:Date.now()})
            fieldData.push(fields)
            setFormField([...formField, fieldData])
            setMetodType('')
            setAmount('')
        }    
    }

    const addPayment=(event)=>{
        event.preventDefault()
        let paid=Number(totalPaidAmount);
        paid=paid+Number(amount)
        setPaidAmount(paid)
        let paymentData=[...methodData]
        if(methodData && amount){
            paymentData.push({type:methodType, amount:amount, date:Date.now()})
            setPaymentMode(paymentData)
        }else{
            setPaymentMode(paymentData)
        }
        setMetodType('')
        setAmount('')
        handleClose();
    }

    const deleteElement = (index) => {
        let allFormField = [...formField]
        allFormField.splice(index, 1)
        setFormField(allFormField)

        let datas=[...methodData]
        datas.splice(index, 1)
        setMethodData(datas)
    }

    const deletePaymentData = (index) => {
        let allPaymentdata=[...methodData]
        let paid=Number(totalPaidAmount);
        paid=paid-Number(allPaymentdata[index].amount)
        setTotalPaidAmount(paid)
        allPaymentdata.splice(index, 1)
        setMethodData(allPaymentdata)
    }
    
    return (
        <div className="d-inline ml-auto">
        <Button className="search-button" onClick={handleClickOpen}  style={{float:'right', height:'16px', fontSize:'12px'}}>
          Add Payment
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" classes={{ paper: classes.paper}}>
            <DialogTitle id="form-dialog-title">Add Payment</DialogTitle>
            <DialogContent>
            <form onSubmit={(e)=>addPayment(e)} style={{width:'600px'}}>
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
                <Table size="small">
                    <TableHead>
                        <TableRow>
                        <TableCell className={classes.tableCell} >
                          Transaction Date
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          Payment Type
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          Amount
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          After Transaction
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          
                        </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {methodData? 
                        methodData.map((data, index) => (
                        <TableRow
                            hover
                        >
                            <TableCell className={classes.tableCell}>
                            {moment(data.date).format('MMMM Do YYYY, h:mm A')}
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                            {data.type}
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                            {data.amount}
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                            {data.amount}
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                                <IconButton className="iconButton" onClick={()=> deletePaymentData(index)} style={{}}>
                                    <CloseIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        )):''}
                    </TableBody>
                </Table>
                <DialogActions>
                <Button onClick={handleClose} color="primary" size="small" style={{textTransform:'none', border:'1px solid lightgray'}}>Cancel </Button>
                <Button size="small"  variant="contained" type="submit" style={{textTransform:'none'}}>Submit</Button>
                </DialogActions>
            </form>
            </DialogContent>
        </Dialog>
        </div>
    );
}

EditPayment.propTypes = {
  addGuardian:PropTypes.func.isRequired,
  className: PropTypes.string,
};
const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps, { addGuardian })(EditPayment)