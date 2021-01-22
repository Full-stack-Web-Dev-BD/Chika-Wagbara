import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container1: {
        flexDirection: 'row',
        borderTopColor: 'black',
        borderTopWidth: 1,
        alignItems: 'center',
        textAlign: 'left',
        fontStyle: 'bold',
        flexGrow: 1,
        width:'100%',
        paddingTop:5
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'left',
        fontStyle: 'bold',
        flexGrow: 1,
        width:'100%',
    },
    container3: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'left',
        fontStyle: 'bold',
        flexGrow: 1,
        width:'100%',
        paddingBottom:5
    },
    title:{
        width:'25%',
        fontSize:8,
        paddingLeft:5,
        fontStyle: 'bold',
    },
    items:{
        width:'75%',
    },
    value:{
        fontSize:8,
        paddingRight:10
    },
    billBy:{
        width:'100%',
        fontSize:8,
        paddingLeft:5,
        fontStyle: 'bold',
    },
    billTo:{
        width:'100%',
        fontSize:8,
        paddingLeft:5,
        fontStyle: 'bold',
    }
  });

const InvoiceTableHeader = (props) => (
    <Fragment>
        <View style={styles.container1}>
            <Text style={styles.title}>Mode of Payment:</Text>
            <Text style={styles.items}>
                {props.paymentMode.map(data=>(
                    <Text style={styles.value}>{data.type}: {data.amount + " "} </Text>
                ))}
            </Text>
        </View>
        <View style={styles.container2}>
            <Text style={styles.billBy}>Billed by: {" " +props.billBy}</Text>
        </View>
        <View style={styles.container3}>
            <Text style={styles.billTo}>Bill to: {" " +props.billTo}</Text>
        </View>
    </Fragment>
);

export default InvoiceTableHeader