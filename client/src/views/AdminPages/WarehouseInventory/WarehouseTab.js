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
import { getInventories, updateInventory } from '../../../actions/inventoryAction'
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

const WarehouseTab=(props)=> {
    const {inventories, className, ...rest }=props
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
        props.getInventories();
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
                    <Tab label="Global Store" icon={<StoreIcon />} {...a11yProps(0)} />
                    <Tab label="Our Store" icon={<StorefrontIcon />} {...a11yProps(1)} />

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
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
                        <TableBody>
                            {inventories.map((data, index) => (
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
                                <div>
                                    {/* <span onClick={e => purchaseInventory(data._id, {purchaseCode:data.purchaseCode, quantity:data.quantity})} style={{ cursor: "pointer" }}>Order</span>
                                    <span onClick={e => cancelOrder(data._id)} style={{ cursor: "pointer" }}>Cancel</span> */}
                                </div>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </Box>
                    </PerfectScrollbar>
                </Card>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="text-center">
                    <h2><WarningIcon style={{ fontSize:"60px", color:'red'}}/></h2>
                    <h3> No Component Founded </h3>
                </div>
            </TabPanel>
           
        </div>
    );
}
WarehouseTab.propTypes = {
    getInventories:PropTypes.func.isRequired,
    updateInventory:PropTypes.func.isRequired,
    className: PropTypes.string,
    inventories: PropTypes.array.isRequired,
  };
  const mapStateToProps = (state) => ({
    inventories: state.inventory.inventories
  })
export default connect(mapStateToProps, { getInventories, updateInventory})(WarehouseTab)