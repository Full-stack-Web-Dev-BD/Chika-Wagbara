import React, { useState } from 'react';
import {
  Card,
  Container,
  Grid,
  makeStyles,
  TextField
} from '@material-ui/core';

import { v4 as uuid } from 'uuid';
import moment from 'moment';
import Page from 'src/components/Page';
import Activity from './Activity';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const FinanceAnalytics = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('Recent Activity')


  // filter property
  const [branchName, setBranchName] = useState('')
  const data = [
    {
      id: uuid(),
      branchName: 'Branch A',
      imageUrl: '/static/images/products/product_3.png',
      status: "Added a new staff in this branch",
      time: '12:34 Am'
    },
    {
      id: uuid(),
      branchName: 'Branch Name',
      imageUrl: '/static/images/products/product_3.png',
      status: "Logged out from system",
      time: '12:34 Am'
    },
    {
      id: uuid(),
      branchName: 'Branch B',
      imageUrl: '/static/images/products/product_3.png',
      status: "Updated  her profile",
      time: '12:34 Am'
    },
    {
      id: uuid(),
      branchName: 'Branch C',
      imageUrl: '/static/images/products/product_3.png',
      status: "Admin added a new Branch",
      time: '12:34 Am'
    },
    {
      id: uuid(),
      branchName: 'Branch D',
      imageUrl: '/static/images/products/product_3.png',
      status: "Mr Sujon sent mail to  Rahman",
      time: '12:34 Am'
    },
  ];



  return (
    <Page
      className={classes.root}
      title="Finance Analytics"
    >
      <Container maxWidth={false}>
        <Card className="p-5">
          <h2 className="text-center text-info">Filter Option for view log </h2>

          <TextField
            onChange={e => { setBranchName(e.target.value) }}
            margin="dense"
            id="Select speacfic Branch"
            type="text"
            select
            SelectProps={{
              native: true,
            }}
          >
            <option >Select speacfic Branch</option>
            <option value="Branch A">Branch A</option>
            <option value="Branch B">Branch B</option>
            <option value="Branch C">Branch C</option>
          </TextField>
          
          <TextField
            onChange={e => { setBranchName(e.target.value) }}
            margin="dense"
            id="Filter By Category"
            type="text"
            select
            SelectProps={{
              native: true,
            }}
          >
            <option >Select By category</option>
            <option value="Branch A">User log</option>
            <option value="Branch B">Branch Log</option>
            <option value="Branch C"></option>
          </TextField>
        </Card>
        <h3> Branch Activity</h3>
        <Grid
          container
          spacing={3}
        >
          <Grid

            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Activity log={data} title={title} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default FinanceAnalytics;
