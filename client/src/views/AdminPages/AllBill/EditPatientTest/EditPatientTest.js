import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'
import { withRouter, useParams } from 'react-router-dom';
import { connect } from 'react-redux'
import { getPatientTest } from '../../../../actions/patientTestAction'
import EditPatientTest from './EditPatientTestForm'

const EditBill=(props)=> {
    const { patientTest }=props
    const { id }=useParams()

    useEffect(()=>{
        props.getPatientTest(id)
    }, [])

    return (
        <div className="d-inline ml-auto">
            <Button className="search-button" onClick={props.history.goBack} style={{fontSize:12, marginBottom:5}}>
              Back
            </Button>
            <EditPatientTest patientTest={patientTest} />
        </div>
    );
}

EditBill.propTypes = {
  getPatientTest:PropTypes.func.isRequired,
  className: PropTypes.string,
  patientTest:PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  patientTest:state.patientTest.patientTest
})
export default withRouter(connect(mapStateToProps, { getPatientTest })(EditBill))