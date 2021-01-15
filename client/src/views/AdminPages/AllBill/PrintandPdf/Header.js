import React from 'react';
import {Text, View, Image, StyleSheet  } from '@react-pdf/renderer';
import moment from 'moment'
const logo='/static/images/assets/logo.png'

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
      },
      
      header1:{
        width:'50%',
        marginLeft:0
      },
      
      header1:{
        width:'50%',
        marginRight:0
      },
      
      headerText:{
      },
      logo:{
        marginLeft: 'auto',
        width: 130
      }
  });


  const Header = (props) => (
    <View style={styles.header}>
        <View style={styles.header1}>
            <Text style={styles.headerText}>Bill Date: {moment(props.date).format('DD/MM/YYYY')}</Text>
            <Text style={styles.headerText}>Bill ID: 013445</Text>
            <Text style={styles.headerText}>Patient ID: {props.patientNo?props.patientNo:null}</Text>
        </View>
        <View style={styles.header1}>
           <Image style={styles.logo} src={logo}></Image>
        </View>
    </View>
  );
  
  export default Header