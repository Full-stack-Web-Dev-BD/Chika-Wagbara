import { Card, Table } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addReportResult } from '../../../actions/patientTestAction'

const useStyles = makeStyles((theme) => ({
    paper: { 
        width:'70%'
    },
}));

const ReportPdfView = (props) => {
    const classes = useStyles()
    const { modalOpen, test } = props
    const [reportValue, setReportValue]=useState('')

    const handleClose=()=>{
        props.handleClickClose()
    }

    const updateReport=(id, data)=>{
        props.addReportResult(id, data)
    }

    return (
        <Dialog open={modalOpen} aria-labelledby="form-dialog-title" classes={{ paper: classes.paper}}>
            <DialogContent style={{padding:0}}>
                <div className="row" style={{margin:0}}>
                    <Card style={{width:'100%', padding:10}}>
                        <div className="PDF-header text-center pt-2 pb-2">
                            <h3>{test.testName}</h3>
                        </div>
                        <div className="PDF-body" style={{ minHeight: '200px' }}>
                            <Table >
                                <thead className="text-center table-active mb-3">
                                    <th>Test Name</th>
                                    <th>Value</th>
                                    <th>Unit</th>
                                    <th>Reference Range</th>
                                </thead>
                                <tbody className="text-center pdf-table">
                                    {   Object.keys(test).length>0?
                                        test.testValues.map((data, index) => (
                                            <>
                                                {
                                                    data.rowType === 'testInfo' ?

                                                        <tr>
                                                            <td> {data.testName} </td>
                                                            <td> {data.value?data.value:
                                                              (<input 
                                                                type="text" 
                                                                onChange={(e)=> setReportValue(e.target.value)}
                                                                name="reportValue"
                                                                value={reportValue}
                                                                style={{width:100, padding:"0px 5px 0px 5px"}}
                                                                className={(Number(reportValue)>Number(data.normalRangeTo) && Number
                                                                    (reportValue)<Number(data.normalRangeFrom))?"report-value":''}
                                                              />)
                                                            } </td>
                                                            <td> {data.unit} </td>
                                                            <td> {data.normalRangeFrom}-{data.normalRangeTo} </td>
                                                        </tr> : ''
                                                }
                                                {
                                                    data.rowType == 'spaceWithTitle' ?

                                                        <tr>
                                                            <td colSpan="5" >{data.title}</td>
                                                            <td className="delete-icon"></td>

                                                        </tr> : ''
                                                }
                                                {
                                                    data.rowType == 'divider' ?
                                                        <tr>
                                                            <td colSpan="5">&nbsp; <hr /> </td>
                                                            <td className="delete-icon"></td>
                                                        </tr> : ''
                                                }

                                            </>
                                        )):''
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <div className="PDF-footer text-center">
                            <DialogActions>
                                <Button onClick={()=> handleClose()} color="primary" size="small" style={{textTransform:'none', border:'1px solid lightgray'}}>Close </Button>
                                <Button size="small"  variant="contained"  type="submit" >Create</Button>
                            </DialogActions>
                        </div>
                    </Card>
                </div>
            </DialogContent>
        </Dialog>
    )
}
ReportPdfView.prototype={
    addReportResult:PropTypes.func.isRequired
}
const mapStateToProps=()=>({

})
export default connect(mapStateToProps, { addReportResult })(ReportPdfView);
