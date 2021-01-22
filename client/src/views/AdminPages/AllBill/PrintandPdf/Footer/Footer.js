import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        fontStyle: 'bold',
        marginTop:10,
        padding:5
    },

    name: {
        textAlign:'right',
        fontSize:8,
        width:'100%'
    },
  });

const Footer = (props) => (
    <View style={styles.container}>
        <Text style={styles.name}>Address1</Text>
        <Text style={styles.name}>Address2</Text>
        <Text style={styles.name}>Phone</Text>
        <Text style={styles.name}>Email</Text>
        <Text style={styles.name}>Website</Text>
    </View>
);
  
  export default Footer