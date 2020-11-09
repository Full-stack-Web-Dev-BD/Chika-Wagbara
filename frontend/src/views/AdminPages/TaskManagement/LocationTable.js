import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Button,
    Card,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import Axios from 'axios';


import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { MinusSquare, PlusCircle, Trash } from 'react-feather';
import LocationCreateModal from './LocationCreateModal';



const useStyles = makeStyles((theme) => ({
    root: {},
    avatar: {
        marginRight: theme.spacing(2)
    }
}));

const LocationTree = ({ className, customers, ...rest }) => {
    const classes = useStyles();
    const [allCountries, setAllCountries] = useState([])
    const [allState, setAllState] = useState([])
    const [allCity, setAllCity] = useState([])
    const getCountry=()=>{
        
        Axios.get('/api/countries/allCountry')
            .then(res => {
                setAllCountries(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const getState=()=>{
        
        Axios.get('/api/states/allState')
            .then(res => {
                setAllState(res.data)
            })
            .catch(err => {
                console.log(err);
            })

    }
    const getCity=()=>{
        
        Axios.get('/api/cities/allCity')
            .then(res => {
                setAllState(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getCountry()
        getState()
        getCity()
    }, [])
const deleteCountry=(id)=>{
    Axios.delete(`/api/countries/delete/${id}`)
    .then(res=>{
        getCountry()
    })
    .catch(err=>{
        console.log(err);
    })
}

const deleteState=(id)=>{
    Axios.delete(`/api/states/delete/${id}`)
    .then(res=>{
        getState()
    })
    .catch(err=>{
        console.log(err);
    })
}

const deleteCity=(id)=>{
    Axios.delete(`/api/cities/delete/${id}`)
    .then(res=>{
        getCity()
    })
    .catch(err=>{
        console.log(err);
    })
}
    return (
        <div>
            <div>
                <h2 className="mb3">Location Tree</h2>
                <LocationCreateModal />
            </div>
            <Card
                className={clsx(classes.root, className)}
                {...rest}
            >
                <PerfectScrollbar>
                    <Box minWidth={1050}>
                        <div className="row">
                            <div className="col-md-4">
                                <h3 className="text-center pt-4">All Country</h3>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Country Name</TableCell>
                                            <TableCell >Available State</TableCell>
                                            <TableCell >Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {allCountries.map(el => (
                                            <TableRow hover>
                                                <TableCell>{el.name}</TableCell>
                                                <TableCell>{el.states.length}</TableCell>
                                                <TableCell style={{cursor:'pointer'}} onClick={e=>deleteCountry(el._id)}> <Trash/> </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            <div className="col-md-4">
                                <h3 className="text-center pt-4">All State</h3>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>State Name</TableCell>
                                            <TableCell >Available City</TableCell>
                                            <TableCell >Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {allState.map(el => (
                                            <TableRow hover>
                                                <TableCell>{el.name}</TableCell>
                                                <TableCell>{el.cities.length}</TableCell>
                                                <TableCell style={{cursor:'pointer'}} onClick={e=>deleteState(el._id)}> <Trash/> </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            
                            <div className="col-md-4">
                                <h3 className="text-center pt-4">All Country</h3>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Country Name</TableCell>
                                            <TableCell >Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {allCity.map(el => (
                                            <TableRow hover>
                                                <TableCell>{el.name}</TableCell>
                                                <TableCell style={{cursor:'pointer'}} onClick={e=>deleteCity(el._id)}> <Trash/> </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </Box>
                </PerfectScrollbar>
            </Card>
        </div>
    );
};

LocationTree.propTypes = {
    className: PropTypes.string,
    customers: PropTypes.array.isRequired
};

export default LocationTree;


