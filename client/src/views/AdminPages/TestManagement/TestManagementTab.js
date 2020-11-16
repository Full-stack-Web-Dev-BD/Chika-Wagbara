import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TestCreateModal from './TestCreateModal';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import Test1PdfView from './Test1PdfView';
import Test2PdfView from './Test2PdfView';
import Test3PdfView from './Test3PdfView';
import { BottomNavigation, BottomNavigationAction, Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

import { Trash } from 'react-feather';
import AddElementToPdfModal from './AddElementToPdfModal';
import PathologyTestAddModal from './PathologyTestAddModal';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  customStyle: {
    width: '100%'
  }
}));

export default function TestManagementTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [selectedPdfFormate, setSelectedPdfFormate] = useState('Pathology')

  const [customizeValue, setCustomizeValue] = useState(0)

  const [allTest, setAllTest] = useState(['adsf','asdf'])


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addTestToPDF=(test)=>{
    let existingTest=[...allTest]
    existingTest.push(test)
  }
  
  
  const customizeComponent = { whiteSpaceRow: 'whiteSpaceRow', spaceWithTitle: 'spaceWithTitle', divider: 'divider' }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Add A New Test" icon={<AddBoxIcon />} {...a11yProps(0)} />
          <Tab label="Check Available Test" icon={<TouchAppIcon />} {...a11yProps(1)} />
          {/* <Tab label="Item Three" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Item Four" icon={<HelpIcon />} {...a11yProps(3)} />
          <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {
          // selectedPdfFormate ?
          true ?

            <div className="text-center">
              <h4> < SettingsIcon /> Customization Tool </h4>
              <BottomNavigation
                value={customizeValue}
                onChange={(event, newValue) => {
                  setCustomizeValue(newValue);
                }}
                style={{ textAlign: 'center' }}
                showLabels
                className={classes.customStyle}
              >
                <BottomNavigationAction label="Add Test " icon={<PathologyTestAddModal addTestToPDF={addTestToPDF} />} />
                <BottomNavigationAction label="Add White Space Row" icon={<AddElementToPdfModal elementName={customizeComponent.whiteSpaceRow} />} />
                <BottomNavigationAction label="Add Title  " icon={<AddElementToPdfModal elementName={customizeComponent.spaceWithTitle} />} />
                <BottomNavigationAction label="Add a Divider" icon={<AddElementToPdfModal elementName={customizeComponent.divider} />} />
                <BottomNavigationAction label="Delete  a Row" icon={<Trash />} />
                <BottomNavigationAction label="Added Row" icon={(<span>12</span>)} />
              </BottomNavigation>
              <div style={{ marginBottom: '40px' }}>
                {
                  selectedPdfFormate == 'Pathology' ?
                    <Test1PdfView pdfContent={allTest} /> : ''
                }
                {
                  selectedPdfFormate == 'Radiology' ?
                    <Test2PdfView /> : ''
                }
                {
                  selectedPdfFormate == 'File Report' ?
                    <Test3PdfView /> : ''
                }

              </div>

              <Button variant="contained" className="mt4" size="small" color="secondary" >Submit</Button>
            </div> :
            <div className="text-center p-5 ">
              <TestCreateModal setSelectedPdfFormate={setSelectedPdfFormate} />
              <h5 className="text-success mt-3">Click on the button to  Add a test !!</h5>
              <Test1PdfView />
            </div>
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  );
}
