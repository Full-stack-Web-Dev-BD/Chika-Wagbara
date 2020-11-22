import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux'
import {
    Box,
    Card,
    makeStyles
} from '@material-ui/core';
import LocationCreateModal from './LocationCreateModal';



const useStyles = makeStyles((theme) => ({
    root: {},
    avatar: {
        marginRight: theme.spacing(2)
    }
}));

const DepartmentAndCategory = ({rest,className}) => {
    const classes = useStyles();

    useEffect(() => {
    }, [])


    return (
        <div>
            <div>
                <h2 className="mb3">Department & Category</h2>
                
            </div>
            <Card
                className={clsx(classes.root, className)}
                {...rest}
            >
                <PerfectScrollbar>
                    <Box minWidth={1050}>

                    </Box>
                </PerfectScrollbar>
            </Card>
        </div>
    );
};

export default DepartmentAndCategory
