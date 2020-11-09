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

export default function LocationCreateModal() {
  const [open, setOpen] = React.useState(false);
  const [locationType, setLocationType] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [allState, setAllState] = useState([])

  
  
  const [countryName, setCountryName] = useState('')
  
  

  const [stateName, setStateName] = useState('')
  const [countryOfStateName, setCountryOfStateName] = useState('')

  const [cityName, setCityName] = useState('')
  const [stateOfCityName, setStateOfCityName] = useState('')

  useEffect(() => {
    Axios.get('/api/countries/allCountry')
      .then(res => {
        setAllCountries(res.data)
      })
      .catch(err => {
        console.log(err);
      })
      Axios.get('/api/states/allState')
        .then(res => {
          setAllState(res.data)
        })
        .catch(err => {
          console.log(err);
        })
  }, [])


  const addCountry=(e)=>{
    e.preventDefault()
    Axios.post('/api/countries/newCountry',{name:countryName})
      .then(res => {
        window.location.reload()
      })
      .catch(err => {
        console.log(err);
      })
  }


  const addState=(e)=>{
    e.preventDefault()
    Axios.post(`/api/states/newState/${countryOfStateName}`,{name:stateName})
      .then(res => {
        window.location.reload()
      })
      .catch(err => {
        console.log(err);
      })
  }


  const addCity=(e)=>{
    e.preventDefault()
    Axios.post(`/api/cities/newCity/${stateOfCityName}`,{name:cityName})
      .then(res => {
        window.location.reload()
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    window.location.reload()
  };
  return (
    <div>
      <Button variant="contained" size="small" color="secondary" onClick={handleClickOpen} > <PlusCircle /> Add a location </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add A Location
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
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
                  onChange={e => { setCountryOfStateName(e.target.value) }}
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
                    allCountries.map(el => (
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
                  stateName && countryOfStateName ?
                    <Button onClick={e => {addState(e)}} type="submit" size="small" variant="contained"> Add </Button>
                    : ''
                }
              </div> : ''
          }

          {
            locationType === "City" ?
              <div>
                <TextField
                  onChange={e => { setCountryOfStateName(e.target.value) }}
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
                    allState.map(el => (
                      <option value={el._id} > {el.name} </option>
                    ))
                  }
                </TextField>
                
                <TextField
                  onChange={e => { setStateName(e.target.value) }}
                  required
                  margin="dense"
                  id="cityename"
                  label="City Name"
                  type="text"
                  fullWidth
                />
                {
                  stateName && countryOfStateName ?
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
