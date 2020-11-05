import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';

import Page from 'src/components/Page';
import Sales from './Sales';
import TrafficByDevice from './TrafficByDevice';
import TotalProfit from './TotalProfit';
import TopThreeBranchPerformance from './TopThreeBranchPerformance';

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

  return (
    <Page
      className={classes.root}
      title="Finance Analytics"
    >
      <Container maxWidth={false}>
        <h3>Top 3 Branch Activity</h3>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TopThreeBranchPerformance branchName="Branch A" earning={"$" + 55354} persent={78.4} />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TopThreeBranchPerformance branchName="Branch B" earning={"$" + 46323} persent={57} />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TopThreeBranchPerformance branchName="Branch C" earning={"$" + 24133} persent={55} />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalProfit totalProfit={"$" + 34982} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default FinanceAnalytics;
