import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import {
  Typography,  
  makeStyles,
} from '@material-ui/core';
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import { useParams, withRouter } from 'react-router-dom'
import { getPatientTest} from '../../../actions/patientTestAction'
import TestDetails from './TestDetails'

const useStyles = makeStyles((theme) => ({
    root: {margin: theme.spacing(2)},
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height:100
    }
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
                <Button className="search-button" onClick={props.history.goBack} style={{fontSize:12, marginBottom:5}}>
                  Back
                </Button>
                {Object.keys(patientTest).length>0?
                <Grid container spacing={1}>
                    <Grid item md={3}>
                        <Paper className={classes.paper}>
                            <Grid container>
                                <Grid item md={3}>
                                    <PersonIcon style={{float:'left', fontSize: "3em", paddingTop:0}}/>
                                </Grid>
                                <Grid item md={9}>
                                    <Typography variant="p" style={{float:'left', display:'block', fontSize:15}}>{patientTest.patient?(patientTest.patient.title +" " +patientTest.patient.firstName +" " +patientTest.patient.lastName):''}</Typography>
                                    <Typography variant="p" style={{float:'left', display:'block', fontSize:15}}>{patientTest.patient?(patientTest.patient.email):''}</Typography>
                                    <Typography variant="p" style={{float:'left', display:'block', fontSize:15}}>{patientTest.patient?(patientTest.patient.mobileNumber1):''}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item md={3}>
                        <Paper className={classes.paper}>
                            <Typography variant="p" style={{float:'left', display:'block', fontSize:15}}><span style={{fontWeight:'bold'}}>Guardian:</span> {patientTest.guardian?(patientTest.guardian.title +" " +patientTest.guardian.firstName +" " +patientTest.guardian.lastName):''}</Typography>
                            <Typography variant="p" style={{float:'left', display:'block', fontSize:15}}><span style={{fontWeight:'bold'}}>Email:</span> {patientTest.guardian?(patientTest.guardian.email):''}</Typography>
                            <Typography variant="p" style={{float:'left', display:'block', fontSize:15}}><span style={{fontWeight:'bold'}}>Phone:</span> {patientTest.guardian?(patientTest.guardian.mobileNumber):''}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={3}>
                        <Paper className={classes.paper}>
                          <Typography variant="p" style={{float:'left', display:'block', fontSize:15}}><span style={{fontWeight:'bold'}}>Referring Person:</span> {patientTest.referringPerson?(patientTest.referringPerson.firstName +" " +patientTest.referringPerson.lastName):''}</Typography>
                          <Typography variant="p" style={{float:'left', display:'block', fontSize:15}}><span style={{fontWeight:'bold'}}>Email:</span> {patientTest.referringPerson?(patientTest.referringPerson.email):''}</Typography>
                          <Typography variant="p" style={{float:'left', display:'block', fontSize:15}}><span style={{fontWeight:'bold'}}>Phone:</span> {patientTest.referringPerson?(patientTest.referringPerson.mobileNumber1):''}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={3}>
                        <Paper className={classes.paper}>
                          <Typography variant="p" style={{float:'left', display:'block', fontSize:15}}><span style={{fontWeight:'bold'}}>Referring Center:</span> {patientTest.referringCenter?(patientTest.referringCenter.nameofReferralCenter):''}</Typography>
                          <Typography variant="p" style={{float:'left', display:'block', fontSize:15}}><span style={{fontWeight:'bold'}}>Email:</span> {patientTest.referringCenter?(patientTest.referringCenter.centerEmail):''}</Typography>
                          <Typography variant="p" style={{float:'left', display:'block', fontSize:15}}><span style={{fontWeight:'bold'}}>Phone:</span> {patientTest.referringCenter?(patientTest.referringCenter.phone1):''}</Typography>
                        </Paper>
                    </Grid>
                </Grid>:''
                }
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
export default withRouter(connect(mapStateToProps, { getPatientTest })(PatientTestDetails));