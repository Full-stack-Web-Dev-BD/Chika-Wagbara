import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
// import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'
// import InvoiceTableFooter from './InvoiceTableFooter'

const tableRowsCount = 11;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
});

  const InvoiceItemsTable = (props) => (
    <View style={styles.tableContainer}>
        <InvoiceTableHeader />
        <InvoiceTableRow tests={props.tests} totalDiscount={props.totalDiscount} totalPrice={props.totalPrice} testDiscount={props.testDiscount} totalAmountToPay={props.totalAmountToPay} paidAmount={props.paidAmount} remainingBalance={props.remainingBalance} paymentMode={props.paymentMode} />
        {/* <InvoiceTableBlankSpace rowsCount={ tableRowsCount - invoice.items.length} />
        <InvoiceTableFooter items={invoice.items} /> */}
    </View>
  );
  
  export default InvoiceItemsTable