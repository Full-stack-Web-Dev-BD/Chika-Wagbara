import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Toolbar
} from '@material-ui/core';
import Page from 'src/components/Page';
import LocationTable from './LocationTable';
import DepartmentAndCategory from './DepartmentAndCategory';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const TaskManagement = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Task Management"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
            <div>
              <LocationTable/>
            </div>
        </Box>
        
        <Box mt={3}>
            <div>
              <DepartmentAndCategory/>
            </div>
        </Box>
      </Container>
    </Page>
  );
};

export default TaskManagement;
