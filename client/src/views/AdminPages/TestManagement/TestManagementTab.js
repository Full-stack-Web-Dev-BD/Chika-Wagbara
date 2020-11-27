import React, { useState, useEffect } from 'react';
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
import PerfectScrollbar from 'react-perfect-scrollbar';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import clsx from 'clsx';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { getTests, deleteTest } from '../../../actions/testAction'

import AddElementToPdfModal from './AddElementToPdfModal';
import PathologyTestAddModal from './PathologyTestAddModal';

import SpaceBarIcon from '@material-ui/icons/SpaceBar';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
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

const TestManagementTab=(props) =>{
  const { tests, className, ...rest }=props
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [selectedPdfFormate, setSelectedPdfFormate] = useState('')

  const [customizeValue, setCustomizeValue] = useState(0)
  const [allTest, setAllTest] = useState([])



  const submitTest=()=>{
    
  }

  useEffect(()=>{
    props.getTests();
  }, [])
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const deleteElement = (index) => {
    let copyAllTest = [...allTest]
    copyAllTest.splice(index, 1)
    setAllTest(copyAllTest)
  }
  const addTestToPDF = (test) => {
    let existingTest = [...allTest]
    existingTest.push(test)
    setAllTest(existingTest)
    console.log(allTest);
  }

  const deleteTest=(id)=>{
    props.deleteTest(id)
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
          selectedPdfFormate ?
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
                <BottomNavigationAction label="Add White Space Row" icon={<Button variant="outlined" onClick={e => addTestToPDF({ rowType: customizeComponent.whiteSpaceRow })}> <SpaceBarIcon /></Button>} />
                <BottomNavigationAction label="Add Title  " icon={<AddElementToPdfModal elementName={customizeComponent.spaceWithTitle} addTestToPDF={addTestToPDF} />} />
                <BottomNavigationAction label="Add a Divider" icon={<Button variant="outlined" onClick={el => addTestToPDF({ rowType: customizeComponent.divider })}><DeviceHubIcon /></Button>} />
                <BottomNavigationAction label="Added Row" icon={(<span> {allTest.length} </span>)} />
              </BottomNavigation>
              <div style={{ marginBottom: '40px' }}>
                {
                  selectedPdfFormate == 'Pathology' ?
                    <Test1PdfView pdfContent={allTest} data="alamin" deleteElement={deleteElement} /> : ''
                }
                {
                  selectedPdfFormate == 'Radiology' ?
                    <Test2PdfView pdfContent={allTest} deleteElement={deleteElement} /> : ''
                }
                {
                  selectedPdfFormate == 'FileReport' ?
                    <Test3PdfView pdfContent={allTest} deleteElement={deleteElement} /> : ''
                }
              </div>
              {
                allTest.length>0?
                <Button variant="contained" onClick={e => submitTest()} className="mt4" size="small" color="secondary" >Submit</Button>:
                <Button variant="outlined"className="mt4" size="small" color="secondary" >Submit</Button>
              }
            </div> :
            <div className="text-center p-5 ">
              <TestCreateModal setSelectedPdfFormate={setSelectedPdfFormate} />
              <h5 className="text-success mt-3">Click on the button to  Add a test !!</h5>
            </div>
        }
        <div>
            <div className="d-flex">
                <h2 className="mb3">Samples</h2>
            </div>
            <Card className={clsx(classes.root, className)} {...rest} >
                <PerfectScrollbar>
                <Box minWidth={1050}>
                    <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell >
                            Test Code
                        </TableCell>
                        <TableCell>
                            Test Name
                        </TableCell>
                        <TableCell>
                            LOINC Code
                        </TableCell>
                        <TableCell>
                            Test Price
                        </TableCell>
                        <TableCell>
                          Revenue Target
                        </TableCell>
                        <TableCell>
                          Position  Priority
                        </TableCell>
                        <TableCell>
                          Department
                        </TableCell>
                        <TableCell>
                          Category
                        </TableCell>
                        <TableCell>
                          Sample Type
                        </TableCell>
                        <TableCell>
                          Report type
                        </TableCell>
                        <TableCell >
                            Action
                        </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tests?
                        tests.map(el => (
                        <TableRow
                            hover
                        >
                            <TableCell>
                            <Box
                                alignItems="center"
                                display="flex"
                            >
                                <Typography
                                color="textPrimary"
                                variant="body1"
                                >
                                {el.testCode}
                                </Typography>
                            </Box>
                            </TableCell>
                            <TableCell>
                            {el.testName}
                            </TableCell>
                            <TableCell>
                            {el.loincCode}
                            </TableCell>
                            <TableCell>
                            {el.testPrice}
                            </TableCell>
                            <TableCell>
                            {el.revenueTarget}
                            </TableCell>
                            <TableCell>
                            {el.positionPriority}
                            </TableCell>
                            <TableCell>
                            {el.department}
                            </TableCell>
                            <TableCell>
                            {el.category}
                            </TableCell>
                            <TableCell>
                            {el.sampleType}
                            </TableCell>
                            <TableCell>
                            {el.reportType}
                            </TableCell>
                            <TableCell>
                            <div>
                                <span onClick={e => deleteTest(el._id)}><DeleteOutlineIcon style={{ cursor: "pointer" }} /></span>
                            </div>
                            </TableCell>
                        </TableRow>
                        )):''}
                    </TableBody>
                    </Table>
                </Box>
                </PerfectScrollbar>
            </Card>
        </div>
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

TestManagementTab.propTypes={
  getTests:PropTypes.func.isRequired,
  deleteTest:PropTypes.func.isRequired,
  tests:PropTypes.array.isRequired
}

const mapStateToProps=(state)=>({
  tests:state.test.tests
})


export default connect(mapStateToProps, { getTests, deleteTest })(TestManagementTab)