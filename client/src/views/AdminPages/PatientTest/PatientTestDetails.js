import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import {
  Typography,  
  makeStyles,
} from '@material-ui/core';
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import { useParams } from 'react-router-dom'
import { getPatientTest} from '../../../actions/patientTestAction'
import TestDetails from './TestDetails'

const useStyles = makeStyles((theme) => ({
    root: {margin: theme.spacing(2)},
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const PatientTestDetails=(props)=>{
    const { patientTest }=props
    const { id } = useParams()
    const classes = useStyles();

    useEffect(()=>{
        props.getPatientTest(id)
    }, [])
   
    return(
        <div>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item md={3}>
                      <Paper className={classes.paper}>
                          <PersonIcon style={{float:'left', fontSize: "3em", paddingTop:0}}/>
                          <Typography variant="p" style={{marginLeft:-80, marginTop:30}}>{patientTest.patient?(patientTest.patient.title +" " +patientTest.patient.firstName +" " +patientTest.patient.lastName):''}</Typography>
                          <Typography variant="p" style={{display:'block'}}>{patientTest.patient?(patientTest.patient.email):''}</Typography>
                          <Typography variant="p" style={{marginLeft:-35}}>{patientTest.patient?(patientTest.patient.mobileNumber1):''}</Typography>
                      </Paper>
                    </Grid>
                    <Grid item md={3}>
                        <Paper className={classes.paper}>
                            <PersonIcon style={{float:'left', fontSize: "3em", paddingTop:0}}/>
                            <Typography variant="p" style={{marginLeft:-80, marginTop:30}}>{patientTest.guardian?(patientTest.guardian.title +" " +patientTest.guardian.firstName +" " +patientTest.guardian.lastName):''}</Typography>
                            <Typography variant="p" style={{display:'block'}}>{patientTest.guardian?(patientTest.guardian.email):''}</Typography>
                            <Typography variant="p" style={{marginLeft:-35}}>{patientTest.guardian?(patientTest.guardian.mobileNumber):''}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={3}>
                        <Paper className={classes.paper}>
                          <PersonIcon style={{float:'left', fontSize: "3em", paddingTop:0}}/>
                          <Typography variant="p" style={{marginLeft:-80, marginTop:30}}>{patientTest.patient?(patientTest.patient.title +" " +patientTest.patient.firstName +" " +patientTest.patient.lastName):''}</Typography>
                          <Typography variant="p" style={{display:'block'}}>{patientTest.patient?(patientTest.patient.email):''}</Typography>
                          <Typography variant="p" style={{marginLeft:-35}}>{patientTest.patient?(patientTest.patient.mobileNumber1):''}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={3}>
                        <Paper className={classes.paper}>
                          <PersonIcon style={{float:'left', fontSize: "3em", paddingTop:0}}/>
                          <Typography variant="p" style={{marginLeft:-80, marginTop:30}}>{patientTest.patient?(patientTest.patient.title +" " +patientTest.patient.firstName +" " +patientTest.patient.lastName):''}</Typography>
                          <Typography variant="p" style={{display:'block'}}>{patientTest.patient?(patientTest.patient.email):''}</Typography>
                          <Typography variant="p" style={{marginLeft:-35}}>{patientTest.patient?(patientTest.patient.mobileNumber1):''}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <TestDetails patientTest={patientTest} />
       </div>
    )
}
PatientTestDetails.prototype={
    getPatientTest:PropTypes.func.isRequired,
    patientTest:PropTypes.object.isRequired
}
const mapStateToProps=(state)=>({
    patientTest:state.patientTest.patientTest
})
export default connect(mapStateToProps, { getPatientTest })(PatientTestDetails);