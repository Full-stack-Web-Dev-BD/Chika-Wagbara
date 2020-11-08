import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Button,
    Card,
    makeStyles,
} from '@material-ui/core';
import Axios from 'axios';


import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { MinusSquare, PlusCircle } from 'react-feather';



const useStyles = makeStyles((theme) => ({
    root: {},
    avatar: {
        marginRight: theme.spacing(2)
    }
}));

const LocationTree = ({ className, customers, ...rest }) => {
    const classes = useStyles();
    useEffect(() => {
        Axios.get('/getbraqnchapi')
            .then(res => {
                // setAllBranch(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <div>
                <h2 className="mb3">Location Tree</h2>
                <Button variant="contained" size="small" color="secondary" > <PlusCircle/> Add a location </Button>
            </div>
            <Card
                className={clsx(classes.root, className)}
                {...rest}
            >
                <PerfectScrollbar>
                    <Box minWidth={1050}>

                        <TreeView
                            defaultCollapseIcon={< MinusSquare />}
                            defaultExpandIcon={<PlusCircle />}
                        >
                            <TreeItem nodeId="1" label="Applications">
                                <TreeItem nodeId="2" label="Calendar" />
                                <TreeItem nodeId="3" label="Chrome" />
                                <TreeItem nodeId="4" label="Webstorm" />
                            </TreeItem>
                            <TreeItem nodeId="5" label="Country">
                                <TreeItem nodeId="10" label="State name" />
                                <TreeItem nodeId="6" label="State name">
                                    <TreeItem nodeId="7" label="City "/>
                                    <TreeItem nodeId="8" label="City "/>
                                    <TreeItem nodeId="9" label="City "/>
                                </TreeItem>
                            </TreeItem>
                        </TreeView>
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


