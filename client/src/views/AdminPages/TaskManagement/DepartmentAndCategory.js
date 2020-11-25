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
import DepartmentCreateModal from './DepartmentCreateModal';
import { getDepartments, deleteDepartment} from '../../../actions/departmentAction'
import { getCategories, deleteCategory } from '../../../actions/categoryAction'


const useStyles = makeStyles((theme) => ({
    root: {},
    avatar: {
        marginRight: theme.spacing(2)
    }
}));

const DepartmentAndCategory = (props) => {
    const classes = useStyles();
    const {departments, categories, rest, className}=props
    useEffect(() => {
        props.getDepartments()
        props.getCategories()
    }, [])
    
    const deleteDepartment=(id)=>{
       props.deleteDepartment(id)
    }

    const deleteCategory=(id)=>{
        props.deleteCategory(id)
    }
    return (
        <div>
            <div>
                <h2 className="mb3">Department & Category</h2>
                <DepartmentCreateModal />
            </div>
            <Card
                className={clsx(classes.root, className)}
                {...rest}
            >
                <PerfectScrollbar>
                    <Box minWidth={1050}>
                    <div className="row">
                            <div className="col-md-6">
                                <h3 className="text-center pt-4">All Department</h3>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Department Name</TableCell>
                                            <TableCell >Revenue Target</TableCell>
                                            <TableCell >Available Category</TableCell>
                                            <TableCell >Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {departments.map((el, index) => (
                                            <TableRow hover key={index}>
                                                <TableCell>{el.name}</TableCell>
                                                <TableCell>{el.revenueTarget}</TableCell>
                                                <TableCell>{el.categories.length}</TableCell>
                                                <TableCell style={{cursor:'pointer'}} onClick={()=>deleteDepartment(el._id)}> <Trash/> </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            <div class="vl"></div>
                            <div className="col-md-5">
                                <h3 className="text-center pt-4">All Category</h3>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Category Name</TableCell>
                                            <TableCell>Revenue Target</TableCell>
                                            <TableCell >Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {categories.map((el, index) => (
                                            <TableRow hover  key={index}>
                                                <TableCell>{el.name}</TableCell>
                                                <TableCell>{el.revenueTarget}</TableCell>
                                                <TableCell style={{cursor:'pointer'}} onClick={e=>deleteCategory(el._id)}> <Trash/> </TableCell>
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

DepartmentAndCategory.propTypes = {
    getDepartments: PropTypes.func.isRequired,
    deleteDepartment: PropTypes.func.isRequired,
    getCategories: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    departments: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    className: PropTypes.string,
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    departments:state.department.departments,
    categories:state.category.categories,
    errors: state.errors
  });
export default connect(mapStateToProps, { getDepartments, deleteDepartment, getCategories, deleteCategory })(DepartmentAndCategory);

