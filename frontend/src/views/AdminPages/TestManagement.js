import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Toolbar
} from '@material-ui/core';
import Page from 'src/components/Page';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const TestManagement = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Test Management"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
            <div>
            </div>
        </Box>
      </Container>
    </Page>
  );
};

export default TestManagement;