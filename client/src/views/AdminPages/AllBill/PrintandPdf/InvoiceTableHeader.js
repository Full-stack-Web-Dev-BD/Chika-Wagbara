import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 18,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    items: {
        width: '50%',
        textAlign:'left',
        paddingLeft: 4,
        fontSize:8
    },
    price: {
        width: '15%',
        fontSize:8
    },
    discount: {
        width: '15%',
        fontSize:8
    },
    amount: {
        width: '20%',
        fontSize:8
    },
  });

  const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.items}>Items</Text>
        <Text style={styles.price}>Price</Text>
        <Text style={styles.discount}>Discount</Text>
        <Text style={styles.amount}>Final Price</Text>
    </View>
  );
  
  export default InvoiceTableHeader