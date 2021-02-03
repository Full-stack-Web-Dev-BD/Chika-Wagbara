import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Toolbar
} from '@material-ui/core';
import Page from 'src/components/Page';

import AccessionTable from './AccessionTable';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Accession = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Patient Test"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <AccessionTable />
        </Box>
      </Container>
    </Page>
  );
};

export default Accession;
