import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AddCircle } from '@material-ui/icons';


export default function PathologyTestAddModal({ addTestToPDF }) {

  const [open, setOpen] = React.useState(false);

  const [testName, setTestName] = useState('')
  const [unit, setUnit] = useState('')
  const [previusValue, setPreviusValue] = useState('')
  const [normalRangeFrom, setNormalRangeFrom] = useState('')
  const [normalRangeTo, setNormalRangeTo] = useState('')


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const addTestPDF = (e) => {
    e.preventDefault()
    addTestToPDF({
      testName:testName,
      unit:unit,
      previusValue:previusValue,
      normalRangeFrom:normalRangeFrom,
      normalRangeTo:normalRangeTo,
      testType:'Pathology',
      rowType:'testInfo'
    })
    handleClose()
  }


  return (
    <div className="d-inline ml-auto">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}><AddCircle /> Add a  test</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a new test </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden', lineHeight: '0' }}>
              Please  enter required all filed to create a Branch Please  enter required all
            </p>
          </DialogContentText>
          <form onSubmit={e => { addTestPDF(e) }}>
            <div className="row">
              <div className="col-md-6">
                <TextField
                  onChange={e => setTestName(e.target.value)}
                  required
                  margin="dense"
                  id="testCode"
                  label="Test Name"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e => setUnit(e.target.value)}
                  required
                  margin="dense"
                  id="testName"
                  label="Unit"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e => setNormalRangeFrom(e.target.value)}
                  required
                  margin="dense"
                  id="LOINCCode"
                  label="Normal Range (From)"
                  type="number"
                  fullWidth
                />

              </div>
              <div className="col-md-6">
                <TextField
                  onChange={e => setNormalRangeTo(e.target.value)}
                  required
                  margin="dense"
                  id="LOINCCode"
                  label="Normal Range (To)"
                  type="number"
                  fullWidth
                />
              </div>
            </div>
            <DialogActions>
              {
                (
                  testName &&
                  unit &&
                  normalRangeFrom &&
                  normalRangeTo
                ) ?
                  <Button size="small" color="secondary" variant="contained" type="submit" >Create</Button> :
                  <Button size="small" variant="contained" type="submit" >Create</Button>
              }
              <Button onClick={handleClose} color="primary" size="small" style={{textTransform:'none', border:'1px solid lightgray'}}>Cancel </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
