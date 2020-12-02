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
import AddPatient from './AddPatient'
import { getCompleteTestPatients } from '../../../actions/patientAction'

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

const PatientTab=(props)=> {
    const { completeTestPatients, className, ...rest }=props
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
        props.getCompleteTestPatients();
    }, [])

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
                    <Tab label="Add Patient" icon={<StoreIcon />} {...a11yProps(0)} />
                    <Tab label="Patient Test Report" icon={<StorefrontIcon />} {...a11yProps(1)} />

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
            <AddPatient />
            </TabPanel>
            <TabPanel value={value} index={1}>
            <div>
                <Card
                    className={clsx(classes.root, className)}
                    {...rest}
                >
                    <PerfectScrollbar>
                    <Box minWidth={1050}>
                        <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell >
                                Patient No
                            </TableCell>
                            <TableCell >
                                Patient Name
                            </TableCell>
                            <TableCell>
                                Title
                            </TableCell>
                            <TableCell>
                                Email
                            </TableCell>
                            <TableCell>
                                Mobile Number
                            </TableCell>
                            <TableCell>
                                Age
                            </TableCell>
                            <TableCell>
                                Address
                            </TableCell>
                            <TableCell>
                                Nationality
                            </TableCell>
                            <TableCell >
                                Action
                            </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {completeTestPatients?
                            completeTestPatients.map(el => (
                            <TableRow
                                hover
                                style={{cursor:'pointer'}}
                            >  
                                <TableCell>
                                {el.patientNo}
                                </TableCell>
                                <TableCell>
                                <Box
                                    alignItems="center"
                                    display="flex"
                                >
                                    <Typography
                                    color="textPrimary"
                                    variant="body1"
                                    >
                                    {el.firstName} {el.lastName}
                                    </Typography>
                                </Box>
                                </TableCell>
                                <TableCell>
                                {el.title}
                                </TableCell>
                                <TableCell>
                                {el.email}
                                </TableCell>
                                <TableCell>
                                {el.mobileNumber1}
                                </TableCell>
                                <TableCell>
                                {el.age}
                                </TableCell>
                                <TableCell>
                                {el.address}
                                </TableCell>
                                <TableCell>
                                {el.nationality}
                                </TableCell>
                                <TableCell>
                                <div>
                                    {/* <span onClick={e => deleteBranch(el._id)}><DeleteOutlineIcon style={{ cursor: "pointer" }} /></span>
                                    <ViewBranchDetails branch={el} /> */}
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
PatientTab.propTypes = {
    getCompleteTestPatients:PropTypes.func.isRequired,
    className: PropTypes.string,
    completeTestPatients: PropTypes.array.isRequired,
  };
  const mapStateToProps = (state) => ({
    completeTestPatients: state.patient.completeTestPatients,
  })
export default connect(mapStateToProps, { getCompleteTestPatients })(PatientTab)