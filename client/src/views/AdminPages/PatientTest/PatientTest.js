import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Toolbar
} from '@material-ui/core';
import Page from 'src/components/Page';

import PatientTestTable from './PatientTestTable';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Patient = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <PatientTestTable />
        </Box>
      </Container>
    </Page>
  );
};

export default Patient;
