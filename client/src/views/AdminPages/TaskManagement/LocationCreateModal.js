import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { PlusCircle } from 'react-feather';
import { TextField } from '@material-ui/core';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { addCountry } from '../../../actions/countryAction';
import { addState } from '../../../actions/stateAction';
import { addCity } from '../../../actions/cityAction'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const LocationCreateModal=(props)=> {
  const { countries, states }=props
  const [open, setOpen] = React.useState(false);
  const [locationType, setLocationType] = useState('')
  const [countryName, setCountryName] = useState('')
  
  

  const [stateName, setStateName] = useState('')
  const [countryId, setCountryId] = useState('')

  const [cityName, setCityName] = useState('')
  const [stateId, setStateId] = useState('')


  const addCountry=(e)=>{
    e.preventDefault()
    props.addCountry({name:countryName})
    handleClose();
  }

  const addState=(e)=>{
    e.preventDefault()
    props.addState(countryId, {name:stateName}, props.history)
    handleClose();
  }


  const addCity=(e)=>{
    e.preventDefault()
    props.addCity(stateId, {name:cityName})
    handleClose();
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" size="small" color="secondary" onClick={handleClickOpen} > <PlusCircle /> Add a location </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add A Location
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom style={{height:20}}>
            Please Select What you like to Add . <span style={{ visibility: 'hidden' }}>(For Example you can select country to add a country )</span>
          </Typography>

          <TextField
            onChange={e => { setLocationType(e.target.value) }}
            margin="dense"
            id="selectLocationType"
            label="Select Location Type"
            select
            SelectProps={{
              native: true,
            }}
            fullWidth
          >
            <option >Select Type</option>
            <option value="Country">Country</option>
            <option value="State">State</option>
            <option value="City">City</option>
          </TextField>
          {
            locationType === "Country" ?
              <form onSubmit={e=>{addCountry(e)}}>
                <TextField
                  onChange={e => { setCountryName(e.target.value) }}
                  required
                  margin="dense"
                  id="country"
                  label="Country Name"
                  type="text"
                  fullWidth
                />
                <Button type="submit" size="small" variant="contained"> Add </Button>
              </form> : ''
          }

          {
            locationType === "State" ?
              <div>
                <TextField
                  onChange={e => { setCountryId(e.target.value) }}
                  margin="dense"
                  id="selectLocationType"
                  label="Select The Country of This State"
                  select
                  SelectProps={{
                    native: true,
                  }}
                  fullWidth
                  required
                >
                  <option >Select Country</option>
                  {
                    countries.map(el => (
                      <option value={el._id} > {el.name} </option>
                    ))
                  }
                </TextField>
                <TextField
                  onChange={e => { setStateName(e.target.value) }}
                  required
                  margin="dense"
                  id="statename"
                  label="State Name"
                  type="text"
                  fullWidth
                />
                {
                  stateName && countryId ?
                    <Button onClick={e => {addState(e)}} type="submit" size="small" variant="contained"> Add </Button>
                    : ''
                }
              </div> : ''
          }

          {
            locationType === "City" ?
              <div>
                <TextField
                  onChange={e => { setStateId(e.target.value) }}
                  margin="dense"
                  id="selectLocationType"
                  label="Select State of This City"
                  select
                  SelectProps={{
                    native: true,
                  }}
                  fullWidth
                  required
                >
                  <option >Select State</option>
                  {
                    states.map(el => (
                      <option value={el._id} > {el.name} </option>
                    ))
                  }
                </TextField>
                
                <TextField
                  onChange={e => { setCityName(e.target.value) }}
                  required
                  margin="dense"
                  id="cityename"
                  label="City Name"
                  type="text"
                  fullWidth
                />
                {
                  cityName && stateId ?
                    <Button onClick={e => {addCity(e)}} type="submit" size="small" variant="contained"> Add </Button>
                    : ''
                }
              </div> : ''
          }
        </DialogContent>
      </Dialog>
    </div>
  );
}

LocationCreateModal.propTypes = {
  addCountry: PropTypes.func.isRequired,
  addState: PropTypes.func.isRequired,
  addCity: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  countries: PropTypes.array.isRequired,
  states: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  countries: state.country.countries,
  states: state.state.states,
  errors: state.errors
});


export default connect(mapStateToProps, { addCountry, addState, addCity })(LocationCreateModal);


