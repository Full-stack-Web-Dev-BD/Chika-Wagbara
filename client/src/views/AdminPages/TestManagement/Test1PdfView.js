import { Card, Table } from '@material-ui/core'
import React from 'react'

const Test1PdfView = ({ pdfContent }) => {




    return (
        <div className="row">
            <Card className="col-md-6 offset-md-3 p-4">
                {console.log(pdfContent,'pdfContent')}
                
                <div className="PDF-header text-center pt-5 pb-5">
                    <h3>PDF Header</h3>
                </div>
                <div className="PDF-body" style={{ minHeight: '600px' }}>
                    <Table >
                        <thead className="text-center table-active mb-3">
                            <th>Test Name</th>
                            <th>Value</th>
                            <th>Unit</th>
                            <th>Normal Range</th>
                            <th>Prvious Value</th>
                        </thead>
                        <tbody className="text-center">
                            {
                                pdfContent.map(el => (
                                    <>
                                        {
                                            true ?
                                                <tr>
                                                    <td>Suger Test</td>
                                                    <td></td>
                                                    <td>Pathology</td>
                                                    <td>30-50</td>
                                                    <td>30%</td>
                                                </tr> : ''
                                        }
                                    </>
                                ))
                            }
                            {/* <tr>
                                <td>Suger Test</td>
                                <td></td>
                                <td>Pathology</td>
                                <td>30-50</td>
                                <td>30%</td>
                            </tr>
                            <tr>
                                <td colSpan="5">&nbsp; <hr /> </td>
                            </tr>
                            <tr>
                                <td colSpan="5" >title</td>
                            </tr>

                            <tr>
                                <td>Suger Test</td>
                                <td></td>
                                <td>Pathology</td>
                                <td>30-50</td>
                                <td>30%</td>
                            </tr> */}
                        </tbody>
                    </Table>
                </div>
                <div className="PDF-footer text-center">
                    <h3>PDF Footer</h3>

                </div>
            </Card>
        </div>
    )
}

export default Test1PdfView
