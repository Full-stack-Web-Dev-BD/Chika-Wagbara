import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  const { testData, totalDiscount, additionalBill, totalPrice, totalFinalPrice, testDiscount, patientNo, paidAmount, remainingAmount, paymentMode, billBy, billTo }=props

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
    <div className={classes.root} ref={componentRef}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" style={{fontSize:11}}>
                  Bill Date: {moment(Date.now()).format('DD/MM/YYYY')}
                </Typography>
                <Typography variant="subtitle1" gutterBottom style={{fontSize:11}}>
                  Bill ID: 063547
                </Typography>
                <Typography variant="subtitle1" gutterBottom style={{fontSize:11}}>
                  Patient ID: {patientNo}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <img style={{width:'130px'}} src={logo} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={12} sm container style={{border:'1px solid', margin:'7px'}}>
            <Typography variant="h3" style={{margin:'auto'}}>{billTo}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={12} style={{border:'1px solid', margin:'10px 7px 10px 7px'}} className="main">
          <TableContainer >
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead style={{borderBottom:'1px solid'}}>
                <TableRow>
                  <TableCell style={{fontSize:11, padding:'2px 2px 2px 2px'}}>Items</TableCell>
                  <TableCell align="right" style={{fontSize:9,}}></TableCell>
                  <TableCell align="right" style={{fontSize:9}}></TableCell>
                  <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>Price</TableCell>
                  <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>Discount</TableCell>
                  <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>Final Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {testData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell colSpan={3} style={{fontSize:9, padding:'2px 2px 2px 2px'}}>{data.testName}</TableCell>
                    <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>{data.testPrice}</TableCell>
                    <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>{data.discount?data.discount:0}</TableCell>
                    <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>{data.finalPrice}</TableCell>
                  </TableRow>
                ))}
                {additionalBill.length>0?
                additionalBill.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell colSpan={3} style={{fontSize:9, padding:'2px 2px 2px 2px'}}>{data.additionalBillReason}</TableCell>
                    <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>{data.additionalBillPrice}</TableCell>
                    <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>{data.discount?data.discount:0}</TableCell>
                    <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>{data.additionalBillPrice}</TableCell>
                  </TableRow>
                )):''}
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={4} style={{fontSize:9, padding:'2px 2px 2px 2px'}}>Additional Discount</TableCell>
                  <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>{totalDiscount?totalDiscount:0}</TableCell>
                  <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>-{totalDiscount?totalDiscount:0}</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={3} style={{fontSize:9, padding:'2px 2px 2px 2px'}}>{'Total'}</TableCell>
                  <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>{totalPrice}</TableCell>
                  <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>{testDiscount+(totalDiscount?totalDiscount:0)}</TableCell>
                  <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>{totalFinalPrice}</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={4} style={{fontSize:9, padding:'2px 2px 2px 2px'}}>{""}</TableCell>
                  <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>Paid</TableCell>
                  <TableCell align="right" style={{fontSize:9, padding:'2px 2px 2px 2px'}}>{paidAmount}</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={4} style={{fontSize:11, padding:'6px 6px 6px 8px'}}>{""}</TableCell>
                  <TableCell align="right" style={{fontSize:11, padding:'6px 6px 6px 6px'}}>Balance</TableCell>
                  <TableCell align="right" style={{fontSize:11, padding:'6px 6px 6px 6px'}}>{remainingAmount}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          </Grid>
          <Grid item md={12} sm container style={{borderLeft:'1px solid', borderBottom:'1px solid', borderRight:'1px solid', margin:'-15px 7px 10px 7px'}}>
            <Grid item xs container direction="column" spacing={2} style={{margin:2}}>
              <Typography variant="p" style={{fontSize:10}}><strong>Mode of Payment:</strong>
              {paymentMode?
                paymentMode.map(data=>(
                  <span style={{margin:3}}>{data.type}:{data.amount}</span>
                )):''
              }
              </Typography>
              <Typography variant="p" style={{fontSize:10}}><strong>Bill By:</strong>
                <span style={{margin:3}}>{billBy.name}</span>
              </Typography>
              <Typography variant="p" style={{fontSize:10}}><strong>Bill To:</strong>
                <span style={{margin:3}}>{billTo}</span>
              </Typography>
            </Grid>
          </Grid>
          <hr style={{backgroundColor:'black'}}/>
        </Grid>
      </Paper>
    </div>
    <div style={{width:'100%', marginTop:'10px'}}>
      <Button variant="outlined" color="primary" onClick={handlePrint} style={{marginLeft:'43%'}}>Print this out!</Button>
    </div>
    </>
  );
}
export default PrintandPdf;