import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StoreIcon from '@material-ui/icons/Store';
import StorefrontIcon from '@material-ui/icons/Storefront';
import WarningIcon from '@material-ui/icons/Warning';
import PerfectScrollbar from 'react-perfect-scrollbar';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import clsx from 'clsx';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import { connect } from 'react-redux';
import SampleCreateModal from './SampleCreateModal'
import { deleteSample, getSamples } from '../../../actions/sampleAction';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    customStyle: {
        width: '100%'
    }
}));

const SampleTable=(props)=> {
    const {samples, className, ...rest }=props
    const classes = useStyles();
    const [allTest, setAllTest] = useState(['adsf', 'asdf'])


    useEffect(()=>{
        props.getSamples();
    }, [])

    const deleteSample=(id)=>{
        props.deleteSample(id)
    }

    return (
        <div>
        <div className="d-flex">
            <h2 className="mb3">Samples</h2>
            <SampleCreateModal />
        </div>
        <Card className={clsx(classes.root, className)} {...rest} >
            <PerfectScrollbar>
            <Box minWidth={1050}>
                <Table size="small">
                <TableHead>
                    <TableRow>
                    <TableCell >
                        Sample Type
                    </TableCell>
                    <TableCell>
                        Container
                    </TableCell>
                    <TableCell>
                        Cap Color
                    </TableCell>
                    <TableCell>
                        Storage Temperature
                    </TableCell>
                    <TableCell>
                        Storage Duration
                    </TableCell>
                    <TableCell>
                        Important Info
                    </TableCell>
                    <TableCell >
                        Action
                    </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {samples?
                    samples.map(el => (
                    <TableRow
                        hover
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
                            {el.type}
                            </Typography>
                        </Box>
                        </TableCell>
                        <TableCell>
                        {el.container}
                        </TableCell>
                        <TableCell>
                        <span className="dot" style={{backgroundColor:`${el.containerCapColor}`}}></span>
                        </TableCell>
                        <TableCell>
                        {el.storageTemperature}
                        </TableCell>
                        <TableCell>
                        {el.storageDuration}
                        </TableCell>
                        <TableCell>
                        {el.importantInfo}
                        </TableCell>
                        <TableCell>
                        <div>
                            <span onClick={e => deleteSample(el._id)}><DeleteOutlineIcon style={{ cursor: "pointer" }} /></span>
                        </div>
                        </TableCell>
                    </TableRow>
                    )):''}
                </TableBody>
                </Table>
            </Box>
            </PerfectScrollbar>
        </Card>
    </div>
    );
}
SampleTable.propTypes = {
    getSamples:PropTypes.func.isRequired,
    deleteSample:PropTypes.func.isRequired,
    className: PropTypes.string,
    samples: PropTypes.array.isRequired
  };
  const mapStateToProps = (state) => ({
    samples: state.sample.samples,
  })
export default connect(mapStateToProps, { getSamples, deleteSample })(SampleTable)