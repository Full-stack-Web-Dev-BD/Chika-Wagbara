import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Table,
  Toolbar
} from '@material-ui/core';
import Page from 'src/components/Page';
import DepartmentCreateModal from './ReportCreateModal';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ReportManagement = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Test Management"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <DepartmentCreateModal/>
        </Box>
      </Container>
    </Page>
  );
};

export default ReportManagement;