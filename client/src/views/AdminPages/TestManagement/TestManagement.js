import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Table,
  Toolbar
} from '@material-ui/core';
import Page from 'src/components/Page';
import TestCreateModal from './TestCreateModal';
import Test1PdfView from './Test1PdfView';
import Test2PdfView from './Test2PdfView';
import Test3PdfView from './Test3PdfView';
import TestManagementTab from './TestManagementTab';
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
          <TestManagementTab/>
            {/* <div >
              <TestCreateModal/>
            </div>
            <div >
              <Test1PdfView/>
            </div>
            <div>
              <Test2PdfView/>
            </div>
            <div >
              <Test3PdfView/>
            </div> */}
        </Box>
      </Container>
    </Page>
  );
};

export default TestManagement;