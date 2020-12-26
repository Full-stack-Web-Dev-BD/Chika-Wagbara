import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StoreIcon from '@material-ui/icons/Store';
import StorefrontIcon from '@material-ui/icons/Storefront';
import TextField from '@material-ui/core/TextField'
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
import { search } from '../../../utils/Search'
import OrderInventory from './OrderInventory'
import { getInventories, updateInventory } from '../../../actions/inventoryAction'
import { getBranchInventories } from '../../../actions/branchInventoryAction'
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
    const {inventories, branchInventories, className, ...rest }=props
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [allTest, setAllTest] = useState(['adsf', 'asdf'])
    const [searchTerm, setSearchTerm]=useState('')
    const [globalSearchTerm, setGlobalSearchTerm]=useState('')
    const [allInventory, setAllInventory]=useState([])
    const [allBranchInventory, setAllBranchInventory]=useState([])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const addTestToPDF = (test) => {
        let existingTest = [...allTest]
        existingTest.push(test)
    }
    
    useEffect(()=>{
        props.getInventories();
        props.getBranchInventories();
    }, [])

    useEffect(()=>{
        setAllInventory(inventories)
    }, [inventories])

    useEffect(()=>{
        setAllInventory(search(inventories, globalSearchTerm))
    }, [globalSearchTerm])

    useEffect(()=>{
        setAllBranchInventory(branchInventories)
    }, [branchInventories])

    useEffect(()=>{
        setAllBranchInventory(search(branchInventories, searchTerm))
    }, [searchTerm])

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
                <div style={{marginBottom:'10px'}}>
                    <TextField
                    onChange={e=>setGlobalSearchTerm(e.target.value)}
                    margin="dense"
                    placeholder="Search by any field"
                    type="text"
                    value={globalSearchTerm}
                    fullWidth
                    />
                </div>
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
                        <TableBody>
                            {allInventory?
                            allInventory.map((data, index) => (
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
                                    <OrderInventory id={data._id}/>
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
               <div style={{marginBottom:'10px'}}>
                    <TextField
                    onChange={e=>setSearchTerm(e.target.value)}
                    margin="dense"
                    placeholder="Search by any field"
                    type="text"
                    value={searchTerm}
                    fullWidth
                    />
                </div>
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
                        <TableBody>
                            {allBranchInventory?
                            allBranchInventory.map((data, index) => (
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
WarehouseTab.propTypes = {
    getInventories:PropTypes.func.isRequired,
    getBranchInventories:PropTypes.func.isRequired,
    updateInventory:PropTypes.func.isRequired,
    className: PropTypes.string,
    inventories: PropTypes.array.isRequired,
    branchInventories: PropTypes.array.isRequired,
  };
  const mapStateToProps = (state) => ({
    inventories: state.inventory.inventories,
    branchInventories: state.branchInventory.branchInventories
  })
export default connect(mapStateToProps, { getInventories, getBranchInventories, updateInventory})(WarehouseTab)