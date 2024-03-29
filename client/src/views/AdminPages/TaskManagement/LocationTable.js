import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux'
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
import { MinusSquare, PlusCircle, Trash } from 'react-feather';
import LocationCreateModal from './LocationCreateModal';
import { deleteCountry, getCountries } from '../../../actions/countryAction';
import { deleteState, getStates } from '../../../actions/stateAction';
import { deleteCity, getCities } from '../../../actions/cityAction';



const useStyles = makeStyles((theme) => ({
    root: {},
    avatar: {
        marginRight: theme.spacing(2)
    }
}));

const LocationTable = (props) => {
    const { className, rest, countries, states, cities }=props
    const classes = useStyles();

    useEffect(() => {
        props.getCountries()
        props.getStates()
        props.getCities()
    }, [])
    
    const deleteCountry=(id)=>{
       props.deleteCountry(id)
    }

    const deleteState=(id)=>{
        props.deleteState(id)
    }

    const deleteCity=(id)=>{
        props.deleteCity(id)
    }
    return (
        <div className="table-data">
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
                            <div className="col-md-4" style={{borderRight:'1px solid'}}>
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
                                        {countries?
                                        countries.map((el, index) => (
                                            <TableRow hover key={index}>
                                                <TableCell>{el.name}</TableCell>
                                                <TableCell>{el.states?el.states.length:0}</TableCell>
                                                <TableCell style={{cursor:'pointer'}} onClick={()=>deleteCountry(el._id)}> <Trash/> </TableCell>
                                            </TableRow>
                                        )):''}
                                    </TableBody>
                                </Table>
                            </div>
                            <div className="col-md-4"  style={{borderRight:'1px solid'}}>
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
                                        {states?
                                        states.map((el, index) => (
                                            <TableRow hover  key={index}>
                                                <TableCell>{el.name}</TableCell>
                                                <TableCell>{el.cities.length}</TableCell>
                                                <TableCell style={{cursor:'pointer'}} onClick={e=>deleteState(el._id)}> <Trash/> </TableCell>
                                            </TableRow>
                                        )):''}
                                    </TableBody>
                                </Table>
                            </div>
                            <div className="col-md-4">
                                <h3 className="text-center pt-4">All City</h3>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Country Name</TableCell>
                                            <TableCell >Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cities?
                                        cities.map((el, index) => (
                                            <TableRow hover key={index}>
                                                <TableCell>{el.name}</TableCell>
                                                <TableCell style={{cursor:'pointer'}} onClick={e=>deleteCity(el._id)}> <Trash/> </TableCell>
                                            </TableRow>
                                        )):''}
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

LocationTable.propTypes = {
    deleteCountry: PropTypes.func.isRequired,
    deleteState: PropTypes.func.isRequired,
    deleteCity: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    countries: PropTypes.array.isRequired,
    states: PropTypes.array.isRequired,
    cities: PropTypes.array.isRequired,
    className: PropTypes.string,
    customers: PropTypes.array.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    countries:state.country.countries,
    states:state.state.states,
    cities:state.city.cities,
    errors: state.errors
  });
export default connect(mapStateToProps, { deleteCountry, getCountries, deleteState, getCities, deleteCity, getStates})(LocationTable);
