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
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addGuardian } from '../../../actions/guardianAction'

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
const GuardianCreateModal=(props)=> {
    const { setPaidAmount, setPaymentMode }=props
    const [methodType, setMetodType] = useState('')
    const [amount, setAmount] = useState('')
    const [totalPaidAmount, setTotalPaidAmount] = useState('')
    const [formField, setFormField] = useState([])
    const [paymentMethod, setPaymentMethod] = useState(method)
    const [methodData, setMethodData] = useState([])
    const [paymentModeData, setPaymentModeData] = useState([])
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // useEffect(()=>{
    //     setPaymentMethod(method)
    // }, [])

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
        setPaymentModeData(paymentMode)
    }
    
    const AddField=()=>{
        let paid=Number(totalPaidAmount);
        paid=paid+Number(amount)
        setTotalPaidAmount(paid)
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
            addPaymentMode({type:methodType, amount:amount})
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
        setTotalPaidAmount(paid)
        setPaidAmount(paid)
        let paymentData=[...paymentModeData]
        paymentData.push({type:methodType, amount:amount, date:Date.now()})
        setPaymentMode(paymentData)
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
    
    return (
        <div className="d-inline ml-auto">
        <Button className="search-button" onClick={handleClickOpen} style={{float:'right', height:'16px', fontSize:'12px'}}>
          Add Payment
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Payment</DialogTitle>
            <DialogContent>
            <form onSubmit={(e)=>addPayment(e)} style={{width:'550px'}}>
                {
                    formField.map((data, index)=>(
                        <div className="row">
                            {data}
                            <div className="col-md-1">
                                <IconButton className="iconButton" onClick={()=> deleteElement(index)} style={{marginTop:'15px'}}>
                                <CloseIcon />
                                </IconButton>
                            </div>
                        </div>
                    ))
                }
                <Button className="addButton" onClick={()=> AddField()}>
                    <AddCircle/>
                </Button>
                <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel </Button>
                <Button size="small"  variant="contained" type="submit">Submit</Button>
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