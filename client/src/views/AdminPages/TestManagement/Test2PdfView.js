import { Card, Table } from '@material-ui/core'
import React from 'react'

const Test2PdfView = () => {
    return (
        <div className="row pt-4">
            <Card className="col-md-6 offset-md-3 p-4">
                <div className="PDF-header text-center pt-5 pb-5">
                    <h3>PDF Header</h3>
                </div>
                <div className="PDF-body" style={{ minHeight: '600px' }}>
                    <Table >
                        <thead className="text-center table-active mb-3">
                            <th>Test Name</th>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>Suger Test</td>
                            </tr>
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

export default Test2PdfView
