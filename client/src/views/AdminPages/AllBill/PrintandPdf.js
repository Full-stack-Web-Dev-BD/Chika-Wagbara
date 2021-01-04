import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment'
import ReactToPdf  from 'react-to-pdf'
import { useReactToPrint } from 'react-to-print';
import '../../../Style/Print.css'
const logo='/static/images/assets/logo.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:20,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 302.36,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const PrintandPdf=(props)=> {
  const classes = useStyles();
  const componentRef = useRef();
  const { testData, totalDiscount, totalPrice, totalFinalPrice, testDiscount, patientNo, paidAmount, remainingAmount, paymentMode, billBy, billTo }=props

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>Section #1</Text>
        </View>
        <View>
          <Text>Section #2</Text>
        </View>
      </Page>
      </Document>
  );
}
export default PrintandPdf;