import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from 'axios'
import { AddCircle } from '@material-ui/icons';


export default function TestCreateModal({ setSelectedPdfFormate }) {

  const [open, setOpen] = React.useState(false);

  const [testCode, setTestCode] = useState('')
  const [testName, setTestName] = useState('')
  const [loincCode, setLoincCode] = useState('')
  const [testPrice, setTestPrice] = useState('')
  const [revenuueTarget, setRevenuueTarget] = useState('')
  const [positionPriority, setPositionPriority] = useState('')
  const [department, setDepartment] = useState('')
  const [category, setCategory] = useState('')
  const [sampleType, setSampleType] = useState('')
  const [reportType, setreportType] = useState('')
  const allDepartment = [
    { department: 'department 1' },
    { department: 'department 2' },
    { department: 'department 3' },
    { department: 'department 4' },
    { department: 'department 5' },
  ]
  const allsampleType = [
    { sampleType: 'sampleType 1' },
    { sampleType: 'sampleType 2' },
    { sampleType: 'sampleType 3' },
    { sampleType: 'sampleType 4' },
    { sampleType: 'sampleType 5' },
  ]
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const createTestPDF = (e) => {
    e.preventDefault()
    setSelectedPdfFormate(reportType)
    console.log(
      testCode,
      testName,
      loincCode,
      testPrice,
      revenuueTarget,
      positionPriority,
      department,
      category,
      sampleType,
      reportType
    );
  }


  return (
    <div className="d-inline ml-auto">
      <Button variant="contained" color="primary" onClick={handleClickOpen}><AddCircle /> Create a new test</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a new test </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ visibility: 'hidden', lineHeight: '0' }}>
              Please  enter required all filed to create a Branch Please  enter required all
            </p>
          </DialogContentText>
          <form onSubmit={e => { createTestPDF(e) }}>
            <div className="row">
              <div className="col-md-4">
                <TextField
                  onChange={e => setTestCode(e.target.value)}
                  required
                  margin="dense"
                  id="testCode"
                  label="Test Code"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-8">
                <TextField
                  onChange={e => setTestName(e.target.value)}
                  required
                  margin="dense"
                  id="testName"
                  label="Test Name"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-4">
                <TextField
                  onChange={e => setLoincCode(e.target.value)}
                  required
                  margin="dense"
                  id="LOINCCode"
                  label="LOINC Code"
                  type="text"
                  fullWidth
                />
              </div>
              <div className="col-md-4">
                <TextField
                  onChange={e => setTestPrice(e.target.value)}
                  required
                  margin="dense"
                  id="testPrice"
                  label="Test Price"
                  type="number"
                  fullWidth
                />
              </div>
              <div className="col-md-4">
                <TextField
                  onChange={e => setRevenuueTarget(e.target.value)}
                  required
                  margin="dense"
                  id="revenueTarget"
                  label="Revenue Target"
                  type="text"
                  fullWidth
                />
              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => setPositionPriority(e.target.value)}
                  required
                  margin="dense"
                  id="positionPriority"
                  label="Position Priority"
                  type="text"
                  fullWidth
                />
              </div>

              <div className="col-md-4">

                <TextField
                  onChange={e => setDepartment(e.target.value)}
                  margin="dense"
                  id="department"
                  label="Department"
                  type="text"
                  fullWidth
                  select
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option >Select Department</option>
                  {
                    allDepartment.map(el => (
                      <option> {el.department} </option>
                    ))
                  }
                </TextField>
              </div>

              <div className="col-md-4">
                <TextField
                  onChange={e => setCategory(e.target.value)}
                  required
                  margin="dense"
                  id="category"
                  label="Category"
                  type="text"
                  fullWidth
                />

              </div>

              <div className="col-md-4">

                <TextField
                  onChange={e => setSampleType(e.target.value)}
                  margin="dense"
                  id="sampletype"
                  label="Sample Type"
                  type="text"
                  fullWidth
                  select
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option >Select Sample Type</option>
                  {
                    allsampleType.map(el => (
                      <option> {el.sampleType} </option>
                    ))
                  }
                </TextField>
              </div>
              <div className="col-md-4">
                <TextField
                  onChange={e => setreportType(e.target.value)}
                  margin="dense"
                  id="reporttype"
                  label="Report Type"
                  type="text"
                  fullWidth
                  select
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option  >Report Type</option>
                  <option value="Pathology" >Pathology</option>
                  <option value="Radiology" >Radiology</option>
                  <option value="FileReport" >File Report </option>
                </TextField>
              </div>
            </div>
            <DialogActions>
              {
                (
                  testCode &&
                  testName &&
                  loincCode &&
                  testPrice &&
                  revenuueTarget &&
                  positionPriority &&
                  department &&
                  category &&
                  sampleType &&
                  reportType
                  ) ?
                  <Button size="small" color="secondary" variant="contained" type="submit" >Create</Button> :
                  <Button size="small" variant="contained" type="submit" >Create</Button>
              }
              <Button onClick={handleClose} color="primary">Cancel </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
