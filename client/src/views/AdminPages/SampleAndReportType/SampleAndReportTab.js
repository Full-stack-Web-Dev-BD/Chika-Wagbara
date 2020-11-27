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
import ReportCreateModal from './ReportCreateModal'
import { deleteSample, getSamples } from '../../../actions/sampleAction';
import { deleteReportType, getReportTypes } from '../../../actions/reportTypeAction';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

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

const TestAndReportTab=(props)=> {
    const {samples, reportTypes, className, ...rest }=props
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [allTest, setAllTest] = useState(['adsf', 'asdf'])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const addTestToPDF = (test) => {
        let existingTest = [...allTest]
        existingTest.push(test)
    }
    
    useEffect(()=>{
        props.getSamples();
        props.getReportTypes();
    })

    const deleteReportType=(id)=>{
        props.deleteReportType(id)
    }

    const deleteSample=(id)=>{
        props.deleteSample(id)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Sample " icon={<StoreIcon />} {...a11yProps(0)} />
                    <Tab label="Report" icon={<StorefrontIcon />} {...a11yProps(1)} />

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div>
                   <div className="d-flex">
                        <h2 className="mb3">Samples</h2>
                        <SampleCreateModal />
                    </div>
                    <Card className={clsx(classes.root, className)} {...rest} >
                        <PerfectScrollbar>
                        <Box minWidth={1050}>
                            <Table>
                            <TableHead>
                                <TableRow>
                                <TableCell >
                                    Sample Type
                                </TableCell>
                                <TableCell>
                                    Container
                                </TableCell>
                                <TableCell>
                                    Container Cap Color
                                </TableCell>
                                <TableCell>
                                    Storage Temperature
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
                                    {el.containerCapColor}
                                    </TableCell>
                                    <TableCell>
                                    {el.storageTemperature}
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
            </TabPanel>
            <TabPanel value={value} index={1}>
            <div>
                   <div className="d-flex">
                        <h2 className="mb3">Report Type</h2>
                        <ReportCreateModal />
                    </div>
                    <Card className={clsx(classes.root, className)} {...rest} >
                        <PerfectScrollbar>
                        <Box minWidth={1050}>
                            <Table>
                            <TableHead>
                                <TableRow>
                                <TableCell >
                                    Report Type
                                </TableCell>
                                <TableCell >
                                    Action
                                </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {reportTypes?
                                reportTypes.map(el => (
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
                                        {el.name}
                                        </Typography>
                                    </Box>
                                    </TableCell>
                                    <TableCell>
                                    <div>
                                        <span onClick={e => deleteReportType(el._id)}><DeleteOutlineIcon style={{ cursor: "pointer" }} /></span>
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
            </TabPanel>
           
        </div>
    );
}
TestAndReportTab.propTypes = {
    getSamples:PropTypes.func.isRequired,
    getReportTypes:PropTypes.func.isRequired,
    deleteSample:PropTypes.func.isRequired,
    deleteReportType:PropTypes.func.isRequired,
    className: PropTypes.string,
    samples: PropTypes.array.isRequired,
    reportTypes: PropTypes.array.isRequired,
  };
  const mapStateToProps = (state) => ({
    samples: state.sample.samples,
    reportTypes: state.reportType.reportTypes
  })
export default connect(mapStateToProps, { getSamples, getReportTypes, deleteReportType, deleteSample })(TestAndReportTab)