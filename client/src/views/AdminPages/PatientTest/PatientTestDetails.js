import React from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {},
    avatar: {
      marginRight: theme.spacing(2)
    }
}));

const PatientTestDetails=(props)=>{
    const { products, className, ...rest }=props
    const classes = useStyles();

    return(
        <div>
      
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <PerfectScrollbar>
            <Box minWidth={1050}>
                <Table size="small">
                <TableHead>
                    <TableRow>
                    <TableCell >
                        Product Name
                    </TableCell>
                    <TableCell>
                        Department
                    </TableCell>
                    <TableCell>
                        Type
                    </TableCell>
                    <TableCell>
                        Unit
                    </TableCell>
                    <TableCell>
                        Purchase Code
                    </TableCell>
                    <TableCell>
                        Matergial Safety Code
                    </TableCell>
                    <TableCell>
                        Quantity
                    </TableCell>
                    <TableCell>
                        Alert Level
                    </TableCell>
                    <TableCell>
                        Tax
                    </TableCell>
                    <TableCell >
                        Action
                    </TableCell>
                    </TableRow>
                </TableHead>
                {/* <TableBody>
                    {allProduct?
                    allProduct.map((data, index) => (
                    <TableRow
                        hover
                        key={index}
                    >
                        <TableCell>
                        <Box
                            alignItems="center"
                            display="flex"
                        >
                            <Typography
                            color="textPrimary"
                            variant="body1"
                            >
                            {data.name}
                            </Typography>
                        </Box>
                        </TableCell>
                        <TableCell>
                        {data.department?data.department.name:0}
                        </TableCell>
                        <TableCell>
                        {data.type}
                        </TableCell>
                        <TableCell>
                        {data.unit}
                        </TableCell>
                        <TableCell>
                        {data.purchaseCode}
                        </TableCell>
                        <TableCell>
                        {data.materialSafetyCode}
                        </TableCell>
                        <TableCell>
                        {data.quantity}
                        </TableCell>
                        <TableCell>
                        {data.alertLevel}
                        </TableCell>
                        <TableCell>
                        {data.tax}
                        </TableCell>
                        <TableCell>
                    
                        </TableCell>
                    </TableRow>
                    )):''}
                </TableBody> */}
                </Table>
            </Box>
            </PerfectScrollbar>
        </Card>
    </div>
    )
}

export default PatientTestDetails;