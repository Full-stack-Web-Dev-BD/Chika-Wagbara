import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    nameContainer: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        height: 30,
        fontStyle: 'bold',
        marginTop:5
    },
    name: {
        fontSize:18,
        textAlign:'center',
        marginBottom:-3
    },
  });

  const PatientName = (props) => (
    <View style={styles.nameContainer}>
        <Text style={styles.name}>{props.name}</Text>
    </View>
  );
  
  export default PatientName