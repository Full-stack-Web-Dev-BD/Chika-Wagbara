import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Toolbar
} from '@material-ui/core';
import Page from 'src/components/Page';
import SampleTable from './SampleTable';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Sample = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Samples"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <SampleTable />
        </Box>
      </Container>
    </Page>
  );
};

export default Sample;
