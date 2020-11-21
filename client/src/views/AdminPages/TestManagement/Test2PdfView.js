import { Card, Table } from '@material-ui/core'
import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';




const Test2PdfView = ({ pdfContent, deleteElement }) => {
    return (
        <div className="row">
            <Card className="col-md-6 offset-md-3 p-4">
                <div className="PDF-header text-center pt-5 pb-5">
                    <h3>PDF Header</h3>
                </div>
                <div className="PDF-body" style={{ minHeight: '600px' }}>
                    <Table >
                        <thead className="text-center table-active mb-3">
                            <th>Test Name</th>
                        </thead>
                        <tbody className="text-center pdf-table">
                            {
                                pdfContent.map((el, i) => (
                                    <>
                                        {el.rowType === 'whiteSpaceRow' ?
                                            <tr>
                                                <td colSpan="5">&nbsp;</td>
                                                <td className="delete-icon"> <span onClick={e => deleteElement(i)}> <DeleteOutlineIcon /></span>  </td>
                                            </tr>
                                            : ''
                                        }
                                        {
                                            el.rowType === 'testInfo' ?

                                                <tr>
                                                    <td> {el.testName} </td>
                                                    <td className="delete-icon"> <span onClick={e => deleteElement(i)}> <DeleteOutlineIcon /></span>  </td>
                                                </tr> : ''
                                        }
                                        {
                                            el.rowType == 'spaceWithTitle' ?

                                                <tr>
                                                    <td colSpan="5" >{el.title}</td>
                                                    <td className="delete-icon"> <span onClick={e => deleteElement(i)}> <DeleteOutlineIcon /></span>  </td>

                                                </tr> : ''
                                        }
                                        {
                                            el.rowType == 'divider' ?
                                                <tr>
                                                    <td colSpan="5">&nbsp; <hr /> </td>
                                                    <td className="delete-icon"> <span onClick={e => deleteElement(i)}> <DeleteOutlineIcon /></span>  </td>
                                                </tr> : ''
                                        }

                                    </>
                                ))
                            }
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
