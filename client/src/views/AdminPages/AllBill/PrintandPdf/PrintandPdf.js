import React, {useState, useEffect} from 'react';
import { Document, Page, StyleSheet  } from '@react-pdf/renderer';
import Header from './Header'
import PatientName from './PatientName'
import InvoiceItemsTable from './InvoiceItemsTable'

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 10,
    paddingLeft:10,
    paddingRight:10,
    lineHeight: 1.5,
    flexDirection: 'column',
  }
});


const PrintandPdf=(props)=> {
  const { data }=props

  const [testDiscount, setTestDiscout]=useState('')
  const [totalPrice, setTotalPrice]=useState('')

  useEffect(()=>{
    var count=0
    var testPrice=0
    for(let i=0; i<data.tests.length; i++){
      count=count+(data.tests[i].discount?parseInt(data.tests[i].discount):0);
      testPrice=testPrice+(parseInt(data.tests[i].testPrice));
    }
    setTestDiscout(count)
    setTotalPrice(testPrice)
  }, [])

  console.log(data)
  return (
    <Document>
      <Page size={{width:303, height:400}} style={styles.page}>
        <Header date={data.date} patientNo={data.patient.patientNo}/>
        <PatientName name={data.patient.firstName +" " +data.patient.lastName} />
        <InvoiceItemsTable tests={data.tests} totalPrice={totalPrice} totalDiscount={data.totalDiscount} testDiscount={testDiscount} totalAmountToPay={data.totalAmountToPay} paidAmount={data.paidAmount} remainingBalance={data.remainingBalance} paymentMode={data.paymentMode} />
      </Page>
      </Document>
  );
}
export default PrintandPdf;