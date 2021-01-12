import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { AddCircle } from '@material-ui/icons';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getDepartments } from '../../../actions/departmentAction'
import { getCategories } from '../../../actions/categoryAction'
import { getSamples } from '../../../actions/sampleAction'
import { getReportTypes } from '../../../actions/reportTypeAction'
import { addTest } from '../../../actions/testAction'

const TestCreateModal=(props)=> {
  
  const { departments, categories, samples, reportTypes, setSelectedPdfFormate, setTest }=props
  const [open, setOpen] = React.useState(false);

  const [testCode, setTestCode] = useState('')
  const [testName, setTestName] = useState('')
  const [loincCode, setLoincCode] = useState('')
  const [testPrice, setTestPrice] = useState('')
  const [revenueTarget, setRevenueTarget] = useState('')
  const [positionPriority, setPositionPriority] = useState('')
  const [department, setDepartment] = useState('')
  const [category, setCategory] = useState('')
  const [sampleType, setSampleType] = useState('')
  const [reportType, setreportType] = useState('Pathology')

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  useEffect(()=>{
    props.getDepartments();
    props.getCategories();
    props.getSamples();
    props.getReportTypes();
  }, [])

  const createTestPDF = (e) => {
    e.preventDefault()
    setSelectedPdfFormate(reportType)
    const newTest={
      testCode:testCode,
      testName:testName,
      loincCode:loincCode,
      testPrice:testPrice,
      revenueTarget:revenueTarget,
      positionPriority:positionPriority,
      department:department,
      category:category,
      sampleType:sampleType,
      reportType:reportType
    }
    setTest(newTest)
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
                  onChange={e => setRevenueTarget(e.target.value)}
                  required
                  margin="dense"
                  id="revenueTarget"
                  label="Revenue Target"
                  type="text"
                  fullWidth
                />
              </div>

              <div className="col-md-6">
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

              <div className="col-md-6">

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
                  <option selected disabled hidden >Select Department</option>
                  {departments?
                    departments.map(el => (
                      <option value={el.name}> {el.name} </option>
                    )):''
                  }
                </TextField>
              </div>

              <div className="col-md-6">
                <TextField
                  onChange={e => setCategory(e.target.value)}
                  margin="dense"
                  id="department"
                  label="Category"
                  type="text"
                  fullWidth
                  select
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option selected disabled hidden>Select Category</option>
                  { categories?
                    categories.map(el => (
                      <option value={el.name}> {el.name} </option>
                    )):''
                  }
                </TextField>
              </div>

              <div className="col-md-6">

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
                  <option selected disabled hidden>Select Sample Type</option>
                  { samples?
                    samples.map(el => (
                      <option value={el.name}> {el.type} {el.container} </option>
                    )):''
                  }
                </TextField>
              </div>
              <div className="col-md-12">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Test Type</FormLabel>
                  <RadioGroup aria-label="gender" name="reportType" value={reportType} onChange={(e)=> setreportType(e.target.value)}>
                    <FormControlLabel value="Pathology" control={<Radio />} label="Pathology" />
                    <FormControlLabel value="Radiology" control={<Radio />} label="Radiology" />
                    <FormControlLabel value="FileReport" control={<Radio />} label="File Report" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <DialogActions>
              {
                (
                  testCode &&
                  testName &&
                  loincCode &&
                  testPrice &&
                  revenueTarget &&
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
TestCreateModal.propTypes={
  getDepartments:PropTypes.func.isRequired,
  getCategories:PropTypes.func.isRequired,
  getSamples:PropTypes.func.isRequired,
  getReportTypes:PropTypes.func.isRequired,
  addTest:PropTypes.func.isRequired,
  departments:PropTypes.array.isRequired,
  categories:PropTypes.array.isRequired,
  samples:PropTypes.array.isRequired,
  reportTypes:PropTypes.array.isRequired
}

const mapStateToProps=(state)=>({
  departments:state.department.departments,
  categories:state.category.categories,
  samples:state.sample.samples,
  reportTypes:state.reportType.reportTypes
})

export default connect(mapStateToProps, { addTest, getDepartments, getCategories, getSamples, getReportTypes})(TestCreateModal)