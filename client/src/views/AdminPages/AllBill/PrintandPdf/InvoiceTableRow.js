import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 18,
        fontStyle: 'bold',
    },
    description: {
        width: '50%',
        textAlign: 'left',
        paddingLeft: 4,
        fontSize:8
    },
    qty: {
        width: '15%',
        textAlign: 'center',
        fontSize:8
    },
    rate: {
        width: '15%',
        textAlign: 'center',
        fontSize:8
    },
    amount: {
        width: '20%',
        textAlign: 'center',
        paddingRight: 4,
        fontSize:8
    },
    total:{
        fontStyle:'bold',
        width: '50%',
        textAlign: 'left',
        paddingLeft: 4,
        fontSize:10
    },
    paid:{
        fontStyle:'bold',
        width: '15%',
        textAlign: 'center',
        fontSize:10
    },
    balance:{
        fontStyle:'bold',
        width: '15%',
        textAlign: 'center',
        fontSize:10
    }
  });


const InvoiceTableRow = (props) => {
    const { tests, totalDiscount, totalPrice, testDiscount, totalAmountToPay, paidAmount, remainingBalance, paymentMode } =props
    console.log(tests)
    const rows = tests.map( (test, index) => 
        <View style={styles.row} key={index}>
            <Text style={styles.description}>{test.testName}</Text>
            <Text style={styles.qty}>{test.testPrice}</Text>
            <Text style={styles.rate}>{test.discount?test.discount:0}</Text>
            <Text style={styles.amount}>{test.finalPrice}</Text>
        </View>
    )
    return (
    <Fragment>
        {rows}
        <View style={styles.row}>
            <Text style={styles.description}>Additional Discount</Text>
            <Text style={styles.qty}></Text>
            <Text style={styles.rate}>{totalDiscount?totalDiscount:0}</Text>
            <Text style={styles.amount}>-{totalDiscount?totalDiscount:0}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.qty}>{totalPrice}</Text>
            <Text style={styles.rate}>{testDiscount+(totalDiscount?totalDiscount:0)}</Text>
            <Text style={styles.amount}>{totalAmountToPay}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.description}></Text>
            <Text style={styles.qty}></Text>
            <Text style={styles.paid}>Paid</Text>
            <Text style={styles.amount}>{paidAmount}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.description}></Text>
            <Text style={styles.qty}></Text>
            <Text style={styles.balance}>Balance</Text>
            <Text style={styles.amount}>{remainingBalance}</Text>
        </View>
    </Fragment> )
};
  
export default InvoiceTableRow